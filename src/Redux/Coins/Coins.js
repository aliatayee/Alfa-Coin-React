const FETCH_COINS = 'REACT-CAPSTONE/COINS/FETCH_COINS';
const initialState = [];

const CoinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COINS: {
      return action.payload;
    }
    default: { return state; }
  }
};
export function SetCoins(coins) {
  return { type: FETCH_COINS, payload: coins };
}

export const CoinsList = (state) => state.coins;

export default CoinsReducer;
