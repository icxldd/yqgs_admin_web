/* tslint:disable */
import { SingleLineBlock } from './single-line-block';
import { MultiLineBlock } from './multi-line-block';
import { TextBlock } from './text-block';
import { PieBlock } from './pie-block';

/**
 * ShowGuildDetailAdminDto
 */
export interface ShowGuildDetailAdminDto {

  /**
   * 本月教会被举报总数
   */
  currentMonthGuildAbuseCount?: SingleLineBlock;

  /**
   * 本月直播讨论通知举报数(未实现)
   */
  currentMonthGuildBlocAbuseCount?: MultiLineBlock;

  /**
   * 本月直播讨论通知发布数
   */
  currentMonthGuildBlocCount?: MultiLineBlock;

  /**
   * 本月直播使用流量总数
   */
  currentMonthLiveCastUseCount?: SingleLineBlock;

  /**
   * 本月教会新增人数
   */
  currentMonthNewJoinCount?: SingleLineBlock;

  /**
   * 占位
   */
  placeholder?: string;

  /**
   * 总教会被举报总数
   */
  sumGuildAbuseCount?: TextBlock;

  /**
   * 总直播讨论通知举报数(未实现)
   */
  sumGuildBlocAbuseCount?: PieBlock;

  /**
   * 总直播讨论通知发布数
   */
  sumGuildBlocCount?: PieBlock;

  /**
   * 总直播使用流量总数
   */
  sumLiveCastUseCount?: TextBlock;

  /**
   * 总教会新增人数
   */
  sumNewJoinCount?: TextBlock;

  /**
   * 今日教会被举报总数
   */
  toDayGuildAbuseCount?: TextBlock;

  /**
   * 今日直播讨论通知举报数(未实现)
   */
  toDayGuildBlocAbuseCount?: PieBlock;

  /**
   * 今日直播讨论通知发布数
   */
  toDayGuildBlocCount?: PieBlock;

  /**
   * 今日直播使用流量总数
   */
  toDayLiveCastUseCount?: TextBlock;

  /**
   * 今日教会新增人数
   */
  toDayNewJoinCount?: TextBlock;
}
