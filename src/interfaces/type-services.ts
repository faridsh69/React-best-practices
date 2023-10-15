import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

type ApiGetParametersType = { endpoint: string; params?: object; options?: object }
export type ApiGetType = (parameters: ApiGetParametersType) => Promise<AxiosResponse>
export type ApiRemoveType = (parameters: ApiGetParametersType) => Promise<AxiosResponse>

type ApiPostParametersType = { endpoint: string; data: object; options?: object }
export type ApiPostType = (parameters: ApiPostParametersType) => Promise<AxiosResponse>
export type ApiPutType = (parameters: ApiPostParametersType) => Promise<AxiosResponse>

export type CreateApiClientType = (
  baseURL: string,
  auth?: boolean,
) => {
  get: ApiGetType
  post: ApiPostType
  put: ApiPutType
  remove: ApiRemoveType
}

export type TokenInterceptorType = (
  config: InternalAxiosRequestConfig,
) => InternalAxiosRequestConfig

export type ErrorHandlerInterceptorType = (error: AxiosError) => Promise<AxiosError>
