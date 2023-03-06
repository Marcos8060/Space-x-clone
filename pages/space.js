import { data } from '@/components/data'
import React from 'react'


const Space = () => {
  return (
    <>
    <section>
      {data.map((item,index) =>(
        <div key={index}>
          <img src={item.image} alt="" />
        </div>
      ))}
    </section>
    </>
  )
}

export default Space