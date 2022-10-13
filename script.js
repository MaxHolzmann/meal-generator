
// fetch meals from a JSON file here

const generateButton = document.getElementById('genBtn');
generateButton.addEventListener('click', (e) => {
  console.log("Button click!");
  const mealsJSON = fetch("https://maxholzmann.github.io/meal-generator/meals.json")
  .then(res=> res.json()) 
  .then(data => {
    const foodName = data.entrees[0].name;
    const foodType = data.entrees[0].type;
    console.log(foodName + " is the name of the food");
    console.log(foodType + " is the type of food!");
  });    // GENERATE A MEAL AND MANIPULATE THE DOM TO DISPLAY THE MEAL HERE!!!
})



/* 

psuedo code: 


event listener listening for a click of the "generate" button - complete

fetch a list of entrees and sides from a JSON file (done!)


grab a random entree and a random side (??? how ??) something with math.floor,


return a randomized meal to the screen through DOM maniuplation 

*/ 