
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='appCont'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
