// src/pages/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name,setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:3000/api/auth/register', {name, email, password});
      console.log(data); // Handle the response as needed
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8 p-4 border rounded">
        <h2 className="text-2xl mb-4">Signup</h2>

        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Register;
