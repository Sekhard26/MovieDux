import React from 'react';
import '../styles.css';
import favlogo from '../assets/logo.png'
export default function Header() {
    return (<div className='header'>
        <img src={favlogo} alt="Moviedux" className='logo' />
        <h2 className='app-subtitle'>It's time for some Movie Magic!</h2>
    </div>);
}