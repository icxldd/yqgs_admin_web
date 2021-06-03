/* tslint:disable */
import { AudioDto } from './audio-dto';
import { ResponseStatus } from './response-status';

/**
 * SearchAudioFilesResponse
 */
export interface SearchAudioFilesResponse {

  /**
   * 一组音频信息
   */
  audios?: Array<AudioDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
