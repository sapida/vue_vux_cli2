<template>
    <div>
        <lg-header :config = config></lg-header>
    </div>
</template>

<script>
export default {
    data(){
        return {
            config:{
                type:1,
                title:'二级页面',
                right:{
                    show:false,
                }
            }
        }
    },
}
</script>
<style lang="scss" scoped>

</style>