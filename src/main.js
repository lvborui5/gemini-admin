import Vue from 'vue'

// external imports
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// internal imports
import '@/styles/index.scss'
import App from '@/App'
import router from '@/router'
import store from '@/store'

import i18n from '@/lang' // Internationalization
import '@/errorLog'// error log
// import '@/permission' // permission control

// core imports
import 'core/ui/lazyload'
import * as filters from 'core/filters'

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(Element, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
