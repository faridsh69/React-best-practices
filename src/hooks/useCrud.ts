import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { API_KEY_MAP } from 'src/configs/service'
import { useDebounceMethodWithPromise } from 'src/hooks/useDebounceMethod'

export const useCrud = QUERY_LIST_KEY => {
  const queryClient = useQueryClient()
  const { t } = useTranslation()

  const { listApi, createApi, updateApi, deleteApi } = API_KEY_MAP[QUERY_LIST_KEY]

  const { data: list, isFetching } = useQuery({
    queryKey: [QUERY_LIST_KEY],
    queryFn: async () => {
      if (!listApi) return null
      const { data } = await listApi()

      return data.data
    },
    placeholderData: [],
    onError: error => toast.error(error),
  })

  const createMutation = useMutation(createApi, {
    onSuccess: response => {
      queryClient.setQueryData(QUERY_LIST_KEY, list => {
        if (list) return [...list, response.data.data]

        return [response.data.data]
      })
      toast.success(t(QUERY_LIST_KEY + ' created successfully'))
    },
    onError: error => {
      toast.error(error)
    },
  })

  useQuery({ queryKey: ['oldUpdatedItem'], queryFn: () => null })

  const debouncedUpdateApi = useDebounceMethodWithPromise(updateApi)

  const debounceUpdateMutation = useMutation(debouncedUpdateApi, {
    onMutate: updatingItem => {
      queryClient.setQueryData(QUERY_LIST_KEY, list =>
        list.map(item =>
          item.id !== updatingItem.id
            ? item
            : {
                ...item,
                ...updatingItem,
              },
        ),
      )

      // ['todos', newTodo.id]
      const oldUpdatedItem = queryClient.getQueryData('oldUpdatedItem')
      if (oldUpdatedItem) return oldUpdatedItem

      const oldItem = list.find(item => item.id === updatingItem.id)
      queryClient.setQueryData('oldUpdatedItem', () => oldItem)

      return oldItem
    },
    onSuccess: response => {
      const updatedData = response?.data?.data
      queryClient.setQueryData(QUERY_LIST_KEY, list =>
        list.map(item => (item.id === updatedData.id ? updatedData : item)),
      )
      toast.success(t(QUERY_LIST_KEY + ' updated successfully'))
      // ['todos', newTodo.id]
      queryClient.setQueryData('oldUpdatedItem', () => null)
    },
    onError: (error, updatingData, oldItem) => {
      queryClient.setQueryData(QUERY_LIST_KEY, list =>
        list.map(item => (item.id === oldItem.id ? oldItem : item)),
      )
      // ['todos', newTodo.id]
      queryClient.setQueryData('oldUpdatedItem', () => null)

      toast.error(error)
    },
  })

  const deleteMutation = useMutation(deleteApi, {
    onSuccess: (_, id) => {
      queryClient.setQueryData(QUERY_LIST_KEY, list => {
        if (list) return list.filter(item => item.id !== id)

        return []
      })
    },
    onError: error => {
      toast.error(error)
    },
  })

  return {
    list,
    isFetching,
    createMutation,
    debounceUpdateMutation,
    deleteMutation,
  }
}
