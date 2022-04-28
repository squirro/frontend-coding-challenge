import React, { ReactElement, FC } from 'react';
import formatDate from '../../libs/formatDate';
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
            <span>Rating</span>
          </div>
          <table>
            <caption>Best-selling books</caption>
            <tbody>
              {books.map(({ name, author }: any) => (
                <tr>
                  <td>{name}</td>
                  <td>{author}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
