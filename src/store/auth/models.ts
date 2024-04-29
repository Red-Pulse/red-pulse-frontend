import { ApiBloodType } from '../bloodTypes/models.ts';
import { ApiClinic } from '../clinics/models.ts';

export interface ApiUser {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  photo: string;
  bloodType: ApiBloodType;
  clinics: ApiClinic[];
}

export interface RegisterUserPayload {
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  bloodTypeId: number;
}

export interface RegisterClinicPayload {
  inn: number;
  password: string;
  name: string;
  latitude: number;
  longitude: number;
  address: string;
  needBloods: number[];
}

export interface LoginUserPayload {
  phone: string;
  password: string;
}

export interface LoginClinicPayload {
  inn: number;
  password: string;
}
