import React, { ReactElement, FC } from 'react';
import { default as BookStore } from '../BookStore';
import { OverviewProps } from './Overview.types';
import styles from './Overview.module.scss';
import type { Store } from '../../types/Stores';

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
