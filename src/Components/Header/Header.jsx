import React, { useState } from 'react';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <div className="container">
          <nav className={s.nav}>
            <img src="/Logo.png" alt="Logo" />
            <div className={`${s.menu} ${menuOpen ? s.menuActive : ''}`}>
              <Link to={"/"}>Home</Link>
              <Link to={"/"}>About us</Link>
              <Link to={"/"}>Service</Link>
              <Link to={"/"}>Page</Link>
              <Link to={"/"}>Blog</Link>
            </div>

            <button className={s.contactButton}>Contact us</button>

            <div className={s.burger} onClick={toggleMenu}>
              <img src="/burger.svg" alt="Menu" />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
