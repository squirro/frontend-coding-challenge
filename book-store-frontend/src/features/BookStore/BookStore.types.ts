import type { StoreAttributes } from '../../types/Stores';

export type BookStoreProps = StoreAttributes & {
  books: Array<string>;
  countryId: string;
};
