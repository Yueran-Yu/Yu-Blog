## [Back To Index Page](https://www.graceyutech.com/Yu-Blog/)
## Async
> When we are loading the the script tag inside of the head of our html, this means that the script tag will load before all of the content inside of our body.
>>
> In general, things inside of the head will load in the background while the body of you page is being loaded. But script tags are different. While a script tag is being loaded, nothing else on the page can continue loading in order to get around this and make our script tag load in the background. We need to add the async attribute in the script tag as below shows, which tells our browser in order to download this stored js page in the background and continue downloading the actual body of our HTML page as the same time.
```html
<!DOCTYPE html>
<html>
    <head>
        <title>The Generics | Store</title>
        <meta name="description" content="This is the description">
        <link rel="stylesheet" href="styles.css" />
        <script src="store.js" async></script>
    </head>
    <body>
        <header class="main-header">
            <nav class="main-nav nav">
                <ul>
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="store.html">STORE</a></li>
                    <li><a href="about.html">ABOUT</a></li>
                </ul>
            </nav>
            <h1 class="band-name band-name-large">The Generics</h1>
    </body>
</html>
```

```javascript
const parent = {
  name: 'Stacey',
  age: 35,
  heritage: 'Irish'
}

parent.prototype.cooking = function(){
    Console.log('cooking')
}
```