import React from 'react';

import classes from './DrawerToggle.module.css';

const DrawerToggle = (props) => {
    let attachedClasses = [classes.DrawerToggle];

    if(props.isActive){
        attachedClasses = [classes.DrawerToggle];
    }
    return (
        <div 
            className={attachedClasses.join(' ')} 
            onClick={() => props.clicked()}>
                <div></div>
                <div></div>
                <div></div>
            </div>
    )
}

export default DrawerToggle;