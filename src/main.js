import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
// import 'element-ui/lib/theme-default/index.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI, {locale})

Vue.directive('init', {
  bind: function (el, binding, vnode) {
    vnode.context[binding.arg] = binding.value
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
