(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{"1e4b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticStyle:{}},[a("el-aside",{attrs:{width:"200px"}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1"},on:{select:t.select}},[a("el-menu-item",{attrs:{index:"/page/list"}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("独立页")])]),a("el-menu-item",{attrs:{index:"/test"}},[a("i",{staticClass:"el-icon-document"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("测试")])])],1)],1),a("el-container",[a("el-header",[a("d-tabs")],1),a("el-main",[a("keep-alive",{attrs:{include:t.$store.state.tabs.list.map((function(t){return t.componentName}))}},[a("router-view",{key:t.$route.fullPath})],1)],1)],1)],1)},s=[],l=a("3835"),i=(a("b64b"),{data:function(){return{}},methods:{generateLable:function(t){if(t.query.tabName)return t.query.tabName;var e=Object.keys(t.query);if(e.length){var a=Object(l["a"])(e,1),n=a[0];return t.query[n]}return""},select:function(t){t!==this.$route.path&&this.$router.push(t)}}}),r=i,u=a("2877"),c=Object(u["a"])(r,n,s,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=index.73bf11ff.js.map