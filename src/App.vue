<template>
  <div id="app">
    <p>
      <router-link to="/login">Go to Home</router-link>
      <router-link to="/normal">Go to About</router-link>
    </p>
    <div>

    <router-view :dataList="data" class="view"></router-view>
    </div>
  </div>
</template>

<script>
import loginComp from './components/login/login'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    loginComp,
  },
  data(){
    return {
      msg:'Hello World',
      data:[
        {'title':'title1','content':'content1'},
        {'title':'title2','content':'content2'},
        {'title':'title3','content':'content3'},
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.view{
  width: 100vw;
  height: 80vh;
}
</style>
