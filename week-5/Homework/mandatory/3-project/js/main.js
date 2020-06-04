// When clicking ** blue ** it should change:

// - Div tag with the id ** Jumbotron ** background color to`#588fbd`
//     - ** Donate a bike ** button background color to`#ffa500`
//         - ** Volunteer ** button background color to`black` and text color to`white`

//get an element

let blueBtn = document.querySelector('#blueBtn')




let blueButtonChanged = function () {
    
    let DonateABikeButton = document.querySelector('.buttons');
    
    //Donate a bike background color change.
    DonateABikeButton.style.backgroundColor = '#ffa500';
    let voluenteerButton = document.querySelector('.btn-secondary');
    //voluenteer button color change.
    voluenteerButton.style.backgroundColor = 'black';
    voluenteerButton.style.color = 'white';
    //div tag with id ** jumbotron ** background color change
    let divTagWithIdJumbotoron = document.querySelector('.Jumbotron');
    divTagWithIdJumbotoron.style.backgroundColor = `#588fbd`;
    
    
   // voluenteerButton.style.backgroundColor = 'green';
    
}

blueBtn.addEventListener('click', blueButtonChanged);



// - When clicking ** orange ** it should change:

// - Div tag with the id ** Jumbotron ** background color to`#f0ad4e`
//     - ** Donate a bike ** button background color to`#5751fd`
//         - ** Volunteer ** button background color to`#31b0d5` and text color to`white`

let orangeButton = document.getElementById("orangeBtn");
console.log(orangeButton);

let orangeButtonClicked = function ()
{
    let DonateABikeButton = document.querySelector('.buttons');
    DonateABikeButton.style.backgroundColor = '#5751fd';
    let divTagWithIdJumbotoron = document.querySelector('.Jumbotron');
    divTagWithIdJumbotoron.backgroundColor = '#f0ad4e';
    let voluenteerButton = document.querySelector('.btn-secondary');
    voluenteerButton.style.backgroundColor = '#31b0d5';


}

orangeButton.addEventListener('click', orangeButtonClicked);


// When clicking ** green ** it should change:
// - Div tag with the id ** Jumbotron ** background color to`#87ca8a`
//     - ** Donate a bike ** button background color to`black`
//         - ** Volunteer ** button background color to`#8c9c08`

let greenButton = document.getElementById('greenBtn');

let greenButtonClicked = function () {
    let DonateABikeButton = document.querySelector('.buttons');
    DonateABikeButton.style.backgroundColor = 'black';
    let divTagWithIdJumbotoron = document.querySelector('.Jumbotron');
    divTagWithIdJumbotoron.backgroundColor = '#87ca8a';
    let voluenteerButton = document.querySelector('.btn-secondary');
    voluenteerButton.style.backgroundColor = '#8c9c08';
}

greenButton.addEventListener('click', greenButtonClicked);


// Just below the buttons, there's a form called **Register with us today**.

// Continue working in `./js/main.js` to add the following functionality:

// When the submit button is pressed, it should check that all the form fields are valid:

// - The ** Email address **, ** Your name ** and ** Describe yourself ** fields need to be non - empty(Hint: their`value` length has to be greater than zero)
//     - For the ** Email Address ** field also check if it contains the`@` character

// For all the fields that invalid, it should make their background color`red`.
// If all the fields are valid, when you click ** Submit ** it should:

// - Display an alert to thank you for filling out the for.
// - Blank out(make empty) all the text fields


//let form = document.querySelector('#myForm');
let submitButton = document.querySelector("form > button");

//let submitButton=document.querySelector("#content > div.row > div.primary-content.col-lg-8 > form > button")
let exampleTextInput = document.querySelector("#example-text-input");
let exampleTextArea = document.querySelector("#exampleTextarea");
let exampleTextEmailArea = document.querySelector("#exampleInputEmail1");

let formSubmitButtonPressed = function () {
    
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (exampleTextInput.value.length <= 0) {
        exampleTextInput.style.backgroundColor = 'red';
        alert('please enter valid name');
        
    }
    else if (exampleTextArea.value.length <= 0) {
        exampleTextArea.style.backgroundColor = 'red';
        alert('please enter valid information');
    }
        
    
    else if (!exampleTextEmailArea.value.length >= 0 && exampleTextEmailArea.matches(mailformat)) {
        
        exampleTextEmailArea.style.backgroundColor = 'red';
        alert('please enter valid email address');
    }
}

//define event function

submitButton.addEventListener('click', formSubmitButtonPressed)



//registerButton.addEventListener('click', registerbuttonPressed);
