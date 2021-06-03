/* tslint:disable */
import { ResponseStatus } from './response-status';

/**
 * SearchImageFilesResponse
 */
export interface SearchImageFilesResponse {

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;

  /**
   * 一组图像地址
   */
  urls?: Array<string>;
}
