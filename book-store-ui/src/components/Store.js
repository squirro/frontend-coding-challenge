import {useEffect} from 'react';
// feature
import {parseDate} from '../utils/parse-date';
import {useIntersectionObserver} from '../hooks/use-intersection-observer';
// components
import Rating from './Rating';
import Flag from './Flag';
import BookList from './BookList';
import Loading from './Loading';
// styles
import './Store.scss';

const OBSOLETE_MS = 5000;

const isObsolete = (timestamp) => {
  return Date.now() - timestamp > OBSOLETE_MS;
};

const Store = ({loading, timestamp, store, updateStore, fetchStore}) => {
  const [containerRef, visible, hiddenBefore] = useIntersectionObserver();

  useEffect(() => {
    if (visible && hiddenBefore && isObsolete(timestamp)) {
      void fetchStore(store.id);
    }
  }, [visible, hiddenBefore, timestamp, store, fetchStore]);

  const setStoreRating = (id) => async (rating) => {
    void updateStore({id, attributes: {rating}});
  };

  const establishmentDate = parseDate(store.establishmentDate);

  return (
    <div className="store" ref={containerRef}>
      <div className="store__container">
        <div className="store__left">
          <img className="store__img" src={store.storeImage} alt={store.name} />
          <Rating rating={store.rating} setRating={setStoreRating(store.id)} />
        </div>
        <Loading loading={loading}>
          <div className="store__right">
            <div className="store__info">
              <div className="store__name">
                {store.name}
                <div className="store__flag">
                  <Flag code={store.countries.code} />
                </div>
              </div>
              <div className="store__sub-info">
                <span className="store__date">{establishmentDate}</span>
                <object>
                  <a href={store.website} className="store__link">
                    {store.website}
                  </a>
                </object>
              </div>
            </div>
            <BookList books={store.books} />
          </div>
        </Loading>
        <a href={store.website} className="store__chevron">
          <span className="material-icons">chevron_right</span>
        </a>
      </div>
    </div>
  );
};

export default Store;
