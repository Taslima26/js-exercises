// Take an array and remove every second element out of that 
//array.Always keep the first element and start removing with the next element.

//     Example://
myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
function removeEveryOther(arr) {
    //your code here
    for (let i = 0; i < arr.length; i++){
        arr.splice(i + 1, 1);
    }
    return arr;
    

}

console.log(removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Keep']));