import Vue from 'vue'
import App from './App.vue'
// import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import router from 'src/router'

import 'common/stylus/index.styl'

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png'),
})

// 解决移动端点击300ms延迟问题
// fastclick.attach(document.body)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
