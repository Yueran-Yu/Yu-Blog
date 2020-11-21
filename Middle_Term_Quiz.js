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

let array = [1, 5, 2, 3, 4, 2, 3, 1, 3, 4]
function removeDup(arr) {
  return arr.filter((element, index) => {
    console.log(element + "===" + arr.indexOf(element) + "===" + index);
    // 1===0===0
    // 5===1===1
    // 2===2===2
    // 3===3===3
    // 4===4===4
    // 2===2===5
    // 3===3===6
    // 1===0===7
    // 3===3===8
    // 4===4===9
    return arr.indexOf(element) === index
  })
}
console.log(removeDup(array).sort());
console.log(array.indexOf(3));


let array1 = [1, 5, 2, 3, 4, 2, 3, 1, 3, 4]
function removeDup1(obj) {
  return [...new Set(obj)]
}
console.log(removeDup1(array1).sort());


let array2 = [1, 5, 2, 3, 4, 2, 3, 1, 3, 4]
function removeDup4(arr) {
  let hashMap = new Map()
  let result = new Array() // collect the result the returned by parameter arr

  for (let i = 0; i < arr.length; i++) {
    if (hashMap.has(arr[i])) { // check if there has been existed a key in the hashMap
      hashMap.set(arr[i], true)
    } else {
      hashMap.set(arr[i], false)
      result.push(arr[i])
    }
  }
  return result
}

console.log(removeDup4(array2).sort()); // result: [ 1, 2, 3, 4, 5 ]



let countSort = (arr) => {
  let hashTable = {}, max = 0, result = []
  for(let i = 0; i < arr.length; i++){  //traverse array
     if(!(arr[i] in hashTable)){
       hashTable[arr[i]] = 1
     }
     else
     {
       hashTable[arr[i]] += 1
     }

     if(arr[i] > max){
       max = arr[i]
     }
  }

  for(let j = 0; j <= max; j++){
    if(j in hashTable){
      for(let i = 0; i < hashTable[j]; j++){
        result.push(j)
      }
    }
  }
  return result
}

let array5 = [2,1,5,3,8,4,9,5]


console.log("Count Sort=========");
console.log(countSort(array5));


