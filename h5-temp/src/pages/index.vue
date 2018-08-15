<template>
    <div class="page">
        <scroller class="scroll">
            <x-button @click.native="btnClick(1)">actionsheet</x-button>
            <x-button @click.native="btnClick(2)" type="primary">alert</x-button>
            <x-button @click.native="btnClick(3)" type="warn">promit</x-button>
            <x-button @click.native="btnClick(4)">警告</x-button>
            <x-button @click.native="btnClick(5)" type="primary">成功</x-button>
            <x-button @click.native="btnClick(6)" type="warn">失败</x-button>
            <x-button @click.native="btnClick(7)" type="warn">加载框</x-button>
            <x-button @click.native="btnClick(8)" type="warn">时间选择器</x-button>
        </scroller>
        <actionsheet v-model="show" :menus="menus" show-cancel></actionsheet>
    </div>
</template>

<script>
import { XButton,Actionsheet } from 'vux'
export default {
    data () {
        return {
            show:false,
            menus:{
                menu1: '拍照',
                menu2: '从相机中选择'
            },
        };
    },
    components: {
        Actionsheet,
        XButton
    },
    methods: {
        btnClick(val){
            switch (val) {
                case 1:
                    this.show = true;
                    break;
                case 2:
                    this.$alertModule('','提示框提示框提示框提示框提示框提示框提示框提示框');
                    break;
                case 3:
                    this.$confirmModule('','提示框提示框提示框提示框提示框提示框提示框提示框');
                    break;
                case 4:
                    this.$toastModule('warn','提示框提示框提示框提');
                    break;
                case 5:
                    this.$toastModule('success','提示框提示框提示框提');
                    break;
                case 6:
                    this.$toastModule('cancel','提示框提示框提示框提');
                    break;
                case 7:
                    this.$loadingModule(true,'');
                    setTimeout(()=>{
                        this.$loadingModule(false);
                    },2000)
                    break;
                case 8:
                    this.$dateTimeModule('','',(val)=>{
                        console.log(val);
                    });
                    break;
                default:
                    break;
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.scroll{
    padding: .8rem;
}
</style>