import { DownOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useRequest } from '@umijs/hooks';
import { Dropdown, Menu, Modal, Space, Spin } from 'antd';
import { useEffect } from 'react';
import { history, useModel } from 'umi';
import styles from './index.scss';

const UserAvatar = () => {
  const { data, error, loading, setUser } = useModel('user');
  const { data: outData, run } = useRequest(
    {
      url: '/api/logout',
      method: 'post',
    },
    {
      manual: true,
    }
  );

  useEffect(() => {
    setUser({
      data: outData?.data,
    });

    // 登出成功
    if (outData?.success) {
      history.push('/login');
    }
  }, [outData]);

  if (loading) {
    return (
      <Space style={{ marginRight: 10 }}>
        <Spin size="small" />
      </Space>
    );
  }
  if (error) {
    return <Space style={{ marginRight: 10 }}>用户信息获取异常</Space>;
  }

  const logout = () => {
    Modal.confirm({
      title: '确认退出登录？',
      icon: <ExclamationCircleOutlined />,
      onOk: async () => {
        await run();
        // history.push('/login');
      },
    });
  };

  return data?.name ? (
    <Dropdown overlay={<Menu items={[{ label: '退出登录' }]} onClick={logout} />} placement="bottomRight">
      <Space style={{ marginRight: 10, cursor: 'pointer' }} onClick={() => history.push('/my')}>
        <img
          className={styles.toolimg}
          src={
            data?.avatar || 'https://img.alicdn.com/imgextra/i4/O1CN01gFiveY1Ela0C8cxG9_!!6000000000392-2-tps-48-48.png'
          }
        />
        <span>{data?.name}</span>
        <DownOutlined style={{ width: '16px', height: '16px' }} />
      </Space>
    </Dropdown>
  ) : (
    <Space style={{ marginRight: 10, cursor: 'pointer' }} onClick={() => history.push('/login')}>
      <span>登录</span>
    </Space>
  );
};

export default UserAvatar;
