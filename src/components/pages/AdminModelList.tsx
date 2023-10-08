import { Link } from 'react-router-dom'

const AdminModelList = () => {
  return (
    <div>
      list
      <br />
      <Link to='/admin/blogs/1'>Show Blog 1 </Link>
      <Link to='/admin/blogs/1/edit'>Edit Blog 1 </Link>
    </div>
  )
}

export default AdminModelList
