<h1 align="center">
  <img src="../public/js.jpg" alt="Standard - JavaScript Style Guide" width="100">
  <br>
  <br>
  JavaScript 编码规范
  <br>
  <br>
</h1>

# 格式化

* **使用两个空格进行缩进**

```js
  function hello (name) {
    console.log('hi', name)
  }
```

* **单行长度不超过80个字符**

```js
  helloWorld (doc, element, window, 'some string value', true, 123, navigator,
    parameter1) // good
  helloWorld (doc, element, window, 'some string value', true, 123, navigator, parameter1) // bad
```

* **在运算符后换行，下一行增加一个层级的缩进**

```js
  helloWorld (doc, element, window, 'some string value', true, 123, navigator,
    parameter1) // good
  helloWorld (doc, element, window, 'some string value', true, 123, navigator,
  parameter1) // bad 第二行没有缩进
  helloWorld (doc, element, window, 'some string value', true, 123, navigator
    ,parameter1) // bad 在运算符之前换行了
```

* **不允许有连续多行空行**

  正确的做法
  * 在方法之间
  * 在方法中的局部变量和第一条语句之间
  * 在多行或单行注释之前
  * 在方法内的逻辑片段之间

# 命名

* **采用驼峰命名**

```js
  var my_variable = undefinded // bad
  var myVariable = undefinded // good
```

* **私有变量变量函数前置 _ 标识**

```js
  MyConstructor.prototype.private = function(){}; // bad

  function _private () {}
  MyConstructor.prototype._private = _private // good

```

* **构造器首字母大写**

```js
  function classA () {}
  classA.prototype.functionA = function () {} // bad

  function ClassA () {}
  ClassA.prototype.functionA = function () {} // good
```

* **常量大写并且使用 _ 分割 定义在文件头部**

```js
  const leftTopLat = 90 // bad
  const LEFT_TOP_LAT = 90 // good
```

# 函数

* **函数的参数不得超过5个，多于5个使用objectType代替**

```js
  function myTestFunc (a,b,c,d,e,f,g,h) {
    doSomething()
  } // bad

  function myTestFunc(paramObj) {
    var a = paramObj.a
    var b = paramObj.b
    doSomething()
  } // good
```

* **立即执行函数，用 () 包裹**

```js
  var value = function () {
    return 'hello world'
  } () // bad

  var value = (function () {
    return 'hello world'
  } ()) // good
```

* **分支超过4种的 if else 使用 switch case, switch case需要带default**

```js
  function fn (x) {
    if (x === 1) {
      return 'x === 1'
    } else if (x === 2) {
      return 'x === 2'
    } else if (x === 3) {
      return 'x === 3'
    } else if (x === 4) {
      return 'x === 4'
    } else {
      return 'x'
    }
  } // bad

  function fn (x) {
    var str = undefinded
    switch(x) {
      case 1:
        str = 'x === 1'
        break
      case 2:
        str = 'x === 2'
        break
      case 3:
        str = 'x === 3'
        break
      case 4:
        str = 'x === 4'
        break
      default:
        str = x
    }
  } // good
```

* **禁止使用 == != 一律使用 === !==**

```js
  if (x == 0) {} // bad
  if (x === 0) {} // good
  if (x != 1) {} // bad
  if (x !== 1) {} // good
```

# 分号

* **不使用分号**

```js
  console.log('hi', name) // good
  console.log('hi', name); // bad
```

* **不要使用 (  [  or ` 等作为一行的开始**

  在没有分号的情况下代码压缩后会导致报错，而坚持这一规范则可避免出错

```js
  (function () {
    window.alert('ok')
  })() // bad

  ;(function () {
    window.alert('ok')
  })() // good

  'hello'.indexOf('o') // bad

  var str = 'hello'
  str.indexOf('o') // good
```

# 其他

* **使用严格模式，但禁止使用全局严格模式**

```js
  'use strict'
  function fn () {} // bad

  function fn () {
    'use strict'
    console.log('hello world')
  } // good

  (function () {
    'use strict'
    function fn () {}
    function fn2 () {}
  }()) // good
```

* **除非转义需要，字符串统一使用单引号**

```js
  console.log('hello world') // good

  $("<div class='box'></div>") // good
```

# 注释遵循JSDoc标准

  [![JSDoc3](/public/jsdoc.png)](http://www.css88.com/doc/jsdoc/index.html)

  这是 JavaScript [JSDoc](http://www.css88.com/doc/jsdoc/index.html) 注释规范的全文。

# Javascript代码格式化统一使用JavaScript Standard Style

[![js-standard-style](/public/standard.png)](https://github.com/standard/standard)

这是 JavaScript [standard](https://github.com/standard/standard) 代码规范的全文。

掌握本规范的最好方法是安装并在自己的代码中使用它。

## 编辑器配置及安装

### Visual Studio Code

安装 **[vscode-standardjs][vscode-1]**（已经包含了自动格式化）。

安装 **[vscode-standardjs-snippets][vscode-2]** 以获得 JS snippets。安装 **[vscode-react-standard][vscode-3]** 以获得 React snippets。

[vscode-1]: https://marketplace.visualstudio.com/items/chenxsan.vscode-standardjs
[vscode-2]: https://marketplace.visualstudio.com/items?itemName=capaj.vscode-standardjs-snippets
[vscode-3]: https://marketplace.visualstudio.com/items/TimonVS.ReactSnippetsStandard

编辑器配置

```json
  {
    "editor.wordWrapColumn": 80,
    "editor.tabSize": 2,
    "editor.wordWrap": "wordWrapColumn",
    "editor.wrappingIndent": "indent",
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  }
```

### WebStorm (PhpStorm, IntelliJ, RubyMine, JetBrains 等 jetbrains 全家桶系列)

WebStorm [最近宣布](https://blog.jetbrains.com/webstorm/2017/01/webstorm-2017-1-eap-171-2272/)在其 IDE 中
 自带 `standard` 规范。

但是如果你仍然想自己动手配置，[那么请看此教程][webstorm-1]。此教程适用于 JetBrains 全家桶，包括 PhpStorm、IntelliJ、RubyMine 等。

[webstorm-1]: /doc/webstorm.md