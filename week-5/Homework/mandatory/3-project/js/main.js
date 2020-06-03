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