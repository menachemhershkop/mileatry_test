import React from 'react'

function Layout(children) {
  return (
    <div>
        <Link to={'/'}/>
        <Link to={'/LauncherDetailsPage'}>deta</Link>
        <Link to={'/AddLauncherPage'}>Add</Link>
      <main>{children}</main>
    </div>
  )
}

export default Layout
