# Does Object needs to be classified?
```javascript
let square = {
  width: 5,
  getArea(){
    return this.width * this.width
  },
  getLength(){
    return this.width * 4
  }
}
```

**You will know much better than other people if you are good at draw the memory diagram.**

<img src="imgs/MP_RepeatedFunctions.png" width="500" alt="MP_RepeatedFunctions">


- ### Version 1
  ```javascript
  let squareList = []
  let widthList = [5,6,5,6,5,6,5,6,5,6,5,6]
  let squarePrototype = {
    getArea(){
      return this.width * this.width
    },
    getLength(){
      return this.width * 4
    }
  }

  for(let i = 0; i < 12; i++){
    squareList[i] = Object.create(squarePrototype)
    squareList[i].width = widthList[i]
  }
  ```
  > But these code are too spread.

- ### Version 2
  ```javascript
  let squareList = []
  let widthList = [5,6,5,6,5,6,5,6,5,6,5,6]

  let squarePrototype = {
    getArea(){
      return this.width * this.width
    },
    getLength(){
      return this.width * 4
    }
  }
  function createSquare(width){ // this is a construct function
    let ojb = Object.create(squarePrototype)
    obj.width = width
    return obj
  }

  for(let i = 0; i < 12; i++){
    squareList[i] = createSquare(widthList[i])
  }
  ```
- ### Version 3
  ```javascript
  let squareList = []
  let widthList = [5,6,5,6,5,6,5,6,5,6,5,6]

  function createSquare(width){
    let obj = Object.create(createSquare.squarePrototype)
  }

  // Function also is a Object
  // create a new property named 'squarePrototype' for the function 'createSquare'
  createSquare.squarePrototype = {
    getArea(){
      return this.width * this.width
    },
    getLength(){
      return this.width * 4
    },
    constructor: createSquare
    //you can find the construct function through the 'squarePrototype' prototype
  }
  for(let i = 0; i < 12; i++){
    squareList[i] = createSquare(widthList[i])
  }
  console.log(squareList[i].constructor)
  ```
- ### Version 4 => Combine Function and Prototype
  ```javascript
  let squareList = []
  let widthList = [5,6,5,6,5,6,5,6,5,6,5,6]

  // function name should be capitalized
  function Square(width){
    this.width = width
  }

  Square.prototype.getArea = function(){
    return this.width * this.width
  }
   Square.prototype.getLength = function(){
    return this.width * 4
  }
  for(let i = 0; i < 12; i++){
    squareList[i] = new Square(widthList[i])
    console.log(squareList[i].constructor)
  }
  ```
<img src="imgs/new_keyword.png" width="500" alt="new keyword">


- **Example**
```javascript
  function Dog(name){
    this.name = name
    this.color = 'white'
    this.kind = 'abs'
  }

  Dog.prototype.bark = function(){console.log('barking')}
  Dog.prototype.run = function(){console.log('running')}
  let dog1 = new Dog('little w')
  Dog {name: "little w", color: "white", kind: "abs"}

  let dog1 = new Dog('little w')
  dog1.run() // result: running
  dog1.bark() // result: barking
```
