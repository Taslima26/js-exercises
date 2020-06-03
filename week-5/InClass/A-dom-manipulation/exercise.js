// /*
// Task 1
// =======
// Write JavaScript below that logs:
//     1. all the "p" element nodes of the document,
//     --> should log a list of nodes with a length of 6

//     2. the first div element node
//     --> should log the ".site-header" node

//     3. the element with id "jumbotron-text"
//     --> should log the "#jumbotron-text" node

//     4. all the "p" elements of contained inside  the .primary-content element node
//     --> should log a list of nodes with a length of 3

// */
// let allPTags = document.querySelectorAll('p');
// console.log(allPTags);


// let firstDivElement = document.querySelector('div');
// console.log(firstDivElement);

// let jumbotronText = document.getElementById('jumbotron-text');
// console.log(jumbotronText);

// let allPElement = document.getElementsByClassName('primary-content');
// console.log(allPElement);
// // for (let element; element < allPElement.length; element++){
// //     console.log(element[i]);
// // }
// /*
// Task 2
// ======


// When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
// */
// //get the element 
// let changPopupMessageButton = document.querySelector('#alertBtn');
// //define the function
// let popupMessage = function () {
//     alert('Thanks for visiting bikes for refugees');
    
// };

// //add an event
// changPopupMessageButton.addEventListener('click', popupMessage);

// /*
// Task 3
// =======

// Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
// */

// let changeBackgroundColorButton = document.getElementById('bgrChangeBtn');

// //define the function

// let changeBackgroundColor = function () {
//     document.body.style.backgroundColor = 'red';
// }


// //add an event

// changeBackgroundColorButton.addEventListener('click', changeBackgroundColor);
// /*
// Task 4
// ======

// When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
// */

// //get the element

// let addSomeTextButton = document.getElementById('addTextBtn');

// //define the function

// let addSomeText = function () {
//     let myParagraph = document.createElement('p');
//     var appendHere = document.querySelector('#mainArticles');
//     appendHere.appendChild(myParagraph);
//     myParagraph.innerHTML='This paragraph is added by Taslima! i hope it works.'
    
    
// };

// addSomeTextButton.addEventListener('click', addSomeText);



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var findLinks = document.getElementsByClassName('article-title');
console.log(findLinks);
for (let link in findLinks) {
    //link.style.fontSize = '200%';
    console.log(link);

}
//get the element
let makeLinksLargerBtn = document.querySelector('#largerLinksBtn')
//define callback function
let largerLinks = function () {
    var findLinks = document.querySelectorAll('.article-title');
    for (let link = 0; link < findLinks.length;link++) {
        findLinks[link].style.fontSize='200%'
   }
    
    
}

//define an event
makeLinksLargerBtn.addEventListener('click', largerLinks);

