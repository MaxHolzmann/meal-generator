
// fetch meals from a JSON file here
const randomNum = (max) => {
  let rand = Math.random() * max;
    return Math.floor(rand)
}


const generateButton = document.getElementById('genBtn');
generateButton.addEventListener('click', (e) => {
  console.log("Button click!");
  const mealsJSON = fetch("https://maxholzmann.github.io/meal-generator/meals.json")
  .then(res=> res.json()) 
  .then(data => {

    let mealNumber = randomNum(data.entrees.length)

    console.log(mealNumber)

    const foodName = data.entrees[mealNumber].name;
    const foodType = data.entrees[mealNumber].type;
    console.log(foodName + " is the name of the food");
    console.log(foodType + " is the type of food!");
  });    // GENERATE A MEAL AND MANIPULATE THE DOM TO DISPLAY THE MEAL HERE!!!
})
/*

TO-DO PSEUDO CODE: 

use JS to update the dom to the meal, instead of logging to console

*/


/* ADDTIONAL TO DO (Extra features) 

add Sides

add random side button

add more meals

*/