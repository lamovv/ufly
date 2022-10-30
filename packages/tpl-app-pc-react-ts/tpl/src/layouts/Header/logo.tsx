import { Image, Space } from 'antd';
import { history } from 'umi';

interface Props {
  width?: string;
}

const Logo = ({ width }: Props) => {
  return (
    <div
      style={{
        width: width || '230px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Space align="center">
        <Image
          width={40}
          height={40}
          preview={false}
          src="https://gw.alicdn.com/tfs/TB1FgiTv4D1gK0jSZFsXXbldVXa-500-500.png"
        />
        <h1 style={{ fontSize: '32px', margin: 0 }} onClick={() => history.push('/')}>
          App
        </h1>
      </Space>
    </div>
  );
};

export default Logo;
