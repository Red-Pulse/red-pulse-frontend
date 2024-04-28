import { ApiBloodType } from '../bloodTypes/models.ts';
import { ApiUser } from '../auth/models.ts';

export interface ApiClinic {
  id: number;
  inn: number;
  name: string;
  latitude: number;
  longitude: number;
  address: string;
  needBloods: Array<ApiBloodType>;
  users: ApiUser[];
}
