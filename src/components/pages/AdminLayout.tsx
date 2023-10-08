import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      AdminLayout
      <br />
      <Link to='/admin/blogs'>Blogs </Link>
      <Outlet />
    </div>
  )
}

export default AdminLayout
