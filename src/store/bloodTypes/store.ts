import { makeAutoObservable } from 'mobx';
import { ApiBloodType } from './models.ts';
import instance from '../../api/instance.ts';

class BloodTypesStore {
  bloodTypes: ApiBloodType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchBloodTypes() {
    const response = await instance.get('blood-types');

    this.bloodTypes = response.data;
  }
}

export default new BloodTypesStore();
