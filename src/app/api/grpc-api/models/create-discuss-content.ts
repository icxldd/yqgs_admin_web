/* tslint:disable */
import { FileInfo } from './file-info';

/**
 * CreateDiscussContent
 */
export interface CreateDiscussContent {

  /**
   * 描述
   */
  description?: string;

  /**
   * 讨论编号
   */
  discussId?: string;

  /**
   * 文件列表
   */
  files?: Array<FileInfo>;

  /**
   * 类型（0: 文本; 1: 图片; 2: 音频; 3: 视频; 4: 文档）
   */
  type?: number;
}
