import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from '../compunents/Table';
import { Link, useNavigate } from 'react-router';

function HomePage() {
    const [launcher, setLauncer] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        (async () => {
            try {
                const result = await axios.get(
                    "http://localhost:3000/api/launchers")
                
                setLauncer(result.data)
              } catch (error) {
                console.error(error);
              }
            })()
          },[])
          console.log(launcher);
          localStorage.setItem('amount', launcher.length)
    
  return (
    <div>
  
      {launcher.map((launch)=>{return(
        <div>
        <Link to={`/launcher/${launch.id}`}>{launch.id}</Link>
        <Table name={launch.name} rocketType={launch.rocketType} latitude={launch.latitude} longitude={launch.longitude} city={launch.city}/>
      </div>)})}
      <button onClick={()=>navigate('/AddLauncher')}>Add launch</button>
    </div>
  )
}

export default HomePage
