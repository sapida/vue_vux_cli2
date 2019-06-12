<template>
    <div id="app" @touchstart="bodyTouchStart" @touchmove="bodyTouchMove" @touchend="bodyTouchEnd">
        <router-view />
    </div>
</template>

<script>
var swidth = document.documentElement.clientWidth;
export default {
    data() {
        return {
            touchLeft: swidth*2/5,  //划动起点界限，起点在靠近屏幕左侧时才有效
            touchStartPoint: 0,     //记录起始点X坐标
            distance: 0,           //记录划动的距离
            backBtn: 0,            //回退按钮的dom，根据页面上是否存在此dom来判断该路由是否可回退
        }
    },
    methods: {
        bodyTouchStart(event){
            this.backBtn = document.getElementsByClassName("container-view").length;
            if(this.backBtn){
                this.touchStartPoint = event.targetTouches[0].pageX;
                this.distance = 0;
            }
        },
        bodyTouchMove(event) {
            if (this.backBtn && this.touchStartPoint < this.touchLeft) {
                // 只监听单指划动，多指划动不作响应
                if (event.targetTouches.length > 1) {
                    return;
                }
                // 实时计算distance
                this.distance = event.targetTouches[0].pageX - this.touchStartPoint;
                if (this.distance < 0) { // driver组件是右滑，所以totalDiff不能小于0
                    this.distance = 0;
                } else if (this.distance > swidth) { // 这里maxMoveDistance为屏幕宽度
                    this.distance = swidth;
                }
                let el = document.getElementsByClassName("container-view")[this.backBtn-1];
                this.translate(el, this.distance, 0); // 对组件进行滑动
            }
        },
        bodyTouchEnd(event){
            if (this.backBtn && this.touchStartPoint < this.touchLeft) {
                this.touchStartPoint = 0;
                let el = document.getElementsByClassName("container-view")[this.backBtn-1];
                if (this.distance > this.touchLeft) {
                    this.translate(el, swidth, 0, {
                        transitionTimingFunction: 'linear',
                        transitionDuration: '.1s'
                    })
                    this.$router.goBack('');
                } else {
                    this.distance = 0;
                    this.translate(el, this.distance, 0)
                }
            }
        },
        translate(el, x, y, options) {
            const defaultOptions = {
                useTransfrom: true,
                transitionTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
                transitionDuration: '.2s'
            }
            for (let option in options) {
                defaultOptions[option] = options[option]
            }
            if (defaultOptions.useTransfrom) {
                el.style.transform = `translate3d(${x}px,${y}px,0)`
                el.style.transitionProperty = 'transform'
                el.style.transitionTimingFunction = defaultOptions.transitionTimingFunction
                el.style.transitionDuration = defaultOptions.transitionDuration
            } else {
                el.style.left = x
                el.style.top = y
            }
        }
    }
}
</script>