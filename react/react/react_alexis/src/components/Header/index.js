import React from 'react';
import logo from './logo.png';
import HeaderNav from './HeaderNav';
import navList from './navList';
import './styles.css';


export default () => {  
  return (
    <div className = 'header'>
      <div className = 'wrapper'>
        <div className = 'img'>
          <img src={logo} alt='logo' />
        </div>
        <HeaderNav navList = {navList} />
      </div>
    </div>
  );
};