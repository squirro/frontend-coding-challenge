import {useEffect} from 'react';
// feature
import {parseDate} from '../utils/parse-date';
import {handleImageError} from '../utils/handle-image-error';
import {StoreService} from '../services/store.service';
import {useOne} from '../hooks/use-one';
import {useIntersectionObserver} from '../hooks/use-intersection-observer';
// components
import Rating from './Rating';
import Books from './Books';
import Loading from './Loading';
import Flag from './Flag';
// styles
import './Stores.scss';

const Store = ({store, updateStore}) => {
  const [loading, item, fetchStore] = useOne(StoreService);
  const [containerRef, visible] = useIntersectionObserver();

  useEffect(() => {
    if (visible && !item) {
      void fetchStore(store.id);
    }
  }, [visible, item, fetchStore, store]);

  const setStoreRating = (id) => async (rating) => {
    void updateStore({id, attributes: {rating}});
  };

  const rating = `rating-${store.rating}`;

  const establishmentDate = parseDate(store.establishmentDate);

  return (
    <div className={`Store ${rating}`} ref={containerRef}>
      <div className="Store__left">
        <img className="Store__image" src={store.storeImage} alt={store.name} onError={handleImageError} />
        <Rating rating={store.rating} setRating={setStoreRating(store.id)} />
        <Flag className="Store__flag" code={item?.countries.code} />
        <section className="Store__website">
          <span>{establishmentDate}</span>
          <a href={store.website}>{store.website}</a>
        </section>
      </div>
      <div className="Store__right">
        <h2>{store.name}</h2>
        <Loading loading={loading}>
          <Books books={item?.books} loading={loading} />
        </Loading>
      </div>
    </div>
  );
};

const Stores = ({stores, updateStore}) => {
  const samples = stores.map((store) => {
    return <Store store={store} updateStore={updateStore} key={store.id} />;
  });

  return <main>{samples}</main>;
};

export default Stores;
