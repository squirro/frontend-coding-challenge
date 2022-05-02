import { type ReactElement, type FC, type ChangeEvent } from 'react';
import Rating from '../Rating';
import Bestseller from '../Bestseller';
import StoreMeta from '../StoreMeta';
import CountryFlag from '../CountryFlag';
import type { BookStoreProps } from './BookStore.types';
import styles from './BookStore.module.scss';

const BookStore: FC<BookStoreProps> = ({
  name,
  storeImage,
  establishmentDate,
  website,
  rating,
  books,
  countryId,
}: BookStoreProps): ReactElement => {
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
        <CountryFlag id={countryId} />
      </div>
    </div>
  );
};

export default BookStore;
