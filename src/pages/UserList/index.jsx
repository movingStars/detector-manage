import React, { useRef, useState } from 'react';
import { Button, Modal } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';

const UserList = () => {
  const [modalVisible, handleModalVisible] = useState(false);
  const actionRef = useRef();

  const columns = [
    {
      title: "序号",
      dataIndex: 'sort',
      search: false,
    },
    {
      title: "微信昵称",
      dataIndex: "nickName",
      search: false,
    },
    {
      title: "微信头像",
      dataIndex: "avator",
      search: false,
      render: (_) => {
        <img src={_} alt="avator"/>
      }
    },
    {
      title: "所属来源",
      dataIndex: "origin",
    },
    {
      title: "用户姓名",
      dataIndex: "userName",
    },
    {
      title: "手机号码",
      dataIndex: "mobile",
    },
    {
      title: "性别",
      dataIndex: "sex",
      search: false,
    },
    {
      title: "年龄",
      dataIndex: "age",
      search: false,
    },
    {
      title: "备注",
      dataIndex: "content",
      search: false,
    },
    {
      title: "操作",
      dataIndex: 'option',
      valueType: 'option',
      render: () => [
        <a
          key="edit"
          onClick={() => {
            handleModalVisible(true);
          }}
        >检测结果</a>
      ],
    }
  ];

  const resultColumns = [
    {
      title: '检测结果编号',
      dataIndex: 'number',
    },
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '左脚',
      dataIndex: 'left',
    },
    {
      title: '左脚图片',
      dataIndex: 'leftImg',
    },
    {
      title: '右脚',
      dataIndex: 'right',
    },
    {
      title: '右脚图片',
      dataIndex: 'rightImg',
    }
  ];
  return (
    <PageContainer>
      <ProTable
        headerTitle="用户列表"
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

      <Modal title="检测结果" visible={modalVisible} onOk={() => handleModalVisible(false)} cancelText={false}>
        <ProTable
          headerTitle="检测结果"
          rowKey="key"
          search={false}
          toolBarRender={false}
          // request={(params, sorter, filter) => queryRule({ ...params, sorter, filter })}
          columns={resultColumns}
        />
      </Modal>
    </PageContainer>
  );
};

export default UserList;
