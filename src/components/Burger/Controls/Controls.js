import React from 'react';
import PropTypes from 'prop-types';

import Control from './Control/Control';

import classes from './Controls.module.css';

const ControlsComponent = (props) => {

    const isDisabled = (type) => {
        const ingredient = props.ingredients.find((ingredient) => ingredient.name === type);
        return !ingredient.total;
    }

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
                controls.map((ctrl, index) => {
                    return ( 
                        <Control 
                            key={index} 
                            label={ctrl.label} 
                            added={() => props.ingredientAdded(props.id, ctrl.type)}
                            removed={() => props.ingredientRemoved(props.id, ctrl.type)}
                            disabled={isDisabled(ctrl.type)}
                            />
                    )})
            }
            <button 
                className={classes.OrderButton} 
                disabled={!props.isPurchaseable}
                onClick={() => props.ordered()}>ORDER NOW</button>
        </div>
    )
}

ControlsComponent.propTypes = {
    id: PropTypes.number.isRequired,
    ingredients: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    isPurchaseable: PropTypes.string.isRequired,
    ingredientAdded: PropTypes.func.isRequired,
    ingredientRemoved: PropTypes.func.isRequired,
    ordered: PropTypes.func.isRequired,
}

export default ControlsComponent;