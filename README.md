# vue2-keep-alive
>关于Vue keep-alive缓存的那点事及后台管理用tabs缓存问题及独立页缓存问题的源码  [友情链接](https://juejin.cn/post/7085634605138575373)

## 安装依赖
```
yarn install
```

## 启动
```
yarn serve 或 yarn start
```

## 打包
```
yarn build
```

## 功能点
- 解决新增多tab页返回来时没有缓存问题
- 手动关闭tab标签缓存会自动删除，而且走生命周期钩子或走d-page初始化init方法

## 实现例子注意事项
- 用vuex的store 存储新增tab即在路由钩子上监听路由变化存储（网上也有很多相关文章）
- 关闭指定tab时清掉移除vuex的store里面当前关闭的tab值
- 利用keep-alive来include store的tab值
- router-view 上要加key
- 组件内要有对于name，没有name 缓存可没有哈，原因请仔细看Vue文档
- 路由一定一定只能嵌套一层children即只有一个router-view 
- 需要多页签缓存的页面要引用d-page组件并实现init初始化方法

作者：Bug小哥哥
链接：https://juejin.cn/post/7085634605138575373
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

## D-Page 文档
### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| redirect | 返回列表的路由 | string | — | `返回列表路径` |
| backText | 返回按钮文字 | string | — | 返回列表 |
| showBack | 显示返回按钮 | boolean | — | true  |
| showBottom | 显示底部即操作按钮 | boolean | — | true  |
| autoBack | 点击返回是否自动返回（自定义返回事件用到） | boolean | — | true  |
| loading | 提交按钮加载 | boolean | — | false  |
| showCancelButton     | 显示取消按钮   | boolean  | —  |    true     |
| cancelButtonText     | 取消按钮文字   | string  | —  |    取消     |
| confirmButtonText     | 保存按钮文字   | string  | —  |    保存     |
| cancelText     | 取消弹窗提示内容   | string  | —  |    是否取消保存，并返回列表页？    |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| init  | `最重要的初始化方法`，是根据缓存规则，来回调的 | - |
| confirm  | 按钮保存的回调 |  |

### Methods
| 方法名称 | 说明 |  |
|---------- |-------- |---------- |
| close  | `关闭tab并返回列表页` | - |


