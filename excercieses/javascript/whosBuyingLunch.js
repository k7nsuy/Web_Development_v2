var friends = ["지원","나영","재우","상우"]

function buyLunch() {
    var random = Math.floor(Math.random() * 4);
    if (random === 0 ) {
        console.log(friends[0])
    } else if (random === 1 ) {
        console.log(friends[1])
    } else if (random === 2) {
        console.log(friends[2])
    } else {
        console.log(friends[3])
    }
}