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


