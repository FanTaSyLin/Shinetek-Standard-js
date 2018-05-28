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
  console.log('hi', name) // √
  console.log('hi', name); // ×
```

* **单行长度不超过80个字符**

```js
  helloWorld (doc, element, window, 'some string value', true, 123, navigator,
    parameter1) // √
  helloWorld (doc, element, window, 'some string value', true, 123, navigator, parameter1) // ×
```

* **在运算符后换行，下一行增加一个层级的缩进**

```js
  helloWorld (doc, element, window, 'some string value', true, 123, navigator,
    parameter1) // √
  helloWorld (doc, element, window, 'some string value', true, 123, navigator,
  parameter1) // × 第二行没有缩进
  helloWorld (doc, element, window, 'some string value', true, 123, navigator
    ,parameter1) // × 在运算符之前换行了
```

* **不允许有连续多行空行**

  正确的做法
  * 在方法之间
  * 在方法中的局部变量和第一条语句之间
  * 在多行或单行注释之前
  * 在方法内的逻辑片段之间

* **命名**
