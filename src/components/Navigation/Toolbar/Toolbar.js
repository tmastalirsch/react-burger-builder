import React from 'react';

import classes from './Toolbar.module.css';

import Logo from './../../Logo/Logo';
import DrawerToggle from './../MobileNavigation/DrawerToggle/DrawerToggle';

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            {/* <h1 className={classes.Headline}>Sozialverband hilfebedürftiger Menschen e.V.</h1> */}
            <DrawerToggle isActive={props.isDrawerActive} clicked={props.drawerToggleClicked}/>
        </header>
    )
}


export default Toolbar;