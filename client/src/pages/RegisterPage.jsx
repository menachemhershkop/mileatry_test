import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';

function RegisterPage() {
    const [name, setName]= useState('');
        const [userType, setUserType] = useState('');
        const [password, setPassword] =useState('');
        const [email, setEmail]= useState('');
        const [response, setResponseMessage] = useState('')
        const navigate = useNavigate();
     const handelSubmit = async (e)=>{
            e.preventDefault();
            const id = Math.floor(Math.random()*1000)
            axios.post('http://localhost:3000/api/auth/register/create', {id:id, username:name, password:password, email:email, user_type:userType},{
                headers:{
                            authorization: `Bearer ${localStorage.getItem('token')}`
                        }
            })
            .then((response)=>{
                console.log(response);
                
                setResponseMessage(<div className='seccess'>New User added...</div>)
                setTimeout(()=>{
                    navigate('/')
                },5000)
            }).catch((err)=>{
                console.log(err)
                setResponseMessage(<div className='worng'>Username already exist</div>)
            }
            )
    }

  return (
    <div>
      <form className='new-agent' action="" onSubmit={handelSubmit} >
            <label htmlFor="name">Name:
        <input required id="name" type="text" onChange={(e)=>setName(e.target.value)}/>
        </label>
        <label htmlFor="password">Password
        <input required id="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <label htmlFor="email"> Email:
        <input required id='email' type="email" onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label htmlFor="user_type"> User Type:
        <select required name="user_type" id="user_type" onChange={(e)=>setUserType(e.target.value)}>
            <option disabled selected>Select an option</option>
            <option value="Admin">Admin</option>
            <option value="AirForce">Air Force</option>
            <option value="IntelligenceCorps">Intelligence Corps</option>
        </select>
        </label>
        <button>Submit</button>
      </form>
      {response}
    </div>
  )
}

export default RegisterPage
