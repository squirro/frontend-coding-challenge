import { ReactElement, FC, ChangeEvent } from 'react';
import formatDate from '../../libs/formatDate';
import Rating from '../Rating';
import Bestseller from '../Bestseller';
import { BookStoreProps } from './BookStore.types';
import styles from './BookStore.module.scss';

const BookStoresOverview: FC<BookStoreProps> = ({
  attributes: { name, storeImage, establishmentDate, website, rating },
}: BookStoreProps): ReactElement => {
  const displayDate = formatDate(establishmentDate);
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
            <h2>{name}</h2>
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
        <span className={styles.meta}>
          <time dateTime={establishmentDate}>{displayDate}</time>
          <span className={styles.divider}>-</span>
          <a href={website}>{website}</a>
        </span>
      </div>
    </div>
  );
};

export default BookStoresOverview;
