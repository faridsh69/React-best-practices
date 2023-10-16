import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

type TypeApiGetParameters = { endpoint: string; params?: object; options?: object }
export type ApiGetType = (parameters: TypeApiGetParameters) => Promise<AxiosResponse>
export type ApiRemoveType = (parameters: TypeApiGetParameters) => Promise<AxiosResponse>

type TypeApiPostParameters = { endpoint: string; data: object; options?: object }
export type ApiPostType = (parameters: TypeApiPostParameters) => Promise<AxiosResponse>
export type ApiPutType = (parameters: TypeApiPostParameters) => Promise<AxiosResponse>

export type CreateApiClientType = (
  baseURL: string,
  auth?: boolean,
) => {
  get: ApiGetType
  post: ApiPostType
  put: ApiPutType
  remove: ApiRemoveType
}

export type TypeErrorHandlerInterceptor = (error: AxiosError) => Promise<AxiosError>

export type TypeRequestInterceptor = (
  config: InternalAxiosRequestConfig,
) => InternalAxiosRequestConfig
export type TypeResponseInterceptor = (response: AxiosResponse) => AxiosResponse
