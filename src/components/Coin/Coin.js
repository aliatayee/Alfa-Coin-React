import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiTrendingUp, FiArrowRightCircle, FiTrendingDown } from 'react-icons/fi';
import FetchCoins from '../../Redux/api';

const Coin = ({ coin }) => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);
  useEffect(() => {
    if (!coins.length) dispatch(FetchCoins);
  }, []);
  return (
    <div className="bg-white p-3 border rounded shadow-md first:col-span-2 md:first:col-span-1 grid align-between coin-card">
      <Link to={`/coin/${coin.uuid}`} key={coin.uuid} className="grid">
        {' '}
        <div className="grid justify-end"><FiArrowRightCircle /></div>
        <div className="flex justify-center m-5"><img src={coin.iconUrl} alt={coin.name} className="w-20 sm:w-12 icon-coin" /></div>
        <div className=" flex justify-between items-end">
          <div>
            <h1 className="text-lg font-bold">{coin.symbol}</h1>
            <h1>{(Math.round(coin.price * 100) / 100).toFixed(3)}</h1>
          </div>
          <div>
            {coin.change > 0
              ? <FiTrendingUp className="text-green-400" />
              : <FiTrendingDown className="text-red-500" />}
            {coin.change}
            %
          </div>
        </div>
      </Link>
    </div>
  );
};
Coin.propTypes = {
  coin: PropTypes.shape({
    uuid: PropTypes.string,
    name: PropTypes.string,
    symbol: PropTypes.string,
    price: PropTypes.string,
    change: PropTypes.string,
    iconUrl: PropTypes.string,
  }).isRequired,
};

export default Coin;
