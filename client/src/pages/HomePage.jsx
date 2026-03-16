import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from '../compunents/Table';
import { Link, useNavigate } from 'react-router';
import { name } from 'ejs';

function HomePage() {
    const [launcher, setLauncer] = useState([])
    const [filter, setFIlter] = useState(false);
    const [city, setCity] = useState('')
    const [type, setType]= useState('')
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
   useEffect(()=>{
    console.log(city);
    console.log(type);
    console.log(launcher.length)
    
   },[city, type])
          localStorage.setItem('amount', launcher.length)
  return (
    <div>
      <p className='statment'>
On this page, you can view the launchers deployed in Iran.
Click on the id number to get more details...</p>
<form className='filter' onChange={()=>setFIlter(true)}>
  <label htmlFor="city">City
        <input id="city" type="text" onChange={(e)=>setCity(e.target.value)}/>
        </label>
        <label htmlFor="rocket"> Rocket Type:
        <select name="rocket" id="rocket" onChange={(e)=>setType(e.target.value)}>
            <option disabled selected>Select an option</option>
            <option value="Kheibar">Kheibar</option>
            <option value="Radwan">Radwan</option>
            <option value="Fetah110">Fetah110</option>
            <option value="Shahab3">Shahab3</option>
        </select>
        </label>
<button onClick={()=>{setFIlter(false), setCity(''), setType('')}}>Clear filter</button>
</form>
      <table>
  <tr>
    <th>id</th>
    <th>city</th>
    <th>rocketType</th>
  </tr>
  {filter &&launcher.filter((launch)=>launch.rocketType ==type || launch.city ==city).map((launch)=>{return(
          <tr key={launch.id}>
       <td><Link to={`/launcher/${launch.id}`}>{launch.id}</Link></td>
        <td>{launch.city}</td>
        <td>{launch.rocketType}</td>
  </tr>
      )})}
    {!filter &&  launcher.map((launch)=>{return(
          <tr key={launch.id}>
       <td><Link to={`/launcher/${launch.id}`}>{launch.id}</Link></td>
        <td>{launch.city}</td>
        <td>{launch.rocketType}</td>
  </tr>
      )})}

</table>
      <button onClick={()=>navigate('/AddLauncher')}>Add launch</button>
    </div>
  )
}

export default HomePage
