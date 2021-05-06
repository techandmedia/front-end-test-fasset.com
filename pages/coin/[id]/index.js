import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGetData } from '../../../utils/api/useGetData';
import { Col, Row } from 'antd';

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
      <Row justify="space-between">
        <Col span={12}>
          <span style={{ fontSize: 30 }}>
            <img
              src={coin.data.image.large}
              height={80}
              style={{ marginRight: 15 }}
              alt="coin-image"
            />
            {coin.data.name} ({coin.data.symbol.toUpperCase()})
          </span>
        </Col>
        <Col span={12}>col-4</Col>
      </Row>
    );
  }

  return 'Loading...';
}
