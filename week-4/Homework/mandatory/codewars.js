function splitTheBill (objectOfPersons) {
    //code away...
    let sum = 0;
    let avg = 0;
    let count = 0;
    var diffrenceInSpending = 0;
    //count total spending in each group
    for (var amount in objectOfPersons) {
        
        sum=sum + objectOfPersons[amount];
    }
    //count number of people in the object group
    count = Object.keys(objectOfPersons).length;
    //count the average of all total spending
    avg = sum / count;
   //find out difference of spending --by substracting actual spending from average spending
    for (var amountSpend in objectOfPersons) {
        objectOfPersons[amountSpend] = Math.round((objectOfPersons[amountSpend] - avg)*100)/100;
        

    }
    return objectOfPersons; 
   
}
console.log(splitTheBill({ A: 20, B: 15, C: 10 }));

