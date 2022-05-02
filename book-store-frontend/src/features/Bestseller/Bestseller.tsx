import { type ReactElement, type FC } from 'react';
import type { BestsellerProps } from './Bestseller.types';
import styles from './Bestseller.module.scss';

const Bestseller: FC<BestsellerProps> = ({
  books,
}: BestsellerProps): ReactElement => {
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>Best-selling books</caption>
      <tbody>
        {books.map(({ name, author }: any) => (
          <tr key={`${name}${author}`}>
            <td>{name}</td>
            <td>{author}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Bestseller;
