/* tslint:disable */

/**
 * NotifyLivecastsEvent
 */
export interface NotifyLivecastsEvent {

  /**
   * 推流域名
   */
  app?: string;

  /**
   * 用户的APPID
   */
  appid?: number;

  /**
   * 推流路径
   */
  appname?: string;

  /**
   * 同直播流名称
   */
  channel_id?: string;

  /**
   * 录制文件结束时间戳
   */
  create_time?: number;

  /**
   * 断流事件通知推流时长，单位毫秒
   */
  duration?: number;

  /**
   * 录制文件结束时间戳
   */
  end_time?: number;

  /**
   * 推断流错误码
   */
  errcode?: number;

  /**
   * 推断流错误描述
   */
  errmsg?: string;

  /**
   * 事件消息产生的UNIX时间戳
   */
  event_time?: number;

  /**
   * 事件通知信息类型
   */
  event_type?: number;

  /**
   * 点播文件格式
   */
  file_format?: string;

  /**
   * 点播文件ID
   */
  file_id?: string;

  /**
   * 录制文件大小，单位字节
   */
  file_size?: number;

  /**
   * 截图高，单位为像素
   */
  height?: number;

  /**
   * 直播接入点的 IP
   */
  node?: string;

  /**
   * 截图下载 URL
   */
  pic_full_url?: string;

  /**
   * 截图文件路径
   */
  pic_url?: string;

  /**
   * 断流事件通知推流时长，单位毫秒
   */
  push_duration?: number;

  /**
   * 消息序列号
   */
  sequence?: string;

  /**
   * 事件通知签名
   */
  sign?: string;

  /**
   * 录制文件起始时间戳
   */
  start_time?: number;

  /**
   * 直播流名称
   */
  stream_id?: string;

  /**
   * 用户推流URL所带参数
   */
  stream_param?: string;

  /**
   * 事件通知签名过期UNIX时间戳
   */
  t?: number;

  /**
   * 用户推流 IP
   */
  user_ip?: string;

  /**
   * 录制附加文件下载 URL
   */
  video_url?: string;

  /**
   * 截图宽，单位为像素
   */
  width?: number;
}
