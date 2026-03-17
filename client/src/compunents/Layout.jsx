import React from 'react'
import { Link } from 'react-router-dom'

function Layout({children}) {
  return (
    <div>
        <Link to={'/LoginPage'}><button>login</button></Link>
        <Link to={'/'}><button>HomePage</button></Link>
        <Link to={'/AddLauncher'}><button>Add</button></Link>
        <Link to={'RegisterPage'}><button>register</button></Link>
      <main>{children}</main>
    </div>
  )
}

export default Layout
