import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar({children}) {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const [myData, setMyData] = useState()
  useEffect(() => {
         (async () => {
             try {
                 const result = await axios.get(
                     "http://localhost:3000/api/auth/getUser", {
                        headers:{
                            authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                     }).then(response=> {
                        setMyData
                        (response.data)
                    }).catch(err=>console.log(err)
                     )
                 
               
               } catch (error) {
                 console.error(error);
               }
             })()
           },[])
  return (
    <div>
      {!token &&  <Link to={'/LoginPage'}><button>login</button></Link>}
      {token && <button onClick={()=>{localStorage.removeItem('token');navigate('/')}}>Log out</button>}
      <button onClick={()=>alert(JSON.stringify(myData))}>Who am i</button>
        <Link to={'/'}><button>HomePage</button></Link>
        <Link to={'/AddLauncher'}><button>Add</button></Link>
        <Link to={'/RegisterPage'}><button>register</button></Link>
        <Link to={'/UserList'}><button>User List</button></Link>
      <main>{children}</main>
    </div>
  )
}

export default Navbar
