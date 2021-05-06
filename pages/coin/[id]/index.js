import { useEffect } from "react";
import { useRouter } from "next/router";
import { useGetData } from "../../../utils/api/useGetData";

export default function Product() {
  const [coin, getCoin] = useGetData(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      getCoin(`https://api.coingecko.com/api/v3/coins/${id}`);
    }
  }, [id]);

  if (coin.code === 200) {
    console.log(coin.data);
    return (
      <img
        src={coin.data.image.large}
        height={120}
        style={{ marginRight: 10 }}
        alt="coin-image"
      />
    );
  }

  return "Loading...";
}
