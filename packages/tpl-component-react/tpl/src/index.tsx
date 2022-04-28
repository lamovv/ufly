import { useEffect } from 'react';
import Controlled from './controlled';
import Stateless from './stateless';
import { useControl } from './hooks';
import styles from './index.module.scss';

export interface IComponent {
  readonly defaultValue?: number;
  onChange?: (v: number) => void;
}

const Component = ({ defaultValue = 1, onChange = () => {} }: IComponent) => {
  const { val, onPlus, onMinus, onClear, onChange: _onChange } = useControl(defaultValue);

  useEffect(() => {
    onChange(val);
  }, [val, onChange]);

  return (
    <div className={styles.index}>
      <Controlled
        value={val}
        onPlus={onPlus}
        onMinus={onMinus}
        onClear={onClear}
        onChange={_onChange}
      />
      <Stateless text={val} />
    </div>
  );
};

export { Controlled, Stateless };
export default Component;
