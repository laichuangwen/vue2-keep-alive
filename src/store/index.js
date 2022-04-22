import Vue from 'vue';
import Vuex from 'vuex';
import tabs from './tabs';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        tabs,
    },
});

export default store;
