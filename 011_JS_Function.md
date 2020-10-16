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
