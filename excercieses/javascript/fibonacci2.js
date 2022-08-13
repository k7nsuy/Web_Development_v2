function fibonacci(number) {
    if ( number === 0) {
        var output = [0]
        return output
    } else if ( number === 1) {
        var output = [0,1]
        return output
    } else {
        var output = [0,1]
        for (var i = 2; i <= number; i++) {
            var sum = output[output.length-2] + output[output.length-1]
            output.push(sum)
        } 
    }
    console.log(output);
}