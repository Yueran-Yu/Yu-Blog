## Bubbling & Capturing
----------------------
[Reference: What is event Bubbling and Capturing?](https://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing)

> Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. The event propagation mode determines in which order the elements receive the event.

### What is Bubbling
> With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.

### What is Capturing
> With capturing, the event is first captured by the outermost element and propagated to the inner elements.

> We can use the ```addEventListener(type, listener, useCapture)``` to register handlers for in either ```bubbling(default)``` or ```capturing``` mode, To use the capturing model pass the third argument as ```true```.
>

**Example**
```html
<div>
  <ul>
    <li></li>
  </ul>
</div>
```

> In the structure above, assume that a click event occurred in the ```li``` element.
> In capturing model, the event will be handled by the ```div``` first(click event handlers in the ```div``` will fire first), then in the ```ul```, then at the last in the target element, ```li```.
> In the bubbling model, the opposite will happen: the event will be first handled by the ```li```, then by the ```ul```, and at last by the ``` div``` element.

> In the example below, if you click on any of the highlighted elements, you can see that the capturing phase of the event propagation flow occurs first, followed by the bubbling phase.
 ```html
  <div>1
      <div>2
          <div>3
              <div>4
                  <div>5</div>
              </div>
          </div>
      </div>
  </div>
  <button id="clear">clear output</button>
  <section id="log"></section>
```
```javascript
  var logElement = document.getElementById('log')

  function log(msg){
    logElement.innerHTML += ('<p>' + msg + '</p>')
  }

  function capture(){
    log('capture: ' + this.firstChild.nodeValue.trim())
  }

  function bubble(){
    log('bubble: ' + this.firstChild.nodeValue.trim())
  }

  function clearOutput(){
    logElement.innerElement = ""
  }
  var divs = document.getElementsByTagName('div')
  for (var i = 0; i < divs.length; i++){
      divs[i].addEventListener('click', capture,true)
      divs[i].addEventListener('click', bubble, false)
  }
  var clearButton = document.getElementById('clear')
  clearButton.addEventListener('click', clearOutput)
```

### About the Order Of Capture and Bubble
```html
  <div id="div1">1
      <div id="div2">2</div>
      <div id="div3">3</div>
  </div>
```

```javascript
  // V. 1
    div1.addEventListener('click',()=>{
        alert('div1, here is bubble')
    })
    div1.addEventListener('click',()=>{
        alert('div1, here is capture')
    },true)
    //Click div1, Order: div1-bubble => div1-capture

    div2.addEventListener('click',()=>{
        alert('div2, here is bubble')
    })
    div2.addEventListener('click', ()=>{
        alert('div2, here is capture')
    }, true)

    //Click div2, Order: div1-capture => div2-bubble => div2-capture => div1-bubble

    div3.addEventListener('click',()=>{
        alert('div3, here is bubble')
    })
    div3.addEventListener('click', ()=>{
        alert('div3, here is capture')
    }, true)
    //Click div3, Order: div1-capture => div3-bubble => div3-capture => div1-bubble
```

```javascript
// V. 2
    div1.addEventListener('click',()=>{
        alert('div1, here is capture')
    },true)

    div1.addEventListener('click',()=>{
        alert('div1, here is bubble')
    })
    //Click div1, Order: div1-capture => div1-bubble


     div2.addEventListener('click', ()=>{
        alert('div2, here is capture')
    }, true)
    div2.addEventListener('click',()=>{
        alert('div2, here is bubble')
    })
    //Click div2, Order: div1-capture => div2-capture => div2-bubble => div1-bubble

    div3.addEventListener('click', ()=>{
        alert('div3, here is capture')
    }, true)
    div3.addEventListener('click',()=>{
        alert('div3, here is bubble')
    })
     //Click div2, Order: div1-capture => div3-capture => div3-bubble => div1-bubble
```

```javascript
  // V. 3
    div2.addEventListener('click',()=>{
        alert('div2, here is bubble')
    })
    div2.addEventListener('click', ()=>{
        alert('div2, here is capture')
    }, true)
    //Click div2, Order: div1-capture => div2-bubble => div2-capture => div1-bubble

    div3.addEventListener('click',()=>{
        alert('div3, here is bubble')
    })
    div3.addEventListener('click', ()=>{
        alert('div3, here is capture')
    }, true)
    //Click div3, Order: div1-capture => div3-bubble => div3-capture => div1-bubble

     div1.addEventListener('click',()=>{
        alert('div1, here is bubble')
    })
    div1.addEventListener('click',()=>{
        alert('div1, here is capture')
    },true)
    //Click div1, Order: div1-bubble => div1-capture
```


```javascript
    // V. 4
    div2.addEventListener('click', ()=>{
        alert('div2, here is capture')
    }, true)
    div2.addEventListener('click',()=>{
        alert('div2, here is bubble')
    })
    //Click div2, Order: div1-capture => div2-capture => div2-bubble => div1-bubble

    div3.addEventListener('click',()=>{
        alert('div3, here is bubble')
    })
    div3.addEventListener('click', ()=>{
        alert('div3, here is capture')
    }, true)
    //Click div3, Order: div1-capture => div3-bubble => div3-capture => div1-bubble

    div1.addEventListener('click',()=>{
        alert('div1, here is bubble')
    })
    div1.addEventListener('click',()=>{
        alert('div1, here is capture')
    },true)
    //Click div1, Order: div1-bubble => div1-capture
```
[Reference: Event Order](https://www.quirksmode.org/js/events_order.html)


## Target VS. CurrentTarget
**Example**
```html
<div id="div1" data-id = "1">1
  <div id="div2" data-id = "2">2</div>
  <div id="div3" data-id = "3">3</div>
</div>
```
```javascript
  // test e.currentTarget and e.target
  div2.addEventListener('click', (e)=>{
      alert('div2, here is capture ' + 'target: ' + e.target.dataset.id + 'currentTarget: ' + e.currentTarget.dataset.id)
  }, true)


  div2.addEventListener('click',()=>{
      alert('div2, here is bubble '  + 'target: ' + e.target.dataset.id + ' currentTarget: ' + e.currentTarget.dataset.id)
  })

  div3.addEventListener('click',()=>{
      alert('div3, here is bubble')

  })
  div3.addEventListener('click', ()=>{
      alert('div3, here is capture')
  }, true)


  div1.addEventListener('click',(e)=>{
      alert('div1, here is bubble '  + 'target: ' + e.target.dataset.id + ' currentTarget: ' + e.currentTarget.dataset.id)
  })
  div1.addEventListener('click',(e)=>{
      alert('div1, here is capture '  + 'target: ' + e.target.dataset.id + ' currentTarget: ' + e.currentTarget.dataset.id)
  },true)
```

