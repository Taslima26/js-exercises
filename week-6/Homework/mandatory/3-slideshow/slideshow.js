


// Write your code here
//somehow get images in to that div
//I can load first image initially with 
//browser start and next button will load remaining images eventually as button pressed ?


const imagesArray = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg'];
//this is the div where I will display the images
let sliderImage = document.querySelector('.sliderImage')
let count = 0;

function previousImage() {
    
    displayCounter.textContent = `This is an  image number ${count}`;
    if (count <= 0) {
    //if count passed the full array set the count equal to the length of the array.
        count = imagesArray.length;
    }
    //decrease the counter which means it will go on previous
    //element in array as each time as back 
    //button pressed.
    count--;
    //call setImage function which will set slider in the image
    return setImage();
}

function nextImage() {
   
    displayCounter.textContent = `This is an  image number ${count}`;
    if (count >= imagesArray.length - 1) {
        count = -1;
    }
    
    count++;
    return setImage();
}
function autoForward() {
    if (count > 0) {
        
        count = imagesArray.length - 1;
        displayCounter.textContent = `This is an  image number ${count}`;
        return setImage();
    
    }
}

function autoBackward() {
    if (count > 0) {
        count = 0;
        displayCounter.textContent = `This is an  image number ${count}`;
        return setImage();

    }
}
function setImage() {

    return sliderImage.setAttribute('src', 'images/' + imagesArray[count]);
    
    
}
let displayCounter = document.querySelector("#displayCounter");
let backButton = document.querySelector("#backButton").addEventListener('click', previousImage);
let nextButton = document.querySelector('#nextButton').addEventListener('click', nextImage);
let autoForwardButton = document.querySelector("#autoForward").addEventListener('click', autoForward);
let autoBackButton = document.querySelector("#autoBackButton").addEventListener('click', autoBackward);
