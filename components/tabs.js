import { Tabs } from 'antd';

const { TabPane } = Tabs;

export function CustomTabs({ tabs }) {
  return (
    <div className="card-container">
      <Tabs type="card">
        {tabs.map(t => (
          <TabPane tab={t.name} key={t.name}>
            {t.component}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}
