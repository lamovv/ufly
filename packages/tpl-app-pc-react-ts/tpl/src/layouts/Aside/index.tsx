import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useState } from 'react';
import { history } from 'umi';
import styles from './index.scss';

const MENU_LIST = [
  {
    label: '首页',
    key: 'home',
    icon: <HomeOutlined />,
    pathname: '/home',
  },
  {
    label: '我的',
    key: 'my',
    icon: <UserOutlined />,
    pathname: 'my',
  },
];
function Aside() {
  const [defaultSel, seDefaultsel] = useState<string[]>(['home']);

  const onClick: MenuProps['onClick'] = e => {
    const { pathname, search } = e.item.props;

    history.push({ pathname, search });
  };

  // 点击菜单
  const select = e => {
    seDefaultsel(e.keyPath);
  };

  return (
    <div className={styles.aside} data-spm="menu">
      <Menu
        onSelect={select}
        style={{
          boxShadow: '0 2px 8px rgb(0 0 0 / 10%)',
          marginTop: '20px',
          marginBottom: '20px',
          width: '230px',
          height: '100%',
          borderRadius: '16px',
          minHeight: '300px',
          backgroundColor: '#F7F7F7',
          paddingTop: '18px',
          position: 'sticky',
          top: '20px',
          left: 0,
        }}
        mode="inline"
        defaultSelectedKeys={defaultSel}
        selectedKeys={defaultSel}
        items={MENU_LIST}
        onClick={onClick}
      />
    </div>
  );
}

export default Aside;
