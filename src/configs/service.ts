import { QueryClient } from 'react-query'

import {
  createProject,
  deleteProject,
  getProjects,
  getStatuses,
  getTypes,
  getUsers,
  getWorkplans,
  updateProject
} from './services/apis'

export const REACT_QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      staleTime: 10 * 60 * 1000,
      cacheTime: 10 * 60 * 1000
    }
  }
})

export const API_KEY_MAP = {
  projects: {
    listApi: getProjects,
    createApi: createProject,
    updateApi: updateProject,
    deleteApi: deleteProject
  },
  workplans: {
    listApi: getWorkplans
  },
  statuses: {
    listApi: getStatuses
  },
  types: {
    listApi: getTypes
  },
  users: {
    listApi: getUsers
  }
}
