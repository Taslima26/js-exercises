// # Programmer humor

// Who knew programmers could be funny ?

// Write a function that makes an API call to`https://xkcd.now.sh/?comic=latest`

// 1. Create a`HTML`, `CSS` and`JavaScript` file to write your code in

// - Inside the`JavaScript` file write a function that gets the`json` using Fetch.
// - A function should make an API call to the given endpoint: `https://xkcd.now.sh/?comic=latest`
//  - Log the received data to the console
// - Render the`img` property into an`<img>` tag in the DOM
//  - Incorporate error handling

    fetch(`https://xkcd.now.sh/?comic=latest`).then((response) => {
        return response.json();
    }).then((data) => {
        const picture = data.img;
        const imageElement = document.createElement('img');
        imageElement.src = picture;
        let imageDiv = document.querySelector('.image');
        imageDiv.appendChild(imageElement);

    
    }).catch((error) =>{
    console.log(error);
    
    });


