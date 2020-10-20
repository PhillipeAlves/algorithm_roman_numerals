![Banner](/roman-banner.gif)

## Problem

Write a function to convert arabic numbers to Roman Numerals. You should build a 'dictionary' starting at '1' until the number provided. There is no need to be able to convert numbers larger than about 3000.

e.g.

1 => {1: 'I'}
7 => {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII'}

Wikipedia says: Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.

To see this in practice, consider the example of 1990.

In Roman numerals 1990 is MCMXC:

1000=M 900=CM 90=XC

2008 is written as MMVIII:

2000=MM 8=VIII

## Solution

```
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

writeRomanNumerals(7)

// {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII'}

```

## Links

> **CODE**: [_here_](https://github.com/PhillipeAlves/algorithm_roman_numerals/blob/master/index.js) || **TEST**: [_here_](https://github.com/PhillipeAlves/algorithm_roman_numerals/blob/master/test.js)
