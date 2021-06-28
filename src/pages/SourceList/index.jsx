import React, { useRef, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { ModalForm, ProFormText } from '@ant-design/pro-form';

const SourceList = () => {
  const [createModalVisible, handleModalVisible] = useState(false);
  const actionRef = useRef();

  const onSubmit = () => {};

  const columns = [
    {
      title: '序号',
      dataIndex: 'sort',
      search: false,
    },
    {
      title: '来源名称',
      dataIndex: 'sourceName',
    },
    {
      title: '专属链接',
      dataIndex: 'link',
      search: false,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: () => {
        <a
          key="edit"
          onClick={() => {
            handleModalVisible(true);
          }}
        >
          编辑
        </a>;
      },
    },
  ];
  return (
    <PageContainer>
      <ProTable
        headerTitle="来源列表"
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={false}
        // request={(params, sorter, filter) => queryRule({ ...params, sorter, filter })}
        columns={columns}
      />

      <ModalForm
        title="编辑来源"
        width="600px"
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={onSubmit}
      >
        <ProFormText
          label="来源名称"
          name="sourceName"
          rules={[
            {
              required: true,
              message: '请输入来源名称',
            },
          ]}
        />
        <ProFormText
          label="来源链接"
          name="link"
          rules={[
            {
              required: true,
              message: '请输入来源链接',
            },
          ]}
        />
        <ProFormText
          label="来源备注"
          name="content"
          rules={[
            {
              required: true,
              message: '请输入来源备注',
            },
          ]}
        />
      </ModalForm>
    </PageContainer>
  );
};

export default SourceList;
