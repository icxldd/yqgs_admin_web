/* tslint:disable */

/**
 * ChangeBlocStatusAdmin
 */
export interface ChangeBlocStatusAdmin {

  /**
   * 类型0：通知；1：直播；2：讨论；3：教会；
   */
  blocType?: number;

  /**
   * true:正常；false：删除
   */
  blocValue?: boolean;

  /**
   * 标识ID
   */
  identificationId?: string;
}
