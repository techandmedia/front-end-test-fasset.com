import { useContext } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Link from 'next/link';
import { UserContext } from '../utils/context/Global-Context';
const { Header, Content, Footer } = Layout;

export function AppLayout(props) {
  const { user } = useContext(UserContext);

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            <Link key="/" href="/">
              <a>Home</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link key="/" href="/">
              <a>Home</a>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Coin</Breadcrumb.Item>
          {user.coin && <Breadcrumb.Item>{user.coin}</Breadcrumb.Item>}
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}
