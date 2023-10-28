import { createApiClient } from 'src/helpers/service'
import { TypeApiMethod } from 'src/interfaces'

const { VITE_API_BASE_URL } = import.meta.env

if (!VITE_API_BASE_URL) {
  throw new Error('Please copy .env.example to .env.local')
}

const VITE_AUTH_API_CLIENT = createApiClient(VITE_API_BASE_URL)

export const postLogin: TypeApiMethod = data =>
  VITE_AUTH_API_CLIENT.post({
    endpoint: 'oauth/token',
    data,
  })

const VITE_FOOD_API_CLIENT = createApiClient(`${VITE_API_BASE_URL}/api/food`, true)
const VITE_USER_API_CLIENT = createApiClient(`${VITE_API_BASE_URL}/api/user`, true)
const VITE_CATEGORY_API_CLIENT = createApiClient(`${VITE_API_BASE_URL}/api/category`, true)

// FOODS
export const getFoods: TypeApiMethod = data =>
  VITE_FOOD_API_CLIENT.get({
    endpoint: '',
    data,
  })

export const createFood: TypeApiMethod = data =>
  VITE_FOOD_API_CLIENT.post({
    endpoint: '',
    data,
  })

export const updateFood: TypeApiMethod = data =>
  VITE_FOOD_API_CLIENT.put({
    endpoint: `id/${data.id}`,
    data,
  })

export const deleteFood: TypeApiMethod = data =>
  VITE_FOOD_API_CLIENT.remove({
    endpoint: `id/${data}`,
  })

// USERS
export const getUsers: TypeApiMethod = data =>
  VITE_USER_API_CLIENT.get({
    endpoint: '',
    data,
  })

export const updateUser: TypeApiMethod = data =>
  VITE_USER_API_CLIENT.put({
    endpoint: `id/${data.id}`,
    data,
  })

// FOODS
export const getCategories: TypeApiMethod = data =>
  VITE_CATEGORY_API_CLIENT.get({
    endpoint: '',
    data,
  })

export const createCategory: TypeApiMethod = data =>
  VITE_CATEGORY_API_CLIENT.post({
    endpoint: '',
    data,
  })

export const updateCategory: TypeApiMethod = data =>
  VITE_CATEGORY_API_CLIENT.put({
    endpoint: `id/${data.id}`,
    data,
  })

export const deleteCategory: TypeApiMethod = data =>
  VITE_CATEGORY_API_CLIENT.remove({
    endpoint: `id/${data}`,
  })
