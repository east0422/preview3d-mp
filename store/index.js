import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		curtabbar: uni.getStorageSync("curtabbar") || 0
	},
	getters: {
		curtabbar: state => {
			return state.curtabbar
		}
	},
	mutations: {
		changeCurtabbar(state, newTabbar){
			state.curtabbar = newTabbar
			uni.setStorageSync("curtabbar", newTabbar);
		}
	},
	actions: {
		changeTabbarFn({commit}, newTabbar){
			commit('changeCurtabbar', newTabbar)
		}
	}
})
export default store;