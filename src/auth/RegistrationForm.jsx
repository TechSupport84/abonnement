import React, { useState } from 'react';
import Connexion from './Connexion';

const RegistrationForm = () => {
  const [showConnexion, setShowConnexion] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    lastName: '',
    firstName: '',
    sponsorName: '',
    birthDate: '',
    idNumber: '',
    country: '',
    address: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    lastName: '',
    firstName: '',
    sponsorName: '',
    birthDate: '',
    idNumber: '',
    country: '',
    address: '',
    phone: '',
    email: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation for registration form
    let validationErrors = {};
    for (let key in formData) {
      if (formData[key].trim() === '') {
        validationErrors[key] = `${key} is required`;
      }
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Form Submitted');
      console.log(formData);
    }
  };

  const handleTogglePage = () => {
    setShowConnexion(!showConnexion);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-800 border border-gray-500 rounded-lg shadow-lg">
      <div className="flex flex-row mb-4 justify-center border-b-2 border-dashed mb-4">
        <button className="text-white cursor-pointer mb-2 mr-2  bg-blue-500 p-2 rounded hover:bg-green-100 hover:text-black" onClick={handleTogglePage}>
          Inscription
        </button>
         <span className='text-white'>|</span>
        <button className="text-white cursor-pointer mb-2 ml-2 bg-blue-500 p-2 rounded hover:bg-green-100 hover:text-black " onClick={handleTogglePage}>
          Connexion
        </button>
      </div>

      {showConnexion ? (
        <Connexion />
      ) : (
        <div>
          <h2 className="text-2xl font-semibold text-center mb-6 text-white">Formulaire d'inscription</h2>
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300">Nom d'utilisateur</label>
              <input
                type="text"
                placeholder="Entrez votre nom d'utilisateur"
                className="w-full p-2 mt-1 border border-gray-600 rounded-md"
                value={formData.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
              />
              {errors.username && <p className="text-red-500 text-xs">{errors.username}</p>}
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300">Nom</label>
              <input
                type="text"
                placeholder="Entrez votre nom"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
              />
              {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
            </div>

            {/* First Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300">Prénom</label>
              <input
                type="text"
                placeholder="Entrez votre prénom"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
              />
              {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
            </div>

                    {/* Sponsor Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Nom du parrain</label>
          <input
            type="text"
            placeholder="Entrez le nom du parrain"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            value={formData.sponsorName}
            onChange={(e) => handleInputChange('sponsorName', e.target.value)}
          />
          {errors.sponsorName && <p className="text-red-500 text-xs">{errors.sponsorName}</p>}
        </div>

        {/* Birth Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Date naissance</label>
          <input
            type="date"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            value={formData.birthDate}
            onChange={(e) => handleInputChange('birthDate', e.target.value)}
          />
          {errors.birthDate && <p className="text-red-500 text-xs">{errors.birthDate}</p>}
        </div>

        {/* ID Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Numéro pièce d'identité</label>
          <input
            type="text"
            placeholder="Entrez votre numéro de pièce d'identité"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            value={formData.idNumber}
            onChange={(e) => handleInputChange('idNumber', e.target.value)}
          />
          {errors.idNumber && <p className="text-red-500 text-xs">{errors.idNumber}</p>}
        </div>

        {/* Country */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Pays</label>
          <input
            type="text"
            placeholder="Entrez votre pays"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            value={formData.country}
            onChange={(e) => handleInputChange('country', e.target.value)}
          />
          {errors.country && <p className="text-red-500 text-xs">{errors.country}</p>}
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Adresse lieu</label>
          <input
            type="text"
            placeholder="Entrez votre adresse"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
          />
          {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Téléphone WhatsApp</label>
          <input
            type="text"
            placeholder="Entrez votre numéro de téléphone"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
          />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">e-mail</label>
          <input
            type="email"
            placeholder="Entrez votre e-mail"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Soumettre
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
