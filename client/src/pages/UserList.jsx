import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import EditUser from '../compunents/EditUser';

function UserList() {
 const [users, setUsers] = useState([])
   const [response, setResponseMessage] = useState('')
   const [edit, setEdit]= useState(false)
     const navigate = useNavigate()
     useEffect(() => {
         (async () => {
             try {
                 const result = await axios.get(
                     "http://localhost:3000/api/auth/users", {
                        headers:{
                            authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                     }).then(response=> {
                        setUsers(response.data)
                    }).catch(err=>console.log(err)
                     )
                 
               
               } catch (error) {
                 console.error(error);
               }
             })()
           },[])
           async function deleted(user_id){
         try {
                const result = await axios.delete(
                    `http://localhost:3000/api/auth/register/delete/${user_id}`,{
                      headers:{
                            authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    })
                setResponseMessage(<div className='seccess'>Update successfully!</div>);
                alert('deleted')
                setTimeout(()=>{
                  navigate('/')
                }, 5000)
              } catch (error) {
                setResponseMessage(<div className='worng'>Error creating update</div>);
                console.error(error);
              }
            }
   return (
     <div>
       <p className='statment'>
 On this page, you can view all solider datelis.
 Click on the id number to get more details...</p>
       <table>
   <tr>
     <th>id</th>
     <th>name</th>
     <th>email</th>
     <th>user_Type</th>
   </tr>
   
     { users.map((user)=>{return(
      <>
        <tr key={user.id}>
        <td>{user.id}</td>
         <td>{user.username}</td>
         <td>{user.email}</td>
         <td>{user.user_type}</td>
         <button onClick={()=>setEdit(!edit)}>Edit User</button>
         <button onClick={()=>deleted(user.id)}>Delete User</button>
   </tr>
   {edit&& <EditUser props={user}/>}
   </>
       )})}
 
 </table>
       <button onClick={()=>navigate('/RegisterPage')}>Add User</button>
     </div>
   )
}

export default UserList
