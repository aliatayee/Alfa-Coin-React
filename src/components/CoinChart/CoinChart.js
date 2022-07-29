import { Line } from 'react-chartjs-2';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  PointElement,
  LinearScale,
  LineElement,
  Filler,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);
const CoinChart = () => {
  let bcolor;
  let color;
  const coins = useSelector((state) => state.coins);
  const { coinId } = useParams();
  const coin = coins.find((coin) => coin.uuid === coinId);
  if (coin.change > 0) {
    bcolor = 'rgba(10, 219, 33,0.8)';
    color = 'rgba(3, 169, 21 ,0.2)';
  } else {
    bcolor = 'rgba(232, 9, 36,0.8)';
    color = 'rgba(205, 2, 26 ,0.2)';
  }
  const coinPrice = [];
  for (let i = 0; i < coin.sparkline?.length; i += 1) {
    coinPrice.push(i);
  }
  const data = {
    labels: coinPrice,
    datasets: [
      {
        label: false,
        data: coin.sparkline,
        backgroundColor: color,
        borderColor: bcolor,

        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        fill: true,
      },
    ],
  };

  const options = {
    scaleShowLabels: false,
    maintainAspectRatio: true,
    responsive: true,
    hover: true,

    legend: {
      display: '',
    },
    tooltip: {
      enabled: false,
    },
    scales: {
      x: {

        gridLines: {
          display: false,
        },

      },
      y: {

        gridLines: {
          display: false,
        },

      },
    },
  };
  return (
    <>
      <div className="bg-white p-3 border rounded shadow-md flex w-full md:w-6/12 chart-card m-5">
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export default CoinChart;
