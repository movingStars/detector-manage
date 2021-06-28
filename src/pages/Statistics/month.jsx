import React, { useRef } from 'react';
import { Button } from 'antd';
import ProTable from '@ant-design/pro-table';

const MonthStatistics = () => {
  const actionRef = useRef();

  const columns = [
    {
      title: '日期',
      dataIndex: 'date',
      valueType: 'dateMonth',
    },
    {
      title: '渠道类型',
      dataIndex: 'type',
      valueType: 'select',
      fieldProps: {
        options: [
          {
            label: 'item 1',
            value: 'a',
          },
          {
            label: 'item 2',
            value: 'b',
          },
        ],
      },
    },
    {
      title: '渠道名称',
      dataIndex: 'name',
      valueType: 'select',
      fieldProps: {
        options: [
          {
            label: 'item 1',
            value: 'a',
          },
          {
            label: 'item 2',
            value: 'b',
          },
        ],
      },
    },
    {
      title: '点击量',
      dataIndex: 'num',
      search: false,
    },
    {
      title: '点击人数',
      dataIndex: 'num1',
      search: false,
    },
  ];
  return (
    <>
      <ProTable
        headerTitle="来源列表"
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              console.log('导出');
            }}
          >
            导出
          </Button>,
        ]}
        // request={(params, sorter, filter) => queryRule({ ...params, sorter, filter })}
        columns={columns}
      />
    </>
  );
};

export default MonthStatistics;
