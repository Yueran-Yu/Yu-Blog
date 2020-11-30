## [Back To Index Page](https://www.graceyutech.com/Yu-Blog/)
- Run Server: ```node server.js 8888```
- Helpful Tool: ```node-dev npm```
  -  [LInk: Node Dev in Github](https://github.com/fgnass/node-dev#readme)
  -  Install ```yarn global add node-dev```  or ```npm install -g node-dev```


### Challenge: Onload CSS, JAVASCRIPT, XML, JSON through AJAX
> Previously we use ```  <link rel="stylesheet" href="style.css"> ``` to reference css file
1. Create a ```HttpRequest``` object in a javascript file
2. Call ```open```  method of ```HttpRequest``` [MDN Link:XMLHttpRequest.open(method, url)](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open)
3. Listen ```obj.onreadystatechange = () => {}``` of that object
4.  Send request: ```request.send()```


### AJAX Server.js Assignment GitHub Link
[AJAX Server.js Source Code](https://github.com/Yueran-Yu/JRG-Course/tree/master/Server_AJAX)