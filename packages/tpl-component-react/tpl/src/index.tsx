/**
 * 计数器组件，同时输出子组件
 */
import type { FC } from 'react';
import { useEffect } from 'react';
import Controlled from './controlled';
import { useControl } from './hooks';
import { ICounterProps } from './interface';
import Stateless from './stateless';

const Counter: FC<ICounterProps> = ({ defaultValue = 1, onChange = v => void 0 }) => {
  const { val, onPlus, onMinus, onClear, onChange: _onChange } = useControl(defaultValue);

  useEffect(() => {
    onChange(val);
  }, [val, onChange]);

  return (
    <Controlled
      value={val}
      onPlus={onPlus}
      onMinus={onMinus}
      onClear={onClear}
      onChange={_onChange}
    />
  );
};

export default Counter;
export { Controlled, Stateless };
