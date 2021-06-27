import React, { useRef, useState } from 'react';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { ModalForm, ProFormText, ProFormSelect } from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';

const UserMan = () => {
  const [createModalVisible, handleModalVisible] = useState(false);
  const actionRef = useRef();

  const onSubmit = () => {};

  const columns = [
    {
      title: "用户名称",
      dataIndex: 'userName',
    },
    {
      title: "所属角色",
      dataIndex: 'roleName',
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      search: false,
    },
    {
      title: "操作",
      dataIndex: 'option',
      valueType: 'option',
      render: () => {
        <a
          key="edit"
          onClick={() => {
            handleModalVisible(true);
          }}
        ></a>
      },
    }
  ];
  return (
    <PageContainer>
      <ProTable
        headerTitle="管理员管理"
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
              handleModalVisible(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        // request={(params, sorter, filter) => queryRule({ ...params, sorter, filter })}
        columns={columns}
      />

      <ModalForm
        title="编辑用户"
        width="600px"
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={onSubmit}
      >
        <ProFormText
          label="用户名称"
          name="roleName"
          rules={[
            {
              required: true,
              message: "请输入用户名称"
            },
          ]}
        />
        <ProFormSelect
          label="所属角色"
          name="role"
          options={[
            {
              value: '1',
              label: '角色1',
            },
            {
              value: '2',
              label: '角色2',
            },
          ]}
        />
      </ModalForm>
    </PageContainer>
  );
};

export default UserMan;
