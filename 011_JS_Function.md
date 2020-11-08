- Call time
- Scope
- Closure
- Parameter
- Return value
- Call Stack
- Hoisting
- Arguments (except arrow function)
- This

<img src="imgs/Closure.png" width="400" alt="closure">

<img src="imgs/func_hoisting.png" width="400" alt="func_hoisting.png">
<img src="imgs/JS_FUNCTION1.png" width="400" alt="">
<img src="imgs/JS_FUNCTION2.png" width="400" alt="">



```javascript
function fn(){
  console.log(this)
}

// if you don't give any condition to the function, 'this' will point to the 'window'
```
### if you don't give any condition to the function, 'this' will point to the 'window'

## We must use:
```javascript
let person = {name:'frank',
sayHi(){
  console.log(this.name)
  }
}
person.sayHi.call(person)
```
<img src="imgs/why_use_this.png" width="400" alt="why_use_this.png">

```javascript
function add(x, y){
  return x + y
}

add.call(undefined, 1,2)
// first value used to occupy the position
```

## Arrow Function
- **Regular function 'this' refers parent, left of the dot**
- **Arrow function refers to it's current surrounding scope**
```javascript
  // regular function
  const bob = {
    firstName: "bob",
    lastName: "smith",
    sayName: function() {
      const self = this
      setTimeout(function() {
        console.log(`Hello, my name is ${self.firstName} ${self.lastName}`);
      })
    }
  }
  bob.sayName()
  //result: Hello, my name is bob smith
```

```javascript
 // arrow function
  const bob1 = {
    firstName: "bob",
    lastName: "smith",
    sayName: function() {
      setTimeout(()=> {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
      })
    }
  }
bob1.sayName()
// Hello, my name is bob smith

```