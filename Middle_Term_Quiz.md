### 1. What is closure?  What is the function of closure?  What is the drawback of closure?
> A closure is a feature in Javascript where an inner function has access to the outer (enclosing) function's  variables.
>
> #### Here is the example of function of closure:
> ```javascript
>   let global = 33
>   function outside() {
>     let a = 10
>     let b = 20
>
>     function inside() {
>       let c = 30
>       return a + b + c + global
>     }
>     return inside
>   }
>   // When we call outside()
>   let result = outside()()
>   console.log(result)  // 93
> ```
> The above combination is a closure.
> ```inside()``` function is nested in the ```outside()``` function.
>
> All local variables in the ```outside()```  are accessible for ```inside()```.
>
> But local variables in the ```inside()```  are invisible for ```outside()```.
>
> This is the special ```chain scope``` of Javascript.
>
> The Child object will look upward one level at a time for all variables in the parent objects or grandparent objects. All variables of the parent objects are visible to the child objects. The reverse is not applicable.