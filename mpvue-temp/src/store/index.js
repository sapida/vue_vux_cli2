/** 
 * vuex保存数据并本地持久化
 * Created by aerfa on 2018/8/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{                          //保存数据
		footerId:0,
	},
    mutations:{                     //修改数据
		setFooterId (state,msg) {
			state.footerId = msg;
		},
	},
    plugins: [
        createPersistedState({
            storage: {
                getItem: key => wx.getStorageSync(key),
                setItem: (key, value) => wx.setStorageSync(key, value),
                removeItem: key => {}
            }
        })
    ]
})