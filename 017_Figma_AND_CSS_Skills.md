## When you are independently doing a project, you should:
- ### Set a small goal and achieve it.
- ### Don't think about being perfect, only guarantee there is no bug.


### Figma Tips
- Copy a Rectangle: Mac press ```option``` , Win press ```Alt```,then drag the original rectangle to the target place
- White: ```#ffffff```
- Black: ```#000000```
- Grey: ```#EEEEEE```
- Border Color: ```dddddd```
- Adjust the size of image without deformation: Press ```shift``` to drag image
- Check space or pixel between 2 rectangles:
  - Select one rectangle, press ```option```, hover to another rectangle, you will see the pixel between them
  - <img src="imgs/check_pixel.png" width="800" alt="check_pixel.png">


### CSS Tips
#### Body Border and Background
```css
    body{border: 1px solid red;}
    /* when you give a border to the body, it only shows the border of the content area.
    If the content area is very small, the border area is also small.

    But when you give the background color to a body, the background color will spread out over the entire webpage.*/

    body{
      background:#eeeeee;
    }
```
#### CSS Reset Code
```CSS
    *{box-sizing: border-box;}
    *:before, *:after{box-sizing:border-box;}
    *{margin:0; padding:0;}
    ul, ol { list-style: none;}
    a{color:inherit; text-decoration: none;}
```

### How to use alibaba icon
  [How to Use Icon](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.17&helptype=code)

### About CSS Height
> Only the innermost elements can add height, the outside elements should use padding or margin to fill in and put up the box.
>
### How to Reference jQuery?
>Make sure jQuery is loaded before your code. So for instance:
```html
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
    <script src="your-code.js"></script>

    Or

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
    <script>
    // Your code
    </script>

    NOT:
    <!-- Not like this -->
    <script src="your-code.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
```

### How to use Parcel to build the code
```javascript
  1. rm -rf dist // this is clear the dist if you want to build a brand new parcel of your code
  2. parcel build src/index.html --no-minify --public-url ./

  https://yueran-yu.github.io/JRG-Course/NavigationPage/dist/

  //this path that will show for user to click

  // The complete Parcel command
  parcel --help // look into the document parcel

  // add absolute path
  parcel build src/index.html --no-minify --public-url  https://yueran-yu.github.io/JRG-Course/NavigationPage/dist/

  // add relative path
  parcel build src/index.html --no-minify --public-url ./

  // create a /gitignore file to ignore .idea and node_modules/
  3. .gitignore
  ```
  > You also can add the the ```Parcel``` command into the ```package.json``` file
  ```javascript
      "scripts": {
      "build": "rm -rf dist; parcel build src/index.html --no-minify ./"
      // here is the sentence you need to add to;  window system may not support ';' after 'dist'
      },
      "devDependencies": {
        "cssnano": "^4.1.10"
      },
      "name": "NavigationPage",
      "version": "1.0.0",
      "main": "index.js",
      "license": "MIT"
      }
  ```
  > You can run the ```Parcel``` next time by typing **```yarn build```** in the terminal

  [My Website Link: Front-End Navigation](https://yueran-yu.github.io/JRG-Course/NavigationPage/dist/index.html)






