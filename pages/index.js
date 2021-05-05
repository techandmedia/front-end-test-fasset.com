import React, { useContext, useEffect } from "react";
import { useGetData } from "../utils/api/useGetData";
import { UserContext } from "../utils/context/Global-Context";
import { CustomTable } from "../components/table";

// Custom DatePicker that uses Day.js instead of Moment.js
// import DatePicker from "../components/DatePicker";

export default function Home() {
  const { user } = useContext(UserContext);
  const [coins, getCoins] = useGetData(null);

  useEffect(() => {
    if (user.statusServer === "ok") {
      getCoins(user.GET_TOP_50_COIN_LIST_API_TEMP);
    }
  }, [user]);

  return (
    <React.Fragment>
      <CustomTable data={coins} />
    </React.Fragment>
  );
}
