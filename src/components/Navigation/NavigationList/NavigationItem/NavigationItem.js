import React from 'react';

import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {

    let attachedClasses = [classes.NavigationItem];

    if(props.active){
        attachedClasses = [classes.NavigationItem, classes.active];
    }

    return (
        <li className={attachedClasses.join(' ')}>
            <a 
                className={props.active ? classes.active :  null}
                href={props.link}
                >{props.children}</a>
        </li>
    )
}


export default NavigationItem;