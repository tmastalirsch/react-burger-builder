import React from 'react';
import Aux from './../../util/Aux';
import classes from './Burger.module.css';
import IngredientComponent from './Ingredient/IngredientComponent';

const BurgerComponent = (props) => {

    return (
        <Aux>
            <div className={classes.Burger}>
                <IngredientComponent type="bread-top"/>
                <IngredientComponent type="bacon"/>
                <IngredientComponent type="cheese"/>
                <IngredientComponent type="meat"/>
                <IngredientComponent type="salad"/>
                <IngredientComponent type="bread-bottom"/>
            </div>
            <div className={classes.Burger}>
                <IngredientComponent type="bread-top"/>
                <IngredientComponent type="bacon"/>
                <IngredientComponent type="meat"/>
                <IngredientComponent type="bread-bottom"/>
            </div>
            <div className={classes.Burger}>
                <IngredientComponent type="bread-top"/>
                <IngredientComponent type="cheese"/>
                <IngredientComponent type="meat"/>
                <IngredientComponent type="salad"/>
                <IngredientComponent type="bread-bottom"/>
            </div>
        </Aux>
        
        
    )
}

export default BurgerComponent;