import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import { history } from 'umi';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import styles from './index.less';

const Login = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      history.push('/welcome')
    }, 2000);
  };

  return (
    <div className={styles.main}>
      <ProForm
        initialValues={{
          autoLogin: true,
        }}
        submitter={{
          render: (_, dom) => dom.pop(),
          submitButtonProps: {
            loading: submitting,
            size: 'large',
            style: {
              width: '100%',
            },
          },
        }}
        onFinish={(values) => {
          handleSubmit(values);
          return Promise.resolve();
        }}
      >
        <ProFormText
          name="userName"
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined className={styles.prefixIcon} />,
          }}
          placeholder="请输入用户名称"
          rules={[
            {
              required: true,
              message: "请输入用户名称",
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined className={styles.prefixIcon} />,
          }}
          placeholder="请输入密码"
          rules={[
            {
              required: true,
              message: "请输入密码",
            },
          ]}
        />
      </ProForm>
    </div>
  );
};

export default Login;
