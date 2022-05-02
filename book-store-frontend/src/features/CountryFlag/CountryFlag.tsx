import { type FC } from 'react';
import { useGetCountryByIdQuery } from '../../app/api';
import type { CountryFlagProps } from './CountryFlag.types';

const CountryFlag: FC<CountryFlagProps> = ({ id }) => {
  const { data: country } = useGetCountryByIdQuery(id);

  return <div>{country?.data?.attributes?.code}</div>;
};

export default CountryFlag;
