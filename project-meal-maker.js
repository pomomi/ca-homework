/*
Meal Maker
As a frequent diner, you love trying out new restaurants and experimenting with 
different foods. However, having to figure out what you want to order can be a 
time-consuming ordeal if the menu is big, and you want an easier way to be able 
to figure out what you are going to eat.

In this project, you’ll use JavaScript to randomly create a three-course meal 
based on what is available on a menu. We’ll keep running it until we’re 
satisfied with the generated meal!
*/

const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
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
    set appetizers(name) {
        this._courses.appetizers = name;
    },
    set mains(name) {
        this._courses.mains = name;
    },
    set desserts(name) {
        this._courses.desserts = name;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },      
    addDishtoCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        return this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const index = Math.floor(Math.random() * dishes.length);
        return dishes[index];
    },
    generateRandomMeal() {
        const app = this.getRandomDishFromCourse('appetizers');
        const des = this.getRandomDishFromCourse('desserts');
        const mai = this.getRandomDishFromCourse('mains');
        const totalPrice = app.price + des.price + mai.price;
        return `Today you will be served ${app.name} to start, followed by ${mai.name}. Your meal won't be complete without ${des.name}. The total cost will be $${totalPrice}, payable by cash, debit or credit.`;
    }
};

menu.addDishtoCourse('appetizers','deep-fried dill pickles',5.00);
menu.addDishtoCourse('appetizers','spinach dip with pita bread',8.00);
menu.addDishtoCourse('appetizers','loaded nachoes',9.00);

menu.addDishtoCourse('mains','butter chicken with garlic naan',12.00);
menu.addDishtoCourse('mains','tenderloin steak with new potatoes',21.00);
menu.addDishtoCourse('mains','deconstructed omlette avec catsup',8.00);

menu.addDishtoCourse('desserts','apple pie with vanilla ice cream',8.00);
menu.addDishtoCourse('desserts','chocolate brownie bonanza with caramel sauce',6.00);
menu.addDishtoCourse('desserts','chocolate truffle cheesecake',9.00);

let meal = menu.generateRandomMeal();
console.log(meal);

/* output: Today you will be served (app), followed by (main). 
Your meal won't be complete without (dessert). 
The total cost will be $($), payable by cash, debit or credit. */