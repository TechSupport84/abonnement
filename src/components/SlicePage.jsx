import React, { useState, useEffect } from 'react';

function SlicePage() {
  const slices = [
    { id: 1, image: './slice1.jpg', detail: 'Gagner' },
    { id: 2, image: './slice2.jpg', detail: 'Ganger' },
    { id: 3, image: './slice3.jpg', detail: 'Gagner' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slices.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [slices.length]);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slices.map((slice) => (
          <div key={slice.id} className="w-full flex-shrink-0">
            <img src={slice.image} alt={slice.detail} className="w-full h-64 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2">
              {slice.detail}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default SlicePage;
