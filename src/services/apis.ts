// @ts-nocheck
import { createApiClient } from 'src/helpers/service'

const { VITE_PARCEL_LAB_API } = import.meta.env

if (!VITE_PARCEL_LAB_API) {
  throw new Error('Please copy .env.example to .env.local')
}

const VITE_API_CLIENT = createApiClient(VITE_PARCEL_LAB_API)

export const getFoods = params =>
  VITE_API_CLIENT.get({
    endpoint: 'foods',
    params,
  })

export const getFood = foodId =>
  VITE_API_CLIENT.get({
    endpoint: `orders/${foodId}`,
  })
