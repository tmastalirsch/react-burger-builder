import * as Http from '../util/Http'


/**
 * @param {string} id 
 * @param {array} ingredients 
 * @param {number} price 
 * @param {string|boolean} purchaseable 
 */
class Burger {

    /**
     * @param {string} id 
     * @param {array} ingredients 
     * @param {number} price 
     * @param {string|boolean} purchaseable 
     */
    constructor(id, ingredients = [], price = 0, purchaseable = false)
    {
        this.id = id
        this.ingredients = ingredients
        this.price = price
        this.purchaseable = purchaseable
    }

    get id() {
        return this.id;
    }

    get ingredients() {
        return this.ingredients;
    }

    set ingredients(ingredients) {
        this.ingredients = ingredients;
    }

    get price(){
        return this.price
    }

    set price(price){
        this.price = price;
    }

    get purchaseable() {
        return this.purchaseable
    }

    set purchaseable(purchaseable){
        this.purchaseable = purchaseable
    }

    isPurchaseable(){
        return this.purchaseable;
    }

    /**
     * 
     * @param {string} id 
     * @param {array} ingredients 
     * @param {number} price 
     * @param {string|boolean} purchaseable 
     */
    static create(id, ingredients, price, purchaseable){
        return new Burger(id, ingredients, price, purchaseable)
    } 

    /**
     * 
     * @param {{id: string, ingredients: array, price: number, purchase: boolean}[]} burgers 
     * @returns {BurgerClass[]}
     */
    static createFromArray(burgers) {
        return burgers.map((burger) => new Burger(burger.id, burger.ingredients, burger.price, burger.purchaseable));
    }

    /**
     * @async
     * @returns {Response}
     */
    static async makeRequest(){
        return Http.get(Burger.getAPIEndpoint())
    }  

    /**
     * @returns {string}
     */
    static getAPIEndpoint() {
        return 'burgers'
    }

}


export default Burger;