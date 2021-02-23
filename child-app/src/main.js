import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'
// 子应用需要导出bootstrap mount unmount 三个方法
Vue.config.productionTip = false

const appOptions = {
  el:'#sub-app',  //挂载到父应用中的id
  router,
  render: h => h(App)
}

const SSPVue = singleSpaVue({
  Vue,
  appOptions
})
if(window.singleSpaNavigate){
  __webpack_public_path__ = 'http://localhost:9879/'
}

export const bootstrap = SSPVue.bootstrap
export const mount = SSPVue.mount
export const unmount  = SSPVue.unmount

// 将子应用打包成lib
