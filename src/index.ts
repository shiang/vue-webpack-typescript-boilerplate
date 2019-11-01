import Vue from 'vue'
import '@babel/polyfill'
import App from './App.vue'

new Vue({
  render: h => h(App)
}).$mount('#app')
