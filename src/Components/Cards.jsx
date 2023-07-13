import React from 'react'

export default function Cards({quotes}) {
  return (
   <div className=''>
      {/* <h1>{quotes.category}</h1> */}
     <div className=" lg:px-10 px-4 border-l-orange-500  border-l-8 h-auto w-[100%] lg:w-[60%] mx-auto mt-10  ">
                <h2 className="text-black text-base lg:text-xl font-bold">"{quotes.quote}"</h2>
     </div>
   </div>
  )
}
