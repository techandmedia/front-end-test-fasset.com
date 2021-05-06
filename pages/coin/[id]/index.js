import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGetData } from '../../../utils/api/useGetData';
import { CustomTabs } from '../../../components/tabs';
import { CoinDetail } from '../../../components/coin-details/coin.header';
import { UserContext } from '../../../utils/context/Global-Context';

export default function Coin() {
  const [coin, getCoin] = useGetData(null);
  const { dispatchUser } = useContext(UserContext);
  const router = useRouter();
  const { id } = router.query;
  const tabs = [
    {
      name: 'Overview',
      component: <span>'Overview'</span>,
    },
    {
      name: 'Markets',
      component: <span>'Markets'</span>,
    },
    {
      name: 'Chart',
      component: <span>'Chart'</span>,
    },
    {
      name: 'Historical Data',
      component: <span>'Historical Data'</span>,
    },
    {
      name: 'Bitcoin Halving Countdown',
      component: <span>''Bitcoin Halving Countdown''</span>,
    },
  ];

  useEffect(() => {
    if (id) {
      dispatchUser({
        type: 'reset-coin',
      });
      getCoin(`https://api.coingecko.com/api/v3/coins/${id}`);
    }
  }, [id]);

  useEffect(() => {
    if (coin.code === 200) {
      console.log(coin.data);
      dispatchUser({
        type: 'update-coin',
        value: { coin_name: coin.data.name },
      });
    }
  }, [coin]);

  if (coin.code === 200) {
    return (
      <React.Fragment>
        <CoinDetail data={coin.data} />
        <CustomTabs tabs={tabs} data={coin.data} />
      </React.Fragment>
    );
  }

  return 'Loading...';
}
