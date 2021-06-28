import React, { useRef, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { ModalForm, ProFormText, ProFormUploadButton, ProFormSelect } from '@ant-design/pro-form';

const DiversionList = () => {
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
      title: '导流名称',
      dataIndex: 'sourceName',
    },
    {
      title: '导流链接',
      dataIndex: 'link',
      search: false,
    },
    {
      title: '缩略图',
      dataIndex: 'img',
      search: false,
    },
    {
      title: '排序值',
      dataIndex: 'value',
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
        headerTitle="导流列表"
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
        title="编辑导流"
        width="600px"
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={onSubmit}
      >
        <ProFormText
          label="导流名称"
          name="sourceName"
          rules={[
            {
              required: true,
              message: '请输入导流名称',
            },
          ]}
        />
        <ProFormText
          label="导流链接"
          name="link"
          rules={[
            {
              required: true,
              message: '请输入导流链接',
            },
          ]}
        />
        <ProFormUploadButton
          label="导流缩略图"
          name="img"
          max={1}
          fieldProps={{
            name: 'file',
            listType: 'picture-card',
          }}
          action="/upload.do"
        />
        <ProFormText
          label="导流排序值"
          name="value"
          rules={[
            {
              required: true,
              message: '请输入导流排序值',
            },
          ]}
        />
        <ProFormSelect
          label="来源渠道"
          name="role"
          options={[
            {
              value: '1',
              label: '渠道1',
            },
            {
              value: '2',
              label: '渠道2',
            },
          ]}
        />
      </ModalForm>
    </PageContainer>
  );
};

export default DiversionList;
