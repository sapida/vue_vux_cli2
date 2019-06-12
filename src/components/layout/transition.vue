<template>
    <transition :name="viewTransition">
        <router-view class="container-view"/>
    </transition>
</template>

<script>
import { mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'direction',
        ]),
        viewTransition () {
            if(this.direction == 'tip'){
                return 'fold'
            }else{
                return 'swiper';
            }
        },
    },
}
</script>

<style lang='scss' scoped>
.fold-enter-active {
    animation:fold-in 0.3s;
    opacity: 1;
}
.fold-leave-active {
    animation:fold-out 0.3s;
    opacity: 1;
}
@keyframes fold-in {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0px);
    }
}
@keyframes fold-out {
    0% {
        transform: translateX(0px);
    }
    100% {
        transform: translateX(100%);
    }
}
</style>