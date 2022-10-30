import { Badge, Col, Popover, Row } from 'antd';
import Avatar from './avatar';
import styles from './index.scss';
import Logo from './logo';

const Header = () => {
  return (
    <div className={styles.headerWrapper} data-spm="header">
      <div className={styles.header}>
        <Logo />
        <Row style={{ width: '100%', height: '100%' }} align="middle" justify="end">
          <Col span={7} />
          <Col span={10}>
            <div className={styles.toolBox}>
              <Popover content="客服电话:0571-28950416" trigger="hover">
                <div className={styles.phone}>
                  <img
                    className={styles.toolimg}
                    src="https://img.alicdn.com/imgextra/i1/O1CN01ZvbPB721K1LPHgzSh_!!6000000006965-2-tps-48-48.png"
                    alt=""
                  />
                  <span>客服电话</span>
                </div>
              </Popover>
              <div className={styles.separate} />
              <Popover trigger="hover" placement="bottomRight">
                <div className={styles.phone}>
                  <Badge size="small">
                    <span>
                      <img
                        className={styles.toolimg}
                        src="https://img.alicdn.com/imgextra/i4/O1CN01fCAxY51HxR6OiKd7Y_!!6000000000824-2-tps-48-48.png"
                      />
                    </span>
                  </Badge>
                  <span>消息通知</span>
                </div>
              </Popover>
              <div className={styles.separate} />
              <Avatar />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
