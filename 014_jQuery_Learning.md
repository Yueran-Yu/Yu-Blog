## jQuery Learning

### 1. jQuery - How to select elements
> jQuery selectors are used to "find" (or select) HTML elements based on their name, id, classes, types, attributes, values and much more.
> It's based on the existing CSS Selectors, and in addition, it has some own custom selectors.
> All selectors in jQuery start with the dollar sign and parentheses: ```$()```.
> You can all ```<p>``` elements on a page like this:

```javascript
$("*")	// * - All elements
$("#lastName")	// #id - The element with id="lastName"
$(".intro")	// .class - All elements with class="intro"
$(".intro,.demo")	// .class,.class - All elements with the class "intro" or "demo"
$("p") // element	-	All <p> elements
$("h1,div,p")	//el1,el2,el3	 - All <h1>, <div> and <p> elements
```
### 2. jQuery - What is chain operation
> With jQuery, you can chain together actions/ methods
> Chaining allows us to run multiple jQuery methods (on the same element) within a single statement
> Until now we have been writing jQuery statements one at a time.
> To chain an action, you simply append the action to the previous action.
> The following example chains together the css(), slideUp(), and slideDown() methods. The "p1" element first changes to red, then it slides up, and then it slide down.
```javascript
$("#p1").css("color", "red").slideUp(2000).slideDown(2000);
```
> **Tips**: When chaining, the lien of code could become quite long. However,jQuery is not very strict on the syntax; you can format it like you want, including line breaks and indentations.
```javascript
$("#p1").css("color", "red")
  .slideUp(2000)
  .slideDown(2000);
```

### 3. jQuery - How to create elements
- append() - The jQuery append() method inserts content AT THE END of the selected HTML elements.
  ```javascript
  $("p").append("Some appended text.");
  ```
- prepend() - The jQuery prepend() method inserts content AT THE BEGINNING of the selected HTML elements.
   ```javascript
   $("p").prepend("Some prepended text.");
  ```
- after() - The jQuery after() method inserts content AFTER the selected HTML elements.
  ```javascript
  $("img").after("Some text after");
  ```
- before() - The jQuery before() method inserts content BEFORE the selected HTML elements.
  ```javascript
  $("img").before("Some text before");
  ```
### 4. jQuery - How to move elements
- If you want move the DIV elements inside one to another DIV:
  ```html
  <!-- Move this div -->
  <div id="source">
    <!-- ... -->
  </div>

  <!-- into this -->
  <div id="destination">
  <!-- ... -->
  </div>

  <!-- become the result -->
  <div id="destination">
    <div id="source">
      <!-- ... -->
    </div>
  </div>
  ```
- Solution:
  ```javascript
   //You may want to use the appendTo function (which adds to the end of the element):
  $("#source").appendTo("#destination");
  // Alternatively you could use the prependTo function (which adds to the beginning of the element):
  $("#source").prependTo("#destination");
  ```
### 5. jQuery - How to change the attributes of elements
- Return the value of the an attribute:
  ```javascript
    $(selector).attr(attribute)
  ```
- Set the attribute and value:
  ```javascript
    $(selector).attr(attribute, value)
  ```
- Set attribute and value using a function:
  ```javascript
    $(selector).attr(attribute, function(index, currentValue))
  ```
- Set Multiple attributes and values:
  ```javascript
  $(selector).attr({attribute: value, attribute:value,...})
  ```