import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';

function AddLauncherPage() {
    const [name, setName]= useState('');
    const [rocketType, setRocketType] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] =useState(0);
    const [city, setCity]= useState('');
    const [response, setResponseMessage] = useState('')
    const id =Number(localStorage.getItem('amount'))+1
    const nevgate = useNavigate()
    const handelSubmit = async (e)=>{
            e.preventDefault();
            const newLauncher = {id:id, name:name, rocketType:rocketType, latitude:latitude, longitude:longitude, city:city}
            axios.post("http://localhost:3000/api/launchers", newLauncher)
            .then((response) => {
            
                setResponseMessage(<div className='seccess'>Post created successfully!</div>);
                setTimeout(()=>{
                    nevgate('/')
                }, 1000)
            })
            .catch((err) => {
                setResponseMessage(<div className='worng'>Error creating post</div>);
            });
            
    }
  return (
    <div>
      <form className='new-rocket' action="" onSubmit={handelSubmit}>
            <label htmlFor="name">Name:
        <input required id="name" type="text" onChange={(e)=>setName(e.target.value)}/>
        </label>
        <label htmlFor="city">City
        <input required id="city" type="text" onChange={(e)=>setCity(e.target.value)}/>
        </label>
        <label htmlFor="rocket"> Rocket Type:
        <select required name="rocket" id="rocket" onChange={(e)=>setRocketType(e.target.value)}>
            <option disabled selected>Select an option</option>
            <option value="Kheibar">Kheibar</option>
            <option value="Radwan">Radwan</option>
            <option value="Fetah110">Fetah110</option>
            <option value="Shahab3">Shahab3</option>
        </select>
        </label>
        <label htmlFor="latitude"> Latitude:
        <input required id='latitude' type="number" onChange={(e)=>setLatitude(e.target.value)}/>
        </label>
        <label htmlFor="longitude"> Longitude:
        <input required id='logitude' type="number" onChange={(e)=>setLongitude(e.target.value)}/>
        </label>
        <button>Submit</button>
      </form>
      {response}
    </div>
  )
}

export default AddLauncherPage
