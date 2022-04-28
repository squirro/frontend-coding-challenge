import React from 'react';
import { useGetStoresDataQuery } from './app/api';
import { default as Overview } from './features/Overview';

const App = () => {
  const { data, isLoading } = useGetStoresDataQuery('');

  return <Overview stores={isLoading ? [] : data.data} />;
};

export default App;
