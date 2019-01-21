import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.scss';
const logoIcon = require('../../assets/pondok_programmer.png')

export default function index() {
    return (
        <div className="header">    
            <Link className="wrap-logo" to="/">
                <img src={logoIcon} alt="logo" className="logo"/>            
            </Link>                    
            <p className="text-header">Curriculum React JS</p>
        </div>
    )
}