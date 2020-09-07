let dice = [0, 0, 0, 0, 0];
let throws = 0;
roll();
console.log(dice);
console.log(frequency());
console.log(onePair());

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

function sameValuePoints(value) {}

function onePair() {
    let pair = 0;
for (const key in frequency()) {
   if (frequency.inde[key]>= ((key + 1)*2)) {
       
       pair = frequency.inde[key];
   }
}
return pair;
}




}

function twoPairs() {}
function threeSame() {}

function fourSame(params) {}
function fullHouse(params) {}
function small(params) {}
function large(params) {}
function chance(params) {}
function yatzy(params) {}
function total(params) {}
