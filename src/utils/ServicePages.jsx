import React from 'react'
import { BiArrowBack, BiDollar, BiGlobeAlt, BiLogoGoLang, BiLogoMicrosoftTeams, BiMoney, BiPhotoAlbum, BiSolidBank, BiSolidUserVoice, BiUserPlus } from 'react-icons/bi'
import { BsMicrosoftTeams } from 'react-icons/bs'
function ServicePages() {
  return (
    <div>
            <div className="border border-gray-500 flex flex-col rounded-2xl m-20">
        <div className="flex  flex-row justify-between mb-10 m-10">
        <span >
        <BiDollar size={30} className='text-white hover:text-orange-500 ml-0'/>
        <p className='text-justify ml-0 hover:text-green-500 p-0'>Acheter</p>
        </span>
        <span >
        <BiSolidUserVoice size={30} className='text-white hover:text-orange-500 ml-0'/>
        <p className='text-justify ml-0 hover:text-green-500 p-0'>Service</p>
        </span>
        <span >
        <BiUserPlus size={30} className='text-white hover:text-orange-500 ml-2'/>
        <p className='text-justify ml-0 hover:text-green-500 p-0'>Inviter</p>
        </span>
        <span >
        <BiGlobeAlt size={30} className='text-white hover:text-orange-500'/>
        <p className='text-justify ml-0 hover:text-green-500 p-0'>Langues</p>
        </span>
        </div>
        <div className="flex flex-row justify-between m-10">
            <span><BiPhotoAlbum size={30} className='text-white hover:text-orange-500'/><p className='text-justify ml-0 hover:text-green-500 p-0'>Photo</p></span>
            <span><BsMicrosoftTeams size={30} className='text-white hover:text-orange-500'/><p className='text-justify ml-0 hover:text-green-500 p-0'>Equipe</p></span>
            <span><BiSolidBank size={30} className='text-white hover:text-orange-500'/><p className='text-justify ml-0 hover:text-green-500 p-0'>Banque</p></span>
            <span><BiMoney size={30} className='text-white hover:text-orange-500'/><p className='text-justify ml-0 hover:text-green-500 p-0'>Salaire</p></span>
        </div>
      </div>
    </div>
  )
}

export default ServicePages
