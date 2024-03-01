import React from 'react'
import Navbar from './Navbar'
import {Suspense, lazy} from 'react'

const Layout = () => {
  return (
    <>
          <Navbar />
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Outlet />

        </Suspense>
    </>
  )
}

export default Layout