import React from 'react'

function Table(props) {
  return (
    <div className='lancher-tab'>

      <h1><strong>Name:</strong> {props.name}</h1>
      <h3> <strong>City:</strong> {props.city}</h3>
      <h4> <strong>RocketType:</strong> {props.rocketType}</h4>
      <p><strong>Latitude:</strong> {props.latitude}</p>
      <p><strong>Longitude</strong> {props.longitude}</p>
    </div>
  )
}

export default Table
