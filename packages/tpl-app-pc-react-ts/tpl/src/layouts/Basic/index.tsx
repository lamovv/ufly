import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { Outlet, useLocation } from 'umi';
import styles from './index.scss';

function BasicLayout({ header, footer, aside, extra }: any) {
  const { pathname } = useLocation();
  // 展示左侧menu的路由白名单
  const showable = ['/', '/index', '/index.html', '/home', '/my'].includes(pathname);

  return (
    <ConfigProvider locale={zhCN}>
      <div className={styles.layoutBasic}>
        <header>{header()}</header>
        <div className={styles.section}>
          <aside style={{ display: showable ? 'block' : 'none' }}>{aside()}</aside>
          <div className={styles.ccontainer}>
            <Outlet />
          </div>
        </div>
        <footer>{footer()}</footer>
        <div className={styles.extra}>{extra()}</div>
      </div>
    </ConfigProvider>
  );
}

export default BasicLayout;
