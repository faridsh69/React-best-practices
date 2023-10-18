import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { API_KEY_MAP } from 'src/configs/service'
import { useDebounceMethodWithPromise } from 'src/hooks/useDebounceMethod'
import { TypeUseCrud } from 'src/interfaces'

export const useCrud: TypeUseCrud = MODEL_SLUG => {
  const queryClient = useQueryClient()
  const { t } = useTranslation()

  const { listApi, createApi, updateApi, deleteApi } = API_KEY_MAP[MODEL_SLUG]

  const { data: list, isFetching } = useQuery({
    queryKey: [MODEL_SLUG],
    queryFn: async () => {
      if (!listApi) return null

      const response = await listApi()

      return response.data
    },
    placeholderData: [],
  })

  const createMutation = useMutation(createApi, {
    onSuccess: response => {
      queryClient.setQueryData(MODEL_SLUG, list => {
        if (list) {
          return [...list, response]
        }

        return [response]
      })
      toast.success(t(MODEL_SLUG + ' created successfully'))
    },
  })

  useQuery({ queryKey: ['oldUpdatedItem'], queryFn: () => null })

  const debouncedUpdateApi = useDebounceMethodWithPromise(updateApi)

  const debounceUpdateMutation = useMutation(debouncedUpdateApi, {
    onMutate: updatingItem => {
      queryClient.setQueryData(MODEL_SLUG, list =>
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
      const updatedData = response
      queryClient.setQueryData(MODEL_SLUG, list =>
        list.map(item => (item.id === updatedData.id ? updatedData : item)),
      )
      toast.success(t(MODEL_SLUG + ' updated successfully'))
      // ['todos', newTodo.id]
      queryClient.setQueryData('oldUpdatedItem', () => null)
    },
    onError: (_, __, oldItem) => {
      queryClient.setQueryData(MODEL_SLUG, list =>
        list.map(item => (item.id === oldItem.id ? oldItem : item)),
      )
      // ['todos', newTodo.id]
      queryClient.setQueryData('oldUpdatedItem', () => null)
    },
  })

  const deleteMutation = useMutation(deleteApi, {
    onSuccess: (_, id) => {
      toast.success(t(MODEL_SLUG + ' deleted successfully'))
      queryClient.setQueryData(MODEL_SLUG, list => {
        if (list) return list.filter(item => item.id !== id)
        return []
      })
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
