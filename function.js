let dice = [0, 0, 0, 0, 0];
let throws = 0;

function roll() {
  let test = [0, 0, 0, 0, 0];

  for (let index = 0; index < test.length; index++) {
    test[index] = Math.ceil(Math.random() * 6);
  }

  Math.ceil(Math.random() * 6);
  dice = test;
  return dice;
}
console.log(roll());

function resetThrow() {
  return -1;
}

// Beregninger
//frequency regner hvor mange af hver der er...
function frequency() {}

function sameValuePoints(value) {}

function onePair() {}
function twoPairs() {}
function threeSame() {}

function fourSame(params) {}
function fullHouse(params) {}
function small(params) {}
function large(params) {}
function chance(params) {}
function yatzy(params) {}
function total(params) {}
