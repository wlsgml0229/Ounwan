import axios from "axios";
import { token } from "./token";

/**
 * axios 응답 인터셉터 설정
 */
const ounwanAxios = {
  init() {
    this.setHeader();
    console.log("start init");
    axios.interceptors.response.use(
      (res) => {
        console.log("res", res);
        return res;
      },
      async (error) => {
        return Promise.reject(error);
      }
    );
  },
  /**
   * 토큰관련 셋팅
   */
  setHeader() {
    axios.defaults.headers.common["Authorization"] = token.access()
      ? token.access()
      : "";
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=UTF-8";
  },
  removeHeader() {
    delete axios.defaults.headers.common["Authorization"];
  },
  /**
   * Axios 관련 설정 / api 메소드
   */
  /**
   * @param resource
   * @param params
   * @returns {Promise<AxiosResponse<any>>}
   */
  get(resource, params) {
    return axios.get(`${resource}`, { params });
  },
  /**
   * @param resource
   * @param params
   * @returns {Promise<AxiosResponse<any>>}
   */
  getBlobFile(resource, params) {
    return axios.get(`${resource}`, { responseType: "blob", params });
  },
  /**
   * @param resource
   * @param args
   * @returns {Promise<AxiosResponse<any>>}
   */
  post(resource, args) {
    console.log(resource, args);
    return axios.post(`${resource}`, args);
  },
  /**
   * @param resource
   * @param params
   * @returns {Promise<AxiosResponse<any>>}
   */
  update(resource, params) {
    return axios.put(`${resource}`, params);
  },
  /**
   * @param resource
   * @param params
   * @returns {Promise<AxiosResponse<any>>}
   */
  patch(resource, params) {
    return axios.patch(`${resource}`, params);
  },
  /**
   * @param resource
   * @param params
   * @returns {Promise<AxiosResponse<any>>}
   */
  delete(resource, params) {
    return axios.delete(resource, { data: params });
  },
};

export default ounwanAxios;
