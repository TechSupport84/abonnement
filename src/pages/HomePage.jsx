import React, { useState, useEffect } from 'react';
import { BiVolumeFull } from 'react-icons/bi';
import AccountPages from '../components/AccountPages';
import ServicePages from '../utils/ServicePages';
import SlicePage from '../components/SlicePage';

function HomePage() {
  const slices = [
    { id: 1, icons: <BiVolumeFull className="text-green-500 text-2xl " />, detail: "Gagnez jusqu'à 100% du bénéfice de votre abonnement" },
    { id: 2, icons: <BiVolumeFull className="text-2xl text-green-500" />, detail: "Invitez vos amis en partageant votre lien pour obtenir une prime salariale." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slices.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slices.length]);

  return (
    <div className="mt-2">
      {/* Image Slider Section */}
      <div className="image-pub flex justify-center items-center mb-5">
        <SlicePage />
      </div>

      {/* Text Slider Section */}
      <div className="border rounded-2xl border-gray-500 overflow-hidden w-full max-w-lg mx-auto bg-gray-800 p-4 mt-4 relative mb-5">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slices.map((slice) => (
            <div key={slice.id} className="flex items-center justify-center w-full flex-shrink-0 gap-4 text-justify">
              <span className='ml-0'>{slice.icons}</span>
              <span className="text-white font-bold text-2xl">{slice.detail}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Other Components */}
      <AccountPages />
      <ServicePages />
    </div>
  );
}

export default HomePage;
