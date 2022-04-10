import Vue from 'vue'
import App from './App.vue'
import VueSource from 'vue-resource'
import VueRouter from 'vue-router'
import { router } from './router/index';
import 'ant-design-vue/dist/antd.css'
import {Button,Input,Modal} from 'ant-design-vue'

Vue.config.productionTip = false

Vue.use(VueRouter).use(VueSource).use(Button).use(Input)
.use(Modal)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
