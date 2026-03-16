import React from 'react'

function Table(props) {
  return (
    <div>
        
      <h1><strong>Name:</strong> {props.name}</h1>
     <h6> <strong>RocketType:</strong> {props.roketType}</h6>
     <h3> <strong>City:</strong> {props.city}</h3>
      <p><strong>Latitude:</strong> {props.latitude}</p>
      <p><strong>Longitude</strong> {props.longitude}</p>
    </div>
 )
}

export default Table
