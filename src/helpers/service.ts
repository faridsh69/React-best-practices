import axios, { AxiosInstance } from 'axios'
import {
  ErrorHandlerInterceptorType,
  TokenInterceptorType,
  CreateApiClientType,
  ApiGetType,
  ApiPostType,
  ApiPutType,
  ApiRemoveType,
} from 'src/interfaces'

export const createApiClient: CreateApiClientType = (baseURL, auth = false) => {
  const axiosInstance: AxiosInstance = axios.create({ baseURL })
  axiosInstance.interceptors.response.use(null, errorHandlerInterceptor)
  if (auth) {
    axiosInstance.interceptors.request.use(tokenInterceptor)
  }

  const get: ApiGetType = ({ endpoint, params, options }) =>
    axiosInstance.get(endpoint, {
      params,
      ...options,
    })

  const post: ApiPostType = ({ endpoint, data, options }) =>
    axiosInstance.post(endpoint, data, options)

  const put: ApiPutType = ({ endpoint, data, options }) =>
    axiosInstance.put(endpoint, data, options)

  const remove: ApiRemoveType = ({ endpoint, params, options }) =>
    axiosInstance.delete(endpoint, {
      params,
      ...options,
    })

  return { get, post, put, remove }
}

const tokenInterceptor: TokenInterceptorType = config => {
  const user = localStorage.getItem('user')
  const { access_token: accessToken } = JSON.parse(user || '{}')
  config.headers!.Authorization = `Bearer ${accessToken}`

  return config
}

const errorHandlerInterceptor: ErrorHandlerInterceptorType = error => {
  if (error?.response?.data) {
    // if error is server error return server response
    return Promise.reject(error.response.data)
  }

  // Return js error
  return Promise.reject(error.message)
}
