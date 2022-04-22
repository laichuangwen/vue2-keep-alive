<template>
  <div :class="s.view">
    <el-tabs
      ref="tabs"
      @input="change"
      :value="defaultActive"
      @tab-click="tabClick"
      @tab-remove="tabRemove"
    >
      <el-tab-pane
        v-for="tab in tabs"
        :key="tab.tabName"
        :closable="tabs.length > 1"
        :label="tab.label"
        :name="tab.tabName"
      ></el-tab-pane>
    </el-tabs>
    <el-button v-if="showClean" :class="s.btn" type="text" @click="clean"
      >清除</el-button
    >
  </div>
</template>

<script>
export default {
    data() {
        return {
            showClean: false,
        };
    },
    computed: {
        tabs() {
            return this.$store.state.tabs.list;
        },
        defaultActive() {
            return this.$store.state.tabs.active;
        },
    },
    mounted() {
        this.init();
        window.addEventListener('resize', this.init);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.init);
    },
    methods: {
        init() {
            if (this.$refs.tabs && this.$refs.tabs.$el) {
                this.showClean = !!this.$refs.tabs.$el.querySelector('.el-tabs__nav-next');
            }
        },
        change() {
            this.init();
        },
        clean() {
            this.$store.dispatch('tabs/leaveOne', this.defaultActive);
            this.showClean = false;
        },
        tabClick(item) {
            const tab = this.tabs[item.index];
            if (this.defaultActive !== tab.tabName) {
                this.$store.commit('tabs/setTypeItem', tab.tabName);
                this.$router.replace({
                    path: tab.tabName,
                    params: tab.params,
                    query: tab.query,
                });
            }
        },
        tabRemove(name) {
            //   console.log("搜索的名称", name);
            //   console.log(this.defaultActive);
            if (this.defaultActive === name) {
                this.tabs.forEach((tab, index) => {
                    if (tab.tabName === name) {
                        const nextTab = this.tabs[index + 1] || this.tabs[index - 1];
                        if (nextTab) {
                            // console.log('获取的tab', nextTab)
                            this.$router.replace(nextTab.tabName);
                            this.$store.dispatch('tabs/setActive', nextTab.tabName);
                        }
                    }
                });
            }
            this.$store.dispatch('tabs/remove', name);
        },
    },
};
</script>

<style lang="scss" module="s">
.view {
  position: relative;
  min-width: 500px;
  .btn {
    position: absolute;
    right: 310px;
    top: 50%;
    margin-top: -16px;
  }
  :global(.el-tabs__header) {
    margin: 0;
  }
  :global(.el-tabs__item) {
    padding: 0px 8px;
    margin: 12px 6px;
    height: 32px;
    line-height: 31px;
    position: relative;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    &:nth-child(2) {
      padding-left: 8px;
    }
  }
  :global(.el-tabs__item.is-active) {
    background-color: #409eff;
    color: #303133;
    border: 1px solid #409eff;
  }
  :global(.el-tabs__item) {
    &:hover {
      background-color: #409eff;
      color: #303133;
      border: 1px solid #409eff;
    }
  }
  :global(.el-tabs__nav-wrap::after) {
    display: none;
  }
  :global(.el-tabs--top .el-tabs__item.is-top) {
    &:nth-child(2) {
      padding-left: 8px;
    }
    &:last-child {
      padding-right: 8px;
    }
  }
  :global(.el-tabs__active-bar) {
    display: none;
  }
  :global(.el-tabs__nav-prev) {
    line-height: 56px;
    font-size: 16px;
  }
  :global(.el-tabs__nav-next) {
    line-height: 56px;
    font-size: 16px;
  }
}
</style>
