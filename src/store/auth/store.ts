import { makeAutoObservable } from 'mobx';
import {
  ApiUser,
  LoginClinicPayload,
  LoginUserPayload,
  RegisterUserPayload,
} from './models.ts';
import instance from '../../api/instance.ts';
import { AxiosResponse } from 'axios';
import { ApiClinic } from '../clinics/models.ts';

class AuthStore {
  isAuthenticated: boolean = false;

  user: ApiUser | null = null;
  clinic: ApiClinic | null = null;

  loginError = false;

  constructor() {
    makeAutoObservable(this);

    const userFromStorage = localStorage.getItem('user');
    const clinicFromStorage = localStorage.getItem('clinic');
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if (userFromStorage) {
      this.isAuthenticated = isAuthenticated;
      this.user = JSON.parse(userFromStorage) as ApiUser;
    }

    if (clinicFromStorage) {
      this.isAuthenticated = isAuthenticated;
      this.clinic = JSON.parse(clinicFromStorage) as ApiClinic;
    }
  }

  async registerUser(registerData: RegisterUserPayload) {
    const data = await fetch('http://localhost:8080/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    });

    this.user = await data.json();
    this.isAuthenticated = true;

    localStorage.setItem('user', JSON.stringify(this.user));
    localStorage.setItem('isAuthenticated', JSON.stringify(true));
  }

  async loginUser(loginData: LoginUserPayload) {
    try {
      this.loginError = false;

      const response: AxiosResponse<ApiUser> = await instance.post(
        '/users/login',
        loginData
      );

      this.user = response.data;
      this.isAuthenticated = true;

      localStorage.setItem('user', JSON.stringify(this.user));
      localStorage.setItem('isAuthenticated', JSON.stringify(true));
    } catch (err) {
      this.user = null;
      this.isAuthenticated = false;
      this.loginError = true;
    }
  }

  async loginClinic(loginData: LoginClinicPayload) {
    try {
      this.loginError = false;

      const response: AxiosResponse<ApiClinic> = await instance.post(
        '/clinics/login',
        loginData
      );

      this.clinic = response.data;
      this.isAuthenticated = true;

      localStorage.setItem('clinic', JSON.stringify(this.clinic));
      localStorage.setItem('isAuthenticated', JSON.stringify(true));
    } catch (err) {
      this.clinic = null;
      this.isAuthenticated = false;
      this.loginError = true;
    }
  }

  logout() {
    this.user = null;
    this.clinic = null;
    this.isAuthenticated = false;

    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('clinic');
  }
}

export default new AuthStore();
