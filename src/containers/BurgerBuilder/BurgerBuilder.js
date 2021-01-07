import React, { Component} from 'react';
import * as faker from 'faker';

import Aux from './../../util/Aux';

import Burger from './../../components/Burger/Burger';
import Controls from './../../components/Burger/Controls/Controls';


const INGREDIENTS_PRICE = {
    salad: 0.5,
    bacon: 1.0,
    meat: 1.5,
    cheese: 0.5,
}   
class BurgerBuilder extends Component {

    state = {
        burgers: [
            {
                ingredients: {
                    bacon: faker.random.number({min: 0, max: 2}),
                    meat: faker.random.number({min: 0, max: 2}),
                    cheese: faker.random.number({min: 0, max: 3}),
                    salad: faker.random.number({min: 0, max: 1})
                },
                price: faker.random.number({min: 3, max: 6}),
                purchaseable: false
            },
            {
                ingredients: {
                    bacon: faker.random.number({min: 0, max: 2}),
                    meat: faker.random.number({min: 0, max: 2}),
                    cheese: faker.random.number({min: 0, max: 3}),
                    salad: faker.random.number({min: 0, max: 1})
                },
                price: faker.random.number({min: 3, max: 6}),
                purchaseable: false
            },
            {
                ingredients: {
                    bacon: faker.random.number({min: 0, max: 2}),
                    meat: faker.random.number({min: 0, max: 2}),
                    cheese: faker.random.number({min: 0, max: 3}),
                    salad: faker.random.number({min: 0, max: 1})
                },
                price: faker.random.number({min: 3, max: 6}),
                purchaseable: false
            },
            {
                ingredients: {
                    bacon: faker.random.number({min: 0, max: 2}),
                    meat: faker.random.number({min: 0, max: 2}),
                    cheese: faker.random.number({min: 0, max: 3}),
                    salad: faker.random.number({min: 0, max: 1})
                },
                price: faker.random.number({min: 3, max: 6}),
                purchaseable: false
            },

        ]
    };

    getRandomIngredient()
    {
        const ingredients = ['bacon', 'meat', 'cheese', 'salad']
        return faker.random.arrayElement(ingredients);
    }

    getBurgersState(){
        return [...this.state.burgers];
    }

    setBurgerState(state){
        this.setState({ ...state });
    }

    getBurgerIngredients(index){
        return this.getBurgersState()[index]['ingredients'];
    }

    updatePurchaseState(index){
        const copyBurgerState = this.getBurgersState();
        const ingredients = this.getBurgerIngredients(index);
        const sum = Object.keys(ingredients).map(((key) => ingredients[key])).reduce((prev, curr) => prev + curr, 0);
        copyBurgerState[index]['purchaseable']= !sum;
        this.setBurgerState(copyBurgerState);
    }

    addIngredientHandler(index, type)
    {
        const copyBurgersState = this.getBurgersState
        copyBurgersState[index]['ingredients'][type]++;
        const additionPrice = INGREDIENTS_PRICE[type];
        copyBurgersState[index].price += additionPrice;
        this.setState({ ...copyBurgersState });
        this.updatePurchaseState(index);
    }

    removeIngredientHandler(index, type)
    {
        const copyBurgersState = this.getBurgersState();

        if(!copyBurgersState[index]['ingredients'][type]){
            return;
        }

        copyBurgersState[index]['ingredients'][type]--;
        const additionPrice = INGREDIENTS_PRICE[type];
        copyBurgersState[index].price -= additionPrice;
        this.setState({ ...copyBurgersState });
        this.updatePurchaseState(index);
    }


    render() {
        return this.state.burgers.map((burger, index) => {
            const ingredients = { ...burger.ingredients };

            for (let key in ingredients){
                ingredients[key] = !ingredients[key];
            }

            return (
            <Aux key={index}>
                <Burger ingredients={burger.ingredients}/>
                <Controls 
                    index={index}
                    price={burger.price} 
                    isPurchaseable={burger.purchaseable}
                    ingredientRemoved={this.removeIngredientHandler.bind(this)} 
                    ingredientAdded={this.addIngredientHandler.bind(this)}
                    disabled={ingredients} 
                />
            </Aux>)
        });
    }
}



export default BurgerBuilder;