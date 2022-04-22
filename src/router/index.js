import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: '/',
    component: () => import(/* webpackChunkName: "index" */ '../views/index.vue'),
    children: [{
        path: '/page/list',
        name: 'page.list',
        meta: {
            title: '独立页列表',
        },
        component: () => import(/* webpackChunkName: "list" */ '../views/page/list/index.vue'),

    }, {
        path: '/page/add',
        name: 'page.add',
        meta: {
            title: '独立页新增',
        },
        component: () => import(/* webpackChunkName: "add" */ '../views/page/add/index.vue'),
    }, {
        path: '/page/edit',
        name: 'page.edit',
        meta: {
            title: '独立页编辑',
        },
        component: () => import(/* webpackChunkName: "edit" */ '../views/page/edit/index.vue'),
    }, {
        path: '/page/details',
        name: 'page.details',
        meta: {
            title: '独立页详情',
        },
        component: () => import(/* webpackChunkName: "details" */
            '../views/page/details/index.vue'
        ),
    }, {
        path: '/test',
        name: 'test',
        meta: {
            title: '测试页',
        },
        component: () => import(/* webpackChunkName: "test" */
            '../views/page/details/index.vue'
        ),
    }],
}];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

const generateLable = (to) => {
    // 优先tabName
    if (to.query.tabName) {
        return to.query.tabName;
    }
    // 默认取第一个
    const keys = Object.keys(to.query);
    if (keys.length) {
        const [key] = keys;
        return to.query[key];
    }
    return '';
};
// 路由钩子
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        // 设置激活
        store.dispatch('tabs/setActive', to.fullPath);
        // 添加tabs
        store.dispatch('tabs/add', {
            ...to,
            type: 'router', // 设置路由跳转的标志，用于判断缓存
            label: `${to.meta.title}${generateLable(to)}`,
            tabName: to.fullPath,
            componentName: to.path.replace(/\/(\w)/g, (_, c) => (c ? c.toUpperCase() : '')), // 把/aaa/bbb/cc 转成AaaBbbCcc
        });
    }

    next();
});

export default router;
