import React from 'react';

import classes from './Backdrop.module.css';

const BackdropComponent = (props) => {
    return (props.show) ? <div className={classes.Backdrop} onClick={() => props.clicked()}></div> : null;
}

export default BackdropComponent;