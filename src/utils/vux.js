import {Alert,AlertModule} from 'vux'

/**
 * alertModule 显示alert弹窗
 * @param title
 * @param content
 * @param alertModule('标题','内容')
 */
export function alertModule(title, content) {
	var title = title || '标题';
	let u = navigator.userAgent;
	if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {   //安卓手机
		AlertModule.show({
	        title: title,
	        content: content,
      	})
	}else if (u.indexOf('iPhone') > -1) {   //苹果手机
		alert(content);
	}else{
		alert(content);
	}
}

/**
 * toastModule 显示toast窗
 * @param that  外部传入this，防止被替换
 * @param type  类型；包括warn（警告），success（成功），cancel（失败）
 * @param title 标题
 * @param toastModule(this,'success','标题')
 */
export function toastModule(that,type,title){
	var type = type || 'success';
	if(type == 'warn'){
		title = title || '警告';
	}else if(type == 'success'){
		title = title || '请求成功';
	}else if(type == 'cancel'){
		title = title || '请求失败';
	}
	that.$vux.toast.show({
		'time':'2000',
		'is-show-mask':false,
		'type':type,
		'text': title,
		'position':'middle'
	})
}

/**
 * confirmModule 显示带取消确认弹窗
 * @param that  外部传入this，防止被替换
 * @param title 标题
 * @param content 正文
 * @param confirm 点击确定的处理事件
 * @param cancel 点击取消的处理事件
 * @param confirmModule(this,'标题','内容','确定回掉','取消回掉')
 */
export function confirmModule(that,title,content,confirm,cancel){
	var title = title || '标题';
	that.$vux.confirm.show({
		'title':title,
		'content':content,
		onShow(){        //弹窗出现时触发
			//console.log('plugin show');
		},
		onHide(){       //弹窗隐藏时触发
			//console.log('plugin hide');
		},
		onConfirm(){     //点击确定按钮时触发
			if(confirm)confirm();
			return;
		},
		onCancel(){      //点击取消按钮时触发
			if(cancel)cancel();
			return;
		}
	})
}

/**
 * loadingModule 显示加载框
 * @param that  外部传入this，防止被替换
 * @param type true显示，false隐藏
 * @param text 标题
 * @param loadingModule(this,true,'标题')
 */
export function loadingModule(that,type,text){
	var text = text || '加载中';
	if(!type){
		that.$vux.loading.hide();
		return;
	};
	that.$vux.loading.show({
		text: text
	})
}

/**
 * dateTimeModule 日期时间选择器
 * @param that  外部传入this，防止被替换
 * @param format 时间格式YYYY-MM-DD HH:mm:ss，默认是YYYY-MM-DD
 * @param value  设置默认值
 * @param dateTimeModule(this,'YYYY-MM-DD','2017-05-10')
 */
export function dateTimeModule(that,format,value){
	that.$vux.datetime.show({
		cancelText: '取消',         //取消按钮文字
        confirmText: '确定',        //确认按钮文字
        format: format,  			//时间格式，不支持特殊字符
        value: value,     			//表单值，v-model绑定
        onConfirm (val) {           //点击确定按钮时触发，等同于事件 on-hide(confirm)
          console.log('plugin confirm', val)
        },
        onShow () {               //弹窗显示时触发
          console.log('plugin show')
        },
        onHide () {              //弹窗关闭时触发
          console.log('plugin hide')
        }
	})
}
