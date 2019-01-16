<template>
    <div>
        <lg-header :config = config></lg-header>
        <scroller class="lg-scroller">
            <group>
                <cell title="title" value="value" link="/person/child" v-for="(i,index) in 10" :key="index"></cell>
            </group>
        </scroller>
        <lg-transition></lg-transition>
    </div>
</template>

<script>
import { Cell, Group} from 'vux'
export default {
    components:{
        Cell,
        Group
    },
    data(){
        return {
            config:{
                type:1,
                title:'个人中心',
                right:{
                    show:false,
                }
            }
        }
    },
    methods:{},
}
</script>
<style lang="scss" scoped>

</style>