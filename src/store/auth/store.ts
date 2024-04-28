import { makeAutoObservable } from 'mobx';
import {
  ApiUser,
  LoginClinicPayload,
  LoginUserPayload,
  RegisterClinicPayload,
  RegisterUserPayload,
} from './models.ts';
import instance from '../../api/instance.ts';
import { AxiosResponse } from 'axios';
import { ApiClinic } from '../clinics/models.ts';

class AuthStore {
  isAuthenticated: boolean = false;

  user: ApiUser | null = null;
  clinic: ApiClinic | null = null;

  isClinic = false;
  isUser = false;

  loginError = false;

  constructor() {
    makeAutoObservable(this);

    const userFromStorage = localStorage.getItem('user');
    const clinicFromStorage = localStorage.getItem('clinic');
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if (userFromStorage) {
      this.isAuthenticated = isAuthenticated;
      this.user = JSON.parse(userFromStorage) as ApiUser;
      this.isUser = true;
    }

    if (clinicFromStorage) {
      this.isAuthenticated = isAuthenticated;
      this.clinic = JSON.parse(clinicFromStorage) as ApiClinic;
      this.isClinic = true;
    }
  }

  async registerClinic(registerData: RegisterClinicPayload) {
    try {
      const response: AxiosResponse<ApiClinic> = await instance.post(
        '/clinics/register',
        registerData
      );

      this.clinic = response.data;
      this.isAuthenticated = true;
      this.isClinic = true;
      this.isUser = false;

      localStorage.setItem('clinic', JSON.stringify(this.clinic));
      localStorage.setItem('isAuthenticated', JSON.stringify(true));
    } catch {
      alert('Something went wrong!');
    }
  }

  async registerUser(registerData: RegisterUserPayload) {
    const response: AxiosResponse<ApiUser> = await instance.post(
      '/users/register',
      registerData
    );

    this.user = response.data;
    this.isAuthenticated = true;
    this.isUser = true;
    this.isClinic = false;

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
      this.isUser = true;
      this.isClinic = false;

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
      this.isClinic = true;
      this.isUser = false;

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
    this.isUser = false;
    this.isClinic = false;
    this.isAuthenticated = false;

    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('clinic');
  }
}

export default new AuthStore();
