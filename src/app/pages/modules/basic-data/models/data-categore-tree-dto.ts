import { DataDictionaryTreeDto } from "@app/api/ddd-api/models";

export interface DataCategoreTreeDto extends DataDictionaryTreeDto {
  isSelect: boolean;
}
