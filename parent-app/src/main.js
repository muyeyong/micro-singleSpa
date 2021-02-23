import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {registerApplication,start} from 'single-spa'
// 注册并挂载子应用
Vue.config.productionTip = false

function loadScript(url){
  return new Promise((resolve,reject)=>{
    let script = document.createElement('script')
    script.src = url
    script.onload = resolve
    script.onrerror = reject
    document.head.appendChild(script)
  })
}

// 缺陷 样式不隔离 没有js沙箱 不能动态加载js文件
registerApplication('subApp',
  async ()=>{
    console.log('加载子应用')
   await loadScript('http://localhost:9879/js/chunk-vendors.js')
   await loadScript('http://localhost:9879/js/app.js')
   return window.subApp
  },
  location => location.pathname.startsWith('/subapp') //加载条件，触发加载子应用
)
start()
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
