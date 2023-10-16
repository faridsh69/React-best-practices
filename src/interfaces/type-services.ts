import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export type TypeErrorHandlerInterceptor = (error: AxiosError) => Promise<AxiosError>
export type TypeResponseInterceptor = (response: AxiosResponse) => AxiosResponse
export type TypeRequestInterceptor = (
  config: InternalAxiosRequestConfig,
) => InternalAxiosRequestConfig

export type TypeAxiosMethod = (parameters: {
  endpoint: string
  data?: object
  options?: object
}) => Promise<AxiosResponse>

export type CreateApiClientType = (
  baseURL: string,
  auth?: boolean,
) => {
  get: TypeAxiosMethod
  post: TypeAxiosMethod
  put: TypeAxiosMethod
  remove: TypeAxiosMethod
}

export type TypeApiMethod = (params?: object) => Promise<AxiosResponse>

export type TypeApiKeyMap = {
  [key: string]: {
    listApi?: TypeApiMethod
    createApi?: TypeApiMethod
    updateApi?: TypeApiMethod
    deleteApi?: TypeApiMethod
  }
}
