import React from 'react'
import { BiArrowBack, BiDollar, BiGlobeAlt, BiLogoGoLang, BiLogoMicrosoftTeams, BiMoney, BiPhotoAlbum, BiSolidBank, BiSolidUserVoice, BiUserPlus } from 'react-icons/bi'
import { BsMicrosoftTeams } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function RetirePage() {
    const navigate = useNavigate()
  return (
    <div className=''>
   <div className="header bg-gray-700 flex  flex-row justify-between items-center">
       <BiArrowBack size={20} className='ml-2 text-white hover:text-green-500 ' onClick={()=>navigate("/")}/>
        <h1 className='mr-2 text-white'>Retirer</h1>
        </div>
         <h1 className='text-center text-white '>Rendez - vous pour retirer  de l'argent</h1>
          <div className="border border-gray-500 p-2 flex  flex-col rounded-2xl bg-white">

     <form className="border border-gray-800 flex flex-col justify-center items-center p-4 rounded-lg  space-y-3">
     <span className='text-center'>Le minimum CFA 4000</span>
     <span className='text-green-500 text-center'>Equilibre CFA 0 disponible FCA 0</span>
      
      <input  type="password"  placeholder="Password" 
        className="border border-gray-800 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-600"/>
       <span className='text-center'>Banque   12214 1224254535 </span>
        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700" onClick={()=>navigate("/mybank")}>Continuer</button>
       </form>

          </div>
    </div>
  )
}

export default RetirePage
