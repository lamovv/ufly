import { Breadcrumb, Col, Row } from 'antd';
import { Link, useModel } from 'umi';
import styles from './index.scss';

export default function ProFile() {
  const { initialState } = useModel('@@initialState');
  const { userInfo = {} } = initialState!;

  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: '30px', marginLeft: '0px' }}>
        <Breadcrumb.Item>
          <Link to="/">首页</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>个人中心</Breadcrumb.Item>
      </Breadcrumb>

      <Row gutter={32}>
        <Col span={6}>
          <span className={styles.subtitle}>昵称：</span>
          {userInfo.name}
        </Col>
        <Col span={6}>
          <span className={styles.subtitle}>头像：</span>
          <img width="30" src={userInfo.avatar} />
        </Col>
      </Row>
    </div>
  );
}
