import React, { useState } from 'react'

function RegisterPage() {
    const [name, setName]= useState('');
        const [userType, setUserType] = useState('');
        const [password, setPassword] =useState('');
        const [email, setEmail]= useState('');
        const [response, setResponseMessage] = useState('')
  return (
    <div>
      <form className='new-agent' action="" >
            <label htmlFor="name">Name:
        <input required id="name" type="text" onChange={(e)=>setName(e.target.value)}/>
        </label>
        <label htmlFor="password">Password
        <input required id="password" type="text" onChange={(e)=>setPassword(e.target.value)}/>
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
    </div>
  )
}

export default RegisterPage
