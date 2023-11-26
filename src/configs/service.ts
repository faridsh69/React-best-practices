import { QueryClient } from 'react-query'

import {
  createCategory,
  createFood,
  createTag,
  deleteCategory,
  deleteFood,
  deleteTag,
  getCategories,
  getFoods,
  getMenuData,
  getTags,
  getUsers,
  updateCategory,
  updateFood,
  updateTag,
  updateUser,
} from 'src/services/apis'
import { errorHandler } from 'src/helpers/errorHandler'
import { TypeApiKeyMap } from 'src/interfaces'

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
    createApi: createFood,
    updateApi: updateFood,
    deleteApi: deleteFood,
  },
  user: {
    listApi: getUsers,
    updateApi: updateUser,
  },
  category: {
    listApi: getCategories,
    createApi: createCategory,
    updateApi: updateCategory,
    deleteApi: deleteCategory,
  },
  tag: {
    listApi: getTags,
    createApi: createTag,
    updateApi: updateTag,
    deleteApi: deleteTag,
  },
  menu: {
    listApi: getMenuData,
  },
}
