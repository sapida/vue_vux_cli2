import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import VuexPersist from 'vuex-persist'
const vuexLocal = new VuexPersist({
    storage:window.sessionStorage
});

const store = new Vuex.Store({
	//strict:true,
	state:{
		footerId:0,
	},
	mutations:{
		setFooterId (state,msg) {
			state.footerId = msg;
		}
	},
	plugins:[vuexLocal.plugin],
})

export default store;
