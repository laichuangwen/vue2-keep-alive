<template>
    <el-container style="container">
        <el-aside width="200px">
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @select="select">
                <el-menu-item index="/page/list">
                    <i class="el-icon-menu"></i>
                    <span slot="title">独立页</span>
                </el-menu-item>
                <el-menu-item index="/test">
                    <i class="el-icon-document"></i>
                    <span slot="title">测试</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>
                <d-tabs> </d-tabs>
            </el-header>
            <el-main>
                <keep-alive :include="$store.state.tabs.list.map(list=>list.componentName)">
                    <router-view :key="$route.fullPath"></router-view>
                </keep-alive>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        // 生成Label
        generateLable(to) {
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
        },
        select(url) {
            // 防重复跳转报错提示
            if (url !== this.$route.path) {
                this.$router.push(url);
            }
        },
    },
};
</script>

<style lang="scss" module="s">
</style>
