<template>
 <div>
   <el-button type="primary" @click="$router.push({path:'add'})">新增</el-button>
   <el-button type="primary" @click="$router.push({path:'edit'})">编辑</el-button>
   <el-button type="primary" @click="$router.push({path:'edit',query:{id: 1}})">编辑1</el-button>
   <el-button type="primary" @click="$router.push({path:'edit',query:{id: 2}})">编辑2</el-button>
   <el-button type="primary" @click="$router.push({path:'edit',query:{id: randomString(6)}})">编辑随机</el-button>
   <el-button type="primary" @click="$router.push({path:'details'})">详情</el-button>
 </div>
</template>

<script>
export default {
    name: 'PageList',
    data() {
        return {
        };
    },
    methods: {
        randomString(e) {
            e = e || 32;
            const t = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
            const a = t.length;
            let n = '';
            for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
            return n;
        },
    },

};
</script>

<style lang="scss" module="s">
</style>
