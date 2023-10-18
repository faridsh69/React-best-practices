import { useCrud } from 'src/hooks/useCrud'
import { TableMui } from '../organisms/TableMui'

const AdminModelList = () => {
  const { list: foods, deleteMutation } = useCrud('food')
  const handleDelete = id => {
    deleteMutation.mutate(id)
  }

  const headCells = [
    {
      id: 'id',
      numeric: true,
      disablePadding: true,
      label: 'ID',
    },
    {
      id: 'url',
      numeric: false,
      disablePadding: false,
      label: 'Url',
    },
    {
      id: 'title',
      numeric: false,
      disablePadding: false,
      label: 'Title',
    },
    {
      id: 'price',
      numeric: true,
      disablePadding: false,
      label: 'Price',
    },
    {
      id: 'description',
      numeric: false,
      disablePadding: false,
      label: 'Food Content',
    },
    {
      id: 'activated',
      numeric: false,
      disablePadding: false,
      label: 'Available',
    },
    {
      id: 'actions',
      numeric: false,
      disablePadding: true,
      label: 'Actions',
    },
    // category_id, created_at, updated_at
  ]

  return <TableMui list={foods} headCells={headCells} handleDelete={handleDelete} />
}

export default AdminModelList
