//Practice RandomNumbers game

const oddsNumber = (Math.random() * 2);

const goFishing = (oddsNumber) => {
    if (oddsNumber <= 1) {
        return "Sven hooked a tuna!  :)"
    } else if (oddsNumber > 1) {
        return "Sven came up empty-handed.  :("
    }
}

console.log("Practice Random Numbers : ", goFishing(oddsNumber))

//--------------------------------------------------------------------------------------------//

//Practice: Double Function
//make a sentence with the following array
const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

//created filter to take out all words starting with "k"
const filterOutUnwanted = () => {
    const wantedWords = [];
    words.forEach(word => {
        if (!word.startsWith("k")) {
            wantedWords.push(word)
        }
    })
    return wantedWords
}

//joined all words in the array, separated them with a ' ' instead of ,
const makingSentence = (array) => {
    return array.join(' ')
}

const unwantedWordsArray = filterOutUnwanted()
const wantedSentence = makingSentence(unwantedWordsArray)

console.log("Decrypted sentence : ", wantedSentence)

//--------------------------------------------------------------------------------------------//

//function for Evens or Odds
const evenOrOdd = (number) => {
    //stating that if number is divided by 2, then their is no remainer
    if (number % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    }
}


const result = evenOrOdd(0)
console.log("Result of Even or Odd : ", result)

//running evenOrOdd function through an array of numbers using a foreach loop
const arrayOfNumbers = [10, 2, 19, 4, 8, 29, 16]
arrayOfNumbers.forEach(number => {
    console.log(`Even/Odds in Array : ${number} is a ${evenOrOdd(number)} number`)
})

//function for self driving car function
const go = (direction, speedInMph) => {
    const drivingMessage = `the car is moving ${direction} at ${speedInMph} mph`
    if (speedInMph >= 75) {
        return drivingMessage + ", Slow Down!"
    }
    else {
        return drivingMessage
    }
}

const drivingMessage = go("forward", 74)
console.log("Self-Driving Cars : ", drivingMessage)

//--------------------------------------------------------------------------------------------//

//simple sum of parameters function
const add = (num1, num2, num3) => {
    return num1 + num2 + num3
}

const sum = add(17, 4, 11)

console.log("Result for Addition : ", sum)

//--------------------------------------------------------------------------------------------//

//function for Best in Show practice
const bestInShow = (dogBreed) => {
    //if user passes "meow" into bestInShow, a response for cats will appear
    if (dogBreed === "meow") {
        return "I like cats"
    }
    const favoriteBreed = `My favorite dog breed is ${dogBreed}`
    return favoriteBreed
}

const myFavorite = bestInShow("schnauzer");

console.log("Result for bestInShow : ", myFavorite)

//--------------------------------------------------------------------------------------------//

//function for calculating dog years
const calcAgeInDogYear = (currentAge) => {
    const dogAge = currentAge / 7
    return dogAge
}

const ageInDogYears = calcAgeInDogYear(30)

console.log(`Dog Year calculation : ${ageInDogYears}`)