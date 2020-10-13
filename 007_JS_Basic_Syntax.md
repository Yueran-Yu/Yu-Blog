> ### The difference between the code below:
> ```javascript
> 1.
> function fn(){
>  return 3
> }
> 2. function fn(){
>  return undefined
>  3
> }
> ```

> ### Identifier
> - The first letter can be Unicode letter, $ or _ or Chinese
> - The remaining letter can use the above things and including number
> ```javascript
>  1. var $1 = 'xxxx'
>  2. var _ = 'xxxx'
>  3. var 9$ => Error: Uncaught SyntaxError:Invalid or unexpected token
> ```

> ### About Comment
> **Please only Write the most important Comment!**
>
> **You also can put the thinking steps into the comment**

> If ... else
>  ```javascript
>  if(a < 100)
>    if(a < 10)
>      console.log('Here is the result.')
>  ```

> ### Between '||' and 'if...else', use '||' first.
>
> For Example:
> ```javascript
>   a = a || 100
>
>   ===== equals:
>
> if(a){
>     a = a
> }else{
>     a = 100    // initial value
> }
> ```
> ### While
> ```javascript
>  //dead loop
>  var a = 0.1
> while(a !== 1){
> console.log(a)
> a = a + 0.1
> }
> ```
> ### For
> ```javascript
>  for(var i = 0; i < 5; i++)
> {
>   setTimeout(()=>{console.log(i), 0})
> }
>  // the result is 5 (print 5 times)
> for(let i = 0; i < 5; i++)
> {
>    setTimeout(()=>{console.log(i), 0})
> }
>  // the result: 0, 1, 2, 3, 4
> ```
> ### Break
> ```javascript
>  for(let i = 0; i < 10; i++)
> {
>   if(i%2===1)
>       break
> }
>  // result: 1
> ```
> ### Continue
> ```javascript
>  for(let i = 0; i < 10; i++)
> {
>   if(i%2===1)
>       continue
> }else{
>   console.log(i)
> }
>  // result: 0,2,4,6,8,10
> ```
> Label
> ```javascript
>   foo:  {
>       console.log(1)
>       break foo
>       console.log('This line will not print out')
>   }
>   console.log(2)
>  // result: 1,2
> ```


