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

  ### 6. Reducers
  - A reducer is a function that receives the current **state** and an **action** object, decides how to update the state if necessary, and returns the new state: **(state, action) => newState** You can think of a reducer as an event listener which handles events based on the received action (event) type.
  - Reducers must always follow some specific rules:
    - They should only calculate the new state value based on the **state** and **action** arguments.
    - They are not allowed to modify the existing **state**. Instead, they must make immutable updates, by coping the existing **state** and making changes to the copied values.
    - They must not do any asynchronous logic, calculate random values, or cause other "side effects"
  - The logic inside reducer functions typically follows the same series of steps:
    - Check to see if the reducer cares about this action
      - If so, make a copy of the state, update the copy with new values, and return it.
    - Otherwise, return of a reducer, showing the steps that each reducer should follow:

  ```javascript
    const initialState = {value: 0}
    function counterReducer(state=initialState, action){
      // check to see if the reducer cares about this action
      if(action.type === 'counter/increment'){
        // if so, make a copy of 'state'
        return {
          ...state,
          // and update the copy with the new value
          value: state.value +1
        }
      }
      // otherwise return the existing state unchanged
      return state
    }
  ```