import Vue from 'vue'
import App from './App'
import store from "./store";

Vue.config.productionTip = false
Vue.prototype.$store = store;

// 全局数据
Vue.prototype.$globalData = {
  bottomLift: 0, // 底部间距，兼容固定底部在iPhone11等设备上样式
	statusBarHeight: 20,
  titleBarHeight: 44,
  navBarHeight: 64,
  windowHeight: 736,
  windowWidth: 414
}

// main.js
import uView from 'uview-ui';
Vue.use(uView);
const app = new Vue({
	store,
	...App
})
app.$mount()
