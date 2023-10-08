import { QueryClient } from 'react-query'

import { getOrder, getOrders } from 'src/services/apis'

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

export const CRUD_APIS = {
  blogs: {
    listApi: getOrders,
    showApi: getOrder,
    // createApi: createProject,
    // updateApi: updateProject,
    // deleteApi: deleteProject
  },
}
