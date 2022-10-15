const mealText = document.getElementById('meal');
const entreeText = document.getElementById('entree');
const sideText = document.getElementById('side');
const mainSection = document.getElementById('main-section');
const mealTextFull = document.getElementById('meal-text-full');
const sideOfText = document.getElementById('side-of-text');

const mealAnimation = [
  { transform: 'scale(1.1)' },
  { transform: 'scale(1)' }
];

const animationTiming = {
  duration: 400,
  iterations: 1,
}


// fetch meals from a JSON file here
const randomNum = (max) => {
  let rand = Math.random() * max;
    return Math.floor(rand)
}


const generateButton = document.getElementById('genBtn');
generateButton.addEventListener('click', (e) => {
  const mealsJSON = fetch("meals.json")
  .then(res=> res.json()) 
  .then(data => {

    let mealNumber = randomNum(data.entrees.length);
    let sideNumber = randomNum(data.sides.length);

    const foodName = data.entrees[mealNumber].name;
    const sideName = data.sides[sideNumber].name;
    const entreeColor = data.entrees[mealNumber].color;
    const sideColor = data.sides[sideNumber].color;

    if(mainSection.style.backgroundColor == "white") {
      console.log('its already white!');
    } else {
      mainSection.style.backgroundColor = "white";
      mainSection.animate(mealAnimation, animationTiming);
    }

    mealTextFull.animate(mealAnimation, animationTiming);

    
    entreeText.style.color = entreeColor;
    sideText.style.color = sideColor;

    mealText.textContent = "You are having ";
    entreeText.textContent = foodName + " ";
    sideOfText.textContent = " with a side of";
    sideText.textContent = sideName;
  });   
})


// add a color to each food object, use said color for the text on the page!

/*

/* ADDTIONAL TO DO (Extra features) 

add Sides

add random side button

add meal, or mix and match buttons. 

add more meals

*/