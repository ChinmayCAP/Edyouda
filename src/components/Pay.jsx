import React from 'react'
import { useState , useContext , useEffect } from 'react';


const Pay = () => {
   const [price , setPrice] = useState();


  return (
    <div className=' w-4/12 border mb-5 text-black bg-white flex flex-col p-7 rounded-lg'>
        <div className='flex gap-10 justify-around mt-7 '>
       
        <div class="flex flex-col items-center">
           <div class="h-12 w-12 hover:cursor-pointer  rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-semibold">
                1
          </div>
          <p class="mt-2 hover:cursor-pointer text-center text-sm font-semibold text-gray-700">Sign up</p>
        </div>
       
        <div class="flex flex-col items-center">
           <div class="h-12 w-12 hover:cursor-pointer rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-semibold">
                2
          </div>
          <p class="mt-2 hover:cursor-pointer text-center text-sm font-semibold text-gray-700">Subscribe</p>
        </div>

        
        </div>

        <div className='mt-3 text-center font-bold text-xl text-gray-800 p-4 '>
            Select your subscription plan
        </div>
        
        <div className='flex flex-col gap-6 mt-6 pb-9'>

        <div id='sub1' class="flex items-center border w-4/7 rounded-lg justify-between p-4  border-current hover:text-white hover:bg-green-400">
          <label class="flex gap-6 items-center cursor-pointer">
              <input className='scale-150 form-radio text-green-500' type="radio" name = "subscription" value = "179" onChange={e => setPrice(e.target.value)} />
              <span class="text-gray-700 text-xl font-semibold  select-none">12 Months Subscription</span>
              </label>
             <span class="text-right font-bold text-gray-700">Total <span className='text-2xl'> ₹ 179 </span></span>
       </div>

       <div id='sub2' class="flex items-center rounded-lg justify-between p-4 border border-current hover:bg-green-400">
          <label  class="flex gap-6 items-center cursor-pointer">
             <input type="radio" className='scale-150 form-radio text-green-500' name = "subscription" value = "149" onChange={e => setPrice(e.target.value)} />
              <span class="text-gray-700 text-xl font-semibold  select-none">6 Months Subscription</span>
              </label>
             <span class="text-right font-bold text-gray-700">Total <span className='text-2xl'> ₹ 149 </span></span>
       </div>

       <div id='sub3' class="flex items-center rounded-lg justify-between p-4 border border-current hover:bg-green-400">
          <label class="flex gap-6 items-center cursor-pointer">
             <input className='scale-150 form-radio text-green-500' type="radio" name = "subscription" value = "99" onChange={e => setPrice(e.target.value)} />
              <span class="text-gray-700 text-xl font-semibold  select-none">3 Months Subscription</span>
              </label>
             <span class="text-right font-bold text-gray-700">Total <span className='text-2xl'> ₹ 99 </span></span>
       </div>

        </div>

        <div className = " border-t-4 border-red-950 mt-5 flex items-center w-4/7 rounded-lg justify-between p-4  border-current">
            <h1 className='font-semibold text-xl'> Total Subscription fees </h1>
            <h1> Total : ₹ <span className='line-through decoration-slice decoration-red-800 font-bold text-3xl' > 18,500 </span> </h1>
        </div>

        <div className='flex items-center justify-between mt-4 p-3 ltd-offer text-red-100 bg-red-500 border-red-700'>
            <span className='leading-relaxed' >
            <h3 className='font-semibold text-lg'>Limited time offer</h3>
            <p className = 'justify-between flex items-center'> Offer valid till 25th March 2023  <img className='scale-50'  src='./src/images/vectorOne.png'/> </p>
            </span>
    
            <span>
            <h1> Total : ₹ <span className=' font-bold text-3xl' > {price} </span> </h1>
            <p> (incl. gst 18%)</p>
            </span>
        </div>

        <div className='confirmation flex gap-16 mt-6 justify-between '>
            <button type='button' className = " font-bold text-red-700 bg-red- text-lg border border-red-600 w-1/2 h-12" >
               Cancel
            </button>

            <button type='button'  className = " font-bold text-white bg-green-600 text-lg border border-white w-1/2">
               Pay
            </button>
        </div>
 
     <div className='h-1/10 w-2/4 mt-5'>
     <img src='./src/images/Razorpay.png'/>
     </div>
    </div>
  )
}

export default Pay