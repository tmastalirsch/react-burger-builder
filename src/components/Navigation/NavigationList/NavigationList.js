import React from 'react';

import classes from './NavigationList.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationList = () => {

    return (
        <ul className={classes.NavigationList}>
            <NavigationItem link='#' active>Sozialberatung</NavigationItem>
            <NavigationItem link='#'>Insolvenzberatung</NavigationItem>
            <NavigationItem link='#'>Schuldnerberatung</NavigationItem> 
        </ul>
    )
}

export default NavigationList;
