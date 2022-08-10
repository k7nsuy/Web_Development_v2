function lifeInWeeks(age) {
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var months = yearsRemaining * 12;
    var weeks = yearsRemaining * 52;

    console.log(`You have ${days} days, ${weeks} weeks, ${months} months`);
}

lifeInWeeks(56);