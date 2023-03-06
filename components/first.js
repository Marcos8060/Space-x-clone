import React from 'react'
import Navbar from './Navbar'

const First = () => {
  return (
    <section className='first_img'>
        <Navbar />
          <h3 className="absolute text-2xl text-white bottom-52 left-10 uppercase">Recent Launch</h3>
          <h3 className="absolute text-2xl text-white bottom-40 left-10 uppercase font-bold text-4xl">Crew-6 mission</h3>
          <button className="absolute text-2xl text-white bottom-20 left-10 uppercase border-2 border-white px-12 py-4 font-semibold text-sm">Rewatch</button>
    </section>
  )
}

export default First