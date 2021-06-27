import React, { useRef, useState } from 'react';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';

const AuthMan = () => {
  const [createModalVisible, handleModalVisible] = useState(false);
  const actionRef = useRef();

  const onSubmit = () => {};

  const columns = [
    {
      title: "角色名称",
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
        headerTitle="角色管理"
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
        title="编辑权限"
        width="600px"
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={onSubmit}
      >
        <ProFormText
          label="权限名称"
          name="roleName"
          rules={[
            {
              required: true,
              message: "请输入权限名称"
            },
          ]}
        />
      </ModalForm>
    </PageContainer>
  );
};

export default AuthMan;
