import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FetchCoins from '../../Redux/api';
import Coin from '../Coin/Coin';
import { SetCoins } from '../../Redux/Coins/Coins';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  const intitData = async () => {
    const data = await FetchCoins();
    dispatch(SetCoins(data));
  };
  if (coins.length < 1) {
    intitData();
    return (
      <div className="text-center">
        <div className=" text-center p-4 spinner-grow text-light" role="status" />
      </div>
    );
  }

  return (
    <div className="root">
      <Navbar />
      <div className="m-5 grid md:grid-cols-4 sm:grid-cols-2  grid-cols-2 gap-2 ">
        {coins.map((coin) => (

          <Coin key={coin.uuid} coin={coin} />

        ))}
      </div>
    </div>
  );
};
export default Home;
