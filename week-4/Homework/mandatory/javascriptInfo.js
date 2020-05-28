// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

var user = {
    name: 'John',
    surname: 'Smith',
};

user.name = 'Pete';
user.surname = 'Smith';
delete user.name;
console.log(user.name);
console.log(user.surname);
console.log(user);

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

function isEmpty(obj) {
    //if the loop has started it has propeties
    for (key in obj) {
        return false;
    }
    return true;
}
let schedule = {};
console.log(isEmpty(schedule))

// We have an object storing salaries of our team:

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum.Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

function sumSalaries(salaries) {
    var sum = 0;
    for (var i in salaries) {
        sum = sum + salaries[i];
    }
    return sum;
}

console.log(sumSalaries(salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}))


//console.log(menu);


function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

console.log(multiplyNumeric(obj =
{
    width: 200,
    height: 300,
    title: "My menu"
}));
    

multiplyNumeric(menu);