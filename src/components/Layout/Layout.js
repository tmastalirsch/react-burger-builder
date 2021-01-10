import React, { useState } from 'react';
import Aux from './../../util/Aux';
import * as Util from './../../util/Util';

import classes from './Layout.module.css';

import Toolbar from './../Navigation/Toolbar/Toolbar';
import MobileNavigation from '../Navigation/MobileNavigation/MobileNavigation';
import SideLayer from './../Navigation/SideLayer/SideLayer';

const Layout = (props) => {

    const [state, setState] = useState({showMobileNavigation: false})
    const windowsSize = Util.useWindowsSize();
    
    const updateState = () => {
        setState((prev) => {
            return {showMobileNavigation: !prev.showMobileNavigation}
        });
    }

    const toggleMobileNavigationClosedHandler = () => updateState();
    const toggleMobileNavigationHandler = () => updateState();


    return (
        <Aux>
            <Toolbar isDrawerActive={state.showMobileNavigation} drawerToggleClicked={toggleMobileNavigationHandler} />
            {
            
            (windowsSize.width > 499) ? (
                <SideLayer/>
                ) : (
                <MobileNavigation 
                open={state.showMobileNavigation} 
                closed={toggleMobileNavigationClosedHandler}/>) 
            }
            <main className={classes.Content}>{props.children}</main>
            <footer>Footer</footer>
        </Aux>
    );
};  

export default Layout;