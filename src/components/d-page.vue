<template>
  <div :class="s.page" ref="page" >
    <div :class="s.back" v-if="showBack">
      <el-button icon="el-icon-arrow-left" round  size="mini" @click="back">{{backText}}</el-button>
    </div>
    <div :class="s.wrap">
      <slot></slot>
     <div :class="s.op">
       <template v-if="!fixed&&showBottom">
          <slot name="bottom">
             <el-button @click="cancel">{{cancelButtonText}}</el-button>
             <el-button :loading="loading" type="primary" @click="confirm">保存</el-button>
          </slot>
       </template>
      </div>
    </div>
    <div v-if="fixed&&showBottom" :class="s.fixed">
       <div :class="s.op">
             <slot name="bottom">
             <el-button @click="cancel">{{cancelButtonText}}</el-button>
             <el-button :loading="loading" type="primary" @click="confirm">{{confirmButtonText}}</el-button>
          </slot>
       </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'DPage',
    props: {
        backText: {
            type: String,
            default: '返回列表',
        },
        showBottom: {
            type: Boolean,
            default: true,
        },
        showBack: {
            type: Boolean,
            default: true,
        },
        // 自动返回
        autoBack: {
            type: Boolean,
            default: true,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        showCancelButton: {
            type: Boolean,
            default: true,
        },
        cancelButtonText: {
            type: String,
            default: '取消',
        },
        confirmButtonText: {
            type: String,
            default: '保存',
        },
        cancelText: {
            type: String,
            default: '是否取消保存，并返回列表页？',
        },
        // 返回列表填
        redirect: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            pageHeight: 0,
            tabHeight: 56,
            breadcrumbHeight: 44,
            padding: 24 * 2,
            fixed: false,
        };
    },
    mounted() {
        const ERD = require('element-resize-detector')();
        ERD.listenTo(this.$refs.page, (element) => {
            const { clientHeight } = document.documentElement;
            // console.log('clientHeight', clientHeight);
            // 可视区域 = 窗口高度 - tab高度 - breadcrumb 高度
            const visibleHeight = clientHeight - this.tabHeight - this.breadcrumbHeight - 10;
            //  console.log('visibleHeight', visibleHeight);
            this.pageHeight = element.offsetHeight + this.padding; // 加上上下间距
            this.fixed = visibleHeight <= this.pageHeight;
            // console.log('pageHeight', this.pageHeight);
        });
    },
    activated() {
        // 这个主要处理缓存问题，逻辑就是tab 点击时type为click 但如果是路由添加时是router而且新增的时候总是最后一个，所以只要是最后一个就主动刷新就可以处理缓存问题
        const { list } = this.$store.state.tabs;
        const tab = list[list.length - 1];
        if (tab.type === 'router' && this.$route.fullPath === tab.fullPath) {
            this.$emit('init', this.$route.fullPath);
        }
    },
    methods: {
        close() {
            // 路由优先等级高
            if (this.$route.query && this.$route.query.redirect) {
                console.log(this.$route.query.redirect);
                this.$router.replace(this.$route.query.redirect);
                return;
            }
            if (this.redirect) {
                // 返回重定向的的链接
                this.$router.replace(this.redirect);
            }
        },
        // 返回
        back() {
            if (this.autoBack) {
                this.close();
            } else {
                this.$emit('back', () => {
                    this.close();
                });
            }
        },
        // 取消
        cancel() {
            this.$msgbox({
                title: '提示',
                message: this.cancelText,
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                beforeClose: async (action, instance, done) => {
                    if (action === 'confirm') {
                        this.close();
                        done();
                    } else {
                        done();
                    }
                },
            });
        },
        // 提交
        confirm() {
            this.$emit('confirm', () => {
                this.close();
            });
        },
    },
};
</script>

<style lang="scss" module="s">
.page {
  position: relative;
  .back {
    position: fixed;
    top: 64px;
    right: 24px;
    .title {
      color: #333;
      font-size: 14px;
    }
  }
  .wrap {

  }
  .op{
     height: 64px;
     display: flex;
     justify-content: center;
     align-items: center;
  }
  .fixed{
     box-shadow: 0px 0px 4px rgba(0,0,0,.2);
    z-index: 999;
    padding-left: 64px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 64px;
    background-color: #fff;
  }
}
</style>
