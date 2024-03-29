import React, { useContext, useEffect } from 'react';
import { useGetData } from '../utils/api/useGetData';
import { UserContext } from '../utils/context/Global-Context';
import { CustomTable } from '../components/table';

export default function Home() {
  const { user, dispatchUser } = useContext(UserContext);
  const [coins, getCoins] = useGetData(null);

  useEffect(() => {
    if (user.statusServer === 'ok') {
      getCoins(user.GET_TOP_50_COIN_LIST_API_TEMP);
    }
  }, [user]);

  useEffect(() => {
    if (!coins.code || coins.code !== 200) {
      dispatchUser({
        type: 'reset-coin',
      });
    }
  }, [coins]);

  return (
    <React.Fragment>
      <CustomTable data={coins} />
    </React.Fragment>
  );
}
