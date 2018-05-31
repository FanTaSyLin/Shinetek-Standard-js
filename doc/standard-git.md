<h1 align="center">
  <img src="../public/git2.jpg" alt="Standard - Version Control" width="200">
  <br>
  <br>
  版本控制操作规范
  <br>
  <br>
</h1>

# git 常用命令

# 分支管理策略

请参考以下分支管理策略对软件版本进行管理。它可以使得版本库的演进保持简洁，主干清晰，各个分支各司其职、井井有条。理论上，这些策略对所有的版本管理系统都适用，Git只是用来举例而已。

## 主分支Master

* 代码库应该有一个、且仅有一个主分支。所有提供给用户使用的正式版本，都在这个主分支上发布。
* Git主分支的名字，默认叫做Master。它是自动建立的，版本库初始化以后，默认就是在主分支在进行开发。(**应避免这种情况**)

![master branch](../public/git_master_01.png)

## 开发分支Develop

* 主分支只用来分布重大版本，日常开发应该在另一条分支上完成。我们把开发用的分支，叫做Develop。
* 这个分支可以用来生成代码的最新隔夜版本（nightly）。如果想正式对外发布，就在Master分支上，对Develop分支进行"合并"（merge）。
* **所有提交到Master分支上的合并请求必须经过审查后方可进行合并**

![develop branch](../public/git_develop_01.png)

## 功能分支

* 为了开发某种特定功能，从Develop分支上面分出来的。开发完成后，要再并入Develop
* 功能分支的名字，采用feature-*的形式命名

![feature branch](../public/git_feature_01.png)

## gitlab中的设置

