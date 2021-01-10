import React from 'react';

import logo from '../../assets/images/logo.png';

import classes from './Logo.module.css';

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt="SVHM"></img>
        </div>
    )
}

export default Logo;