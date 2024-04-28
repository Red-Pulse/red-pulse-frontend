import { makeAutoObservable } from 'mobx';
import { ApiClinic } from './models.ts';
import instance from '../../api/instance.ts';

class ClinicsStore {
  clinics: ApiClinic[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchClinics() {
    const response = await instance.get('clinics');

    this.clinics = response.data;
  }
}

export default new ClinicsStore();
