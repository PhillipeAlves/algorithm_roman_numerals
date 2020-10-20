createRomanNumerals = number => {
  const roman = {
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
    I: 1
  }
  const romanNumerals = Object.keys(roman)
  let arabicNumbers
  let result = ''

  romanNumerals.forEach(key => {
    arabicNumbers = Math.floor(number / roman[key])
    if (arabicNumbers >= 0) {
      for (let i = 0; i < arabicNumbers; i++) {
        result += key
      }
    }
    number = number % roman[key]
  })

  return result
}

writeRomanNumerals = num => {
  numbers = [...Array(num + 1).keys()]
  numbers = numbers.filter(number => number !== 0)
  const romanNumerals = numbers.reduce((arabic, number) => {
    const romanNumeral = createRomanNumerals(number)
    arabic[number] = romanNumeral
    return arabic
  }, {})
  return romanNumerals
}

module.exports = writeRomanNumerals
