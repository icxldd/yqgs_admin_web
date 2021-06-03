/* tslint:disable */
import { ListResultDtoOfOrderDto } from './list-result-dto-of-order-dto';
export interface PagedResultDtoOfOrderDto extends ListResultDtoOfOrderDto{

  /**
   * Total count of Items.
   */
  totalCount: number;
}
