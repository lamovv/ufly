/**
 * debug: true
 * transform: true
 * defaultShowCode: false
 * background: '#f6f7f9'
 */

import React, { useState } from 'react';
import {{comName}}, { Stateless } from '{{scope}}{{name}}';

export default function Page() {
  const defaultVal = 1;

  const [txt, setTxt] = useState(defaultVal);
  const changeHandler = v => {
    setTxt(v);
  };

  return (
    <div>
      <<%= comName %>
        defaultValue={defaultVal}
        onChange={changeHandler}
      />

      <Stateless
        text={txt}
      />
    </div>
  );
}
