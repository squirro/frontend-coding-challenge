import { type ReactElement, type FC } from 'react';
import countryConfig from '../../config/countryflags.json';
import { useGetCountryByIdQuery } from '../../app/api';
import type { CountryFlagProps } from './CountryFlag.types';
import styles from './CountryFlag.module.scss';

const CountryFlag: FC<CountryFlagProps> = ({ id }): ReactElement | null => {
  const { data: country, isLoading } = useGetCountryByIdQuery(id);

  if (isLoading) {
    return null;
  }

  const code = country.data.attributes.code;

  return (
    <img
      className={styles.flag}
      src={`${countryConfig.endpoint}${code}`}
      alt={code}
    />
  );
};

export default CountryFlag;
