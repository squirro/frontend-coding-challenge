import {useMany} from '../hooks/use-many';
import {StoreService} from '../services/store.service';
// components
import Navigation from './Navigation';
import Stores from './Stores';
import Loading from './Loading';
// styles
import './App.scss';

function App() {
  const [stores, loading, updateStore, fetchStore] = useMany(StoreService);

  return (
    <div className="App">
      <Navigation />
      <Loading loading={loading}>
        <Stores stores={stores} updateStore={updateStore} fetchStore={fetchStore} />
      </Loading>
    </div>
  );
}

export default App;
