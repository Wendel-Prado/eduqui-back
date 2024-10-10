// ../services/api.service.ts
import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BASE_URL_API, TOKEN_API } from '../constants';

@Injectable()
export class ApiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: BASE_URL_API,
      headers: {
        'Content-Type': 'application/json',
        Authorization: TOKEN_API,
      },
    });
  }
  async request<A>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<any> {
    try {
      const response = await this.axiosInstance.request<A>({
        method,
        url,
        data,
        ...config,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}
