// terning
let dice = [
  { number: 0, hold: false },
  { number: 0, hold: false },
  { number: 0, hold: false },
  { number: 0, hold: false },
  { number: 0, hold: false },
];
let throws = 0;
// elementer

let terningFelt = document.querySelectorAll(".dice");
let rollButton = document.querySelector("#rollButton");
let throwFelt = document.querySelector("#turnIndicator");
let resultFelt = document.querySelectorAll(".resultArea");

// Roll call button
rollButton.onclick = function () {
  roll();
};

// hold event for terning
for (const value of terningFelt) {
  value.addEventListener("click", hold);
}
// Vælg et resultat
for (const area of resultFelt) {
  area.addEventListener("click", choose);
}
// vælger et felt og resetter terninger
function choose(e) {
  console.log(e.currentTarget);
  for (const area of resultAreas) {
    if (e.currentTarget == area) {
      for (let i = 0; i < results.length; i++) {
        const element = results[i];
        if (element.Name == area.id && element.blocked == false) {
          area.style.color = "red";
          applyValueToResult(area.id);
          resetThrow();
        }
      }
    }
  }
}

//hold event function
function hold(e) {
  for (let i = 0; i < dice.length; i++) {
    let holdUp = document.querySelector("#dice" + (i + 1));
    if (e.currentTarget == holdUp) {
      if (dice[i].hold == true) {
        dice[i].hold = false;
        holdUp.style.color = "black";
      } else {
        dice[i].hold = true;
        holdUp.style.color = "purple";
      }
    }
  }
}

// kaster terningerne
function roll() {
  //Throws er på 3
  if (throws < 3) {
    for (let index = 0; index < dice.length; index++) {
      // giver spilleren op til 3 slag

      // Hold
      if (dice[index].hold == false) {
        //Random slag
        dice[index].number = Math.ceil(Math.random() * 6);
      }
    }
    Math.ceil(Math.random() * 6);
    throws++;

    setThrowCount();
    setTerningFelter();
    updateAllTempReults();
  }
}
// update terning img
function updateTerningIMG() {}
// set terning felter
function setTerningFelter() {
  for (let i = 0; i < terningFelt.length; i++) {
    const element = terningFelt[i];

    element.innerHTML = dice[i].number;
  }
}

// set Throw count felt
function setThrowCount() {
  throwFelt.innerHTML = "Antal Kast: " + throws;
}

function resetThrow() {
  dice = [
    { number: 0, hold: false },
    { number: 0, hold: false },
    { number: 0, hold: false },
    { number: 0, hold: false },
    { number: 0, hold: false },
  ];
  setTerningFelter();

  throws = 0;
}
