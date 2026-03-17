import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponseMessage] = useState('');
    const navigate = useNavigate();

    const handelSubmit = async (e)=>{
            e.preventDefault();
            axios.post('http://localhost:3000/api/auth/login', {username, password})
            .then((response)=>{
              console.log(response.data.token)
              
                // const rank = response.data.agent[0].user_type;
                const token  = response.data.token;
                localStorage.setItem('token', token);
                // localStorage.setItem('Rank', rank);
                setResponseMessage(<div className='seccess'>You login. You movment to home page</div>)
                setTimeout(()=>{
                    navigate('/')
                },5000)
            }).catch((err)=>{
                console.log(err)
                setResponseMessage(<div className='worng'>Username or password not currect</div>)
            }
            )
    }

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="username">Username:
            <input type="text" id='username' onChange={(e)=>setUsername(e.target.value)}/>
        </label>
        <label htmlFor="pssword">Password:
            <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <button>Login</button>
      </form>
      {response}
    </div>
  )
}

export default LoginPage
