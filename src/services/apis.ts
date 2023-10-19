import { createApiClient } from 'src/helpers/service'
import { TypeApiMethod } from 'src/interfaces'

const { VITE_API_BASE_URL } = import.meta.env

if (!VITE_API_BASE_URL) {
  throw new Error('Please copy .env.example to .env.local')
}

const VITE_AUTH_API_CLIENT = createApiClient(VITE_API_BASE_URL)
const VITE_FOOD_API_CLIENT = createApiClient(`${VITE_API_BASE_URL}/api/food`, true)

export const getFoods: TypeApiMethod = data =>
  VITE_FOOD_API_CLIENT.get({
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

export const postLogin: TypeApiMethod = data =>
  VITE_AUTH_API_CLIENT.post({
    endpoint: 'oauth/token',
    data,
  })
