const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appertizers) {
        this._courses.appetizers = appertizers;
    },

    set main(mains) {
        this._courses.mains = mains;
    },

    set desserts(desserts) {
        this._courses.dessets = desserts;
    },
    get courses() {
        return {
            appertizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        // return a dish from `dishes` by using `randomIndex`
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizers = this.getRandomDishFromCourse('appetizers');
        const mains = this.getRandomDishFromCourse('mains');
        const desserts = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizers.price + mains.price + desserts.price;
        return `Your meal is ${appetizers.name}, ${mains.name}, ... The price is ${totalPrice}.`;
    }
};
menu.addDishToCourse('appetizers', 'salad', 4);
menu.addDishToCourse('appetizers', 'banana', 5);
menu.addDishToCourse('appetizers', 'mango', 6);

menu.addDishToCourse('mains', 'salmon', 5);
menu.addDishToCourse('mains', 'steak', 7);
menu.addDishToCourse('mains', 'pork', 9);

menu.addDishToCourse('desserts', 'cream', 5);
menu.addDishToCourse('desserts', 'matcha', 10);
menu.addDishToCourse('desserts', 'juice', 15, 5);

const meal = menu.generateRandomMeal();
console.log(meal);

