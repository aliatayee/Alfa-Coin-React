import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import FetchCoins from '../../Redux/api';
import CoinChart from '../CoinChart/CoinChart';
import NavbarDetails from '../Navbar/Navbar-Details';

const CoinDetail = () => {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  const { coinId } = useParams();
  const coinDetail = coins.find((coin) => coin.uuid === coinId);
  useEffect(() => {
    if (coinDetail.length <= 0) dispatch(FetchCoins());
  }, []);
  return (
    <div>
      <NavbarDetails coin={coinDetail} />
      <div className="flex justify-center">
        <CoinChart />
      </div>
      <div className="flex flex-col items-center p-5 ">
        <div className=" p-3 border rounded bg-white shadow-md flex w-full md:w-6/12 mb-5 justify-between">
          <div className=""> Name  </div>
          <div className="">
            {' '}
            {coinDetail.name}
            {' '}
          </div>
        </div>
        <div className=" p-3 border rounded bg-white shadow-md flex w-full md:w-6/12 mb-5 justify-between">
          <div className=""> Symbol  </div>
          <div className="">
            {' '}
            {coinDetail.symbol}
            {' '}
          </div>
        </div>
        <div className=" p-3 border rounded bg-white shadow-md flex w-full md:w-6/12 mb-5 justify-between">
          <div className=""> Market Cap  </div>
          <div className="">
            {' '}
            {coinDetail.marketCap}
            {' '}
          </div>
        </div>
        <div className=" p-3 border rounded bg-white shadow-md flex w-full md:w-6/12 mb-5 justify-between">
          <div className=""> Change  </div>
          <div className="">
            {' '}
            {coinDetail.change}
            %
            {' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;
