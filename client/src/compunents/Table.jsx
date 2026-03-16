import React from 'react'

function Table(props) {
  return (
    <div>
        
      <strong>Name:</strong> {props.name}
      <strong>RocketType:</strong> {props.roketType}
      <strong>Latitude:</strong> {props.latitude}
      <strong>Longitude</strong> {props.longitude}
      <strong>City:</strong> {props.city}
    </div>
 )
}

export default Table
