
import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import LauncherDetailsPage from './pages/LauncherDetailsPage'
import AddLauncherPage from './pages/AddLauncherPage'
import Layout from './compunents/Layout'

function App() {
  

  return (
    <>
    {/* <Layout> */}
     <Routes>
      <Route index element={<HomePage/>}/>
      <Route path ="/Launcher/:id" element={<LauncherDetailsPage/>}/>
      <Route path='/AddLauncher' element={<AddLauncherPage/>}/>
     </Routes>
     {/* </Layout> */}
    </>
  )
}

export default App
