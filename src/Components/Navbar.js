import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar fixed-top shift" style={{ width: '100%' }} >
      <img src={require('./images/logo.png')} width={80} height={80} alt="Logo" className="logo" style={{ marginLeft: '2cm' }} />
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Downloads</a></li>
        <li><a href="/">More</a></li>
        <li><a href="/">Nice staff</a></li>
      </ul>
    </nav>
  );
}