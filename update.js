let resultAreas = document.querySelectorAll(".resultArea");
let sum = 0,
  bonus = 0,
  totalScore = 0;

let results = [
  { Name: "1s", tempResult: 0, result: 0 },
  { Name: "2s", tempResult: 0, result: 0 },
  { Name: "3s", tempResult: 0, result: 0 },
  { Name: "4s", tempResult: 0, result: 0 },
  { Name: "5s", tempResult: 0, result: 0 },
  { Name: "6s", tempResult: 0, result: 0 },
  { Name: "pair", tempResult: 0, result: 0 },
  { Name: "twoPairs", tempResult: 0, result: 0 },
  { Name: "threeSame", tempResult: 0, result: 0 },
  { Name: "fourSame", tempResult: 0, result: 0 },
  { Name: "fullHouse", tempResult: 0, result: 0 },
  { Name: "small", tempResult: 0, result: 0 },
  { Name: "large", tempResult: 0, result: 0 },
  { Name: "chance", tempResult: 0, result: 0 },
  { Name: "yatzy", tempResult: 0, result: 0 },
];

let sumNode = document.querySelector("#sum");
let bonusNode = document.querySelector("#bonus");
let totalNode = document.querySelector("#total");

console.log(resultAreas);

//Updates all resultareas with a tempResult
function updateAllResultAreas() {
  for (let i = 0; i < resultAreas.length; i++) {
    const resultArea = resultAreas[i];
    const result = results[i];
    if (result.result == 0) {
      resultArea.value = result.tempResult;
      //resultArea.setAttribute("placeholder:" + result.tempResult);
    } else if (result.result != 0) {
      resultArea.value = result.result;
      result.result = result.tempResult;
    }
  }

  //Updates sum & totalScore and then apply the content to the GUI
  updateSum();
  updateTotal();
  sumNode.value = sum;
  bonusNode.value = bonus;
  totalNode.value = totalScore;
}

//Updates the the value of a specifik result
function applyValueToResult(name) {
  for (const result of results) {
    if (result.Name == name) {
      result.result = result.tempResult;
    }
  }
  updateAllResultAreas();
}

//Updates all tempResults and then updates the interface
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
function updateSum() {
  for (let i = 0; i < 5; i++) {
    sum += results[i].result;
    if (sum >= 63) {
      bonus = 50;
    }
  }
}

//Updates the totalScore
function updateTotal() {
  totalScore = 0;
  for (let i = 5; i < results.length; i++) {
    const result = results[i];
    totalScore += result.result;
  }
  totalScore += bonus;
  totalScore += sum;
}
