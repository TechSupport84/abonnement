import React from 'react'
import { BiTrash } from 'react-icons/bi'

function SupprimerPage() {
  return (
    <div>
        <div className="boder bg-gray-900 p-4 ">
        <h1 className='text-center text-white text-1xl font-bold'>Position</h1>
        </div>
        <div className="flex flex-col p-5 m-2 border border-gray-500 rounded-2xl " >
        <span className='text-white'>Success</span>
         <div className="flex flex-row justify-center items-center mb-5 ">
            <span className='text-green-500 mr-3'>+4584948</span>
            <span className='text-red-500 ml-3'>+4594 FCFA</span>
         </div>
         <div className=" flex flex-row justify-between items-center mb-4">
            <span className='text-green-500'>N.5 2025-01-01</span>
            <span className='text-red-500'>
                {new Date().toLocaleDateString('en-US', {
                   year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                   })}
             </span>


         </div>
         <button className='p-4 bg-gray-900 rounded hover:bg-gray-800'><BiTrash className='text-red-500 float-right  hover:text-red-400 '/></button>
        </div>   


        <div className="flex flex-col p-5 m-2 border border-gray-500 rounded-2xl " >
        <span className='text-white'>Success</span>
         <div className="flex flex-row justify-center items-center mb-5 ">
            <span className='text-green-500 mr-3'>+4584948</span>
            <span className='text-red-500 ml-3'>+4594 FCFA</span>
         </div>
         <div className=" flex flex-row justify-between items-center mb-4">
            <span className='text-green-500'>N.5 2025-01-01</span>
            <span className='text-red-500'>
                {new Date().toLocaleDateString('en-US', {
                   year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                   })}
             </span>


         </div>
         <button className='p-4 bg-gray-900 rounded hover:bg-gray-800'><BiTrash className='text-red-500 float-right  hover:text-red-400 '/></button>
        </div>   
 
    </div>
  )
}

export default SupprimerPage
