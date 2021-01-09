import React from 'react';

import classes from './Burger.module.css';
import IngredientComponent from './Ingredient/IngredientComponent';

const BurgerComponent = (props) => {

    /** */
    const getIngredientComponent = (ingredients) => ingredients
        .map((ingredient) => [...new Array(ingredient.total)]
            .map((index) =>  <IngredientComponent key={index} type={ingredient.name}/>))
    /** */
    let ingredientComponent = getIngredientComponent(props.ingredients);
    const total = props.ingredients.reduce((prev, curr) => prev+ curr.total, 0);
    if( total === 0){
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