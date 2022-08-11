var input = [];
var count = 1;

function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        input.push("fizzBuzz")
    } else if (count % 3 === 0 ) {
        input.push("fizz")
    } else if (count % 5 === 0 ) {
        input.push("buzz")
    } else {
        input.push(count)
    }
    console.log(input);
    count++;
}