romanNumbers = (number) => {
  let roman = "";
  const romanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XV: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let arabicNumbers;
  for (let key in romanNumbers) {
    arabicNumbers = Math.floor(number / romanNumbers[key]);
    if (arabicNumbers >= 0) {
      for (let i = 0; i < arabicNumbers; i++) {
        roman += key;
      }
    }
    number = number % romanNumbers[key];
  }
  return roman;
};

writeRomanNumerals = (number) => {
  numbers = [...Array(number + 1).keys()];
  numbers = numbers.filter((number) => number !== 0);
  let romanNumerals = numbers.reduce((arabic, number) => {
    let romanNumber = romanNumbers(number);
    arabic[number] = romanNumber;
    return arabic;
  }, {});
  return romanNumerals;
};

module.exports = writeRomanNumerals;
