/*
 In this exercise you will deal with Objects stored in array and DOM manipulation with JavaScript.
 From now, exercise descriptions don't provide detailed examples about input and output of functions.
 You should be already able to read and understand the code in order to extract the necessary information
 you need to implement functions' body.
 */

/*
 Optional question:

 Notice how this JavaScript file linked to the index.html file.
 What do you think when this JavaScript file is being executed?

 When you finished this exercise try to move the script tag around the Div tag with the id "content",
 refresh the page and observe what happens. (This should answer the question above.)
 
 What do you think why this changes shouldn't work?
 */
// LEAVE YOUR ANSWER HERE (THIS IS OPTIONAL)


/**
 * This function recieves a lists of people. Each object should contain the name and the occupation of a person.
 * Look for usage of the function in the code and see what variable is passed into it as an argument.
 * 
 * Create and insert the below HTML elements to the DOM for each of Objects in the Array as follows:
 *  1. Add a <h1> tag to the website containing the name of the person
 *  2. Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML elements should go inside the Div tag with the id "content".
 * 
 * An example "content" div should look like:
 * <div id="content">
 *      <h1>Mario</h1>
 *      <h2>Plumber</h2>
 *      <h1>Luigi</h1>
 *      <h2>Plumber</h2>
 * </div>
 */
// let people = [
//   { name: "Chris", job: "Teacher" },
//   { name: "Joanna", job: "Student" },
//   { name: "Boris", job: "Prime Minister" }
// ];
function insertPeopleData(people) {
  var arrayLength = people.length;
  if (arrayLength > 0) {

    for (let i in people) {
  
      //console.log(people.name[i]);
      var element1 = document.createElement("h1");
      
      var t1 = document.createTextNode(people[i].name);
      element1.appendChild(t1);
      document.body.appendChild(element1);
   
      var element3 = document.createElement("h2");
      var t3 = document.createTextNode(people[i].job);
      element1.appendChild(t3);
      document.body.appendChild(element3);
    }
   
  }
  
  }


//   //Write your code in here
// }

/**
 *
 * Create a list of shopping items using an unordered HTML list.
 * The input of this function is a simple Array of Strings, look for the concrete example in the code.
 * 
 * All of your HTML elements should go inside the Div tag with the id "content".
 *
 * Hint for type of lists in HTML: https://www.w3schools.com/html/html_lists.asp
 */
let myShoppingList = ['Pizza', 'Pasta', 'Milk', 'Meat', 'Chicken', 'Mangos', 'Strawberries'];
//get the container

function insertShoppingList(myShoppingList) {
  //get the container 
  let container = document.getElementById('content');
  //calculate the length of the array.
  let arrayLength = myShoppingList.length;
  if (arrayLength > 0) {
    //create an unorder list if element present in array.
    var myList = document.createElement('ul');
    //add  class name to a list
    myList.className = 'myClass';
    //iterate through an array
    for (let i = 0; i < arrayLength; i++) {
      
      //create a list item for every element

      let listItem = document.createElement('li');
      
      //create a textnode to store the value

      let listValue = document.createTextNode(myShoppingList[i]);

      //append value in the list item 
      listItem.appendChild(listValue);
      
      //append the list item in the list
      myList.appendChild(listItem);
    }

      container.appendChild(myList);
    
  }
    else {
      var message = document.createTextNode('Node friends');
      container.appendChild(message);
    }
  
  }


  //Write your code in here


/**
 * I'd like to display my three favorite books inside a nice webpage!
 * 
 * Iterate through the array of books passed into this function and insert each book to page as follows:
 *   - Create a <ul> list and display each book details in <li> element.
 *   - For each book, create a <p> element with the book title and author and append it to the page.
 *   - Add an <img> after <p> element to each book that links to a URL of the book cover.
 *     You should find an appropriate image to each book.
 *   - Change the style of the book depending on whether you have read it (green) or not (red).*
 * 
 * Find in the code what properties a book object has in the array.
 *  
 * All of your HTML elements should go inside the Div tag with the id "content".
 * 
 * The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
 */
let bookImageArray = ['https://images-eu.ssl-images-amazon.com/images/I/81zpLhP1gWL._AC_UL160_.jpg',
  'data:image/jpeg;base64,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',
  "https://imagery.pragprog.com/products/595/tpp20.jpg?1557173963"]
function insertBooks(books) {
 
//   //Write your code in here
//  get the content id by using getElementsById method
  let container = document.getElementById('content');
// //creating unOrdered list
  let unOrderList = document.createElement('ul');
  unOrderList.style.display = 'flex';
//   //iterating our each property in books object
  //for (let item in books) {
  for (let item = 0; item < books.length; item++) {
    
    //     //creating list items for each property.
    let listItem = document.createElement('li');
    listItem.style.margin = '10px';
    listItem.style.height = '250px';
    listItem.style.listStyle = 'none';
    let bookParagraph = document.createElement('p');
    let bookDescription = document.createTextNode(books[item].title + ' : ' + books[item].author + '.');
    
    
    //     //attaching listItem tpo unOrderedlist
    listItem.appendChild(bookDescription)
    listItem.appendChild(bookParagraph);

    let bookImage = document.createElement('img');
    bookImage.style.width = '70px';
    bookImage.style.height = '70px';
    bookImage.style.margin = '10px';
    bookImage.src = bookImageArray[item];
    // bookImg.src = ;
    // //     //creating text node for each title and author pair in books object.
    listItem.appendChild(bookImage);
   
    //     //creating paragraph for each list item
    //let bookParagraph = document.createElement('p');
    
    //     //attaching paragraph to unordered list
    //bookParagraph.appendChild(unOrderList);
    if (books[item].alreadyRead) {
      listItem.style.backgroundColor = 'green';
    }
    else {
      listItem.style.backgroundColor = 'red';
    }
    unOrderList.appendChild(listItem);

  }
//   //attaching unordered list to main container as required.
 container.appendChild(unOrderList);
  
     }
    
  


// //DO NOT EDIT BELOW HERE





let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

insertPeopleData(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

insertShoppingList(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

insertBooks(books);
