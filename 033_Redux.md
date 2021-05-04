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

### 2. Immutability
- "Mutable" means "changeable". If something is "immutable", it can never be changed.

### 3. Update values immutably
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
- Redux expects that all state updates are done immutably.

### 4. Actions
- An action is a plain Javascript object that has a **type** field. You can think of an action as an event that describes something that happened in the application.
- The **type** field should be a string that gives this action a descriptive name, like "todos/todoAdded". We usually write that types sting like "domain/eventName", where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened.
- An action object can have other fields with additional information about **what happened**. By convention, we put that information in a field called payload.
- A typical action object might look like this:
  ```javascript
    const addTodoAction = {
      type: 'todos/todoAdded',
      payload: 'Buy milk'
      }
  ```
### 5. Action Creator
- An **action creator** is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand every time.
  ```javascript
    const addTodo = text => {
      return {
        type: 'todos/todoAdded',
        payload: text
      }
    }
  ```