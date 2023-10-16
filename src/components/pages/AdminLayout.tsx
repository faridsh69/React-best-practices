import { Link } from 'react-router-dom'

import { Outlet } from 'react-router-dom'
import { PageLayout } from '../templates/PageLayout'

const AdminLayout = () => {
  return (
    <PageLayout>
      AdminLayout
      <br />
      <Link to='/admin/foods'>Foods </Link>
      <Outlet />
    </PageLayout>
  )
}

export default AdminLayout
