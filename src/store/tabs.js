export default {
    namespaced: true,
    state: {
        active: '',
        list: [],
    },
    mutations: {
        setTypeItem(state, tabName) {
            const keys = state.list.map((list) => list.tabName);
            const index = keys.indexOf(tabName);
            if (index !== -1) {
                state.list[index].type = 'click';
            }
        },
        setActive(state, name) {
            state.active = name;
        },
        setList(state, list) {
            state.list = list;
        },
        // 添加
        add(state, item) {
            const exist = state.list.some((tab) => tab.tabName === item.tabName);
            if (!exist) {
                state.list.push(item);
            }
        },
        // 删除
        remove(state, tabName) {
            const list = state.list.filter((tab) => tab.tabName !== tabName);
            state.list = list;
        },
        // 留一个
        leaveOne(state, tabName) {
            const list = state.list.filter((tab) => tab.tabName === tabName);
            state.list = list;
        },
        // 删除全部
        removeAll(state) {
            state.list = [];
        },
    },
    actions: {
        setActive({
            commit,
        }, name) {
            commit('setActive', name);
        },
        setList({
            commit,
        }, list) {
            commit('setList', list);
        },
        add({
            commit,
        }, item) {
            commit('add', item);
        },
        remove({
            commit,
        }, item) {
            commit('remove', item);
        },
        leaveOne({
            commit,
        }, name) {
            commit('leaveOne', name);
        },
        removeAll({
            commit,
        }) {
            commit('removeAll');
        },

    },
};
