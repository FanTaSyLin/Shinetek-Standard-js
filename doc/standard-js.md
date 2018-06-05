<h1 align="center">
  <img src="../public/js.jpg" alt="Standard - JavaScript Style Guide" width="100">
  <br>
  <br>
  JavaScript 编码规范
  <br>
  <br>
</h1>

# 常用规则

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

* **分支超过4种的 if else 使用 switch case, switch case需要带default**

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

* **不要丢掉异常处理中 err 参数**

```js
run(function (err) {
  if (err) throw err
  window.alert('done')
}) // good

run(function (err) {
  window.alert('done')
}) // bad
```

* **使用浏览器全局变量时加上 window. 前缀**

```js
window.alert('hi') // good

alert('hi') // bad
```

* **每个 var 关键字单独声明一个变量**

```js
var silent = true
var verbose = true //good

var silent = true, verbose = true // bad
```

* **嵌套的代码块中禁止再定义函数**

```js
if (authenticated) {
  function setAuthUser () {}
} // bad
```

* **使用 __dirname 和 __filename 时尽量避免使用字符串拼接**

```js
const pathToFile = __dirname + '/app.js' // bad
const pathToFile = path.join(__dirname, 'app.js') // good
```

* **用 throw 抛错时，抛出 Error 对象而不是字符串**

```js
throw 'error' // bad
throw new Error('error') //good
```

# 更多代码风格，参考[JavaScript Standard Style](https://github.com/standard/standard)

[![js-standard-style](/public/standard.png)](https://github.com/standard/standard)

这是 JavaScript [standard](https://github.com/standard/standard) 代码规范的全文。

掌握本规范的最好方法是安装并在自己的代码中使用它。

# 注释遵循JSDoc标准

  [![JSDoc3](/public/jsdoc.png)](http://ww.css88.com/doc/jsdoc/index.html)

  这是 JavaScript [JSDoc](http://www.css88.com/doc/jsdoc/index.html) 注释规范的全文。

* 变量、常量的注释

```js
/**
 * 描述此常量的作用(含义)
 * @type {string}
 * @default
*/
const RED = 'FF0000'

/**
 * 描述此变量的作用(含义)
 * @type {(string|Array.<string>)}
*/
var foo= 'foo'
```

> @type, 用于标识可能包含的值的类型;
>
> @default, 记录默认值。通过添加@default标签，常量的数值将自动添加到文档;

* 函数注释

参数或返回值为 javascript 内置类型时

```js
/**
 * @param {string} param1 - 参数1说明
 * @param {number} param2 - 参数2说明
 * @returns {boolean} - 返回值的说明
 * @desc 函数的功能说明
 */
function foo (param1, param2) {
  var res = doSomething()
  return res
}
```

> @desc, 如果在注释开始的地方添加描述，那么可省略@desc标签;
>
> @param, 提供了对某个函数的参数的各项说明，包括参数名、参数数据类型、描述等;
>
> @returns, 标签描述一个函数的返回值。语法和@param类似;

参数或返回值为 自定义类型时

```js
/**
 * @typedef circle
 * @property {object} centre - 圆心
 * @property {number} centre.x -  圆心的x坐标值
 * @property {number} centre.y - 圆心的y坐标值
 * @property {number} radius - 半径
 */

/**
 * @typedef info
 * @property {number} area - 面积
 * @property {number} perimeter - 周长
 */

/**
 * 函数的功能说明
 * @param {circle} - 圆
 * @returns {info} - 圆属性
 */
function foo (circle) {
  var res = doSomething()
  return res
}
```

> @typedef, 记录一个自定义的类型, 如果你要反复引用它们的时候;
>
> @property, 记录一个对象的属性, 支持嵌套;

* callback注释

描述一个指定类的回掉函数

```js
/**
 * @class
 */
function Requester() {}

/**
 * Send a request.
 * @param {Requester~requestCallback} cb - The callback that handles the response.
 */
Requester.prototype.send = function(cb) {
    // code
};

/**
 * This callback is displayed as part of the Requester class.
 * @callback Requester~requestCallback
 * @param {number} responseCode
 * @param {string} responseMessage
 */
```

描述一个全局的回掉函数

```js
/**
 * @class
 */
function Requester() {}

/**
 * Send a request.
 * @param {requestCallback} cb - The callback that handles the response.
 */
Requester.prototype.send = function(cb) {
    // code
};

/**
 * This callback is displayed as a global member.
 * @callback requestCallback
 * @param {number} responseCode
 * @param {string} responseMessage
 */
```

* 类注释

```js
/**
 * 类代表一个点
 */
class Point {

  /**
   * 创建一个点
   * @param {number} x - x坐标值
   * @param {number} y - y坐标值
   */
  constructor (x, y) {
    this.x = x
    this.y = y
    /**
     * 获取 point 的字符串
     * @returns {string}
     */
    this.toString = function () {
      return '(' + this.x + ', ' + this.y + ')'
    }
    /**
     * 获取 x坐标值
     * @returns {number}
     */
    this.getX = function () {
      return this.x
    }
  }
}

var p = new Point()
```

## 模块的注释

```js

```

## 文件注释

```js

```

# 编辑器配置及安装

## Visual Studio Code

安装 **[vscode-standardjs][vscode-1]**（已经包含了自动格式化）。
> npm install standard --global 插件安装完后记得运行此命令

安装 **[vscode-standardjs-snippets][vscode-2]** 以获得 JS snippets。

安装 **[vscode-react-standard][vscode-3]** 以获得 React snippets。

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
    "javascript.format.insertSpaceAfterConstructor": true
  }
```

## WebStorm (PhpStorm, IntelliJ, RubyMine, JetBrains 等 jetbrains 全家桶系列)

WebStorm [最近宣布](https://blog.jetbrains.com/webstorm/2017/01/webstorm-2017-1-eap-171-2272/)在其 IDE 中
 自带 `standard` 规范。

但是如果你仍然想自己动手配置，[那么请看此教程][webstorm-1]。此教程适用于 JetBrains 全家桶，包括 PhpStorm、IntelliJ、RubyMine 等。

[webstorm-1]: /doc/webstorm.md

## 为 git 添加 pre-commit 钩子

* 在本地仓库文件夹下找到 .git 文件夹
* 在 .git/hooks 目录下创建 pre-commit 文件
* 将以下代码拷贝到 pre-commit 文件中

```ssh
#!/bin/bash

# 确保将要提交的所有 JavaScript 代码通过 standard 规范的检查
function xargs-r() {
  # Portable version of "xargs -r". The -r flag is a GNU extension that
  # prevents xargs from running if there are no input files.
  if IFS= read -r -d $'\n' path; then
    { echo "$path"; cat; } | xargs $@
  fi
}
git diff --name-only --cached --relative | grep '\.jsx\?$' | sed 's/[^[:alnum:]]/\\&/g' | xargs-r -E '' -t standard
if [[ $? -ne 0 ]]; then
  echo 'JavaScript Standard Style errors were detected. Aborting commit.'
  exit 1
fi
```