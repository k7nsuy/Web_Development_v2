var output = [];

function fibonacciGenerator(n) {
    
    if ( n === 0 ) {
        output.push(0)
        return output
    } else if ( n === 1) {
        output.push(1)
        return output
    }

    else if (n > 1) {
        for ( var i = 0; i <= n; i++) {
                var sum = output[n-2] + output[n-1]
                if (sum > 0) {
                    output.push(sum)
                    return output;
                }
            }
            console.log(output)
    } 
}


// var output = [0,1,1,2,3,5,8,13,21,34]
// output[0] + output[1] = n
// output.push(n)

// output[0] + output[1] + output[n] = s
// output.push(s)

// output[0] + output[1] + output[2] + output[n+1]
// output.push 
// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8
// 5 + 8 = 13
// 8 + 13 = 21
// 13 + 21 = 34