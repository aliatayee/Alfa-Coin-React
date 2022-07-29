import axios from 'axios';

const FetchCoins = async () => {
  let data;
  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0',
    },
    headers: {
      'X-RapidAPI-Key': '8f8370db79mshd441aa0f207b5bdp18a232jsn9447c52a52c1',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    },
  };
  await axios.request(options).then((response) => {
    data = response.data.data.coins.slice(0, 50);
  }).catch((error) => {
    data = error;
  });

  return data;
};

export default FetchCoins;
