import { QueryClient } from 'react-query'

import { getFood, getFoods } from 'src/services/apis'

export const REACT_QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      staleTime: 10 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
    },
  },
})

export const API_KEY_MAP = {
  foods: {
    listApi: getFoods,
    showApi: getFood,
  },
}
