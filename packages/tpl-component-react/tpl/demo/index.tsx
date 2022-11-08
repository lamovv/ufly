/**
 * debug: true
 * transform: true
 * defaultShowCode: false
 * background: '#f6f7f9'
 */


import {{comName}}, { Stateless } from '{{scope}}{{name}}';
import { Space } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';

export default function Page() {
  const defaultVal = 1;

  const [txt, setTxt] = useState(defaultVal);
  const [val, setVal] = useState(0);
  const uncontrolledChanged = v => {
    setTxt(v);
  };

  const controlledChanged = v => {
    // 开启受控值update
    // setVal(v);
  };

  const style = { display: 'flex', alignItems: 'end' };
  return (
    <Space direction='vertical' size='middle'>
      <{{ comName }} value={val} onChange={controlledChanged} title='受控' />

      <Space align='center' style={style}>
        <{{ comName }} defaultValue={defaultVal} onChange={uncontrolledChanged} title='非受控' />
        <Stateless text={txt} />
      </Space>
    </Space>
  );
}
