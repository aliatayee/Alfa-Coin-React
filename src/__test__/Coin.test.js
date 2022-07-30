import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Coin from '../components/Coin/Coin';
import FetchCoins from '../Redux/api';

jest.mock('axios');
const response = {
  uuid: 'Qwsogvtv82FCd',
  name: 'Bitcoin',
  symbol: 'BTC',
  price: '24000',
  change: '6.5',
  iconUrl: 'icon',
};
const TestCoin = () => (
  <Provider store={store}>
    <Coin key={response.uuid} coin={response} />
  </Provider>
);
axios.get.mockResolvedValue(response);
FetchCoins();
render(<TestCoin />, { wrapper: BrowserRouter });
describe('Test Coin', () => {
  it('should contain header in coin card', () => {
    expect(screen.getByRole('heading', { name: /BTC/i })).toBeInTheDocument();
  });
});
