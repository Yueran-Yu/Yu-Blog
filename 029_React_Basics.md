1. ### package.json
   -  ```"react-scripts":"3.0.0"``` =>  It allows use to have no worry about webpack and babble.
   - ```json
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
        },
      ```
2. ### **source** folder
    - All applications live, our workspace
3. ### **public** folder
    - The browser needs an older version of javascript and html to understand

4. ### class vs. className
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