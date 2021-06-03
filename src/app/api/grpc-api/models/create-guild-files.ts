/* tslint:disable */
import { FileInfo } from './file-info';

/**
 * CreateGuildFiles
 */
export interface CreateGuildFiles {

  /**
   * 文件列表
   */
  files?: Array<FileInfo>;

  /**
   * 文件夹编号
   */
  folderId?: string;

  /**
   * 教会编号
   */
  guildId?: string;
}
