import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	strict:true,   //使 Vuex store 进入严格模式，在严格模式下，任何 mutation 处理函数以外修改 Vuex state 都会抛出错误。
	//定义状态
	state:{
		author:'mirs chen'
	},
	//计算属性
	getters:{
		getAuthor : state => {
			return state.author + 'erha';
		}
	},
	//修改状态事件，必须同步函数
	mutations:{
		setAuthor (state,msg) {
			state.author = msg;
		}
	},
	//提交mutation,可以异步操作
	actions:{

	},
	//模块
	modules:{

	}
})

export default store;
