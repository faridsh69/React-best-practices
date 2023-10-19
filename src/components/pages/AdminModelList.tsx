import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCrud } from 'src/hooks/useCrud'
import { TableMui } from 'src/components/organisms/TableMui'

const AdminModelList = () => {
  const navigate = useNavigate()
  const { list: foods, deleteMutation } = useCrud('food')

  const handleDelete = useCallback(
    id => {
      deleteMutation.mutate(id)
    },
    [deleteMutation],
  )

  const handleEdit = id => navigate(`/admin/food/${id}/edit`)

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

  return (
    <div>
      {/* <Button component={Link} to={'/admin/food/create'}> */}
      <TableMui
        list={foods}
        headCells={headCells}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  )
}

export default AdminModelList
