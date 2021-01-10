import React, { useState } from 'react';
import Aux from '../../util/Aux';
import * as Util from '../../util/Util';

import classes from './Layout.module.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import MobileNavigation from '../../components/Navigation/MobileNavigation/MobileNavigation';
import SideLayer from './../../components/Navigation/SideLayer/SideLayer';
import GoogleMapBuilder from './../GoogleMapBuilder/GoogleMapBuilder';

const Layout = (props) => {

    const [state, setState] = useState({showMobileNavigation: false});
    const windowsSize = Util.useWindowsSize();
    
    const updateState = () => {
        setState((prev) => {
            return {showMobileNavigation: !prev.showMobileNavigation}
        });
    }

    const toggleMobileNavigationClosedHandler = () => updateState();
    const toggleMobileNavigationHandler = () => updateState();

    const isDesktopSize = (windowsSize.width > 499);

    const render = (isDesktopSize) ? (
            <Aux>
                <SideLayer/>
                {props.children}
            </Aux> 
        ) : props.children;

    return (
        <Aux>
            <Toolbar displayHeadline={isDesktopSize} isDrawerActive={state.showMobileNavigation} drawerToggleClicked={toggleMobileNavigationHandler} />
            {
                (isDesktopSize) ? (
                    null
                ) : <MobileNavigation 
                open={state.showMobileNavigation} 
                closed={toggleMobileNavigationClosedHandler}/>
            }
            
            <main className={classes.Content}>{render}</main>
            <footer className={classes.Footer} style={{width: '100%', border: '1px solid blue'}}>
                <GoogleMapBuilder/>
            </footer>
        </Aux>
    );
};  

export default Layout;