import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}: any) => {
  return (
    <div>
      <Navbar />
      <main className='min-h-screen bg-light dark:bg-dark'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout