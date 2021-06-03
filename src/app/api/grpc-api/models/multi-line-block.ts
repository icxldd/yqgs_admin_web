/* tslint:disable */
import { MultiLineBlockDataItem } from './multi-line-block-data-item';

/**
 * MultiLineBlock
 */
export interface MultiLineBlock {

  /**
   * 业务名字数组
   */
  lableNameData?: Array<string>;

  /**
   * 时间线名字数组
   */
  nameData?: Array<string>;

  /**
   * 标题后缀
   */
  titleAfterStr?: string;

  /**
   * 标题内容
   */
  titleContextStr?: string;

  /**
   * 标题前缀
   */
  titlePreStr?: string;

  /**
   * 值数组
   */
  valData?: Array<MultiLineBlockDataItem>;
}
