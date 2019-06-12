# 本项目是在vue-cli基础上根据公司自身的情况打造的移动端脚手架，只需运行脚手架，就可以初始化整个项目。

### 项目技术架构
***
*   Vue.js : 前端页面展示
*   Vuex : 全局状态通信
*   axios：网络请求
*   Vue-router：路由跳转
*   Vux：移动端UI组件库
*   fastclick：去除点击延时
*   vue-scroller：刷新组件
*   reset.css：初始化浏览器样式
*   lib-flexible：移动端rem布局
*   px2rem-loader：自动将px转换为rem
***
### 参考资料

*   [vue-cli 配置flexible](https://segmentfault.com/a/1190000011883121#articleHeader2)
*   [使用Flexible实现手淘H5页面的终端适配](https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html)
*   [vue-打造webapp项目的脚手架](https://www.jianshu.com/p/00b2bd13b075)

### 移动端适配

*    根据不同屏幕动态写入font-size，以rem作为宽度单位，固定布局视口。

首先设置理想视口:
`<meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">`
接下来计算 html 元素的 font-size,将可视视口的宽度乘以一个系数:

>  * 喜欢的请点心，关注，star ,fork,这些是我坚持下去的动力
