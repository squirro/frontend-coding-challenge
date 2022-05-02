import { type ReactElement, type FC } from 'react';
import type { Store } from '../../types/Stores';
import BookStore from '../BookStore';
import type { OverviewProps } from './Overview.types';
import styles from './Overview.module.scss';

const Overview: FC<OverviewProps> = ({
  stores,
}: OverviewProps): ReactElement => {
  return (
    <div className={styles.wrapper}>
      {stores?.map(
        ({ id, attributes }: Store): ReactElement => (
          <div key={id} className={styles.store}>
            <BookStore attributes={attributes} />
          </div>
        )
      )}
    </div>
  );
};

export default Overview;
