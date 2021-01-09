import React from 'react';

import Aux from './../../../util/Aux';

const OrderSummaryComponent = (props) => {

    const { ingredients } = props;

    const ingredientsSummary = ingredients.map((ingredient, index) => (
        <li key={index}>
            <span>{index + 1}</span>.  
            <span style={{textTransform: 'capitalize'}}>{ingredient.name}</span>:
            {ingredient.total}
        </li>)
    );
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients</p>
            <ul>
                { ingredientsSummary }
            </ul>
            <p>Continue to Checkout</p>
        </Aux>
    )
}

export default OrderSummaryComponent;
