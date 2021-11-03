// feature
import { useApi } from '../hooks/use-api';
import { StoreService } from '../services/store.service';
// components
import Store from './Store';
import Loading from './Loading';
// styles
import './StoreList.scss';

const byRating = (a, b) => b.rating - a.rating;

const StoreList = () => {
  const [items, loading, updateStore, fetchStore, meta] = useApi(StoreService);

  const stores = items.sort(byRating).map((store) => {
    return (
      <Store
        loading={meta[store.id]?.loading}
        timestamp={meta[store.id]?.timestamp}
        store={store}
        updateStore={updateStore}
        fetchStore={fetchStore}
        key={store.id}
      />
    );
  });

  return (
    <Loading loading={loading}>
      <div className="stores-list">{stores}</div>
    </Loading>
  );
};

export default StoreList;
