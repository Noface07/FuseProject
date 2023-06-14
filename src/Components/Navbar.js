import React, { useState }  from 'react';

export default function Navbar() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar fixed-top shift" style={{ width: '100%' }} >
      <img src={require('./images/logo.png')} width={80} height={80} alt="Logo" className="logo" style={{ marginLeft: '2cm' }} />
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Downloads</a></li>
        <li
          style={{ position: 'relative' }}
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <a href="/">Dropdown</a>
          {dropdownOpen && (
            <ul
              style={{
                display: 'block',
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: '#fff',
                padding: '10px',
              }}
            >
              <li><a href="/">Option 1</a></li>
              <li><a href="/">Option 2</a></li>
              <li><a href="/">Option 3</a></li>
            </ul>
          )}
        </li>
        <li><a href="/">More</a></li>
        <li><a href="/">Nice staff</a></li>
      </ul>
    </nav>
  );
}