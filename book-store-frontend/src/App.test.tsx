import { shallow } from 'enzyme';
import App from './App';

test('renders correctly', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});
