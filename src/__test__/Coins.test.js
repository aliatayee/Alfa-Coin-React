import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../Redux/configureStore';
import Home from '../components/Home/Home';
import '@testing-library/jest-dom/extend-expect';

describe('Test Coins', () => {
  it('should render correctly the coins', () => {
    const list = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(list).toMatchSnapshot();
  });
});
