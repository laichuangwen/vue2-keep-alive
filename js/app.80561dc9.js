(function(t){function e(e){for(var a,o,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},r=[];function o(t){return c.p+"js/"+({add:"add",details:"details",edit:"edit",index:"index",list:"list"}[t]||t)+"."+{add:"96a0c0dc",details:"2b3e147a",edit:"f59fe241",index:"73bf11ff",list:"f0c18cd0"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=a);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=o(t);var u=new Error;r=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}i[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=n("5c96"),r=n.n(i),o=(n("0fae"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view")],1)],1)}),c=[],s=(n("5c0b"),n("2877")),u={},l=Object(s["a"])(u,o,c,!1,null,null,null),f=l.exports,d=n("2f62"),p=(n("d81d"),n("d3b7"),n("4de4"),{namespaced:!0,state:{active:"",list:[]},mutations:{setTypeItem:function(t,e){var n=t.list.map((function(t){return t.tabName})),a=n.indexOf(e);-1!==a&&(t.list[a].type="click")},setActive:function(t,e){t.active=e},setList:function(t,e){t.list=e},add:function(t,e){var n=t.list.some((function(t){return t.tabName===e.tabName}));n||t.list.push(e)},remove:function(t,e){var n=t.list.filter((function(t){return t.tabName!==e}));t.list=n},leaveOne:function(t,e){var n=t.list.filter((function(t){return t.tabName===e}));t.list=n},removeAll:function(t){t.list=[]}},actions:{setActive:function(t,e){var n=t.commit;n("setActive",e)},setList:function(t,e){var n=t.commit;n("setList",e)},add:function(t,e){var n=t.commit;n("add",e)},remove:function(t,e){var n=t.commit;n("remove",e)},leaveOne:function(t,e){var n=t.commit;n("leaveOne",e)},removeAll:function(t){var e=t.commit;e("removeAll")}}});a["default"].use(d["a"]);var h=new d["a"].Store({modules:{tabs:p}}),m=h,b=n("5530"),v=n("3835"),g=(n("3ca3"),n("ddb0"),n("b64b"),n("99af"),n("ac1f"),n("5319"),n("8c4f"));a["default"].use(g["a"]);var y=[{path:"/",name:"/",component:function(){return n.e("index").then(n.bind(null,"1e4b"))},children:[{path:"/page/list",name:"page.list",meta:{title:"独立页列表"},component:function(){return n.e("list").then(n.bind(null,"9a6a"))}},{path:"/page/add",name:"page.add",meta:{title:"独立页新增"},component:function(){return n.e("add").then(n.bind(null,"7e73"))}},{path:"/page/edit",name:"page.edit",meta:{title:"独立页编辑"},component:function(){return n.e("edit").then(n.bind(null,"3ebc"))}},{path:"/page/details",name:"page.details",meta:{title:"独立页详情"},component:function(){return n.e("details").then(n.bind(null,"99e8"))}},{path:"/test",name:"test",meta:{title:"测试页"},component:function(){return n.e("details").then(n.bind(null,"99e8"))}}]}],_=new g["a"]({mode:"history",base:"/",routes:y}),w=function(t){if(t.query.tabName)return t.query.tabName;var e=Object.keys(t.query);if(e.length){var n=Object(v["a"])(e,1),a=n[0];return t.query[a]}return""};_.beforeEach((function(t,e,n){t.meta.title&&(m.dispatch("tabs/setActive",t.fullPath),m.dispatch("tabs/add",Object(b["a"])(Object(b["a"])({},t),{},{type:"router",label:"".concat(t.meta.title).concat(w(t)),tabName:t.fullPath,componentName:t.path.replace(/\/(\w)/g,(function(t,e){return e?e.toUpperCase():""}))}))),n()}));var x=_,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"page",class:t.s.page},[t.showBack?n("div",{class:t.s.back},[n("el-button",{attrs:{icon:"el-icon-arrow-left",round:"",size:"mini"},on:{click:t.back}},[t._v(t._s(t.backText))])],1):t._e(),n("div",{class:t.s.wrap},[t._t("default"),n("div",{class:t.s.op},[!t.fixed&&t.showBottom?[t._t("bottom",(function(){return[n("el-button",{on:{click:t.cancel}},[t._v(t._s(t.cancelButtonText))]),n("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.confirm}},[t._v("保存")])]}))]:t._e()],2)],2),t.fixed&&t.showBottom?n("div",{class:t.s.fixed},[n("div",{class:t.s.op},[t._t("bottom",(function(){return[n("el-button",{on:{click:t.cancel}},[t._v(t._s(t.cancelButtonText))]),n("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.confirm}},[t._v(t._s(t.confirmButtonText))])]}))],2)]):t._e()])},$=[],O=n("1da1"),B=(n("96cf"),n("c7cd"),{name:"DPage",props:{backText:{type:String,default:"返回列表"},showBottom:{type:Boolean,default:!0},showBack:{type:Boolean,default:!0},autoBack:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},showCancelButton:{type:Boolean,default:!0},cancelButtonText:{type:String,default:"取消"},confirmButtonText:{type:String,default:"保存"},cancelText:{type:String,default:"是否取消保存，并返回列表页？"},redirect:{type:String,default:""}},data:function(){return{pageHeight:0,tabHeight:56,breadcrumbHeight:44,padding:48,fixed:!1}},mounted:function(){var t=this,e=n("eec4")();e.listenTo(this.$refs.page,(function(e){var n=document.documentElement.clientHeight,a=n-t.tabHeight-t.breadcrumbHeight-10;t.pageHeight=e.offsetHeight+t.padding,t.fixed=a<=t.pageHeight}))},activated:function(){var t=this.$store.state.tabs.list,e=t[t.length-1];"router"===e.type&&this.$route.fullPath===e.fullPath&&this.$emit("init",this.$route.fullPath)},methods:{close:function(){if(this.$route.query&&this.$route.query.redirect)return console.log(this.$route.query.redirect),void this.$router.replace(this.$route.query.redirect);this.redirect&&this.$router.replace(this.redirect)},back:function(){var t=this;this.autoBack?this.close():this.$emit("back",(function(){t.close()}))},cancel:function(){var t=this;this.$msgbox({title:"提示",message:this.cancelText,showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",beforeClose:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(n,a,i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:"confirm"===n?(t.close(),i()):i();case 1:case"end":return e.stop()}}),e)})));function n(t,n,a){return e.apply(this,arguments)}return n}()})},confirm:function(){var t=this;this.$emit("confirm",(function(){t.close()}))}}}),T=B,j=n("fbc9");function N(t){this["s"]=j["default"].locals||j["default"]}var P=Object(s["a"])(T,k,$,!1,N,null,null),A=P.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.s.view},[n("el-tabs",{ref:"tabs",attrs:{value:t.defaultActive},on:{input:t.change,"tab-click":t.tabClick,"tab-remove":t.tabRemove}},t._l(t.tabs,(function(e){return n("el-tab-pane",{key:e.tabName,attrs:{closable:t.tabs.length>1,label:e.label,name:e.tabName}})})),1),t.showClean?n("el-button",{class:t.s.btn,attrs:{type:"text"},on:{click:t.clean}},[t._v("清除")]):t._e()],1)},q=[],C=(n("159b"),{data:function(){return{showClean:!1}},computed:{tabs:function(){return this.$store.state.tabs.list},defaultActive:function(){return this.$store.state.tabs.active}},mounted:function(){this.init(),window.addEventListener("resize",this.init)},beforeDestroy:function(){window.removeEventListener("resize",this.init)},methods:{init:function(){this.$refs.tabs&&this.$refs.tabs.$el&&(this.showClean=!!this.$refs.tabs.$el.querySelector(".el-tabs__nav-next"))},change:function(){this.init()},clean:function(){this.$store.dispatch("tabs/leaveOne",this.defaultActive),this.showClean=!1},tabClick:function(t){var e=this.tabs[t.index];this.defaultActive!==e.tabName&&(this.$store.commit("tabs/setTypeItem",e.tabName),this.$router.replace({path:e.tabName,params:e.params,query:e.query}))},tabRemove:function(t){var e=this;this.defaultActive===t&&this.tabs.forEach((function(n,a){if(n.tabName===t){var i=e.tabs[a+1]||e.tabs[a-1];i&&(e.$router.replace(i.tabName),e.$store.dispatch("tabs/setActive",i.tabName))}})),this.$store.dispatch("tabs/remove",t)}}}),E=C,H=n("f82d");function D(t){this["s"]=H["default"].locals||H["default"]}var L=Object(s["a"])(E,S,q,!1,D,null,null),J=L.exports;a["default"].use(r.a),a["default"].component("DPage",A),a["default"].component("DTabs",J),a["default"].config.productionTip=!1,new a["default"]({router:x,store:m,render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"80d5":function(t,e,n){t.exports={page:"d-page_page_22gPk",back:"d-page_back_1liGd",title:"d-page_title_gw1Eu",op:"d-page_op_2DvUD",fixed:"d-page_fixed_1-FD2"}},"9c0c":function(t,e,n){},f82d:function(t,e,n){"use strict";var a=n("fdfe"),i=n.n(a);n.d(e,"default",(function(){return i.a}))},fbc9:function(t,e,n){"use strict";var a=n("80d5"),i=n.n(a);n.d(e,"default",(function(){return i.a}))},fdfe:function(t,e,n){t.exports={view:"d-tabs_view_1JZgS",btn:"d-tabs_btn_37IDJ"}}});
//# sourceMappingURL=app.80561dc9.js.map