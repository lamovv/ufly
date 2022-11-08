/**
 * types 定义
 */

import { IFCProps } from '@uhooks/use-value';

export interface ICountProps extends IFCProps {
  title?: string;
}

// 无状态
export interface IStatelessProps {
  /** 展示文案 */
  text: string | number;
}
