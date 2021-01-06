import React, { Component} from 'react';
import * as faker from 'faker';

import Aux from './../../util/Aux';

import Burger from './../../components/Burger/Burger';
import Controls from './../../components/Burger/Controls/Controls';

class BurgerBuilder extends Component {

    state = {
        ingredients: [
            {
                bacon: faker.random.number({min: 0, max: 2}),
                meat: faker.random.number({min: 0, max: 2}),
                cheese: faker.random.number({min: 0, max: 3}),
                salad: faker.random.number({min: 0, max: 1})
            },
            {
                bacon: faker.random.number({min: 0, max: 2}),
                meat: faker.random.number({min: 0, max: 2}),
                cheese: faker.random.number({min: 0, max: 3}),
                salad: faker.random.number({min: 0, max: 1})
            },
            {
                bacon: faker.random.number({min: 0, max: 2}),
                meat: faker.random.number({min: 0, max: 2}),
                cheese: faker.random.number({min: 0, max: 3}),
                salad: faker.random.number({min: 0, max: 1})
            },
            {
                bacon: faker.random.number({min: 0, max: 2}),
                meat: faker.random.number({min: 0, max: 2}),
                cheese: faker.random.number({min: 0, max: 3}),
                salad: faker.random.number({min: 0, max: 1})
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
        const ingredientCount = this.state.ingredients[index][type];
        const updatedIngredientCount = ingredientCount + 1;
        const updatedIngredient = {...this.state.ingredients[index]};

    }

    removeIngredientHandler(index, type)
    {

    }


    render() {
        return this.state.ingredients.map((ingredient, index) => (
            <Aux key={index}>
                <Burger ingredients={ingredient}/>
                <Controls />
            </Aux>
        ));
    }
}



export default BurgerBuilder;