/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import Aside from './Aside';
import BasicLayout from './Basic';
import Floatbar from './Floatbar';
import Footer from './Footer';
import Header from './Header';

// 这里声明全局使用的所有状态：
const GlobalState = {
  userInfo: {},
};

const Layout = (props: any) => {
  return <BasicLayout {...props} header={Header} footer={Footer} aside={Aside} extra={Floatbar} />;
};

export default Layout;
