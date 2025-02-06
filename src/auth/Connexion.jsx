import React, { useState } from 'react';

const Connexion = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (name, value) => {
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation for login form
    let validationErrors = {};
    for (let key in loginData) {
      if (loginData[key].trim() === '') {
        validationErrors[key] = `${key} is required`;
      }
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Connexion successful');
      console.log(loginData);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-800 border border-gray-500 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6 text-white">Connexion</h2>
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Nom d'utilisateur</label>
          <input
            type="text"
            placeholder="Entrez votre nom d'utilisateur"
            className="w-full p-2 mt-1 border border-gray-600 rounded-md"
            value={loginData.username}
            onChange={(e) => handleInputChange('username', e.target.value)}
          />
          {errors.username && <p className="text-red-500 text-xs">{errors.username}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Mot de passe</label>
          <input
            type="password"
            placeholder="Entrez votre mot de passe"
            className="w-full p-2 mt-1 border border-gray-600 rounded-md"
            value={loginData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
          />
          {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Connexion
        </button>
      </form>
    </div>
  );
};

export default Connexion;
