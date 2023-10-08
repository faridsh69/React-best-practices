import { createApiClient } from 'src/helpers/service'

const { VITE_API_BASE_URL } = import.meta.env

const VITE_API_CLIENT = createApiClient(VITE_API_BASE_URL)

export const getList = () =>
  VITE_API_CLIENT.get({
    endpoint: 'list',
  })
