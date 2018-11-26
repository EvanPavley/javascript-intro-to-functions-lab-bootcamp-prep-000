<<<<<<< HEAD
=======
var uppercase = "HELLO!"
var lowercase = 'hello!'
var mixedCase = 'Hi there!'

uppercase.toUpperCase() === uppercase
lowercase.toLowerCase() === lowercase
mixedCase.toLowerCase() === mixedCase
mixedCase.toUpperCase() === mixedCase

>>>>>>> a4fdd62422f6144db34f5454b10c6ddb44fc62bf
function shout(string) {
  return string.toUpperCase()
}

<<<<<<< HEAD
function logShout(string) {
  console.log("HELLO")
}

function whisper(string) {
  return string.toLowerCase()
}
function logWhisper(string) {
  console.log("hello")
}
=======
function whisper(string) {
  return string.toLowerCase()
}
>>>>>>> a4fdd62422f6144db34f5454b10c6ddb44fc62bf

function sayHiToGrandma(phrase) {
  return `${phrase}`
}
<<<<<<< HEAD

function sayHiToGrandma(string) {
  if (string.toUpperCase() === string) {
    return "YES INDEED!";
  } else if (string.toLowerCase() === string) {
    return "I can't hear you!";
  } else if (string === "I love you Grandma.") {
    return "I love you, too.";
  } else {
    return "What did you say?"
  }
}
=======
sayHiToGrandma("Hello", "Sofia")
>>>>>>> a4fdd62422f6144db34f5454b10c6ddb44fc62bf
