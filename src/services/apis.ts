import { createApiClient } from 'src/helpers/service'

const { VITE_PARCEL_LAB_API } = import.meta.env
console.log('1 VITE_PARCEL_LAB_API', VITE_PARCEL_LAB_API)
const VITE_API_CLIENT = createApiClient(VITE_PARCEL_LAB_API)

export const getOrders = () =>
  VITE_API_CLIENT.get({
    endpoint: 'orders',
  })

export const getOrder = params =>
  VITE_API_CLIENT.get({
    endpoint: `orders/${params.orderNumber}`,
    params: {
      zip: params.zipCode,
    },
  })
