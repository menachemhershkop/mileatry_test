import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios';
import Table from '../compunents/Table';

function LauncherDetailsPage() {
  const {id} = useParams()
  const [launcher, setLauncher] =useState([]);
  const navigate = useNavigate()

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
   async function deleted(){
         try {
                const result = await axios.delete(
                    `http://localhost:3000/api/launchers/${id}`)
                
                alert('deleted')
              } catch (error) {
                console.error(error);
              }
            
          
   } 
          
  return (
    <div>
       <Table name={launcher.name} rocketType={launcher.rocketType} latitude={launcher.latitude} longitude={launcher.longitude} city={launcher.city}/>
       <button onClick={()=>deleted()}>unable</button>
    </div>
  )
}

export default LauncherDetailsPage
