import { toastErrorMessage } from 'assets/utils/helpers'
import { i18nextProjectManagement } from 'i18n/config'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { toastSuccess } from 'ui/Toaster'

import { API_KEY_MAP } from './configs'

export const useCrud = QUERY_LIST_KEY => {
  const queryClient = useQueryClient()
  const { listApi, createApi, updateApi, deleteApi } =
    API_KEY_MAP[QUERY_LIST_KEY]

  const { data: list, isLoading } = useQuery({
    queryKey: [QUERY_LIST_KEY],
    queryFn: async () => {
      const { data } = await listApi()

      return data.data
    },
    placeholderData: [],
    onError: error => toastErrorMessage(error?.response?.data, QUERY_LIST_KEY)
  })

  const createMutation = useMutation(createApi, {
    onSuccess: response => {
      queryClient.setQueryData(QUERY_LIST_KEY, list => [
        ...list,
        response.data.data
      ])
      toastSuccess({
        message: i18nextProjectManagement.t(
          QUERY_LIST_KEY + ' created successfully'
        )
      })
    },
    onError: error => {
      toastErrorMessage(error?.response?.data, QUERY_LIST_KEY + 'create')
    }
  })

  const updateMutation = useMutation(updateApi, {
    onMutate: updatingItem => {
      const oldItem = list.find(item => item.id === updatingItem.id)
      queryClient.setQueryData(QUERY_LIST_KEY, list =>
        list.map(item => (item.id === updatingItem.id ? updatingItem : item))
      )
      return oldItem
    },
    onSuccess: response => {
      const updatedData = response.data.data
      queryClient.setQueryData(QUERY_LIST_KEY, list =>
        list.map(item => (item.id === updatedData.id ? updatedData : item))
      )
      toastSuccess({
        message: i18nextProjectManagement.t(
          QUERY_LIST_KEY + ' updated successfully'
        )
      })
    },
    onError: (error, updatingData, oldItem) => {
      queryClient.setQueryData(QUERY_LIST_KEY, list =>
        list.map(item => (item.id === oldItem.id ? oldItem : item))
      )
      toastErrorMessage(error?.response?.data, QUERY_LIST_KEY + 'update')
    }
  })

  const deleteMutation = useMutation(deleteApi, {
    onSuccess: (_, id) => {
      queryClient.setQueryData(QUERY_LIST_KEY, list =>
        list.filter(item => item.id !== id)
      )
    },
    onError: error => {
      toastErrorMessage(error?.response?.data, QUERY_LIST_KEY + 'delete')
    }
  })

  return {
    list,
    createMutation,
    updateMutation,
    deleteMutation,
    isLoading
  }
}
