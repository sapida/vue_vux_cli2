/** 
 * 封装微信原生API
 * Created by aerfa on 2018/8/6.
 * Copyright 2018 aerfa. All rights reserved.
 */
import Vue from 'vue'

//微信登录,使用方法：this.$wxLogin().then(res=>{})
function wxLogin(){
    return new Promise(function(resolve){
        wx.login({
            success: () => {
                wx.getUserInfo({
                    success: (res) => {
                        resolve(res);
                    }
                })
            }
        })
    });
}

Vue.prototype.$wxLogin = wxLogin;