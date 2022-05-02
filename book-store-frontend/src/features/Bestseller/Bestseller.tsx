import { type ReactElement, type FC } from 'react';
import type { BestsellerProps } from './Bestseller.types';

const Bestseller: FC<BestsellerProps> = ({
  books,
}: BestsellerProps): ReactElement => {
  return (
    <table>
      <caption>Best-selling books</caption>
      <tbody>
        {books.map(({ name, author }: any) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{author}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Bestseller;
