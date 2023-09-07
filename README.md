JSON-Server 详解
JSON-Server 是一个 Node 模块，运行 Express 服务器，你可以指定一个 json 文件作为 api 的数据源。

安装 json-server
npm install -g json-server

启动 json-server
json-server 可以直接把一个 json 文件托管成一个具备全 RESTful 风格的 API,并支持跨域、jsonp、路由订制、数据快照保存等功能的 web 服务器。

例如以下命令，文件夹 data 下的相同类型的 js 文件都会托管成一个 web 服务。
json-server --watch --port 3000 index.js

参考文档
https://github.com/typicode/json-server
