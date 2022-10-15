const mealText = document.getElementById('meal');
const sideText = document.getElementById('side'); // not in use, plan to use to generate just sides
const mainSection = document.getElementById('main-section');

// fetch meals from a JSON file here
const randomNum = (max) => {
  let rand = Math.random() * max;
    return Math.floor(rand)
}


const generateButton = document.getElementById('genBtn');
generateButton.addEventListener('click', (e) => {
  console.log("Button click!");
  const mealsJSON = fetch("meals.json")
  .then(res=> res.json()) 
  .then(data => {

    let mealNumber = randomNum(data.entrees.length);
    let sideNumber = randomNum(data.sides.length);

    console.log(mealNumber)

    const foodName = data.entrees[mealNumber].name;
    const sideName = data.sides[sideNumber].name;

    mainSection.style.backgroundColor = "white";

    const mealAnimation = [
  { transform: 'scale(1.2)' },
  { transform: 'scale(1)' }
];

const newspaperTiming = {
  duration: 300,
  iterations: 1,
}
    mealText.animate(mealAnimation, newspaperTiming);

    mealText.textContent = "You are having " + foodName + " with a side of " + sideName;
  });   
})

/*

TO-DO PSEUDO CODE: 

use JS to update the dom to the meal, instead of logging to console

*/


/* ADDTIONAL TO DO (Extra features) 

add Sides

add random side button

add meal, or mix and match buttons. 

add more meals

*/