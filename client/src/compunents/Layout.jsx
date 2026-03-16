import React from 'react'
import { Link } from 'react-router-dom'

function Layout({children}) {
  return (
    <div>
      <button onClick={()=>navigat('/')}>Back HomePage</button>
        <button><Link to={'/'}>HomePage</Link></button>
        <button><Link to={'/AddLauncher'}>Add</Link></button>
      <main>{children}</main>
    </div>
  )
}

export default Layout
