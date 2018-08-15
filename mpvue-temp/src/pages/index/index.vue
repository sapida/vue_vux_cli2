<template>
    <div class="container">
        <swiper :indicator-dots=indicatorDots :autoplay=autoplay :interval=interval :duration=duration>
            <swiper-item v-for="(i,index) in imgUrls" :key="key">
                <image :src=i mode="scaleToFill"/>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgUrls: [
                'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
                'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
            ],
            circular: true,
            autoplay: true,
            interval: 3000,
            duration: 800,
        }
    },
    created() {

    },
    methods: {

    }
}
</script>

<style scoped lang="scss">
swiper{
    height:200px;
    image{
        width: 100%;
        height: 100%;
    }
}
</style>