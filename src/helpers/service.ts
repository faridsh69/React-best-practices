import axios, { AxiosInstance } from 'axios'

import { getToken } from 'src/helpers/auth'
import {
  CreateApiClientType,
  TypeAxiosMethod,
  TypeErrorHandlerInterceptor,
  TypeRequestInterceptor,
  TypeResponseInterceptor,
} from 'src/interfaces'

export const createApiClient: CreateApiClientType = (baseURL, auth = false) => {
  const axiosInstance: AxiosInstance = axios.create({ baseURL })
  axiosInstance.interceptors.request.use(RequestInterceptor)
  if (auth) {
    axiosInstance.interceptors.request.use(authInterceptor)
  }
  axiosInstance.interceptors.response.use(responseInterceptor, errorHandlerInterceptor)

  const get: TypeAxiosMethod = ({ endpoint, data, options }) =>
    axiosInstance.get(endpoint, {
      params: data,
      ...options,
    })

  const post: TypeAxiosMethod = ({ endpoint, data, options }) =>
    axiosInstance.post(endpoint, data, options)

  const put: TypeAxiosMethod = ({ endpoint, data, options }) =>
    axiosInstance.put(endpoint, data, options)

  const remove: TypeAxiosMethod = ({ endpoint, data, options }) =>
    axiosInstance.delete(endpoint, {
      params: data,
      ...options,
    })

  return { get, post, put, remove }
}

const RequestInterceptor: TypeRequestInterceptor = config => {
  config.headers['Content-Type'] = 'application/json'

  return config
}

const authInterceptor: TypeRequestInterceptor = config => {
  const accessToken = getToken()
  config.headers!.Authorization = `Bearer ${accessToken}`

  return config
}

const responseInterceptor: TypeResponseInterceptor = response => response?.data || response

const errorHandlerInterceptor: TypeErrorHandlerInterceptor = error => {
  const message =
    error.response?.data?.message || error.response?.data || error.data || error.message || error

  return Promise.reject(message)
}
