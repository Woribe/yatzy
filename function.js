let dice = [0, 0, 0, 0, 0];
let throws = 0;
dice = [2,2,4,3,4];
console.log(dice);
console.log(fullHouse());

function roll() {
  let test = [0, 0, 0, 0, 0];

  for (let index = 0; index < test.length; index++) {
    test[index] = Math.ceil(Math.random() * 6);
  }

  Math.ceil(Math.random() * 6);
  dice = test;
  return dice;
}

function resetThrow() {
  return -1;
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
  let pair = 0;
  for (const key in frequency()) {
    if (frequency.inde[key] >= (key + 1) * 2) {
      pair = frequency.inde[key];
    }
  }
  return pair;
}

//Return the sum of two pairs. Returns null if one or no pair.
function twoPairs() {
    let frequence = frequency();
    let pairOne = 0, pairTwo = 0;
    for (let i = 0; i < frequence.length; i++) {
        const element = frequence[i];
        if(element >= 2) {
            if(pairOne == 0) {
                pairOne = 2 * (i+1);
            } else {
                pairTwo = 2 * (i+1);
            }
        }
    }
    if( pairOne != 0 && pairTwo != 0) {
        return (pairOne+pairTwo);
    } else return null;
    
}

function threeSame() {}

function fourSame(params) {}
//Returns the value of full house
function fullHouse(params) {
    let frequence = frequency();
    let pairOne = 0, setOfThree = 0;
    for (let i = 0; i < frequence.length; i++) {
        const element = frequence[i];
        if(element == 2) {
            if(pairOne == 0) {
                pairOne = 2 * (i+1);
            }
        } if (element == 3) {
            setOfThree = 3 * (i+1);
        }
    }
    if( pairOne != 0 && setOfThree != 0) {
        return (pairOne+setOfThree);
    } else return null;
}
function small(params) {}
function large(params) {}
function chance(params) {}
function yatzy(params) {}
function total(params) {}
