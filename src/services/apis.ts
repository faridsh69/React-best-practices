import { createApiClient } from 'src/helpers/service'

const { VITE_TEST_API_BASE_URL, VITE_AUTH_API_BASE_URL } = import.meta.env

if (!VITE_AUTH_API_BASE_URL || !VITE_TEST_API_BASE_URL) {
  throw new Error('Please copy .env.example to .env.local')
}

const VITE_TEST_API = createApiClient(VITE_TEST_API_BASE_URL)
const VITE_AUTH_API = createApiClient(VITE_AUTH_API_BASE_URL)

export const getFoods = params =>
  VITE_TEST_API.get({
    endpoint: 'foods',
    params,
  })

export const getFood = foodId =>
  VITE_TEST_API.get({
    endpoint: `orders/${foodId}`,
  })

export const postLogin = data =>
  VITE_AUTH_API.post({
    endpoint: 'oauth/token',
    data,
  })
