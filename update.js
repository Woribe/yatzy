let resultAreas = document.querySelectorAll(".resultArea");


let results = [{Name:"1s", tempResult:0, result:0},{Name:"2s", tempResult:0, result:0}, {Name:"3s", tempResult:0, result:0},
{Name:"4s", tempResult:0, result:0}, {Name:"5s", tempResult:0, result:0}, {Name:"6s", tempResult:0, result:0},
{Name:"pair", tempResult:0, result:0}, {Name:"twoPairs", tempResult:0, result:0}, {Name:"threeSame", tempResult:0, result:0},
{Name:"fourSame", tempResult:0, result:0}, {Name:"fullHouse", tempResult:0, result:0}, {Name:"small", tempResult:0, result:0},
{Name:"large", tempResult:0, result:0}, {Name:"chance", tempResult:0, result:0}, {Name:"yatzy", tempResult:0, result:0}];

console.log(resultAreas);

//Updates all resultareas with a tempResult
function updateAllResultAreas() {
    for (let i = 0; i < resultAreas.length; i++) {
        const resultArea = resultAreas[i];
        const result = results[i];
        if(result.result == 0) {
            resultArea.textContent = result.tempResult;
            resultArea.setAttribute("placeholder:" + result.tempResult);
        } else if(result.result != 0) {
            resultArea.textContent = result.result;
        }
    }
}

//Updates the the value of a specifik result
function applyValueToResult(name, value) {
    for (const result of results) {
        if(result.Name == name) {
            result.result = value;
        }
    }
    updateAllResultAreas();
}

function updateAllTempReults() {
    
}



