(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{332:function(t,a,s){"use strict";s.r(a);var r=s(33),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"深入浅出python爬虫（静态）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#深入浅出python爬虫（静态）"}},[t._v("#")]),t._v(" 深入浅出Python爬虫（静态）")]),t._v(" "),s("h2",{attrs:{id:"_1-何为python爬虫"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-何为python爬虫"}},[t._v("#")]),t._v(" 1.何为Python爬虫")]),t._v(" "),s("p",[t._v("如果我们把互联网比作一张大的蜘蛛网，数据便是存放于蜘蛛网的各个节点，而爬虫就是一只小蜘蛛沿着网络抓取自己的猎物（数据）爬虫指的是：向网站发起请求，获取资源后分析并提取有用数据的程序；从技术层面来说就是 通过程序模拟浏览器请求站点的行为，把站点返回的HTML代码/JSON数据/二进制数据（图片、视频） 爬到本地，进而提取自己需要的数据，存放起来使用。")]),t._v(" "),s("h2",{attrs:{id:"_2-爬虫的基本流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-爬虫的基本流程"}},[t._v("#")]),t._v(" 2.爬虫的基本流程")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("发起请求")]),t._v(" "),s("p",[t._v("使用HTTP库向目标站点发起请求，即发送一个Request")]),t._v(" "),s("p",[t._v("Request包含：请求头、请求体等")]),t._v(" "),s("p",[t._v("Request模块缺陷：不能执行JS和CSS代码")])]),t._v(" "),s("li",[s("p",[t._v("获取相应内容")]),t._v(" "),s("p",[t._v("如果服务器能正常相应，则会得到一个Response")]),t._v(" "),s("p",[t._v("Resonse包含： html、JSON、图片、视频等")])]),t._v(" "),s("li",[s("p",[t._v("解析内容")]),t._v(" "),s("p",[t._v("第三方库（beautifulSoup4），正则表达式等")]),t._v(" "),s("p",[t._v("解析JSON数据：JSON模块")]),t._v(" "),s("p",[t._v("解析二进制数据：以wb的方式写入文件")])]),t._v(" "),s("li",[s("p",[t._v("保存数据")]),t._v(" "),s("p",[t._v("数据库（MySQL, Mongdb, Redis)")]),t._v(" "),s("p",[t._v("文件")])])]),t._v(" "),s("h2",{attrs:{id:"_3-demo（爬取静态网页数据）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-demo（爬取静态网页数据）"}},[t._v("#")]),t._v(" 3.demo（爬取静态网页数据）")]),t._v(" "),s("p",[t._v("在开始之前需要搭建一个python的开发环境，包括安装python以及设置环境变量，整个过程较为简单。我们这次要爬的是一个学校的教务部的所有通知，"),s("a",{attrs:{href:"http://jwb.xujc.com/tzgg/list.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),s("OutboundLink")],1),t._v(",通过查看网页的源码，我们可以知道我们需要通过通知目录的url模拟访问，取得我们需要的每个通知的标题、作者、内容、发布时间等等数据。那我们需要通过拼接url模拟访问。")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("选择IDE")]),t._v(" "),s("p",[t._v("我使用的是PyCharm，这个IDE有多强大我就不多说了。\n"),s("a",{attrs:{"data-fancybox":"",title:"avatar",href:"https://img-blog.csdnimg.cn/20191211114917172.png"}},[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191211114917172.png",alt:"avatar"}})])])]),t._v(" "),s("li",[s("p",[t._v("引入所需的包")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"avatar",href:"https://img-blog.csdnimg.cn/20191211114935603.jpg"}},[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191211114935603.jpg",alt:"avatar"}})])]),t._v(" "),s("p",[t._v("在安装好IDE之后需要引入爬虫需要的用到的包，我这次爬虫主要是针对静态网页爬，主要是用到了，requests、BeautifulSoup4、re。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[s("strong",[t._v("requests")]),t._v(" 可以获取网页的源代码，"),s("strong",[t._v("bs4")]),t._v("可将网页代码进行处理，"),s("strong",[t._v("re")]),t._v("是将数据过滤成我们需要的。")])])]),t._v(" "),s("li",[s("p",[t._v("爬取网页相关代码")]),t._v(" "),s("p",[t._v("获取网页源码")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"avatar",href:"https://img-blog.csdnimg.cn/20191211114952495.png"}},[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191211114952495.png",alt:"avatar"}})])]),t._v(" "),s("p",[t._v("从上面的代码可以获得以下数据")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"avatar",href:"https://img-blog.csdnimg.cn/20191211115001564.png"}},[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191211115001564.png",alt:"avatar"}})])]),t._v(" "),s("p",[t._v("这么乱的代码我们根本不知道需要爬什么，接下来我们可以通过BS4进行格式化：")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"avatar",href:"https://img-blog.csdnimg.cn/20191211115013811.png"}},[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191211115013811.png",alt:"avatar"}})])]),t._v(" "),s("p",[t._v("获得的数据：")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"avatar",href:"https://img-blog.csdnimg.cn/20191211115022318.png"}},[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191211115022318.png",alt:"avatar"}})])]),t._v(" "),s("p",[t._v("分析代码可得，我们想获得的通知标题a标签里面的href,那么现在的方案是先取到所有的a标签，然后再获取href,再用正则表达式获取我们需要的href")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"avatar",href:"https://img-blog.csdnimg.cn/20191211115029683.png"}},[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191211115029683.png",alt:"avatar"}})])]),t._v(" "),s("p",[t._v("从上面的代码获取所有的a标签：")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"avatar",href:"https://img-blog.csdnimg.cn/20191211115036448.png"}},[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191211115036448.png",alt:"avatar"}})])]),t._v(" "),s("p",[t._v("而后获得所有的href属性：")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"avatar",href:"https://img-blog.csdnimg.cn/20191211115042577.png"}},[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191211115042577.png",alt:"avatar"}})])]),t._v(" "),s("p",[t._v("然后经过正则表达式的过滤：")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"avatar",href:"https://img-blog.csdnimg.cn/20191211115049743.png"}},[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191211115049743.png",alt:"avatar"}})])]),t._v(" "),s("p",[t._v("分析URL，固定的部分由 "),s("code",[t._v("http://jwb.xujc.com${url}page.html")]),t._v(",我们获取了所有标题的URL，就可以写一个方法，对改页面的内容进行解析，获得我们想要的数据：")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"avatar",href:"https://img-blog.csdnimg.cn/20191211115058786.png"}},[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191211115058786.png",alt:"avatar"}})])]),t._v(" "),s("p",[t._v("获得通知内容：")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"avatar",href:"https://img-blog.csdnimg.cn/20191211115107532.png"}},[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191211115107532.png",alt:"avatar"}})])]),t._v(" "),s("p",[t._v("而后我们可以把数据输出到EXCEL，或者转化成JSON格式输出到TXT")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"avatar",href:"https://img-blog.csdnimg.cn/20191211115114849.png"}},[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191211115114849.png",alt:"avatar"}})]),t._v(" "),s("a",{attrs:{"data-fancybox":"",title:"avatar",href:"https://img-blog.csdnimg.cn/20191211115122443.png"}},[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191211115122443.png",alt:"avatar"}})])]),t._v(" "),s("p",[t._v("或者生成云图：")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"avatar",href:"https://img-blog.csdnimg.cn/20191211115129144.png"}},[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191211115129144.png",alt:"avatar"}})])]),t._v(" "),s("p",[t._v("当然也可以将爬取到的数据放入数据库，每天定时爬取，并且通过前后端交互渲染在前端，这样就可以达到做一个项目的目的。")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"avatar",href:"https://img-blog.csdnimg.cn/20191211115136259.png"}},[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191211115136259.png",alt:"avatar"}})])]),t._v(" "),s("p",[t._v("这是我大学时制作的一个小程序项目，而针对静态网页的数据爬取基本也是这样的一个流程。当然这还有一个前提，你学过python并且知道python的基本语法。而对于爬虫这个技巧，对于我们前端来说是必不可少的能力，也是最容易让自己成为前后通吃高手的路径。我还在路上，要学的东西实在太多了！")]),t._v(" "),s("p",[t._v("当然静态网站的爬取较为简单，而比较难的是爬取动态网站的数据")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("指引")]),t._v(" "),s("p",[t._v("快速入门Python爬虫视频教程："),s("a",{attrs:{href:"https://www.bilibili.com/video/av9784617?from=search&seid=12295915262843782172",target:"_blank",rel:"noopener noreferrer"}},[t._v("教程"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("包括动态网站（数据利用AJAX）的网站爬取教程")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);