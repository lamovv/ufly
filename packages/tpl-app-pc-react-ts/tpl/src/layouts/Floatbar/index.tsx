import { LeftOutlined, RightOutlined, ToTopOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useState } from 'react';
import styles from './index.scss';

function Floatbar() {
  const [foldStatus, setFoldStatus] = useState<boolean>(false);
  const handler = () => {
    setFoldStatus(!foldStatus);
  };

  const toTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };

  return (
    <div className={styles.floating}>
      {foldStatus ? (
        <div className={styles.content} style={{ width: '170px' }} onMouseLeave={handler}>
          <RightOutlined style={{ color: 'rgb(251, 189, 57)', fontSize: '16px' }} onClick={handler} />
          <Tooltip title="回到顶部" placement="topRight">
            <ToTopOutlined style={{ color: 'rgb(251, 189, 57)', fontSize: '24px' }} onClick={toTop} />
          </Tooltip>
        </div>
      ) : (
        <div className={styles.content} style={{ width: '62px' }} onMouseEnter={handler}>
          <LeftOutlined style={{ color: 'rgb(251, 189, 57)', fontSize: '16px', margin: 0 }} onClick={handler} />
          <span style={{ color: 'rgb(251, 189, 57)' }}>菜单</span>
          {/* <img className={styles.defaultImg} src="https://gw.alicdn.com/imgextra/i1/O1CN01MhhSWG1Sdhkb58xEP_!!6000000002270-2-tps-145-39.png" alt="logo" /> */}
        </div>
      )}
    </div>
  );
}

export default Floatbar;
