import axios from 'axios'

export function createApiClient(baseURL, auth) {
  const axiosInstance = axios.create({ baseURL })
  axiosInstance.interceptors.response.use(null, errorHandlerInterceptor)
  if (auth) {
    axiosInstance.interceptors.request.use(tokenInterceptor)
  }

  const get = ({ endpoint, params, options }) =>
    axiosInstance.get(endpoint, {
      params,
      ...options,
    })

  const post = ({ endpoint, data, options }) => axiosInstance.post(endpoint, data, options)

  const put = ({ endpoint, data, options }) => axiosInstance.put(endpoint, data, options)

  const remove = ({ endpoint, params, options }) =>
    axiosInstance.delete(endpoint, {
      params,
      ...options,
    })

  return { get, post, put, remove }
}

const tokenInterceptor = config => {
  const user = localStorage.getItem('user')
  const { access_token: accessToken } = JSON.parse(user || '{}')
  config.headers.Authorization = `Bearer ${accessToken}`

  return config
}

const errorHandlerInterceptor = async error => {
  if (error?.response?.data) {
    // if error is server error return server response
    return Promise.reject(error.response.data)
  }

  // Return js error
  return Promise.reject(error.message)
}
