// src/components/common/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Signup</Link>
    </div>
  </header>
);

export default Header;
