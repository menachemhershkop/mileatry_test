import React from 'react'

function Layout(children) {
  return (
    <div>
        <Link to={'/'}>HomePage</Link>
        <Link to={'/AddLauncher'}>Add</Link>
      <main>{children}</main>
    </div>
  )
}

export default Layout
