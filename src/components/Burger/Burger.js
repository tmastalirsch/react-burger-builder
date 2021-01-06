import React from 'react';

import classes from './Burger.module.css';
import IngredientComponent from './Ingredient/IngredientComponent';

const BurgerComponent = (props) => {

    /** */
    const getIngredientComponent = (ingredients) => Object.keys(ingredients)
        .map((key) => [...Array(props.ingredients[key])]
                .map((_, index) => <IngredientComponent key={key + index} type={key}/>)
            )
        .reduce((current, previous) => current.concat(previous), []);
    /** */
    let ingredientComponent = getIngredientComponent(props.ingredients);

    if(ingredientComponent.length === 0){
        ingredientComponent = <p>Please start adding ingredients !</p>
    }

    return (
        <div className={classes.Burger}>
            <IngredientComponent type="bread-top"/>
                { ingredientComponent }
            <IngredientComponent type="bread-bottom"/>
        </div>
        
        
    )
}

export default BurgerComponent;