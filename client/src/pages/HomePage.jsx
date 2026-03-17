import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from '../compunents/Table';
import { Link, useNavigate } from 'react-router';


function HomePage() {
  const [launcher, setLauncer] = useState([])
  const [filter, setFIlter] = useState(false);
  const [city, setCity] = useState('')
  const [type, setType] = useState('')
  const [destroy, setDestroy] = (false)
  const navigate = useNavigate()
  useEffect(() => {
    (async () => {
      try {
   
        const result = await axios.get(
          "http://localhost:3000/api/launchers", {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
          
        }).then(response => {
    
          setLauncer(response.data)
        }).catch(err => console.log(err)
        )


      } catch (error) {
        console.error(error);
      }
    })()
  }, [])
const destroyed =  launcher.filter((launch) => launch.destroy ==trueed)
  localStorage.setItem('amount', launcher.length)
  return (
    <div>
      <p className='statment'>
        On this page, you can view the launchers deployed in Iran.
        Click on the id number to get more details...</p>
        
      <form className='filter' onChange={() => setFIlter(true)}>
        <input type="checkbox" onClick={setDestroy(destroy)}/>
        <label htmlFor="city">City
          <input id="city" type="text" onChange={(e) => setCity(e.target.value)} />
        </label>
        <label htmlFor="rocket"> Rocket Type:
          <select name="rocket" id="rocket" onChange={(e) => setType(e.target.value)}>
            <option disabled selected>Select an option</option>
            <option value="Kheibar">Kheibar</option>
            <option value="Radwan">Radwan</option>
            <option value="Fetah110">Fetah110</option>
            <option value="Shahab3">Shahab3</option>
          </select>
        </label>
        <button onClick={() => { setFIlter(false), setCity(''), setType('') }}>Clear filter</button>
      </form>
      <table>
        <tr>
          <th>id</th>
          <th>city</th>
          <th>rocketType</th>
        </tr>
        {filter && launcher.filter((launch) => launch.rocketType == type || launch.city == city).map((launch) => {
          return (
            <tr key={launch.id}>
              <td><Link to={`/launcher/${launch.id}`}>{launch.id}</Link></td>
              <td>{launch.city}</td>
              <td>{launch.rocketType}</td>
            </tr>
          )
        })}
        {!filter && launcher.map((launch) => {
          return (
            <tr key={launch.id}>
              <td><Link to={`/launcher/${launch.id}`}>{launch.id}</Link></td>
              <td>{launch.city}</td>
              <td>{launch.rocketType}</td>
            </tr>
          )
        })}
        {destroy && destroyed.map((launch) => {
          return (
            <tr key={launch.id}>
              <td><Link to={`/launcher/${launch.id}`}>{launch.id}</Link></td>
              <td>{launch.city}</td>
              <td>{launch.rocketType}</td>
            </tr>
          )
        })}

      </table>
      <button onClick={() => navigate('/AddLauncher')}>Add launch</button>
    </div>
  )
}

export default HomePage
