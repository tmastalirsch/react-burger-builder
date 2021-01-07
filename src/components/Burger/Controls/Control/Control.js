import React from 'react';
import PropTypes from 'prop-types';

import classes from './Control.module.css';

const ControlComponent = (props) => {

    return (
        <div className={classes.Control}>
            <div className={classes.Label}>{props.label}</div>
            <button 
                className={classes.Less} 
                onClick={props.removed} 
                disabled={props.disabled}>Less</button>
            <button 
                className={classes.More} 
                onClick={props.added} 
                >More</button>
        </div>
    )
}

ControlComponent.propTypes = {
    label: PropTypes.string.isRequired,
    removed: PropTypes.func.isRequired,
    added: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
}

export default ControlComponent;