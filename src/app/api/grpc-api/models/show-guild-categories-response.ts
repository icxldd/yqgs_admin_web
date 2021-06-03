/* tslint:disable */
import { GuildCategoryDto } from './guild-category-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowGuildCategoriesResponse
 */
export interface ShowGuildCategoriesResponse {

  /**
   * 一组教会分类信息
   */
  categories?: Array<GuildCategoryDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
