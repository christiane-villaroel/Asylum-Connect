import { Routes,Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Dashboard from './pages/dashboard/Dashboard'
import NavMenu from './components/NavMenu'
function App() {
 

  return (    
    <div className='App'>
      <NavMenu/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/' element={<Dashboard/>}/> */}
    </Routes>
    </div>
  )
}

export default App
