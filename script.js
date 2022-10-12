//an example fetch 
fetch('https://api.chucknorris.io/jokes/random?category=dev')
  .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
  .then(data => console.log(data));

const mealsJSON = fetch() // fetch meals from a JSON file here

const generateButton = document.getElementById('genBtn');
generateButton.addEventListener('click', (e) => {
    // GENERATE A MEAL AND MANIPULATE THE DOM TO DISPLAY THE MEAL HERE!!!
})



/* 

psuedo code: 


event listener listening for a click of the "generate" button


fetch a list of complete meals from a JSON file

each object should have an entree & side, not correlated with each other

grab a random entree and a random side (??? how ??)

return a randomized meal to the screen through DOM maniuplation 

*/ 