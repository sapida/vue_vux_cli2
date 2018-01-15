<template>
  <div @click="ssss()">
    <h1>{{ msg }}<div class="ss">123456</div></h1>
    <h2>{{author}}</h2>
  </div>
</template>

<script>
import * as vuxModel from '@/utils/vux'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    author(){
      return this.$store.state.author;
    }
  },
  methods:{
  	ssss(){
  		vuxModel.toastModule(this,'warn','标题');
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1, h2 {
  .ss{
    color: #24ce70;
  }
  font-size: 1rem;
  font-weight: normal;
}
</style>
