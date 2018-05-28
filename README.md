<h1 align="center">
    <img src="./public/logo.png" alt="Standard - JavaScript Style Guide" width="200">
  <br>
  JavaScript 编码规范
  <br>
  <br>
</h1>

## 基本的格式化

* **使用两个空格进行缩进**

```js
  function hello (name) {
    console.log('hi', name)
  }
```

* **语句结尾不使用分号**

```js
  console.log('hi', name) // good
  console.log('hi', name); // bad
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

* **命名**

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
    const leftTopLat = 90 // bad
    const LEFT_TOP_LAT = 90 // good
  ```

* **函数**
  
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

  * **分支超过4种的 if else 使用 switch case, switch case需要带default**

  * **禁止使用 == 一律使用 ===**


