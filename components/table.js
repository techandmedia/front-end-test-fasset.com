import { Table } from "antd";

const formatCurrency = new Intl.NumberFormat("EN", {
  style: "currency",
  currency: "USD",
});

const columns = [
  {
    title: "",
    dataIndex: "market_cap_rank",
    key: "market_cap_rank",
    width: 10,
    sorter: (a, b) => a.market_cap_rank - b.market_cap_rank,
  },
  {
    title: "Coin",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name - b.name,
    render: (text, record) => (
      <div>
        <img src={record.image} height={20} style={{ marginRight: 10 }} />
        {record.name}
      </div>
    ),
  },
  {
    title: "Price",
    dataIndex: "low_24h",
    key: "low_24h",
    width: 10,
    render: (text) => formatCurrency.format(text),
  },
  {
    title: "1h",
    dataIndex: "low_24h",
    key: "low_24h",
    width: 10,
  },
  {
    title: "24h",
    dataIndex: "low_24h",
    key: "low_24h",
    width: 10,
  },
  {
    title: "7d",
    dataIndex: "low_24h",
    key: "low_24h",
    width: 10,
  },
  {
    title: "24h Volume",
    dataIndex: "high_24h",
    key: "high_24h",
    width: 10,
    render: (text) => formatCurrency.format(text),
  },
  {
    title: "Mkt Cap",
    dataIndex: "market_cap",
    key: "market_cap",
    width: 10,
    render: (text) => formatCurrency.format(text),
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

export function CustomTable({ data }) {
  return (
    <Table
      columns={columns}
      dataSource={data.data}
      loading={data.isLoading}
      onChange={onChange}
      pagination={false}
    />
  );
}
