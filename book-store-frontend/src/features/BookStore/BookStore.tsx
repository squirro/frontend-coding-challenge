import { type ReactElement, type FC, type ChangeEvent } from 'react';
import Rating from '../Rating';
import Bestseller from '../Bestseller';
import StoreMeta from '../StoreMeta';
import type { BookStoreProps } from './BookStore.types';
import styles from './BookStore.module.scss';

const BookStore: FC<BookStoreProps> = ({
  attributes: { name, storeImage, establishmentDate, website, rating },
}: BookStoreProps): ReactElement => {
  const books = [{}];

  return (
    <div className={styles.wrapper}>
      <div className={styles.detailsWrapper}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageFrame}>
            <img className={styles.image} src={storeImage} alt={name} />
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.header}>
            <h2 className={styles.title}>{name}</h2>
            <Rating
              storeName={name}
              currentRating={rating}
              onAddRating={(e: ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.value);
              }}
            />
          </div>
          <Bestseller books={books} />
        </div>
      </div>
      <div className={styles.footer}>
        <StoreMeta date={establishmentDate} website={website} />
      </div>
    </div>
  );
};

export default BookStore;
