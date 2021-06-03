/* tslint:disable */
import { PieBlockDataItem } from './pie-block-data-item';

/**
 * PieBlock
 */
export interface PieBlock {

  /**
   * 名字数组以及值
   */
  data?: Array<PieBlockDataItem>;

  /**
   * 名字数组
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
}
