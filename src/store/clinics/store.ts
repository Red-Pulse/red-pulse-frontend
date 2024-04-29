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

  async joinToBeDonor(clinicId: number, userId: number) {
    await instance.post('clinics/join', {
      clinicId,
      userId,
    });
  }

  async disconnect(clinicId: number, userId: number) {
    await instance.post('clinics/disconnect', {
      clinicId,
      userId,
    });
  }
}

export default new ClinicsStore();
