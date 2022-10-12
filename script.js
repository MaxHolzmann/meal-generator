//an example fetch 
fetch('https://api.chucknorris.io/jokes/random?category=dev')
  .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
  .then(data => console.log(data));


// fetch meals from a JSON file here

const generateButton = document.getElementById('genBtn');
generateButton.addEventListener('click', (e) => {
  console.log("Button click!");
  const mealsJSON = fetch("https://maxholzmann.github.io/meal-generator/meals.json")
  .then(res=> res.json()) 
  .then(data => console.log(data))
    // GENERATE A MEAL AND MANIPULATE THE DOM TO DISPLAY THE MEAL HERE!!!
})



/* 

psuedo code: 


event listener listening for a click of the "generate" button - complete


fetch a list of complete meals from a JSON file

each object should have an entree & side, not correlated with each other

grab a random entree and a random side (??? how ??)

return a randomized meal to the screen through DOM maniuplation 

*/ 