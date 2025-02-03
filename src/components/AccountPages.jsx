import React from 'react'
import { useNavigate } from 'react-router-dom'

function AccountPages() {
    const navigate = useNavigate()
  return (
    <div className='border border-gray-500 rounded-2xl flex flex-col items-justify justify-between mt-0 p-2 m-2 '>
      <div className="flex flex-col justify-between">
      <span className='text-green-500'>Actif total :  CFA  53535</span>
      <span className='text-green-500'>Montant  disponible : 53535</span>
      <span className='text-green-500'>Montant  de la  reservation CFA </span>
      <button class="bg-green-500 hover:bg-green-300 mt-20 p-2 rounded-2xl text-center" onClick={()=>navigate("withdraw")}>Confirmer</button>
      </div>
    </div>
  )
}

export default AccountPages
