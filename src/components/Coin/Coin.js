import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import FetchCoins from '../../Redux/api';

const Coin = ({ coin }) => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);
  useEffect(() => {
    if (!coins.length) dispatch(FetchCoins);
  }, []);
  return (
    <div className="bg-white p-3 border rounded first:col-span-2 md:first:col-span-1 grid align-between md:flex">
      <div className="flex justify-center m-5"><img src={coin.iconUrl} alt={coin.name} className="w-20 sm:w-12 icon-coin" /></div>
      <div className="md:flex md:items-center grid items-end">
        {coin.name}
      </div>
    </div>
  );
};
Coin.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    iconUrl: PropTypes.string,
  }).isRequired,
};

export default Coin;
