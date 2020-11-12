import Vue from 'vue'
import App from './App.vue'
import fastclick from 'fastclick'
import router from 'src/router'

import 'common/stylus/index.styl'

Vue.config.productionTip = false

// 解决移动端点击300ms延迟问题
fastclick.attach(document.body)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
