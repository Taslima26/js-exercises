console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

let allSections = document.querySelectorAll("section");
allSections.forEach(function (section) {
    section.style.backgroundColor = 'white';
});




// Task 2

// Without changing any of the HTML or CSS, update the 
//images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

let allImages = document.querySelectorAll("img");
allImages.forEach(function (image)
{
    
    image.style.display = 'block';
    image.style.margin='0 auto'
    });





// Task 3

// Google the date of birth and death of each of the people on the page.
//Without changing any of the HTML or CSS, add this in a paragraph to the end of their<section>.
let graceParagraph = document.createElement('p');
//console.log(graceParagraph);
graceParagraph.textContent = "Born in December 9, 1906 – January 1, 1992 and she died on New Years Day 1992"
document.querySelector("body > section:nth-child(2)").appendChild(graceParagraph);

let katherineParagraph = document.createElement("p");
katherineParagraph.textContent = 'Katherine Johnson was bor on August 26, 1918 and died on February 24, 2020) ';
document.querySelector('body > section:nth-child(4)').appendChild(katherineParagraph);

let adaParagraph = document.createElement('p');
adaParagraph.textContent = 'Augusta Ada King, Countess of Lovelace was born on née Byron; 10 December 1815 and died on 27 November 1852 ';
document.querySelector('body>section:nth-child(6)').appendChild(adaParagraph);
                            

