import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import store from './store';
import router from './router';
import DPage from './components/d-page.vue';
import DTabs from './components/d-tabs.vue';

Vue.use(ElementUI);
Vue.component('DPage', DPage);
Vue.component('DTabs', DTabs);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
