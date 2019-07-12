import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'


Vue.config.productionTip = false

Vue.prototype.getColor = () => {
  const mainColor = {};
  if (store.getters.isBreak) {
    mainColor.dark = "#00A7FF"
    mainColor.light = "#E5F3FF"
  } else {
    mainColor.dark = "#FF4384"
    mainColor.light = "#FFEDF7"
  }
  return mainColor;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
