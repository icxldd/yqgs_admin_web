/* tslint:disable */

/**
 * AlbumDetailDto
 */
export interface AlbumDetailDto {

  /**
   * 伴奏url
   */
  acMusicUrl?: string;
  albumId?: number;

  /**
   * 专辑名称
   */
  albumName?: string;

  /**
   * 分类
   */
  category?: string;

  /**
   * 歌词
   */
  content?: string;

  /**
   * 首字母
   */
  fristLetter?: string;

  /**
   * 是否有伴奏
   */
  hasAcMusicUrl?: boolean;

  /**
   * 是否有内容
   */
  hasContent?: boolean;

  /**
   * 是否有图片
   */
  hasImgUrl?: boolean;

  /**
   * 是否有音乐
   */
  hasMusicUrl?: boolean;

  /**
   * 图片url
   */
  imgUrl?: string;

  /**
   * 音乐url
   */
  musicUrl?: string;

  /**
   * 排序
   */
  orderId?: string;
  songId?: number;

  /**
   * 歌曲名称
   */
  songName?: string;

  /**
   * 时间戳
   */
  timeStamp?: string;
}
