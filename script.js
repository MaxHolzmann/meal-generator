const mealText = document.getElementById('meal');
const sideText = document.getElementById('side'); // not in use, plan to use to generate just sides
const mainSection = document.getElementById('main-section');

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

    if(mainSection.style.backgroundColor == "white") {
      console.log('its already white!');
    } else {
      mainSection.style.backgroundColor = "white";
      mainSection.animate(mealAnimation, animationTiming);
    }

    mealText.animate(mealAnimation, animationTiming);
    mealText.textContent = "You are having " + foodName + " with a side of " + sideName;
  });   
})

/*

/* ADDTIONAL TO DO (Extra features) 

add Sides

add random side button

add meal, or mix and match buttons. 

add more meals

*/