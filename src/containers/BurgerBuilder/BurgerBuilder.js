import React, { useState } from 'react';

import Aux from './../../util/Aux';
import * as Http from './../../util/Http';

import ModalComponent from '../../components/UI/Modal/Modal'; 
import BurgerComponent from './../../components/Burger/BurgerComponent';
import Controls from './../../components/Burger/Controls/Controls';
import OrderSummaryComponent from './../../components/Burger/OrderSummary/OrderSummary';

const BurgerBuilder = () => {

    const PRICES_ENDPOINT = 'prices';
    const BURGERS_ENDPOINT = 'burgers';

    const {state: burgers, setState: setBurgers, isLoading: isBurgersLoading} = Http.useHttpGet(BURGERS_ENDPOINT, []);
    const {state: prices, isLoading: isPriceLoading } = Http.useHttpGet(PRICES_ENDPOINT, []);
    const [purchasing, setPurchasingState] = useState(false);

    const isLoading = isBurgersLoading && isPriceLoading;

    /** @returns {{id: string, ingredients: array, price: number, purchase: boolean}[]} */
    const getBurgers = () => [...burgers];

    const updateBurger = (burger) => {
        const burgers = getBurgers().map((b) => (b.id === burger.id) ? burger : b); 
        setBurgers([...burgers]);
    } 

    /** @returns {{id: string, ingredients: array, price: number, purchase: boolean}} */
    const getBurgerById = (id) => getBurgers().find((burger) => burger.id === id);

    /**
     * @param {string} type
     * @returns {{id: string, price: number ,type: string}} 
     */
    const getPriceByType = (type) => prices.find((price) => price.type === type);


    const getBurgerIngredients = (index) => {
        const burger = getBurgerById(index);
        return burger['ingredients'];
    }

    const updatePurchaseState = (id) => {
        const burger = getBurgerById(id);
        const ingredients = getBurgerIngredients(id);
        const sum = ingredients.reduce((prev, curr) => prev + curr.total, 0);
        burger.purchaseable = !!sum;
        updateBurger(burger);
    }

    const addIngredientHandler = (id, type) => {
        const burger = getBurgerById(id);
        const ingredients = getBurgerIngredients(id);
        burger.ingredients = ingredients.map((ingredient) => {
            if (ingredient.name === type) ingredient.total++;
            return ingredient;
        });
        const additionPrice = getPriceByType(type);
        burger.price += additionPrice.price;
        updateBurger(burger);
        updatePurchaseState(id);
    }

    const removeIngredientHandler = (id, type) => {
        const burger = getBurgerById(id)
        const ingredients = getBurgerIngredients(id);

        const ingredient = ingredients.find((ingredient) => ingredient.name === type);

        if(!ingredient.total) {
            return;
        } else {
            burger.ingredients = ingredients.map((ingredient) => {
                if (ingredient.name === type && ingredient.total) ingredient.total--;
                return ingredient;
            });
    
            const additionPrice = getPriceByType(type);
            burger.price -= additionPrice.price;
            updateBurger(burger);
            updatePurchaseState(id);
        }
    }

    const purchaseHandler = () => {
        setPurchasingState(!purchasing);
    }

    const modelCloseHandler = () => {
        setPurchasingState(false);
    }

    const purchaseCancelHandler = () => {
        setPurchasingState(false);
    }

    const purchaseContinueHandler = () => {

    }

    return (
        <Aux> 
            {
                (isLoading) ? (
                    <p>Loading ...</p>
                ) : getBurgers().map((burger) => {
                    return (
                    <Aux key={burger.id}>
                        <ModalComponent close={modelCloseHandler} show={purchasing}>
                            <OrderSummaryComponent 
                            price={burger.price}
                            ingredients={burger.ingredients}
                            purchaseCancel={purchaseCancelHandler}
                            purchaseContinue={purchaseContinueHandler}
                            />
                        </ModalComponent>
                        <BurgerComponent ingredients={burger.ingredients}/>
                        <Controls 
                            id={burger.id}
                            price={burger.price} 
                            isPurchaseable={burger.purchaseable}
                            ingredients={burger.ingredients} 
                            ingredientRemoved={removeIngredientHandler} 
                            ingredientAdded={addIngredientHandler}
                            ordered={purchaseHandler}
                        />
                    </Aux>)
            })
            } 
        </Aux>
    );

}



export default BurgerBuilder;