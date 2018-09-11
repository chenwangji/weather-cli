# 说明
这是一个小型的查看天气命令行应用，api 来源百度地图和心知天气。

# 如何使用
1. 全局安装
```bash
npm i -G weather-query-util
```
2. 查看帮助,浏览相关命令
```bash
weather help 
或者
weather -h
```

这里列举如下命令：

```bash
weather today # 查看本地今天天气
weather forecast # 查看本地近三天天气
weather today -l <城市名> # 查看指定地区今天天气
weather forecast -l <城市名> # 查看指定地区近三天天气
```
# 注意
由于使用了 async/await, 所以 node 版本须 >= 8.0
