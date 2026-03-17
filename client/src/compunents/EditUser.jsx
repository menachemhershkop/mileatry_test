import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';

function EditUser(props) {
    const id =props.props.id
    const [name, setName]= useState(props.props.username);
    const [userType, setUserType] = useState(props.props.userType);
    const [password, setPassword] =useState(props.props.password);
    const [email, setEmail]= useState(props.props.email);
    const [response, setResponseMessage] = useState('')
    const navigate = useNavigate();
   
    const handelSubmit = async (e)=>{
        e.preventDefault();
        const updateLauncher = {username:name, userType:userType, password:password, email:email}
        axios.put(`http://localhost:3000/api/auth/register/update/${id}`, updateLauncher,{
            headers:{
                            authorization: `Bearer ${localStorage.getItem('token')}`
                        }
        })
            .then((response) => {
            
                setResponseMessage(<div className='seccess'>Update successfully!</div>);
                setTimeout(()=>{
                    nevgate('/')
                }, 1000)
            })
            .catch((err) => {
                setResponseMessage(<div className='worng'>Error creating update</div>);
            });
            
    }
  return (
    <div>
        
      <form className='new-agent' action="" onSubmit={handelSubmit} >
            <label htmlFor="name">Name:
        <input value={name} id="name" type="text" onChange={(e)=>setName(e.target.value)}/>
        </label>
        <label htmlFor="password">Password
        <input value={password} id="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <label htmlFor="email"> Email:
        <input value={email} id='email' type="email" onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label htmlFor="user_type"> User Type:
        <select value={userType} name="user_type" id="user_type" onChange={(e)=>setUserType(e.target.value)}>
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

export default EditUser
