# react-admin

在pages的login页面，获取mock的menu

## 根据登录信息动态生成路由

通过 rquire.context('../../admin', true, /\.js$/).keys()获取了所有的menu路径

```
["./Form/Login.js", "./Form/register.js", "./Home/Home.js", "./NoMatch/NoMatch.js", "./UI/Buttons.js", "./UI/Carousels.js", "./UI/Gallery.js", "./UI/Loadings.js", "./UI/Messages.js", "./UI/Modals.js", "./UI/Notice.js", "./UI/Tab.js"]

```
根据此路径和返回的menu生成menuConfig...这种做不来。

## 现在

直接返回menuConfig，删选competence不为0的是普通用户，为0的是管理员

## 疑问

为什么一起是用
```
<Route component={NoMatch} />
<Redirect to="/admin/home" />
```
的时候进入首页是显示的 noMatch，而不是home