import React from 'react'

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
            {
                controls.map((ctrl, index) => (
                    <Control 
                        key={index} 
                        label={ctrl.label} 
                        added={() => props.ingredientAdded(props.index, ctrl.type)}/>)
                )
            }
        </div>
    )
}


export default ControlsComponent;