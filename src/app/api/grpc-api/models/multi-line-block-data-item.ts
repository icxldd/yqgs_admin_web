/* tslint:disable */
import { Object } from './object';

/**
 * MultiLineBlockDataItem
 */
export interface MultiLineBlockDataItem {

  /**
   * areaStyle
   */
  areaStyle?: Object;

  /**
   * 数字值
   */
  data?: Array<number>;

  /**
   * 文字块标题
   */
  name?: string;

  /**
   * stack
   */
  stack?: string;

  /**
   * 类型值
   */
  type?: string;
}
