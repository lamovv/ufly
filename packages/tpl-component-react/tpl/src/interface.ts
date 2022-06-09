/**
 * types 定义
 */

import type { ChangeEvent, ChangeEventHandler } from 'react';

type TChange = (v: number) => void;
/**
* Counter
*/
export interface ICounterProps {
  /** 初始值(默认值) */
  readonly defaultValue?: number;
  /** changed handler */
  onChange?: TChange;
}

/**
* 无状态
*/
export interface IStatelessProps {
  /** 展示文案 */
  text: string | number;
}

export interface IOnChange {
  (e: ChangeEvent<HTMLInputElement>): void;
}

/**
* 受控
*/
export interface IControlledProps {
  /** Value */
  value: number;
  /** 加 */
  onPlus: () => void;
  /** 减 */
  onMinus: () => void;
  /** changed handler */
  onChange: ChangeEventHandler<HTMLInputElement>;
  /** 清0 */
  onClear: () => void;
}
