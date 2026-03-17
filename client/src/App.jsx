
import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import LauncherDetailsPage from './pages/LauncherDetailsPage'
import AddLauncherPage from './pages/AddLauncherPage'
import Layout from './compunents/Layout'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserList from './pages/UserList'

function App() {
  

  return (
    <>
    <Layout>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path ="/Launcher/:id" element={<LauncherDetailsPage/>}/>
      <Route path='/AddLauncher' element={<AddLauncherPage/>}/>
      <Route path='/LoginPage' element={<LoginPage/>}/>
      <Route path='/RegisterPage' element={<RegisterPage/>}/>
      <Route path='/UserList' element={<UserList/>}/>
     </Routes>
     </Layout>
    </>
  )
}

export default App
