import React from 'react'
import Navbar from './Navbar'
import Manager from './Manager'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-[80vh] max-h-[90vh] overflow-auto'>
        <Manager />
      </div>
      <Footer />
    </div>
  )
}

export default Home
