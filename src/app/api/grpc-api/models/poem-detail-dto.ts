/* tslint:disable */

/**
 * PoemDetailDto
 */
export interface PoemDetailDto {

  /**
   * 诗歌书籍名
   */
  bookName?: string;

  /**
   * 章节名
   */
  chapterName?: string;
  createDate?: string;

  /**
   * 章节索引
   */
  index?: number;

  /**
   * 章节索引名称
   */
  orderName?: string;
  poemDetailId?: number;
  poemId?: number;
  showUrl?: string;

  /**
   * 诗歌谱URL
   */
  showimgUrl?: string;
}
