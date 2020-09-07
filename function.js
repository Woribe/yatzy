let dice = [0, 0, 0, 0, 0];
let throws = 0;

function roll(dice) {
  for (let index = 0; index < dice; index++) {
    dice.index = Math.ceil(Math.random() * 6);
  }

  return dice;
}

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
