import { Link } from 'react-router-dom'
import { useCrud } from 'src/hooks/useCrud'

const AdminModelList = () => {
  const { list: foods } = useCrud('foods')

  return (
    <div>
      {foods.map(food => {
        return (
          <div key={food.id}>
            {food.id} - {food.title}
          </div>
        )
      })}
      <br />
      <Link to='/admin/foods/1'>Show Blog 1 </Link>
      <Link to='/admin/foods/1/edit'>Edit Blog 1 </Link>
    </div>
  )
}

export default AdminModelList
