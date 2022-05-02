import { useGetStoresDataQuery } from './app/api';
import { default as Overview } from './features/Overview';

const App = () => {
  const { data: stores } = useGetStoresDataQuery('');

  return <Overview stores={stores?.data || []} />;
};

export default App;
