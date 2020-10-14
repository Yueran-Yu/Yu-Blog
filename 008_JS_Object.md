# Object
- #### Definition:
  - Unordered data collection
  - Key-Value Pair collection
 ```javascript
let obj = {'name': 'frank', 'age':18}
let obj = new Object({'name': 'frank'})
console.log({'name':'frank', 'age': 18})
```
- #### Details
  - key name should is string, not identifier, it can include any characters
  - quotation mark can be omitted, after omitting the quotation mark, the key name can only be represented according to the rules of the identifier
  - when you omit the quotation mark, the key name is also string
- Each key is the property name of a object
- Each value is the property value of a object
```javascript
Object.keys(obj)=>["1","100","255","3.2","0.01","0.234"]
Object.keys(obj) // can get all the keys of that obj
```

- #### Variable as Property name
  ```javascript
  let a = 'xxx'
  var obj = {'a': 111}
  var obj = {[a]: 1111} === var obj = {xxx: 1111}
  ```
- **How to use variables as property name?**
  - Previously we use constant as the property name
  - ``` let p1 = 'name' ```
  - ```let obj = {p1: 'frank'} ``` here, the property name is ```'p1'```
  - ```let obj = {[p1]: 'frank'} ``` here, the property name is ```'name'```
- Compare:
  - if there is no [], the property name will automatically become the string
  - if add [], the property will try to find the value inside of the []
  - if the property name is not a string, it will be automatically transformed into a string

- Five Falsy Values
  - null, undefined, 0, NaN, ''
- 7 data types
  - number
  - string
  - bool
  - symbol
  - null
  - undefined
  - object

# The hidden Property in the Object
> <img src="imgs/hiddenObjectProperty.png" width="500" alt="hidden Object Property">
