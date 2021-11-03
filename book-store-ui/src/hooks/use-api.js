import { useCallback, useEffect, useReducer } from 'react';
import { resolveRelationships } from '../utils/resolve-relationships';

const upsert =
  (data) =>
  (item, meta = {}) => {
    return item.id === data.id ? { ...data, meta: { ...(data.meta || {}), ...meta } } : item;
  };

const reducer = (state, action) => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    console.log(action);
  }

  switch (action.type) {
    case 'fetch-all': {
      return { ...state, loading: true };
    }
    case 'fetch-all-success': {
      const items = resolveRelationships(action.response);
      const timestamp = Date.now();
      const meta = Object.fromEntries(items.map((item) => [item.id, { timestamp }]));
      return { ...state, items, meta, loading: false };
    }
    case 'fetch-one':
    case 'update-one': {
      const meta = { ...state.meta, [action.id]: { loading: true } };
      return { ...state, meta };
    }
    case 'fetch-one-success':
    case 'update-one-success': {
      const item = resolveRelationships(action.response);
      const items = state.items.map(upsert(item));
      const timestamp = Date.now();
      const meta = { ...state.meta, [item.id]: { loading: false, timestamp } };
      return { ...state, items, meta };
    }
    default: {
      throw new Error();
    }
  }
};

const init = () => {
  return { items: [], meta: {}, loading: false };
};

export const useApi = (Service) => {
  const [state, dispatch] = useReducer(reducer, null, init);

  useEffect(() => {
    const fetchAll = async () => {
      dispatch({ type: 'fetch-all' });
      const response = await Service.fetchAll();
      dispatch({ type: 'fetch-all-success', response });
    };

    void fetchAll();
  }, [Service, dispatch]);

  const fetchOne = useCallback(
    async (id) => {
      if (state.loading || state.meta[id]?.loading) {
        return;
      }

      dispatch({ type: 'fetch-one', id });
      const response = await Service.fetchOne(id);
      dispatch({ type: 'fetch-one-success', response });
    },
    [Service, state, dispatch]
  );

  const updateOne = useCallback(
    async (update) => {
      dispatch({ type: 'update-one', id: update.id });
      const response = await Service.updateOne(update);
      dispatch({ type: 'update-one-success', response });
    },
    [Service, dispatch]
  );

  return [state.items, state.loading, updateOne, fetchOne, state.meta];
};
