import { ReactElement, FC, Fragment } from 'react';
import classNames from 'classnames';
import { VisuallyHidden } from '@accessible/visually-hidden';
import { RatingProps } from './Rating.types';
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
    <fieldset className={styles.wrapper}>
      {[...Array(RATING_RANGE.max)].map((_, i) => {
        const groupName = `${storeName}-rating`;
        const id = `${groupName}${i}`;
        const isSelected = currentRating === i + 1;

        return (
          <Fragment key={id}>
            <VisuallyHidden>
              <input
                className={classNames(
                  styles.star,
                  isSelected && styles.star_current
                )}
                id={id}
                key={id}
                name={groupName}
                type="radio"
                value={RATING_RANGE.max - i}
                onChange={onAddRating}
              />
            </VisuallyHidden>
            <label htmlFor={id} className={styles.label}></label>
          </Fragment>
        );
      })}
    </fieldset>
  );
};

export default Rating;
