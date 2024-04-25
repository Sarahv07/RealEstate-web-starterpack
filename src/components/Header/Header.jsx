import React, { useState, useEffect } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(document.documentElement.clientWidth <= 800);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getMenuStyles = () => {
    if (isMobile) {
      return { right: menuOpened ? '0%' : '-100%' };
    }
  };

  return (
    <div>
      <section className='h-wrapper'>
        <div className="flexCenter paddings innerWidth h-container">
          <img src="./logo.png" alt="logo" width={200} />

          <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
            <div className="flexCenter h-menu" style={getMenuStyles()}>
              <NavLink exact to="/" activeClassName="active" onClick={() => setMenuOpened(false)}>Home</NavLink>
              <NavLink to="/gallery" activeClassName="active" onClick={() => setMenuOpened(false)}>Gallery</NavLink>
              <button className='button'>
                <NavLink to="/subscribe" activeClassName="active" onClick={() => setMenuOpened(false)}>Book Now</NavLink>
              </button>
            </div>
          </OutsideClickHandler>

          {isMobile && (
            <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
              <BiMenuAltRight size={30} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Header;