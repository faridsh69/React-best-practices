import { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button } from '@mui/material'

import { useCrud } from 'src/hooks/useCrud'
import { TableMui } from 'src/components/organisms/TableMui'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const AdminList = () => {
  const { t } = useTranslation()

  const navigate = useNavigate()
  const { model } = useParams()

  const { list: foods, deleteMutation } = useCrud(model)

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
      label: 'Title',
    },
    {
      id: 'price',
      numeric: true,
      label: 'Price',
    },
    {
      id: 'description',
      numeric: false,
      label: 'Food Content',
    },
    // {
    //   id: 'activated',
    //   numeric: false,
    //   label: 'Available',
    // },
    {
      id: 'url',
      numeric: false,
      label: 'Url',
    },
    {
      id: 'actions',
      numeric: false,
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
        {t('Create New Record')}
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

export default AdminList
