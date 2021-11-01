import {useCallback, useState} from 'react';
import {resolveRelationships} from '../utils/resolve-relationships';

export const useOne = (Service) => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState();

  const fetchItem = useCallback(
    async (id) => {
      if (loading) {
        return;
      }

      setLoading(true);
      const response = await Service.fetchOne(id);
      const item = resolveRelationships(response);
      setItem(item);
      setLoading(false);
    },
    [loading, setLoading, setItem, Service]
  );

  return [loading, item, fetchItem];
};
