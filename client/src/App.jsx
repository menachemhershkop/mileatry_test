import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import LauncherDetailsPage from './pages/LauncherDetailsPage'
import AddLauncherPage from './pages/AddLauncherPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserList from './pages/UserList'
import Navbar from './compunents/Navbar'

function App() {
  

  return (
    <>
    <Navbar>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path ="/Launcher/:id" element={<LauncherDetailsPage/>}/>
      <Route path='/AddLauncher' element={<AddLauncherPage/>}/>
      <Route path='/LoginPage' element={<LoginPage/>}/>
      <Route path='/RegisterPage' element={<RegisterPage/>}/>
      <Route path='/UserList' element={<UserList/>}/>
     </Routes>
     </Navbar>
    </>
  )
}

export default App
