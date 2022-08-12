
var numberOfBottles = 99

function bottlesOfWall() {


while (numberOfBottles >= 0) {
    var bottleWord = "bottles"
    if ( numberOfBottles === 1) {
        var bottleWord = "bottle"
    } 
    console.log(`${numberOfBottles} ${bottleWord} of beer on the wall,
    ${numberOfBottles} ${bottleWord} of beer, Take one down, pass it around,`)
    numberOfBottles--;
    console.log(`${numberOfBottles} ${bottleWord} of beer on the wall.`)
    }
}