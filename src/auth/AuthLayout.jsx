import { Outlet } from 'react-router-dom'
import Card from '../ui/Card'

export const AuthLayout = () => {
  return (
    <div className='container'>
      <Card>
        <Outlet/>
      </Card>
    </div>
  )
}
