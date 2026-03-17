import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios';
import Table from '../compunents/Table';
import Update from '../compunents/Update';

function LauncherDetailsPage() {
  const { id } = useParams()
  const [launcher, setLauncher] = useState([]);
  const navigate = useNavigate()
  const [response, setResponseMessage] = useState('')
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(
          `http://localhost:3000/api/launchers/${id}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }

        })
        console.log(result);

        setLauncher(result.data.masger[0])
      } catch (error) {
        console.error(error);
      }
    })()
  }, [])
  async function deleted() {
    try {
      const result = await axios.delete(
        `http://localhost:3000/api/launchers/${id}`)
      setResponseMessage(<div className='seccess'>Update successfully!</div>);
      alert('deleted')
      setTimeout(() => {
        navigate('/')
      }, 5000)
    } catch (error) {
      setResponseMessage(<div className='worng'>Error creating update</div>);
      console.error(error);
    }


  }

  return (
    <div>

      <Table id={id} name={launcher.name} rocketType={launcher.rocketType} latitude={launcher.latitude} longitude={launcher.longitude} city={launcher.city} />
      <button onClick={() => deleted()}>unable</button>
      <button onClick={() => setUpdate(!update)}>Update</button>
      {response}
      {update && <Update props={launcher}></Update>}
    </div>
  )
}

export default LauncherDetailsPage
