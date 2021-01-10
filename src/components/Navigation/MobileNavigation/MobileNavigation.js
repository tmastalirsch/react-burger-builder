import React from 'react';

import NavigationList from '../NavigationList/NavigationList';
import Aux from './../../../util/Aux';
import BackdropComponent from './../../UI/Backdrop/BackdropComponent';

import classes from './MobileNavigation.module.css';

const MobileNavigation = (props) => {

    let attachedClasses = [classes.MobileNavigation, classes.Close];

    if(props.open){
        attachedClasses = [classes.MobileNavigation, classes.Open];
    }

    return (
        <Aux> 
            <BackdropComponent show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationList/>
                </nav>
            </div>
        </Aux>
    );
}


export default MobileNavigation;