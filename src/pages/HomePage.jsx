import React from 'react'
import {BiVolumeFull } from 'react-icons/bi'
import AccountPages from '../components/AccountPages'
import ServicePages from '../utils/ServicePages'
function HomePage() {
  return (
    <div className=' mt-2'>
    <div className="image-pub flex  justify-center items-center">
    <img src="./logo.jpg" alt='' className='w-300 h-100' />
    </div>
     <div className="border rounded-2xl  border-gray-500 flex  justify-center items-center p-2 m-2 mt-2">
        <div className="flex-row items-center m-5"></div>
        <BiVolumeFull className='text-white'/>
        <span className='ml-5 text-white'> Et  Vous obtiendrez un de  bonus  de  10 % </span> 
     </div>
     <AccountPages/>

     <ServicePages/>
    </div>
  )
}

export default HomePage
