/* 
A coffee machine is defined below. 
One can buy three different coffees.
Complete the methods "insertMoney" and "getCoffee" to match the expected result.

insertMoney takes an amount in parameter to add money in the coffee machine.
getCoffee takes a coffee type in parameter and dispends the selected coffee 
only if the inserted amount is greater or equal than the price of the coffee!
*/

let coffeeMachine = {
    brand: "Super Coffee",
    prices: {
        cappuccino: 2.40,
        blackCoffee: 1.50,
        flatWhite: 3.00
    },
    insertedAmount: 0,
    insertMoney: function (amount) {
        for (let money in this.prices) {
            if (this.prices[money] === amount) {
                this.getCoffee(money);
            }
            else {
                this.getCoffee('not allowed');
            }
        }
        
    },
    // getCoffee: function (coffee) {
        
    // };

    




