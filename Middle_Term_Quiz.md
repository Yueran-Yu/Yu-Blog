### 1. What is closure?  What is the function of closure?  What is the disadvantage of closure?
> A closure is a feature in Javascript where an inner function has access to the outer (enclosing) function's  variables.
>

- #### Here is the example of function of closure:
> ```javascript
>   let global = 33
>   function outside() {
>     let a = 10
>     let b = 20
>
>     function inside() {
>       let c = 30
>       return a + b + c + global
>     }
>     return inside
>   }
>   // When we call outside()
>   let result = outside()()
>   console.log(result)  // 93
> ```
> The above combination is a closure.
> ```inside()``` function is nested in the ```outside()``` function.
>
> All local variables in the ```outside()```  are accessible for ```inside()```.
>
> But local variables in the ```inside()```  are invisible for ```outside()```.
>
> This is the special ```chain scope``` of Javascript.
>
> The Child object will look upward one level at a time for all variables in the parent objects or grandparent objects. All variables of the parent objects are visible to the child objects. The reverse is not applicable.
>
- #### The drawback of closure
> As long as the closure is active, the memory can't be garbage collected.
>
> Example: If we have 100 different functions referencing the original variable, and 99 of them get garbage collected, that variable still exists until the 100th functions  completed and gets collected.
> Closure may lead to over-consumption of memory, and probably memory leaks if not handled properly.
- #### How to fix that?
> Use closures only when you need privacy otherwise use module pattern to create new objects with methods inside.


### 2. How to use ```call, apply, bind``` ?
- ####  The ```call()``` method calls a function with a given this value and arguments provided individually.
```javascript
  // example #1
  let person = {
    name: 'Harry Porter',
    sayHi: function(param){
      console.log(this.name + " say hello to " + param);
    }
  }

  person.sayHi("Lady Gaga")  // output: Harry Porter say hello to Lady Gaga
  let otherName = {name: "Princess Helen."}
  person.sayHi.call(otherName, "Tom Ford") // output: Princess Helen. say hello to Tom Ford
  person.sayHi.call({name: "Happy Sunday"}, "Lander Wood")

  // example #2
  let someone = {
    fullName: function(){
      return this.firstName + " " + this.lastName
    }
  }

  let p1 = {
    firstName:"John",
    lastName: "Doe"
  }
  let p2 = {
    firstName:"Mary",
    lastName: "Doe"
  }

  console.log(someone.fullName.call(p1)) // output: "John Doe"
  console.log(someone.fullName.call(p2)) // output: "Mary Doe"
```
- #### ```apply()``` is similar to ```call()``` except that it takes an array-like object instead of listing the arguments out one at a time.
- #### The call() method takes arguments separately.
- #### The apply() method takes arguments as an array.
```javascript
  let collectionInfo = {
    fullName: function(city, country){
      return this.firstName + " " + this.lastName +  " comes from " + " " + city + ", " + country;
    }
  }

   let p1 = {
    firstName:"John",
    lastName: "Doe"
  }

  console.log(collectionInfo.fullName.apply(p1, ["Boston", "America"]));
  // output: John Doe comes from  Boston, America
```
- #### ```bind()``` returns a new function, allowing you to pass in a this array and any number of arguments
```javascript
  let heavenSome = {
    myCar(carMode, carColor, carYear){
     return `My name is ${this.firstName} ${this.lastName}, I have a car, it's ${carMode}, the color is ${carColor} and it is made in ${carYear}`
    }
  }

  let thisIsMyCar = heavenSome.myCar.bind(p1, "Toyota", "Silver", "2020")  // return a function [Function: bound myCar]
  console.log(thisIsMyCar());  // My name is John Doe, I have a car, it's Toyota, the color is Silver and it is made in 2020
```