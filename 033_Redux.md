[Redux Tutorial Reference](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
## Redux
- Good for managing large state
- Useful for sharing data between components
- Predictable state management using the 3 principles
  - Single source of truth
  - State is read only
  - Changes using pure functions

<img src="imgs/Redux_Flow.png" width="600" alt="Redux  Flow">

### Redux Terms and Concepts
#### 1. React-Redux
- Redux can integrate with any UI framework, and is most frequently used with React. ***React-Redux*** is our official package that lets your React components interact with with a Redux store by reading pieces of state and dispatching actions to update the store.

#### 2. Immutability
- "Mutable" means "changeable". If something is "immutable", it can never be changed.

#### 3. Update values immutably
- In order to update values immutably, your code must make copies of existing objects/arrays, and then modify the copies.
- We can do this by hand using JavaScript's array / object spread operators, as well as array methods that return new copies of the array instead of mutating the original array:
```javascript
    const obj = {
      // To safely update obj.a.c, we have to copy each piece
      a: {c:3}, b:2
    }

    const obj2 = {
      //copy obj  /overwrite a / copy obj.a / overwrite c
      ...obj,     a:{          ...obj.a,         c:42}
    }

```