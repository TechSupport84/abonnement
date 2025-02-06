import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function RetirePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-between">

      {/* Header Section */}
      <div className="header bg-gray-800 flex justify-between items-center p-4">
        <BiArrowBack
          size={20}
          className="ml-2 text-white cursor-pointer hover:text-green-500 transition-all"
          onClick={() => navigate("/")}
        />
        <h1 className="text-white text-xl font-semibold">Retirer</h1>
        <div className="w-8" /> 
      </div>
      <div className="flex flex-col items-center justify-center px-4 py-6 space-y-4">
        <h2 className="text-white text-center text-2xl font-bold">
          Rendez-vous pour retirer de l'argent
        </h2>

        <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
          <form className="space-y-6">
            <input
              type="number"
              className="w-full p-3 rounded-lg border border-gray-800 text-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Le minimum CFA 4000"
            />
            <span className="text-green-500 text-center block">
              Equilibre CFA 0 disponible FCA 0
            </span>

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg border border-gray-800 text-xl focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <span className="text-center text-sm text-gray-500">
              Banque 12214 1224254535
            </span>

            <button
              type="button"
              className="w-full py-3 bg-gray-800 text-white rounded-lg text-xl hover:bg-gray-700 transition duration-300"
              onClick={() => navigate("/mybank")}
            >
              Continuer
            </button>

          </form>
          <span className='text-gray-700'>Frais </span>
        </div>
      </div>
    </div>
  );
}

export default RetirePage;
