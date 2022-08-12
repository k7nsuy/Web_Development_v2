var totalOfBottles = 99;
function Bottles() {

    while (totalOfBottles >= 0) {
        console.log("first")
        if (totalOfBottles > 2) {
            console.log(`${totalOfBottles} bottles of beer on the wall,
            ${totalOfBottles} bottles of beer.
            Take one down and pass it around, ${totalOfBottles - 1} bottles of beer on the wall`)
            totalOfBottles--;
        } else if (totalOfBottles = 2) {
            console.log(`${totalOfBottles} bottles of beer on the wall,
            ${totalOfBottles} bottles of beer.
            Take one down and pass it around, ${totalOfBottles - 1} bottle of beer on the wall`)
            totalOfBottles--;
        } else if (totalOfBottles = 1) {
            console.log(`${totalOfBottles} bottle of beer on the wall,
            ${totalOfBottles} bottle of beer.
            Take one down and pass it around, no more bottles of beer on the wall`)
            totalOfBottles--;
        } else {
            console.log(`No more bottles of beer on the wall, no more bottles of beer.
            Go to the store and buy some more, 99 bottles of beer on the wall`)
        }

    }
}
