// terning
let dice = [1, 1, 1, 1, 1];
let holdDice = [false, false, false, false, false];
let throws = 0;
// elementer
let terningFelt = document.querySelectorAll(".dice");
let rollButton = document.querySelector("#rollButton");
let one = document.querySelector("#total");

// Roll call button
rollButton.onclick = function () {
  roll();
};

function roll() {
  let roll = [0, 0, 0, 0, 0];

  for (let index = 0; index < roll.length; index++) {
    roll[index] = Math.ceil(Math.random() * 6);
  }

  Math.ceil(Math.random() * 6);
  dice = roll;
  throws++;

  setTerningFelter();

  return dice;
}
// set terning felter
function setTerningFelter() {
  for (let i = 0; i < terningFelt.length; i++) {
    const element = terningFelt[i];
    element.innerHTML = dice[i];
  }
}
// set Throw count felt
function setThrowCount() {}

function resetThrow() {
  throws = 0;
  return throws;
}

// Beregninger
//frequency regner hvor mange af hver der er...
function frequency() {
  let numbers = [0, 0, 0, 0, 0, 0];
  for (const number of dice) {
    if (number == 1) {
      numbers[0]++;
    } else if (number == 2) {
      numbers[1]++;
    } else if (number == 3) {
      numbers[2]++;
    } else if (number == 4) {
      numbers[3]++;
    } else if (number == 5) {
      numbers[4]++;
    } else if (number == 6) {
      numbers[5]++;
    } else {
      console.log("Diceset contained a number out of bound");
    }
  }
  return numbers;
}

// Caluculate the value of specific number in the diceset.
function sameValuePoints(value) {
  let frequence = frequency();
  let valueOfNumber = frequence[value - 1] * value;
  return valueOfNumber;
}

function onePair() {
  let freq = frequency();
  let sum = 0;
  for (let i = 0; i < freq.length; i++) {
    if (freq[i] >= 2) {
      sum = (i + 1) * 2;
    }
  }
  return sum;
}

//Return the sum of two pairs. Returns null if one or no pair.
function twoPairs() {
  let frequence = frequency();
  let pairOne = 0,
    pairTwo = 0;
  for (let i = 0; i < frequence.length; i++) {
    const element = frequence[i];
    if (element >= 2) {
      if (pairOne == 0) {
        pairOne = 2 * (i + 1);
      } else {
        pairTwo = 2 * (i + 1);
      }
    }
  }
  if (pairOne != 0 && pairTwo != 0) {
    return pairOne + pairTwo;
  } else return null;
}

function threeSame() {
  let freq = frequency();
  let sum = 0;
  for (let i = 0; i < freq.length; i++) {
    if (freq[i] >= 3) {
      sum = (i + 1) * 3;
    }
  }
  return sum;
}

function fourSame() {
  let freq = frequency();
  let sum = 0;
  for (let i = 0; i < freq.length; i++) {
    if (freq[i] >= 4) {
      sum = (i + 1) * 4;
    }
  }
  return sum;
}

function fullHouse() {
  let frequence = frequency();
  let pairOne = 0,
    setOfThree = 0;
  for (let i = 0; i < frequence.length; i++) {
    const element = frequence[i];
    if (element == 2) {
      if (pairOne == 0) {
        pairOne = 2 * (i + 1);
      }
    }
    if (element == 3) {
      setOfThree = 3 * (i + 1);
    }
  }
  if (pairOne != 0 && setOfThree != 0) {
    return pairOne + setOfThree;
  } else return null;
}

function small() {
  let small = [1, 1, 1, 1, 1, 0];
  let counter = 0;
  for (let i = 0; i < small.length; i++) {
    if (small[i] == frequency()[i]) {
      counter++;
      if (counter == 5) {
        return 15;
      }
    } else return 0;
  }
}

function large() {
  let large = [0, 1, 1, 1, 1, 1];
  let counter = 0;
  for (let i = 0; i < large.length; i++) {
    if (large[i] == frequency()[i]) {
      counter++;
      if (counter == 5) {
        return 20;
      }
    } else return 0;
  }
}

function chance() {
  let sum = 0;
  for (const value of dice) {
    sum += value;
  }
  return sum;
}
function yatzy() {
  for (let i = 0; i < frequency().length; i++) {
    if (frequency()[i] == 5) {
      return 50;
    }
  }
  return 0;
}
function total() {}
