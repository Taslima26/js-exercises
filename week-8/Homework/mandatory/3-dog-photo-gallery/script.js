// # Dog photo gallery

// Let's make a randomized dog photo gallery!

// Write a function that makes an API call to
//`https://dog.ceo/api/breeds/image/random`.
//It should trigger after clicking a button in your webpage.
//Every time the button is clicked it should append a new dog image to the DOM.

// - Create an`index.html` file that will display your random image
// - Add`<button>` and`<ul>` element, either in the HTML or through JavaScript
// - When the button is clicked it should make an API call 
//to`https://dog.ceo/api/breeds/image/random`
//- After receiving the data, append to the`<ul>` a`<li>` 
//that contains an`<img>` element with the dog image
// Incorporate error handling


let clickButton = document.querySelector('.Display-Button');
let unorderedList = document.querySelector('list-display')

clickButton.addEventListener('click', () => {
    fetch(`https://dog.ceo/api/breeds/image/random`).then((response) => {
        return response.json()
    })
        .then((data) => {
            const picture = data.message;
            const listElement = document.createElement('li');
            const imageElement = document.createElement('img');
            listElement.appendChild(imageElement);
            imageElement.src = picture;
            document.getElementById('list').appendChild(imageElement);
                

        }).catch((error) => {
            console.log(error)
        });
    
    

});
