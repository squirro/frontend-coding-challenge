import { type ReactElement, type FC } from 'react';
import { useGetBestsellers } from '../../app/hooks';
import type { BestSeller } from '../../types/Books';
import type { BestsellerProps } from './Bestseller.types';
import styles from './Bestseller.module.scss';

const Bestseller: FC<BestsellerProps> = ({
  books,
}: BestsellerProps): ReactElement => {
  const bestsellers = useGetBestsellers(books);

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <caption className={styles.caption}>Best-selling books</caption>
        <tbody>
          {bestsellers.length > 0 ? (
            bestsellers.map(({ name, author }: BestSeller) => (
              <tr key={name}>
                <td className={styles.book}>{name}</td>
                <td className={styles.author}>{author}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Bestseller;
