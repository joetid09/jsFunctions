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

console.log(myFavorite)


//function for calculating dog years
const calcAgeInDogYear = (currentAge) => {
    const dogAge = currentAge / 7
    return dogAge
}

const ageInDogYears = calcAgeInDogYear(30)

console.log(`Dog Year calculation${ageInDogYears}`)