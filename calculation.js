// Beregninger
//frequency regner hvor mange af hver der er...
function frequency() {
    let frequence = [0, 0, 0, 0, 0, 0];
    for (const value of dice) {
      if (value.number == 1) {
        frequence[0]++;
      } else if (value.number == 2) {
        frequence[1]++;
      } else if (value.number == 3) {
        frequence[2]++;
      } else if (value.number == 4) {
        frequence[3]++;
      } else if (value.number == 5) {
        frequence[4]++;
      } else if (value.number == 6) {
        frequence[5]++;
      } else {
        console.log("Diceset contained a number out of bound");
      }
    }
    return frequence;
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
    } else return 0;
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
    } else return 0;
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
      sum += value.number;
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
  