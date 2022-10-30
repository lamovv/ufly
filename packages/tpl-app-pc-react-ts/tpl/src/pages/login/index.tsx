import { useRequest } from '@umijs/hooks';
import { Button, Col, Input, Row } from 'antd';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { history, useModel } from 'umi';

import styles from './index.scss';

export default function LoginPage() {
  // 输入手机号
  const [mobile, setMobile] = useState<string>('');
  // 登录disabled
  const [disabled, setDisabled] = useState<boolean>(true);

  const { data, error, loading, run } = useRequest(
    {
      url: '/api/login',
      method: 'post',
    },
    {
      manual: true,
    }
  );

  const { setUser } = useModel('user');

  useEffect(() => {
    setUser({
      data: data?.data,
      error,
      loading,
    });

    // 登录成功
    if (data?.success) {
      history.push('/home');
    }
  }, [data, error, loading]);

  // 手机号
  function phoneChangedHandler(e: ChangeEvent<HTMLInputElement>) {
    const ipt = e.target as HTMLInputElement;
    const v = ipt.value;
    const long = v.length;
    if (long <= 11) {
      setMobile(v);
      setDisabled(long !== 11);
    }
  }

  // 登录响应
  function loginHandler() {
    void run();
  }

  return (
    <div className={styles.login}>
      <div className={styles.wrap}>
        <Row justify="center">
          <span style={{ fontSize: '24px', color: 'rgb(250, 173, 20)' }}>登录</span>
        </Row>

        <Row justify="start" align="middle" style={{ height: 42, marginTop: 10 }}>
          <Col span={10}>
            <Input
              type="number"
              maxLength={11}
              value={mobile}
              onChange={phoneChangedHandler}
              placeholder="请输入手机号"
              bordered={false}
              allowClear
            />
          </Col>
        </Row>

        <Row justify="center" className={styles.toLogin}>
          <Button disabled={disabled} onClick={loginHandler} type="primary">
            立即登录
          </Button>
        </Row>
      </div>
    </div>
  );
}
