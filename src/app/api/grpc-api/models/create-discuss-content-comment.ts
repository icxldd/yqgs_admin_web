/* tslint:disable */

/**
 * CreateDiscussContentComment
 */
export interface CreateDiscussContentComment {

  /**
   * 讨论内容编号
   */
  contentId?: string;

  /**
   * 描述
   */
  description?: string;

  /**
   * 上级评论编号
   */
  parentCommentId?: string;
}
