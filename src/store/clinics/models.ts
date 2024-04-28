import { ApiBloodType } from '../bloodTypes/models.ts';

export interface ApiClinic {
  id: number;
  inn: number;
  name: string;
  latitude: number;
  longitude: number;
  address: string;
  need_bloods: Array<ApiBloodType>;
}
