import {Alert,AlertModule} from 'vux'
import Vue from 'vue'

/**
 * alertModule 显示alert弹窗
 * @param title
 * @param content
 * @param alertModule('标题','内容','确定事件')
 */
export function alertModule(title, content,confirm,text) {
	var title = title || '温馨提示';
	var text = text || '确定';
	AlertModule.show({
		title: title,
		content: content,
		buttonText:text,
		onHide () {
			if(confirm)confirm();
			return;
		}
	})
}

/**
 * toastModule 显示toast窗
 * @param type  类型；包括warn（警告），success（成功），cancel（失败）
 * @param title 标题
 * @param toastModule('success','标题')
 */
export function toastModule(type,title){
	var type = type || 'success';
	if(type == 'warn'){
		title = title || '警告';
	}else if(type == 'success'){
		title = title || '请求成功';
	}else if(type == 'cancel'){
		title = title || '请求失败';
	}
	Vue.$vux.toast.show({
		'time':'2000',
		'width':'18em',
		'is-show-mask':false,
		'type':type,
		'text': title,
		'position':'middle'
	})
}

/**
 * confirmModule 显示带取消确认弹窗
 * @param title 标题
 * @param content 正文
 * @param confirm 点击确定的处理事件
 * @param cancel 点击取消的处理事件
 * @param confirmModule('标题','内容','确定事件','取消事件')
 */
export function confirmModule(title,content,confirm,cancel,leftText,rightText){
	var title = title || '温馨提示';
	var leftText = leftText || '取消';
	var rightText = rightText || '确定';
	Vue.$vux.confirm.show({
		'title':title,
		'content':content,
		'cancelText':leftText,
		'confirmText':rightText,
		onConfirm(){
			if(confirm)confirm();
			return;
		},
		onCancel(){
			if(cancel)cancel();
			return;
		}
	})
}

/**
 * loadingModule 显示加载框
 * @param type true显示，false隐藏
 * @param text 标题
 * @param loadingModule(Boolean,'标题')
 */
export function loadingModule(type,text){
	var text = text || '加载中';
	if(!type){
		Vue.$vux.loading.hide();
		return;
	};
	Vue.$vux.loading.show({
		text: text
	})
}

/**
 * dateTimeModule 日期时间选择器
 * @param format 时间格式YYYY-MM-DD HH:mm:ss，默认是YYYY-MM-DD
 * @param value  设置默认值
 * @param dateTimeModule('YYYY-MM-DD','2017-05-10')
 */
export function dateTimeModule(format,value,confirm){
	Vue.$vux.datetime.show({
		cancelText: '取消',
        confirmText: '确定',
        format: format,
        value: value,
        onConfirm (val) {
			if(confirm)confirm(val);
        },
	})
}

Vue.prototype.$toastModule = toastModule;
Vue.prototype.$alertModule = alertModule;
Vue.prototype.$confirmModule = confirmModule;
Vue.prototype.$loadingModule = loadingModule;
Vue.prototype.$dateTimeModule = dateTimeModule;