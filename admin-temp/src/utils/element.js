/** 
 * 封装element相关弹窗
 * Created by aerfa on 2018/8/9.
 */
import Vue from 'vue'
import { MessageBox } from 'element-ui';

/**
 * alertModule 显示alert弹窗
 * @param title
 * @param content
 * @param alertModule('内容','确定事件')
 */
export function alertModule(content,confirm) {
	MessageBox.alert(content,'温馨提示', {
        confirmButtonText: '确定',
        callback: action => {
            if(action === 'cancel'){
                return;
            }
            if(confirm)confirm();
        }
    });
}

/**
 * confirmModule 显示带取消确认弹窗
 * @param title 标题
 * @param content 正文
 * @param confirm 点击确定的处理事件
 * @param confirmModule('内容','确定事件'，'取消事件','确定按钮文字','取消按钮问题')
 */
export function confirmModule(content,confirm,cancel,confirmButton='保存',cancelButton='放弃修改'){
	MessageBox.confirm(content,'确认信息', {
        distinguishCancelAndClose: true,
        confirmButtonText: confirmButton,
        cancelButtonText: cancelButton
    }).then(() => {
        if(confirm)confirm();
    }).catch(action => {
        if(action === 'close'){
            return;
        }else{
            if(cancel)cancel();
        }
    });
}

Vue.prototype.$alertModule = alertModule;
Vue.prototype.$confirmModule = confirmModule;