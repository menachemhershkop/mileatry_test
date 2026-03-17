import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router';

function Update(props) {

    const { id } = useParams()
    const [name, setName] = useState(props.props.name);
    const [rocketType, setRocketType] = useState(props.props.rocketType);
    const [latitude, setLatitude] = useState(props.props.latitude);
    const [longitude, setLongitude] = useState(props.props.longitude);
    const [city, setCity] = useState(props.props.city);
    const [response, setResponseMessage] = useState('')
    const nevgate = useNavigate()
    const handelSubmit = async (e) => {
        e.preventDefault();
        const updateLauncher = { name: name, rocketType: rocketType, latitude: latitude, longitude: longitude, city: city }
        axios.put(`http://localhost:3000/api/launchers/${id}`, updateLauncher, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }

        })
            .then((response) => {

                setResponseMessage(<div className='seccess'>Update successfully!</div>);
                setTimeout(() => {
                    nevgate('/')
                }, 1000)
            })
            .catch((err) => {
                setResponseMessage(<div className='worng'>Error creating update</div>);
            });

    }
    return (
        <div>

            <form className='new-rocket' action="" onSubmit={handelSubmit}>
                <label htmlFor="name">Name:
                    <input id="name" type="text" onChange={(e) => setName(e.target.value)} />
                </label>
                <label htmlFor="city">City
                    <input id="city" type="text" onChange={(e) => setCity(e.target.value)} />
                </label>
                <label htmlFor="rocket"> Rocket Type:
                    <select name="rocket" id="rocket" onChange={(e) => setRocketType(e.target.value)}>
                        <option disabled selected>Select an option</option>
                        <option value="Kheibar">Kheibar</option>
                        <option value="Radwan">Radwan</option>
                        <option value="Fetah110">Fetah110</option>
                        <option value="Shahab3">Shahab3</option>
                    </select>
                </label>
                <label htmlFor="latitude"> Latitude:
                    <input id='latitude' type="number" onChange={(e) => setLatitude(e.target.value)} />
                </label>
                <label htmlFor="longitude"> Longitude:
                    <input id='logitude' type="number" onChange={(e) => setLongitude(e.target.value)} />
                </label>
                <button>Submit</button>
            </form>
            {response}
        </div>
    )
}


export default Update
