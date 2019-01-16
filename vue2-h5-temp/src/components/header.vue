<template>
    <x-header class="lg_header" :left-options="{backText: '',preventGoBack:config.back?true:false}" @on-click-back="onBack">
        <h1 slot="overwrite-title" v-if="config.type == 1">{{config.title}}</h1>
        <a slot="right" v-if="config.right.show" @click="rightClick()">
            <p v-if="config.right.type == 1" class="a1">{{config.right.title}}</p>
        </a>
    </x-header>
</template>
<script>
import {XHeader} from 'vux'
export default {
    // config参数说明
    // config:{
    //     back:true,               //阻止返回
    //     type:1,                  //标题显示类型，只支持1
    //     title:'收货地址',        //标题
    //     right:{                  //右侧参数
    //         show:true,           //是否显示
    //         type:1,              //显示样式，只支持1
    //         title:'新增地址'     //显示标题
    //     }
    // }
    props: ['config'],
    components: {
        XHeader
    },
    methods: {
        rightClick() {                  //点击右侧触发
            this.$emit('on-right');
        },
        onBack() {                      //当left-options.preventGoBack为true,点击左边返回时触发
            this.$emit('on-back');
        }
    },
}
</script>
<style lang="scss">
.lg_header {
    h1 {
      text-align: center;
      line-height: 40px;
      font-size: 16px;
      color: #ccc;
    }
}
</style>
