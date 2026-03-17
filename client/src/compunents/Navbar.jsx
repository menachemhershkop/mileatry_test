import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar({children}) {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const [myData, setMyData] = useState()
  const rank = localStorage.getItem('Rank')
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
           const whoami =function (){
              if (myData) {
                alert(JSON.stringify({username:myData.username, type: myData.user_type}))
              }
              else{
                navigate('/LoginPage')
              }
           }
  return (
    <div>
      {!token &&  <Link to={'/LoginPage'}><button>login</button></Link>}
      {token && <button onClick={()=>{localStorage.clear();navigate('/')}}>Log out</button>}
      <button onClick={whoami}>Who am i</button>
        <Link to={'/'}><button>HomePage</button></Link>
        {(rank == 'admin' ||rank == 'Intelligence Corps') &&<Link to={'/AddLauncher'}><button>Add Launcher</button></Link>}
        {rank == 'admin' && <><Link to={'/RegisterPage'}><button>register</button></Link>
<Link to={'/UserList'}><button>User List</button></Link></>}
      <main>{children}</main>
    </div>
  )
}

export default Navbar
