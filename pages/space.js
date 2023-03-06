import { data } from '@/components/data'
import React from 'react'


const Space = () => {
  return (
    <>
    <section>
      {data.map((item,index) =>(
        <div key={index} className="relative">
          <img src={item.image} alt="" />
          <h3 className="absolute text-2xl text-white bottom-52 left-10 uppercase">{item.title}</h3>
          <h3 className="absolute text-2xl text-white bottom-40 left-10 uppercase font-bold text-4xl w-4/12">{item.desc}</h3>
          <button className="absolute text-2xl text-white bottom-20 left-10 uppercase border-2 border-white px-12 py-4 font-semibold text-sm">{item.btn}</button>
        </div>
      ))}
    </section>
    </>
  )
}

export default Space