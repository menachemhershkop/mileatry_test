import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router';

function Table(props) {
  const nevgate = useNavigate()
  const destroy = async (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/launchers/destroy/${props.id}`, { 1: 2 }, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }

    })
      .then((response) => {

        setResponseMessage(<div className='seccess'>Destroy!</div>);
        setTimeout(() => {
          nevgate('/')
        }, 1000)
      })
      .catch((err) => {
        setResponseMessage(<div className='worng'>Not destroy</div>);
      });

  }
  return (
    <div className='lancher-tab'>

      <h1><strong>Name:</strong> {props.name}</h1>
      <h3> <strong>City:</strong> {props.city}</h3>
      <h4> <strong>RocketType:</strong> {props.rocketType}</h4>
      <p><strong>Latitude:</strong> {props.latitude}</p>
      <p><strong>Longitude</strong> {props.longitude}</p>
      <button onClick={destroy}>Destroy</button>
    </div>
  )
}

export default Table
