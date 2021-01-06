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
                price: faker.random.number({min: 3, max: 6})
            },
            {
                ingredients: {
                    bacon: faker.random.number({min: 0, max: 2}),
                    meat: faker.random.number({min: 0, max: 2}),
                    cheese: faker.random.number({min: 0, max: 3}),
                    salad: faker.random.number({min: 0, max: 1})
                },
                price: faker.random.number({min: 3, max: 6})
            },
            {
                ingredients: {
                    bacon: faker.random.number({min: 0, max: 2}),
                    meat: faker.random.number({min: 0, max: 2}),
                    cheese: faker.random.number({min: 0, max: 3}),
                    salad: faker.random.number({min: 0, max: 1})
                },
                price: faker.random.number({min: 3, max: 6})
            },
            {
                ingredients: {
                    bacon: faker.random.number({min: 0, max: 2}),
                    meat: faker.random.number({min: 0, max: 2}),
                    cheese: faker.random.number({min: 0, max: 3}),
                    salad: faker.random.number({min: 0, max: 1})
                },
                price: faker.random.number({min: 3, max: 6})
            },

        ]
    };

    getRandomIngredient()
    {
        const ingredients = ['bacon', 'meat', 'cheese', 'salad']
        return faker.random.arrayElement(ingredients);
    }

    addIngredientHandler(index, type)
    {
        const copyBurgersState = [...this.state.burgers];
        copyBurgersState[index]['ingredients'][type]++;
        const additionPrice = INGREDIENTS_PRICE[type];
        copyBurgersState[index].price += additionPrice;
        this.setState({ ...copyBurgersState });

    }

    removeIngredientHandler(index, type)
    {

    }


    render() {
        return this.state.burgers.map((burger, index) => (
            <Aux key={index}>
                <Burger ingredients={burger.ingredients}/>
                <Controls index={index} ingredientAdded={this.addIngredientHandler.bind(this)} />
            </Aux>
        ));
    }
}



export default BurgerBuilder;