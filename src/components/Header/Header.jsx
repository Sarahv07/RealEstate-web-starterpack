import React from 'react';
import './Header.css'
const Haeder = () => {
  return (
    <div>
      <section className='h-wrapper'>
        <div className="flexCenter paddings innerWidth h-container">

          <img src="./logo.png" alt="logo" width={200}/>

          <div className="flexCenter h-menu">
              <a href="">Home </a>
              <a href="">Gallery </a>
              <button className='button'>
                <a href="">contact</a>
              </button>
              
          </div>
        </div>
      </section>
    </div>
  );
}

export default Haeder;