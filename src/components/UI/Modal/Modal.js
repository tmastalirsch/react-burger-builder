import React from 'react';

import classes from './Modal.module.css';

import Aux from './../../../util/Aux';
import BackdropComponent from './../Backdrop/BackdropComponent';

const ModalComponent = (props) => {

    return (
        <Aux>
            <BackdropComponent clicked={props.modalClose} show={props.show}/>
            <div 
                className={classes.Modal}
                style={
                    {
                        transform: props.show ? 'translateX(0)' : 'translateY(-100)',
                        opacity: props.show ? '1' : '0',
                        visibility: props.show ? 'visible' : 'hidden'
                    }
                    }>
                    {props.children}
            </div>
        </Aux>
    )
}

export default ModalComponent;