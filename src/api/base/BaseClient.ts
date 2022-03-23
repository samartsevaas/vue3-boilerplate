import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class BaseClient {
  public instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.instance.interceptors.response.use(this._returnData);
  }

  private _returnData = <T = unknown>(res: AxiosResponse): AxiosResponse<T> => {
    return res.data;
  };

  get<T = unknown, R = T>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.get<T, R>(url, config);
  }

  post<T = unknown, R = T>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.post<T, R>(url, data, config);
  }

  put<T = unknown, R = T>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.put<T, R>(url, data, config);
  }

  delete<T = unknown, R = T>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.delete<T, R>(url, config);
  }
}

export default BaseClient;
