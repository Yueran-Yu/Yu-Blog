let global = 33
function outside() {
  let a = 10
  let b = 20

  function inside() {
    let c = 30
    return a + b + c + global
  }
  return inside
}

let result = outside()()
console.log(result)


// example #1
let person = {
  name: 'Harry Porter',
  sayHi: function (param) {
    console.log(this.name + " say hello to " + param);
  }
}

person.sayHi("Lady Gaga")  // output: Harry Porter say hello to Lady Gaga
let otherName = { name: "Princess Helen." }
person.sayHi.call(otherName, "Tom Ford") // output: Princess Helen. say hello to Tom Ford
person.sayHi.call({ name: "Happy Sunday" }, "Lander Wood")

// example #2
let someone = {
  fullName: function () {
    return this.firstName + " " + this.lastName
  }
}

let p1 = {
  firstName: "John",
  lastName: "Doe"
}
let p2 = {
  firstName: "Mary",
  lastName: "Doe"
}

console.log(someone.fullName.call(p1)) // output: "John Doe"
console.log(someone.fullName.call(p2)) // output: "Mary Doe"

let collectionInfo = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + " comes from " + " " + city + ", " + country;
  }
}

console.log(collectionInfo.fullName.apply(p1, ["Boston", "America"]));
// output: John Doe comes from  Boston, America

let heavenSome = {
  myCar(carMode, carColor, carYear) {
    return `My name is ${this.firstName} ${this.lastName}, I have a car, it's ${carMode}, the color is ${carColor} and it is made in ${carYear}`
  }
}


let thisIsMyCar = heavenSome.myCar.bind(p1, "Toyota", "Silver", "2020")  // return a function [Function: bound myCar]
console.log(thisIsMyCar());  // My name is John Doe, I have a car, it's Toyota, the color is Silver and it is made in 2020


