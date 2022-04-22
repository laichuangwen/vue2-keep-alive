<template>
     <d-page @init="init" redirect="/page/list">
        <div>编辑{{$route.query.id}}</div>
        <el-input placeholder="请输入" v-model="text"></el-input>
    </d-page>
</template>

<script>
export default {
    name: 'PageEdit',
    data() {
        return {
            text: '',
        };
    },
    methods: {
        // 重写的钩子
        init() {
            // 用来初始化数据的
            this.text = '';
            console.log('初始化');
        },
    },
};
</script>

<style lang="scss" module="s">
</style>
