import { type ReactElement, type FC } from 'react';
import { useGetAuthorsDataQuery, useGetBooksDataQuery } from '../../app/api';
import type { Book } from '../../types/Books';
import type { DataEntry } from '../../types/Base';
import type { BestsellerProps } from './Bestseller.types';
import styles from './Bestseller.module.scss';

const Bestseller: FC<BestsellerProps> = ({
  books,
}: BestsellerProps): ReactElement => {
  const { data: booksData } = useGetBooksDataQuery('');
  const { data: authorsData } = useGetAuthorsDataQuery('');
  const bestsellers = booksData?.data
    ?.filter((book: Book) => {
      return books?.includes(book.id);
    })
    ?.sort((prev: Book, next: Book) => {
      return next.attributes.copiesSold - prev.attributes.copiesSold;
    })
    ?.splice(0, 2);

  return (
    <table className={styles.table}>
      <caption className={styles.caption}>Best-selling books</caption>
      <tbody>
        {Array.isArray(bestsellers) && bestsellers.length > 0 ? (
          bestsellers.map(
            ({
              attributes: { name },
              relationships: {
                author: {
                  data: { id: authorId },
                },
              },
            }: Book) => {
              const author = authorsData?.data?.find(
                ({ id }: DataEntry) => id === authorId
              );

              return (
                <tr key={`${name}${author?.id}`}>
                  <td>{name}</td>
                  <td>{author?.attributes?.fullName}</td>
                </tr>
              );
            }
          )
        ) : (
          <tr>
            <td>No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Bestseller;
