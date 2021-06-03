/* tslint:disable */
import { InformationDto } from './information-dto';
import { UserDto } from './user-dto';

/**
 * InformationAbuseReportDto
 */
export interface InformationAbuseReportDto {
  category?: string;
  description?: string;
  information?: InformationDto;
  informationId?: string;
  owner?: UserDto;
  ownerId?: number;
  reportId?: string;
}
