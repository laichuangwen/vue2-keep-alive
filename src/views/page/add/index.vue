<template>
    <d-page redirect="/page/list">
        新增2733
        <el-input placeholder="请输入" v-model="text"></el-input>
    </d-page>
</template>

<script>
export default {
    name: 'PageAdd',
    data() {
        return {
            text: '',
        };
    },
};
</script>

<style lang="scss" module="s">
</style>
