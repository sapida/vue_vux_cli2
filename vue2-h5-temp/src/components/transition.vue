<template>
  <transition 
    :enter-active-class="type == 'bottom' ? 'enter-bottom-active' : 'enter-left-active'" 
    :leave-active-class="type == 'bottom' ? 'leave-bottom-active' : 'leave-left-active'"
  >
    <keep-alive>
      <router-view class="container-view"/>
    </keep-alive>
  </transition>
</template>
<script>
export default {
  props: ['type']
}
</script>


<style lang='scss' scoped>
.enter-left-active{
  animation:enterLeftActive 0.3s;
}
.leave-left-active{
  animation:leaveLeftActive 0.3s;
}
.enter-bottom-active{
  animation:enterBottomActive 0.3s;
}
.leave-bottom-active{
  animation:leaveBottomActive 0.3s;
}
@keyframes enterLeftActive {
  0% {
    transform: translateX(100%);
    opacity: 1;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
@keyframes leaveLeftActive {
  0% {
    transform: translateX(0px);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 1;
  }
}
@keyframes enterBottomActive {
  0% {
    transform: translateY(100%);
    opacity: 1;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes leaveBottomActive {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 1;
  }
}
</style>