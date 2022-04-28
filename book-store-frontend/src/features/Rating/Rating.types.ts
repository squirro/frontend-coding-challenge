import { ChangeEventHandler } from 'react';

export type RatingProps = {
  storeName: string;
  currentRating: number;
  onAddRating: ChangeEventHandler;
};
