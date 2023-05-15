import React from 'react'

const Navbar = () => {
  return (
    <>
     <div className='main border-b-8 border-green-400 sticky top-0 z-50 bg-white p-5 flex justify-around gap-60 align-middle'>
       <div className='left w-2/6 ml-10 left flex items-center justify-between'>
         <img src='./src/images/EDYODA.png' className='scale-90 hover:cursor-pointer' />
         <span className='flex gap-3'>
         <a href='#' className='text-lg font-semibold font-sans'  > Courses </a>
         <img src='./src/images/dd.png' className='scale-75 hover:cursor-pointer' />
         </span>
         <span className='flex gap-3'>
         <a href='#' className='text-lg font-semibold font-sans' > Programs </a>
         <img src='./src/images/dd.png' className='scale-75 hover:cursor-pointer' />
         </span>
       </div>
       <div className='flex justify-evenly w-2/6'>
        <img className='w-7 h-7 mt-2 hover:cursor-pointer opacity-80' src='./src/images/OneSearch.png' />
        <button className='bg-blue-500 rounded-lg text-white px-10 py-2 rad' >
          Login
        </button>
        <button className='bg-blue-500 rounded-lg text-white px-7 py-2 rad' >
          Join Now
        </button>
       </div>
     </div>
     <br class="h-4 bg-green-700"></br>
    </>
  )
}

export default Navbar