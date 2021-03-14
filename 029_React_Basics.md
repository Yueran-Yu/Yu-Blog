1. ### *package.json*
   -  ```"react-scripts":"3.0.0"``` =>  It allows use to have no worry about webpack and babble.
   - ```javascript
        "scripts": {
        "start": "react-scripts start",
        // starts the react project by running "yarn start"
        "build": "react-scripts build",
        // it used to turn all of the react code in the <source> folder into that version the browser to understand and put it inside of this <public> folder,
        // after running "npm run build" generated a <build> folder, this is the place ready to be deployed and be displayed to the outside users.
        "test": "react-scripts test",
        // run the test code we will going to write
        "eject": "react-scripts eject"
        // take out all of the configuration files that it's hidden from us from Babble and webpack in case wwe will manage it ourselves.
        }
      ```
2. ### *source* folder
    - All applications live, our workspace
3. ### *public* folder
    - The browser needs an older version of javascript and html to understand

4. ### *class* vs. *className*
   - ```javascript
        // class
         class App extends Component {
            constructor(){
               super();
              this.state = {
              string: "Hello Today I start to learn something from yihua's teaching"
            }
          }
          render(){
            return(
              // className
              <div className="App">
              <header className="App-header">
              </header>
              </div>)
          }
          //the 'className' in the render is used to differentiate the class at the beginning
      ```
5. ### *render()* method
  - ```render()``` is one of the built-in methods of ```React.Component```, the ``` super()``` inside the React.Component's ```constructor()``` helps us call ```render()```

6. ### 2 Ways to create components
  - Class Component
  - Functional Component

7. ### *props* in the functional component
  - ```javascript
      import React from 'react';
        export const CardList = (props)=>{
          console.log(props);
          return (<div>hello</div>)
        }

        // App.js
        // ...
        render() {
          return (
            <div className="App">
              <CardList name="Grace-Yueran"/>
              {
                this.state.monsters.map(item =><h1 key={item.id}>{item.name}</h1>)
              }
            </div>
        )
      }
    ```
    - ```props``` is going to be an object of any properties that you write onto this component where it gets used.

8. ### *Children* Property
    ```javascript
    // card-list.component.jsx
    import React from 'react';
        export const CardList = (props)=>{
          console.log(props);
          return (<div> {props.children}</div>)

    // App.js
      render(){
          return (
          <div className="App">
            <CardList name="Grace-Yueran">

          // children property
            <h1>Grace Yueran</h1>
            </CardList>
            {this.state.monsters.map(item => <h1 key={item.id}>{item.name}</h1>) }
          </div>
        )
      }
    ```
   - ```Children``` are actually what you pass in between the brackets of our component that gets called.

9. ### The Benefits of When do we break things down into components?
    - To be a great React developer you need to be good at these very well:
      - 1. Decide on Components
      - 2. Decide the State and where it lives
      - 3. What changes when state changes
    - By breaking things down we're making things more flexible because each component does one thing and one thing really well.
    - It can be used in other places, the bigger a file gets the more JSX we have, the more logic we have, the harder it gets to be used in another place.
    - The KEY here is that the reason we break things down into smaller components is that we combine each component with its concern and that concern is that this component is only concerned about card list. This component is only concerned about cards.

10. ### The second argument of ***setState()***
    ```javascript
    // App.js
    // if we wanted to see or do something with our state right after we set it
    // then we have to do it inside of this second argument function that will get called right after the set state.
    render() {
        return (
            <div className="App">
              <input type='search' placeholder='Search Monster'
                    onChange={e => this.setState({searchField: e.target.value}, () => {
                      console.log(this.state)
                    })}/>
              <CardList monsters={this.state.monsters}/>
            </div>
        )
      }
    ```
   - **The second parameter** to ***setState()*** is an optional callback function that will be executed once ***setState*** is completed and the component is re-rendered. ***componentDitUpdate*** should be used instead to apply such logic in most cases.