import { AxiosRequestConfig } from "axios";
import BaseClient from "../base/BaseClient";

class JPClient extends BaseClient {
  constructor() {
    super({
      baseURL: import.meta.env.APP_API
    });
    this.instance.defaults.headers.common["Content-Type"] = "application/json";
    this.instance.interceptors.request.use(this.injectAccessToken);
  }

  private injectAccessToken = (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("token") as string;

    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`
      };
    }

    return config;
  };
}

export default new JPClient();
