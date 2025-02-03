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
   

    </div>
  )
}

export default RetirePage
