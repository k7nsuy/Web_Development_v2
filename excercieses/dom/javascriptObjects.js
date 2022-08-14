function HouseKeeper(yearOfExperience,name,age) {
    this.yearOfExperience = yearOfExperience;
    this.name = name
    this.age = age
    this.clean = function() {
        alert("Cleaning in progress...")
    }
}

var houseKeeper1 = new HouseKeeper(9,"happy",31);
houseKeeper1.name;
houseKeeper1.yearOfExperience;
houseKeeper1.age;