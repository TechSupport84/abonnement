import React from 'react'

function MyBank() {
  return (
    <div className=''>
        <div className="border-b-2  flex flex-col border-gray-500 border-dashed justify-center">
         <h1 className='text-center text-white mb-5'> Ma <span className='text-green-500 '>Banque </span></h1>
         <span className='text-center text-white mb-2 '>Veuillez utiliser une carte bancaire pour retirer de l 'argent .</span>
         </div>
<div className="flex flex-col items-center p-6 bg-gray-800 min-h-screen">
  <form className="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-md">
    <div className="mb-4">
      <input
        type="text"
        placeholder="Titulaire du Compte"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>

    <div className="mb-4">
      <input
        type="text"
        placeholder="N. ACC"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="Banque" className="block text-gray-700 font-medium mb-2">
        Banque Selection
      </label>
      <select
        id="Banque"
        name="Banque"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="Equity">Equity</option>
        <option value="Move Money">Move Money</option>
        <option value="Orange Money">Orange Money</option>
      </select>
    </div>

    <button
      type="submit"
      className="w-full text-white bg-green-500 p-3 rounded-lg hover:bg-green-600 transition duration-300"
    >
      Confirmer
    </button>
  </form>
</div>

    </div>
  )
}

export default MyBank
