import React, { useState, useEffect } from 'react';
import { BiVolumeFull } from 'react-icons/bi';
import AccountPages from '../components/AccountPages';
import ServicePages from '../utils/ServicePages';
import SlicePage from '../components/SlicePage';

function HomePage() {
  const [customize, setCustomize] = useState(false);
  const [slices, setSlices] = useState([
    { id: 1, icons: <BiVolumeFull className="text-green-500 text-3xl" />, detail: "Gagnez jusqu'à 100% du bénéfice de votre abonnement" },
    { id: 2, icons: <BiVolumeFull className="text-3xl text-green-500" />, detail: "Invitez vos amis en partageant votre lien pour obtenir une prime salariale." },
  ]);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slices.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slices.length]);

  const handleCustomize = () => {
    setCustomize((prevCustomize) => !prevCustomize);
    setCurrentIndex(0);
    shuffleSlices();
  };

  const shuffleSlices = () => {
    const shuffled = [...slices].sort(() => Math.random() - 0.5);
    setSlices(shuffled);
  };

  return (
    <div className="mt-8">
      <div className="image-pub flex justify-center items-center mb-8">
        <SlicePage />
      </div>

      <div className="border rounded-2xl border-gray-700 overflow-hidden w-full max-w-lg mx-auto bg-gray-900 p-6 mt-8 relative mb-8 shadow-xl">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slices.map((slice) => (
            <div key={slice.id} className="flex items-center justify-start w-full flex-shrink-0 gap-6 text-justify">
              <div className="text-white font-semibold text-xl md:text-2xl leading-snug">{slice.detail}</div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-6 right-6">
          <button
            onClick={handleCustomize}
            className="text-white bg-green-500 p-4 rounded-full focus:outline-none hover:bg-green-600 transform hover:scale-110 transition duration-300"
          >
            {customize ? '>' : '>'}
          </button>
        </div>
      </div>

      <AccountPages />
      <ServicePages />
    </div>
  );
}

export default HomePage;
