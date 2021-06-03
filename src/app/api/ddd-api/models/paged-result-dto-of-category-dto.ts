/* tslint:disable */
import { ListResultDtoOfCategoryDto } from './list-result-dto-of-category-dto';
export interface PagedResultDtoOfCategoryDto extends ListResultDtoOfCategoryDto{

  /**
   * Total count of Items.
   */
  totalCount: number;
}
