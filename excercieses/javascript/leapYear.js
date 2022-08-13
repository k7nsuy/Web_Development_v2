function leapYear(leap) {
    var leapYear = leap;

    if (leapYear % 4 === 0 ) {
        if (leapYear % 100 === 0) {
            if ( leapYear % 400 === 0) { 
                alert("Leap year!");
            }
        } else {
            alert("Leap year!");
        }
    } else {
        alert("Not Leap year!");
    } 
}

leapYear(prompt("write year you wanna know!")) 