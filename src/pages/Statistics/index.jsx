import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Tabs } from 'antd';
import Month from './month';
import Day from './day';

const { TabPane } = Tabs;

const Statistics = () => {
  return (
    <PageContainer>
      <Card>
        <Tabs defaultActiveKey="1">
          <TabPane tab="月汇总" key="1">
            <Month />
          </TabPane>
          <TabPane tab="日汇总" key="2">
            <Day />
          </TabPane>
        </Tabs>
      </Card>
    </PageContainer>
  );
};

export default Statistics;
