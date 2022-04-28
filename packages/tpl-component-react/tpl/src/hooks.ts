import type { ChangeEventHandler } from 'react';
import { useState } from 'react';

export const useControl = (v: number) => {
  const [val, setVal] = useState(v);

  const onPlus = () => {
    setVal(val + 1);
  };
  const onMinus = () => {
    setVal(val - 1);
  };
  const onClear = () => {
    setVal(0);
  };
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setVal(Number(e.target.value));
  };

  return {
    val,
    onPlus,
    onMinus,
    onClear,
    onChange,
  };
};
