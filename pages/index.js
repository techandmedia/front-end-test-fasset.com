import React, { useContext, useEffect, useState } from "react";
import { Form, Select, InputNumber, Switch, Slider, Button } from "antd";
import { usePostData } from "../utils/api/usePostData";
import { UserContext } from "../utils/context/Global-Context";

// Custom DatePicker that uses Day.js instead of Moment.js
// import DatePicker from "../components/DatePicker";

export default function Home() {
  const { user } = useContext(UserContext);
  // const [coins, getCoins] = usePostData(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true"
      );
      const coinList = await result.json();
      setData(coinList);
    }
    if (user.statusServer === "ok") {
      getData();
      // getCoins(user.GET_TOP_50_COIN_LIST_API, user.GET_TOP_50_COIN_PARAMS);
    }
  }, [user]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <React.Fragment>TES</React.Fragment>;
}
