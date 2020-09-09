let resultAreas = document.querySelectorAll(".resultArea");
let sum = 0,
  bonus = 0,
  totalScore = 0;

let results = [
  { Name: "1s", tempResult: 0, result: 0, blocked: false },
  { Name: "2s", tempResult: 0, result: 0, blocked: false },
  { Name: "3s", tempResult: 0, result: 0, blocked: false },
  { Name: "4s", tempResult: 0, result: 0, blocked: false },
  { Name: "5s", tempResult: 0, result: 0, blocked: false },
  { Name: "6s", tempResult: 0, result: 0, blocked: false },
  { Name: "pair", tempResult: 0, result: 0, blocked: false },
  { Name: "twoPairs", tempResult: 0, result: 0, blocked: false },
  { Name: "threeSame", tempResult: 0, result: 0, blocked: false },
  { Name: "fourSame", tempResult: 0, result: 0, blocked: false },
  { Name: "fullHouse", tempResult: 0, result: 0, blocked: false },
  { Name: "small", tempResult: 0, result: 0, blocked: false },
  { Name: "large", tempResult: 0, result: 0, blocked: false },
  { Name: "chance", tempResult: 0, result: 0, blocked: false },
  { Name: "yatzy", tempResult: 0, result: 0, blocked: false },
];

let sumNode = document.querySelector("#sum");
let bonusNode = document.querySelector("#bonus");
let totalNode = document.querySelector("#total");

//Updates all resultareas with a tempResult
function updateAllResultAreas() {
  for (let i = 0; i < resultAreas.length; i++) {
    const resultArea = resultAreas[i];
    const result = results[i];
    if (result.result == 0 && result.blocked == false) {
      resultArea.value = result.tempResult;
      //resultArea.setAttribute("placeholder:" + result.tempResult);
    } else if (result.result != 0 && result.blocked == false) {
      resultArea.value = result.result;
      console.log(result.name + " er sat til " + result.result);
    }
  }

  //Updates sum & totalScore and then apply the content to the GUI
  updateSum();
  updateTotal();
  afslutSpil();
}

//Updates the the value of a specifik result
function applyValueToResult(name) {
  for (const result of results) {
    if (result.Name == name) {
      if (result.result == 0 && result.blocked == false) {
        result.result = result.tempResult;
        result.blocked = true;
      } else if (result.blocked == true) {
        console.log("Area is blocked");
      }
    }
  }
  updateAllResultAreas();
}

//Updates all tempResults and then updates the interface.
//Being runned every time we "roll"
function updateAllTempReults() {
  results[0].tempResult = sameValuePoints(1);
  results[1].tempResult = sameValuePoints(2);
  results[2].tempResult = sameValuePoints(3);
  results[3].tempResult = sameValuePoints(4);
  results[4].tempResult = sameValuePoints(5);
  results[5].tempResult = sameValuePoints(6);
  results[6].tempResult = onePair();
  results[7].tempResult = twoPairs();
  results[8].tempResult = threeSame();
  results[9].tempResult = fourSame();
  results[10].tempResult = fullHouse();
  results[11].tempResult = small();
  results[12].tempResult = large();
  results[13].tempResult = chance();
  results[14].tempResult = yatzy();

  updateAllResultAreas();
}

//Counts the sum - must be 63 for bonus
//Being runned by updateAllResultAreas()
function updateSum() {
  sum = 0;
  for (let i = 0; i < 5; i++) {
    sum += results[i].result;
    if (sum >= 63) {
      bonus = 50;
    }
  }
  sumNode.value = sum;
  bonusNode.value = bonus;
}

//Updates the totalScore
//Being runned by updateAllResultAreas()
function updateTotal() {
  totalScore = 0;
  for (let i = 5; i < results.length; i++) {
    const result = results[i];
    totalScore += result.result;
  }
  totalScore += bonus;
  totalScore += sum;
  totalNode.value = totalScore;
}

function afslutSpil() {
  let check = 0;
  for (let i = 0; i < results.length; i++) {
    const element = results[i];
    if (element.blocked == true) {
      check++;
      console.log(check);
    }
  }
  if (check == 15) {
    console.log("Total score er: " + totalScore);
    alert("Spiller er slut, " + "din total score er: " + totalScore);
    results = [
      { Name: "1s", tempResult: 0, result: 0, blocked: false },
      { Name: "2s", tempResult: 0, result: 0, blocked: false },
      { Name: "3s", tempResult: 0, result: 0, blocked: false },
      { Name: "4s", tempResult: 0, result: 0, blocked: false },
      { Name: "5s", tempResult: 0, result: 0, blocked: false },
      { Name: "6s", tempResult: 0, result: 0, blocked: false },
      { Name: "pair", tempResult: 0, result: 0, blocked: false },
      { Name: "twoPairs", tempResult: 0, result: 0, blocked: false },
      { Name: "threeSame", tempResult: 0, result: 0, blocked: false },
      { Name: "fourSame", tempResult: 0, result: 0, blocked: false },
      { Name: "fullHouse", tempResult: 0, result: 0, blocked: false },
      { Name: "small", tempResult: 0, result: 0, blocked: false },
      { Name: "large", tempResult: 0, result: 0, blocked: false },
      { Name: "chance", tempResult: 0, result: 0, blocked: false },
      { Name: "yatzy", tempResult: 0, result: 0, blocked: false },
    ];
    (sum = 0), (bonus = 0), (totalScore = 0);

    dice = [
      { number: 6, hold: false },
      { number: 6, hold: false },
      { number: 6, hold: false },
      { number: 6, hold: false },
      { number: 6, hold: false },
    ];
    throws = 0;
  }
}
