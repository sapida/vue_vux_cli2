<template>
    <div>
        <img src="../assets/img/TB1PNLZ.jpg" alt="">
        <group>
            <cell title="title" value="value" link="/person"></cell>
        </group>
        <lg-transition type="bottom"></lg-transition>
    </div>
</template>

<script>
import { Cell, Group} from 'vux'
export default {
    components:{
        Cell,
        Group
    }
}
</script>
<style lang="scss" scoped>
img{
    width: 375px;
}
</style>