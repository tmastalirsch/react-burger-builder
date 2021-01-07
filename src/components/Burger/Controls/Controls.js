import React from 'react';
import PropTypes from 'prop-types';

import Control from './Control/Control';

import classes from './Controls.module.css';

const ControlsComponent = (props) => {

    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Meat', type: 'meat'},
        {label: 'Cheese', type: 'cheese'},
    ];

    return (
        <div className={classes.Controls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}$</strong></p>
            {
                controls.map((ctrl, index) => (
                    <Control 
                        key={index} 
                        label={ctrl.label} 
                        added={() => props.ingredientAdded(props.index, ctrl.type)}
                        removed={() => props.ingredientRemoved(props.index, ctrl.type)}
                        disabled={props.disabled[ctrl.type]}
                        />)
                )
            }
            <button 
                className={classes.OrderButton} 
                disabled={props.isPurchaseable}>ORDER NOW</button>
        </div>
    )
}

ControlsComponent.propTypes = {
    index: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    isPurchaseable: PropTypes.bool.isRequired,
    ingredientAdded: PropTypes.func.isRequired,
    ingredientRemoved: PropTypes.func.isRequired,
    disabled: PropTypes.object.isRequired,
}

export default ControlsComponent;