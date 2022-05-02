import { Fragment, type ReactElement, type FC } from 'react';
import classNames from 'classnames';
import type { RatingProps } from './Rating.types';
import styles from './Rating.module.scss';

export const RATING_RANGE = {
  min: 1,
  max: 5,
};

const Rating: FC<RatingProps> = ({
  storeName,
  currentRating,
  onAddRating,
}: RatingProps): ReactElement => {
  return (
    <fieldset>
      <legend className={styles.vh}>Rating ({currentRating})</legend>
      <div className={styles.stars}>
        {[...Array(RATING_RANGE.max)].map((_, i) => {
          const groupName = `${storeName}-rating`;
          const id = `${groupName}${i}`;
          const isSelected = currentRating === i + 1;
          const rating = RATING_RANGE.max - i;

          return (
            <Fragment key={id}>
              <input
                className={classNames(
                  styles.vh,
                  styles.star,
                  isSelected && styles.star_current
                )}
                id={id}
                key={id}
                name={groupName}
                type="radio"
                value={rating}
                onChange={onAddRating}
              />
              <label htmlFor={id} className={styles.label}>
                <span className={styles.vh}>{rating}</span>
              </label>
            </Fragment>
          );
        })}
      </div>
    </fieldset>
  );
};

export default Rating;
