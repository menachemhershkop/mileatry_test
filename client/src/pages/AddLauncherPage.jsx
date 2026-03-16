import React, { useState } from 'react'
import axios from 'axios';

function AddLauncherPage() {
    const [name, setName]= useState('');
    const [rocketType, setRocketType] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] =useState(0);
    const [city, setCity]= useState('');
    const [response, setResponseMessage] = useState('')
    const handelSubmit = async (e)=>{
            e.preventDefault();
            const newLauncher = {name:name, rocketType:rocketType, latitude:latitude, longitude:longitude, city:city}
            axios.post("http://localhost:3000/api/launchers", newLauncher)
            .then((response) => {
                console.log(response);
                
                setResponseMessage("Post created successfully!");
            })
            .catch((err) => {
                setResponseMessage("Error creating post");
            });
            
    }
  return (
    <div>
      <form className='new-rocket' action="" onSubmit={handelSubmit}>
            <label htmlFor="name">Name:
        <input id="name" type="text" onChange={(e)=>setName(e.target.value)}/>
        </label>
        <label htmlFor="city">City
        <input id="city" type="text" onChange={(e)=>setCity(e.target.value)}/>
        </label>
        <label htmlFor="rocket"> Rocket Type:
        <select name="rocket" id="rocket" onChange={(e)=>setRocketType(e.target.value)}>
            <option disabled>Select an option</option>
            <option value="Kheibar">Kheibar</option>
            <option value="Radwan">Radwan</option>
            <option value="Fetah110">Fetah110</option>
            <option value="Shahab3">Shahab3</option>
        </select>
        </label>
        <label htmlFor="latitude"> Latitude:
        <input id='latitude' type="number" onChange={(e)=>setLatitude(e.target.value)}/>
        </label>
        <label htmlFor="longitude"> Longitude:
        <input id='logitude' type="number" onChange={(e)=>setLongitude(e.target.value)}/>
        </label>
        <button>Submit</button>
      </form>
      {response}
    </div>
  )
}

export default AddLauncherPage
