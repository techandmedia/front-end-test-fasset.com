import Link from 'next/link';
import { Table } from 'antd';
import { formatCurrency } from '../utils/helpers';

const columns = [
  {
    title: '',
    dataIndex: 'market_cap_rank',
    key: 'market_cap_rank',
    width: 10,
    sorter: (a, b) => a.market_cap_rank - b.market_cap_rank,
  },
  {
    title: 'Coin',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name - b.name,
    render: (text, record) => (
      <Link
        key={record.id}
        href={{
          pathname: `/coin/${record.id}`,
        }}
      >
        <a>
          <img src={record.image} height={20} style={{ marginRight: 10 }} />
          {record.name}
        </a>
      </Link>
    ),
  },
  {
    title: 'Price',
    dataIndex: 'low_24h',
    key: 'low_24h',
    width: 10,
    render: text => formatCurrency.format(text),
  },
  {
    title: '1h',
    dataIndex: 'low_24h',
    key: 'low_24h',
    width: 10,
  },
  {
    title: '24h',
    dataIndex: 'low_24h',
    key: 'low_24h',
    width: 10,
  },
  {
    title: '7d',
    dataIndex: 'low_24h',
    key: 'low_24h',
    width: 10,
  },
  {
    title: '24h Volume',
    dataIndex: 'high_24h',
    key: 'high_24h',
    width: 10,
    render: text => formatCurrency.format(text),
  },
  {
    title: 'Mkt Cap',
    dataIndex: 'market_cap',
    key: 'market_cap',
    width: 10,
    render: text => formatCurrency.format(text),
  },
  {
    title: 'Last 7 days',
    dataIndex: 'market_cap',
    key: 'market_cap',
    width: 10,
    render: text => formatCurrency.format(text),
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

export function CustomTable({ data }) {
  console.log(data);
  return (
    <Table
      columns={columns}
      dataSource={data.data}
      loading={data.isLoading}
      onChange={onChange}
      pagination={false}
      rowKey="id"
    />
  );
}
