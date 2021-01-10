import React from 'react';

import Aux from './../../../util/Aux';
import Button from './../../UI/Button/Button';

const OrderSummaryComponent = (props) => {
    const getIngredientComponent = () => (props.ingredients.map((ingredient, index) => (
            <li key={index}>
                <span>{index + 1}</span>.  
                <span style={{textTransform: 'capitalize'}}>{ingredient.name}</span>:
                {ingredient.total}
            </li>))
    );

    const ingredientsSummary = getIngredientComponent();

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients</p>
            <ul>
                { ingredientsSummary }
            </ul>
            <p><strong>Price: </strong>{props.price.toFixed(2)}$</p>
            <p>Continue to Checkout ? </p>
            <Button btnType={"Danger"} clicked={() => props.purchaseCancel()}>Cancel</Button>
            <Button btnType={"Success"} clicked={() => props.purchaseContinue()}>Continue</Button>
        </Aux>
    )
}

export default OrderSummaryComponent;
