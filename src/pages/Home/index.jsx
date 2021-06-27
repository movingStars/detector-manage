import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Statistic, Row, Col, Card, Tabs, Divider } from 'antd';
import { Line } from '@ant-design/charts';

const { TabPane } = Tabs;

const Home = () => {
  const data = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
    {
      year: '1996',
      value: 6,
    },
    {
      year: '1997',
      value: 7,
    },
    {
      year: '1998',
      value: 9,
    },
    {
      year: '1999',
      value: 13,
    },
  ];

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    label: {},
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    tooltip: { showMarkers: false },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    interactions: [{ type: 'marker-active' }],
  };

  return (
    <PageContainer>
      <Card>
        <Row gutter={24}>
          <Col span={4}>
            <Statistic title="总用户数（授权）" value={2000} />
          </Col>
          <Col span={4}>
            <Statistic title="轻度拇外翻用户" value={2000} />
          </Col>
          <Col span={4}>
            <Statistic title="中度拇外翻用户" value={2000} />
          </Col>
          <Col span={4}>
            <Statistic title="重度拇外翻用户" value={2000} />
          </Col>
          <Col span={4}>
            <Statistic title="来源渠道数" value={2000} />
          </Col>
          <Col span={4}>
            <Statistic title="导流渠道数" value={2000} />
          </Col>
        </Row>

        <Divider />

        <Tabs defaultActiveKey="1">
          <TabPane tab="点击数" key="1">
            <Line {...config} />
          </TabPane>
          <TabPane tab="新增检测人数" key="2">
            <Line {...config} />
          </TabPane>
          <TabPane tab="导流数" key="3">
            <Line {...config} />
          </TabPane>
        </Tabs>
      </Card>
    </PageContainer>
  );
};

export default Home;
