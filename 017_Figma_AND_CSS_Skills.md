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



