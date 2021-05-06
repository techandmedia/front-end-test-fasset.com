import { Col, Row } from 'antd';
import { formatCurrency } from '../../utils/helpers';

export function CoinOverview({ data }) {
  const { market_data, image, symbol, name } = data;

  return (
    <Row justify="space-between">
      <Col span={12}>
        <span style={{ fontSize: 30 }}>
          <img
            src={image.large}
            height={80}
            style={{ marginRight: 15 }}
            alt="coin-image"
          />
          {name} ({symbol.toUpperCase()})
        </span>
      </Col>
      <Col span={12} style={{ fontSize: 30, textAlign: 'right' }}>
        {formatCurrency.format(market_data.current_price.usd)}
      </Col>
    </Row>
  );
}
