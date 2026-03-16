import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import Table from '../compunents/Table';

function LauncherDetailsPage() {
  const {id} = useParams()
  const [launcher, setLauncher] =useState([]);
  console.log(id);
  
   useEffect(() => {
        (async () => {
            try {
                const result = await axios.get(
                    `http://localhost:3000/api/launchers/${id}`)
                
                setLauncher(result.data.masger[0])
              } catch (error) {
                console.error(error);
              }
            })()
          },[])
          console.log(launcher.name);
          
  return (
    <div>
       <Table name={launcher.name} rocketType={launcher.rocketType} latitude={launcher.latitude} longitude={launcher.longitude} city={launcher.city}/>
    </div>
  )
}

export default LauncherDetailsPage
