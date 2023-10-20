import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button } from '@mui/material'

import { useCrud } from 'src/hooks/useCrud'
import { TableMui } from 'src/components/organisms/TableMui'
import { Link } from 'react-router-dom'

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
    // {
    //   id: 'activated',
    //   numeric: false,
    //   disablePadding: false,
    //   label: 'Available',
    // },
    {
      id: 'url',
      numeric: false,
      disablePadding: false,
      label: 'Url',
    },
    {
      id: 'actions',
      numeric: false,
      disablePadding: true,
      label: 'Actions',
    },
    // category_id, created_at, updated_at
  ]

  const bodyCells = [
    {
      name: 'id',
    },
    {
      name: 'title',
    },
    {
      name: 'price',
    },
    {
      name: 'description',
    },
    // {
    //   name: 'activated',
    // },
    {
      name: 'url',
    },
  ]

  return (
    <Box>
      <Button component={Link} to={'/admin/food/create'}>
        Create New Record
      </Button>
      <TableMui
        list={foods}
        headCells={headCells}
        bodyCells={bodyCells}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </Box>
  )
}

export default AdminModelList
