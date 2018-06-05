<h1 align="center">
    <img src="./public/logo.png" alt="Standard - Shinetek Style Guide" width="200">
  <br>
  Shinetek 软件编程规范
  <br>
  <br>
</h1>
<br>
<!-- <div align="center">
  <a herf="./doc/standard-js.md" style="margin: 5px 20px">
    <img src="./public/js.jpg" alt="Standard - Shinetek Style Guide" height="100">
  </a>
  <a herf="./doc/standard-python.md" style="margin: 5px 20px">
    <img src="./public/python2.jpg" alt="Standard - Shinetek Style Guide" height="100">
  </a>
  <a herf="./doc/standard-csharp.md" style="margin: 5px 20px">
    <img src="./public/csharp.jpg" alt="Standard - Shinetek Style Guide" height="100">
  </a>
  <a herf="./doc/standard-git.md" style="margin: 5px 20px">
    <img src="./public/git2.jpg" alt="Standard - Shinetek Style Guide" height="100">
  </a>
</div> -->

<div align="center">

[<img src="./public/js.jpg" width=100>](./doc/standard-js.md) | [<img src="./public/pythont.jpg" width=100>](./doc/standard-python.md) | [<img src="./public/csharp.jpg" width=100>](./doc/standard-csharp.md) | [<img src="./public/git.jpg" width=100>](./doc/standard-git.md)
|----|----|----|----|

</div>

<h3 color="#0099FF">
“任何一个傻瓜都能写出计算机可以理解的代码，唯有写出人类容易理解的代码，才是优秀的程序员。”
<br>
<div align="right">-- Martin Flower 《重构》</div>
</h3>

# **规范的代码可以促进团队合作** 

如果没有统一的代码规范，那么每个人的代码必定会风格迥异。且不说会存在多个人同时开发同一模块的情况，即使是分工十分明晰的，等到要整合代码的时候也有够头疼的了。大多数情况下，并非程序中有复杂的算法或是复杂的逻辑，而是去读别人的代码实在是一件痛苦的事情。统一的风格使得代码可读性大大提高了，人们看到任何一段代码都会觉得异常熟悉。显然的，规范的代码在团队的合作开发中是非常有益而且必要的。

# **规范的代码可以减少bug处理** 

通过对输入输出参数、异常处理、日志处理进行规范，不但可以有效的减少开发过程中产生的bug，而且对于查找bug也变得轻而易举。规范不是对开发的制约，而确实是有助于提高开发效率的。

# **规范的代码可以降低维护成本** 

维护工作不仅仅是读懂原有代码，而是需要在原有代码基础上作出修改。我们可以先想像没有统一风格的情况下，A完成开发以后，B进行维护加一段代码，过一段时间C又加一段代码。。。。。。直到有一天X看到那一大堆乱码想死的心都有了，维护也就进行不下去了。

# **规范的代码对程序的扩展性提高** 

好的代码规范会对方法的度量、类的度量以及程序耦合性作出约束。这样不会出现需要修改一个上千行的方法或者去扩展一个没有接口的类的情况。
