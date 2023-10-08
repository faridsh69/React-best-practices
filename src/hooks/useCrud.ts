import { useTranslation } from 'react-i18next'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import { CRUD_APIS } from 'src/configs/service'

export const useCrud = (QUERY_LIST_KEY = 'blogs', params = {}) => {
  const queryClient = useQueryClient()
  const { t } = useTranslation()
  const { listApi, createApi, updateApi, deleteApi } = CRUD_APIS[QUERY_LIST_KEY] || {}

  const { data: list, isLoading } = useQuery({
    queryKey: [QUERY_LIST_KEY],
    queryFn: async () => {
      if (!listApi) return
      const { data } = await listApi(params)

      return data.data
    },
    placeholderData: [],
    onError: error => {
      toast.error(error?.response?.data)
    },
  })

  const createMutation = useMutation(createApi, {
    onSuccess: response => {
      queryClient.setQueryData(QUERY_LIST_KEY, list => [...list, response.data.data])
      toast.success(t(QUERY_LIST_KEY + ' created successfully'))
    },
    onError: error => {
      toast.error(error?.response?.data)
    },
  })

  const updateMutation = useMutation(updateApi, {
    onMutate: updatingItem => {
      const oldItem = list.find(item => item.id === updatingItem.id)
      queryClient.setQueryData(QUERY_LIST_KEY, list =>
        list.map(item => (item.id === updatingItem.id ? updatingItem : item)),
      )
      return oldItem
    },
    onSuccess: response => {
      const updatedData = response.data.data
      queryClient.setQueryData(QUERY_LIST_KEY, list =>
        list.map(item => (item.id === updatedData.id ? updatedData : item)),
      )
      toast.success(t(QUERY_LIST_KEY + ' updated successfully'))
    },
    onError: (error, updatingData, oldItem) => {
      queryClient.setQueryData(QUERY_LIST_KEY, list =>
        list.map(item => (item.id === oldItem.id ? oldItem : item)),
      )
      toast.error(error?.response?.data)
    },
  })

  const deleteMutation = useMutation(deleteApi, {
    onSuccess: (_, id) => {
      queryClient.setQueryData(QUERY_LIST_KEY, list => list.filter(item => item.id !== id))
    },
    onError: error => {
      toast.error(error?.response?.data)
    },
  })

  return {
    list,
    createMutation,
    updateMutation,
    deleteMutation,
    isLoading,
  }
}
