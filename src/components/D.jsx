import React from 'react'

const D = () => {
  return (
    <div className='text-white mt-20 ml-44 w-2/4' > 
      <h1 className='text-5xl leading-relaxed' >   
        Access curated course worth <br/> <span className='line-through font-semibold opacity-90 decoration-red-600'>  ₹ 18500 </span> 
        at just <span className='font-semibold text-blue-600 ' >₹ 99</span> per year!
       </h1>
       <br class="h-4 bg-green-700"></br>
    <div className='flex flex-col mt-12 gap-6 flex-wrap'>
       <div className = 'desc flex border px-5  w-2/4 items-center gap-14'>
         <img className='scale-75'  src='./src/images/vectorOne.png'/>
         <p className='text-2xl'> <span className='text-blue-600 font-bold' > 100 + </span> Job relavent Courses </p>
       </div>
       <div className = 'desc  px-5  flex border w-2/4 items-center gap-14'>
         <img className='scale-75'  src='./src/images/vectorOne.png'/>
         <p className='text-2xl'> <span className='text-blue-600 font-bold' > 20,000 + </span> Hours of content </p>
       </div>
       <div className = 'desc  px-5  flex border w-2/4 gap-14 items-center'>
         <img className='scale-75'  src='./src/images/vectorOne.png'/>
         <p className='text-2xl'> <span className='text-blue-600 font-bold' >Exclusive </span> webinar access </p>
       </div>
       <div className = 'desc  px-5  flex border w-2/4 gap-14 items-center'>
         <img className='scale-75'  src='./src/images/vectorOne.png'/>
         <p className='text-2xl'> Scholarship worth  <span className='text-blue-600 font-bold' > ₹ 94,500 </span>  </p>
       </div>
       <div className = 'desc  px-5  flex border w-2/4 gap-12 items-center'>
         <img className='scale-75'  src='./src/images/vectorOne.png'/>
         <p className='text-2xl'> <span className='text-blue-600' >Add free </span>Learning experience</p>
       </div>
    </div>

    </div>
  )
}

export default D