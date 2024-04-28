import { makeAutoObservable } from 'mobx';

class BloodTypesStore {
  counter = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.counter++;
  }
}

export default new BloodTypesStore();
