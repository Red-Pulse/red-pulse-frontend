import { makeAutoObservable } from 'mobx';

class ClinicsStore {
  counter = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.counter++;
  }
}

export default new ClinicsStore();
