/*
As you you can have an Array of Objects, you can also store Arrays in Objects.
In this exercise, you'll practice:
 - How to loop through the properties (keys) of an Object and read its values.
 - How to access Array stored inside Object.
 - How to access to a specific property of an array and set it.

You're going shopping, and you need a shopping list. You've already created your weekly meal plan
that contains the missing ingredients to your menus. It is stored in the "weeklyMealPlan" object.

Complete the exercises below.
*/

// Here is your 
let weeklyMealPlan = {
  monday: ["Cheese", "Eggs", "Tomato", "Paprika", "Leek"],
  tuesday: ["Wrap", "Tuna", "Canned beans", "Cheese", "Carrot", "Aubergine"],
  wednesday: ["Orange Juice", "Apple", "Ananas", "Black tea"],
  thursday: ["Lamb", "Salt", "Bulgur", "Potato"],
  fridray: ["Rice milk", "Blueberries", "Porridge", "Banana", "Cinnamon"],
  saturday: ["Olive oil", "Potato", "Salmon", "Asparagus"],
  sunday: []
};

/*
Exercise 1:
  Loop through the weekly meal plan object to gather weakly ingredients into the weeklyGroceriesToBuy array.
  Then use console.log() to print out the list.
*/

console.log('Ex-1 Weekly groceries items to buy!')
let weeklyGroceriesToBuy = [];
for (dayOfWeek in weeklyMealPlan) {
     for (let grocerieItem = 0; grocerieItem < weeklyMealPlan[dayOfWeek].length;grocerieItem++)
    weeklyGroceriesToBuy.push(weeklyMealPlan[dayOfWeek][grocerieItem]);
  //console.log('counter', weeklyMealPlan[dayOfWeek].length);
}
  console.log()
  console.log(weeklyGroceriesToBuy);




/*
Exercise 2:
  Loop through your list again, but now only collect the weekend items into the weeklyGroceriesToBuy array.
  Thecn use console.log() to print out the list.
*/
// Gather weekend item names into this array
console.log('Weekend groceries items to buy')
  let weekendGroceriesToBuy = [];
for (let dayOfWeek in weeklyMealPlan) {

  if (dayOfWeek === 'saturday' || dayOfWeek === 'sunday') {
    for (foodItems = 0; foodItems < weeklyMealPlan[dayOfWeek].length; foodItems++) {
     
      weekendGroceriesToBuy.push(weeklyMealPlan[dayOfWeek][foodItems]);
    }
  }
}
  console.log();
  console.log(weekendGroceriesToBuy);
 
// }



/*cl
Exercise 2:
  Loop through your weekly meal plan:
    - count how many ingredients you should buy per each day
    - and update the corresponding properties of numberOfItemsPerWeak object.

  Finally use console.log() to print out the Object.
*/
// Gather weekend item names into this array
let numberOfItemsPerWeak = {
  monday: 0,
  tuesday: 0,
  wednesday: 0,
  thursday: 0,
  fridray: 0,
  saturday: 0,
  sunday: 0
};
//find number of items in each week array
for (var weekDay in numberOfItemsPerWeak) {
  for (var day in weeklyMealPlan) {
    if (weekDay === day) {
       numberOfItemsPerWeak[weekDay] = weeklyMealPlan[day].length;
    }
  }
}
  console.log();
  console.log(numberOfItemsPerWeak);
