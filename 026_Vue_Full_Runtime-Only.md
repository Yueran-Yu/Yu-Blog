<!-- 写一篇博客，介绍一下 Vue 两个版本的区别和使用方法：

两个版本对应的文件名
template 和 render 怎么用
教读者如何用 codesandbox.io 写 Vue 代码 -->

## Runtime + Compiler(Full) vs. Runtime-only

  |Vue|Runtime + Compiler(Full)| Runtime-Only |Comments|
  |-----|:-----:|:--------:|:-----:|
  |Feature|Has Compiler| No Compiler |The runtime-only builds are roughly 30% lighter-weight than their full-build counterparts|
  |View|Write in the HTML page or template page|Write in the **render** function and create HTML elements or tags through parameter **h** |h is the name of parameter, you can also use **createElement** as the parameter name|
  |Reference CDN|vue.js| vue.runtime.js|The suffix of Production mode is **.min.js**|
  |Reference webpack|Need add alias|Runtime-Only is default mode| Configured by Developer You|
  |Reference @vue/cli|Need additional configuration|Runtime-Only is default mode|Configured by Developer You and his fellow|

#### Example of Template
```javascript
  // this requires the compiler
  new Vue({
    template: '<div>{{ hi }}</div>'
  })
```
#### Example of Render function
```javascript
  // this does not
  new Vue({
    render (h) {
      return h('div', this.hi)
    }
  })
```

#### How to use codesandbox.io
> - Go to codesandbox.io no need to login.
> - Select **Create a Sandbox, it's free**
> - Select Vue
> - Code on the files
> - You can click **Export to Zip** to download the online file and then edit locally

