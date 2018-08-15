<template>
    <div class="page">
        <el-row>
            <el-button @click="btnClick(1)">alert弹窗</el-button>
            <el-button type="primary" @click="btnClick(2)">promit弹窗</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>
    </div>
</template>

<script>
export default {
    data () {
        return {
            radio: '1'
        };
    },
    methods: {
        btnClick(val){
            switch (val) {
                case 1:
                    this.$alertModule('这是一个alert弹窗')
                    break;
                case 2:
                    this.$confirmModule('这是一个promit弹窗')
                    break;
                default:
                    break;
            }
        }
    }
}
</script>

<style lang='scss' scoped>

</style>