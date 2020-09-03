// ---------------------
// Define a function max() that takes two numbers as
// arguments and returns the largest of them. Use the
// if-then-else construct available in JavaScript.
// ---------------------

function max(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}

console.assert(max(2, 3) === 3)
console.assert(max(23, 24) === 24)
console.assert(max(-23, 12) === 12)

// ---------------------
// Define a function maxOfThree() that takes three
// numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c) {
  let maxOfThreeAll = Math.max(a, b, c)
  console.log(maxOfThreeAll)
  return maxOfThreeAll
}

console.assert(maxOfThree(2, 56, 3) === 56)
console.assert(maxOfThree(12, 3, 4) === 12)
console.assert(maxOfThree(-12, 4, -5) === 4)

// ---------------------
// Write a function isVowel() that takes a character (i.e. a
// string of length 1) and returns true if it is a
// vowel, false otherwise.
// ---------------------

function isVowel(a) {
  if (
    a == "a" ||
    a == "e" ||
    a == "i" ||
    a == "o" ||
    a == "u" ||
    a == "A" ||
    a == "E" ||
    a == "I" ||
    a == "O" ||
    a == "U"
  ) {
    return true
  } else {
    return false
  }
}

console.log(isVowel(0))
console.log(isVowel("B"))
console.log(isVowel("b"))
console.log(isVowel("a"))
console.log(isVowel("E"))
console.log(isVowel("2"))

// ---------------------
// Write a function rovarspraket() that will translate
// a text into "Rovarspraket". That is, double every
// consonant and place an occurrence of "o" in between.
// For example, translate("this is fun") should return
// the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(text) {
  let vowels = ["a", "e", "i", "o", "u", "0"]
  let newLine = ""
  for (let i = 0; i < text.length; i++) {
    const currentLetter = text.charAt(i)
    if (vowels.indexOf(currentLetter) != -1) {
      //compares the current letter to each index of "vowels"
      newLine = newLine + currentLetter
    } else {
      newLine = newLine + (currentLetter + "o" + currentLetter)
    }
  }
  return newLine
}

console.log(rovarspraket("a"))
console.log(rovarspraket("b"))
console.log(rovarspraket("cat"))
console.log(rovarspraket("javascript"))
console.log(rovarspraket(0))

// ---------------------
// Define a function reverse() that computes the reversal
// of a string. For example, reverse("jag testar") should
// return the string "ratset gaj".
// ---------------------

function reverse(a) {
  let reversed = ""
  for (let i = a.length - 1; i >= 0; i--) {
    reversed += a[i]
  }
  return reversed
}

console.log(reverse("books"))
console.log(reverse("we don't want no trouble"))
