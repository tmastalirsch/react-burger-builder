import React from 'react';

import classes from './SideLayer.module.css';
import NavigationList from './../NavigationList/NavigationList';

const SideLayer = () => {

    return (
        <aside className={classes.SideLayer}>
            <nav>
                <NavigationList/>
            </nav>
        </aside>

    )


}

export default SideLayer;