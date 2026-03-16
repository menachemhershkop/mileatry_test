import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from '../compunents/Table';

function HomePage() {
    const [launcher, setLauncer] = useState([])
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
    
  return (
    <div>
      456
    
      {launcher.map((launch)=>{return(
        <Table name={launch.name} rocketType={launch.rocketType} latitude={launch.latitude} longitude={launch.longitude} city={launch.city}/>
      )})}
    </div>
  )
}

export default HomePage
