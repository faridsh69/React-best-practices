import { QueryClient } from 'react-query'
import { errorHandler } from 'src/helpers/errorHandler'
import { TypeApiKeyMap } from 'src/interfaces'

import { deleteFood, getFoods, updateFood } from 'src/services/apis'

export const REACT_QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      staleTime: 10 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
      onError: errorHandler,
    },
    mutations: {
      onError: errorHandler,
    },
  },
})

export const API_KEY_MAP: TypeApiKeyMap = {
  food: {
    listApi: getFoods,
    deleteApi: deleteFood,
    updateApi: updateFood,
  },
}
