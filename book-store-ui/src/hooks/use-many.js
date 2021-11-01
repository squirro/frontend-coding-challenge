import {useCallback, useEffect, useState} from 'react';
import {resolveRelationships} from '../utils/resolve-relationships';

const byRating = (a, b) => {
  return b.rating - a.rating;
};

const upsert = (data) => (item) => {
  return item.id === data.id ? data : item;
};

export const useMany = (Service) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      const response = await Service.fetchAll();
      const items = resolveRelationships(response).sort(byRating);
      setItems(items);
      setLoading(false);
    };

    void fetchAll();
  }, [Service]);

  const updateOne = useCallback(
    async (update) => {
      const response = await Service.updateOne(update);
      const item = resolveRelationships(response);
      const updated = items.map(upsert(item)).sort(byRating);
      setItems(updated);
    },
    [items, setItems, Service]
  );

  return [items, loading, updateOne];
};
