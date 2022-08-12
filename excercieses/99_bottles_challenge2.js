var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottles"
    if ( numberOfBottles === 1) {
        var bottleWord = "bottle"
    } 
    console.log(`${numberOfBottles} ${bottleWord} of beer on the wall.`)
    console.log(`${numberOfBottles} ${bottleWord} of beer, Take one down, pass it around.`)
    numberOfBottles--;
    console.log(`${numberOfBottles} ${bottleWord} of beer on the wall.`)
}