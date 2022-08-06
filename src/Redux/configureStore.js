import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import CoinsReducer from './Coins/Coins';

const store = configureStore({
  reducer: {
    coins: CoinsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});
export default store;
