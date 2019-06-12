import Vue from 'vue'
/**
 * 四舍五入
 */
Vue.filter('decimal', function(value, num = 2) {
    var pow = Math.pow(10, num);
    return Math.round(value*pow)/pow;
});

/** 
 * 制保留2位小数，如：2，会在2后面补上00.即2.00
 */
Vue.filter('toDecimal', function(value,num=2) {
    if(num<=0) num = 2;
    var len = value.toString();
    var kk = len.indexOf('.');
    var f = len.substr(0,num+kk+1);
    //var pow = Math.pow(10, 5);
    //var f = (value*pow)/pow; 
    var s = f.toString(); 
    var rs = s.indexOf('.'); 
    if (rs < 0) { 
        rs = s.length; 
        s += '.'; 
    } 
    while (s.length <= rs + 2) { 
        s += '0'; 
    }
    return s;
});

/**
 * 截取字符串
 * txt 字符串
 * num 字符串显示的长度
 */
Vue.filter('txtSub',function(str,num = 10) {
    if(str != '' && str != undefined && str != null) {
        var len = 0;  
        for (var i=0; i<str.length; i++) {   
            var c = str.charCodeAt(i);     
            if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {   
                len++;   
            }else {   
                len+=2;   
            }   
        }   
        if(len > num){
            return str.substring(0,num)+'...';
        }else{
            return str;
        }
    }
});

/**
 * 截取日期字符串 保留月份和日 s 5,e 5
 * 截取日期字符串 保留年月日 s 0,e 10
 * 截取日期字符串 保留月日和时间 s = 5, e = 11
 */
Vue.filter('formatDateString',function(val, s = 5, e = 5){
    if(val != '' && val != undefined && val != null) {
        return val.substr(s,e);
    }
});

/**
 * 日期格式化
 * value 日期
 * type 展示类型
 */
Vue.filter('formatDate',function(value,type = 1) {
    if(value != '' && value != undefined && value != null) {
        var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
        var date = new Date(value);
        var Y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var H = date.getHours();
        var i = date.getMinutes();
        var s = date.getSeconds();
        var k = date.getDay();
        var str = '';
        if (m < 10) {
            m = '0' + m;
        }
        if (d < 10) {
            d = '0' + d;
        }
        if (H < 10) {
            H = '0' + H;
        }
        if (i < 10) {
            i = '0' + i;
        }
        if (s < 10) {
            s = '0' + s;
        }
        if(type == 1) {
            str = Y + '-' + m + '-' + d + ' ' + H + ':' + i + ':' + s;
        } else if (type == 2) {
            str = Y + '-' + m + '-' + d + ' ' + H + ':' + i;
        } else  if (type == 3) {
            str = Y + '-' + m + '-' + d + ' ' + H ;
        } else if (type == 4) {
            str = Y + '-' + m + '-' + d ;
        } else if (type == 5) {
            str = Y + '-' + m ;
        } else if (type == 6) {
            str = Y  ;
        } else if(type == 7){
            str = weekday[k];
        }
        return  str;
    }
});

/**
 * 根据日期显示时间格式
 * value 日期
 * type 显示格式(默认：今天以内为小时前，1小时内为分钟前，2天以内为昨天，今天，2天以外显示日期格式：08-31)
 */
Vue.filter('DateForm',function(value,type = 1) {
    if(value != '' && value != undefined && value != null) {
        var value = value.replace(/\-/g, "/");
        var val = new Date(value).getTime();
        var now = new Date().getTime();
        var cha = parseInt((now-val)/(1000*60));     //计算差值 到分钟
        var cha1 = parseInt((now-val)/(1000*60*60*24));;//计算差值到天
        var str = '';
        if(type == 1){
            if(cha<1*60){
                str = cha+'分钟前';
            }else if(cha <24*60){
                str = parseInt((now-val)/(1000*60*60))+'小时前';
            }else if(cha1 == 1){
                str = '昨天';
            }else if(cha1 == 2){
                str = '前天';
            }else{
                str = value.substr(5,5);
            }
        }
        return str;
    }
});

/**
 * 根据日期获取距离当前的天数
 */
Vue.filter('dateDiff',function(endDate,type = 1) {
    if(endDate != '' && endDate != undefined && endDate != null) {
        var startDate = new Date().getTime(); //获取当前的日期，这里显示的是时间戳
        var times = new Date(endDate) - startDate;
        var get_Day = '';
        if(type == 1){
            get_Day = parseInt(times/(3600*24*1000));
        }else if(type == 2){
            get_Day = parseInt(times/(3600*1000));
        }
        return get_Day;
    }
});

/**
 * 隐藏手机号中间四位，变成*星号
 */
Vue.filter('phoneStar',function(val){
    if(val != '' && val != undefined && val != null) {
        var reg = /^(\d{3})\d{4}(\d{4})$/;
        return val.replace(reg,"$1****$2");
    }
});

/**
 * decodeURIComponent转码
 */
Vue.filter('decodeString',function(val){
    if(val != '' && val != undefined && val != null) {
        return decodeURIComponent(val);
    }
});

/**
 * 数字格式化，为空则显示为0
 */
Vue.filter('numberString',function(val,num = 0){
    if(val != '' && val != undefined && val != null) {
        return val;
    }else{
        return num;
    }
});

/**
 *  翻转字符串
 */
Vue.filter('reverse', function(str) {
    return str.split('').reverse().join('');
});

/**
 *  对用户输入的字符串进行反XSS处理，去掉onclick, javascript:alert，<script>等危险属性与标签
 */
Vue.filter('sanitize', function(str) {
    var rscripts = /<script[^>]*>([\S\s]*?)<\/script\s*>/gim;
    var ropen = /<\w+\b(?:(["'])[^"]*?(\1)|[^>])*>/ig;
    var ron = /\s+(on[^=\s]+)(?:=("[^"]*"|'[^']*'|[^\s>]+))?/g;
    var rsanitize = {
        a: /\b(href)\=("javascript[^"]*"|'javascript[^']*')/ig,
        img: /\b(src)\=("javascript[^"]*"|'javascript[^']*')/ig,
        form: /\b(action)\=("javascript[^"]*"|'javascript[^']*')/ig
    };
    return str.replace(rscripts, "").replace(ropen, function(a, b) {
        var match = a.toLowerCase().match(/<(\w+)\s/);
        if (match) { //处理a标签的href属性，img标签的src属性，form标签的action属性
            var reg = rsanitize[match[1]];
            if (reg) {
                a = a.replace(reg, function(s, name, value) {
                var quote = value.charAt(0);
                return name + "=" + quote + "javascript:void(0)" + quote; // jshint ignore:line
                })
            }
        }
        return a.replace(ron, " ").replace(/\s+/g, " "); //移除onXXX事件
    })
});

/**
 *  字符转义
 *  对类似于HTML格式的字符串进行转义，如将<、 >转换为&lt;、 &gt;
 */
Vue.filter('escape', function(str) {
    var rsurrogate = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    var rnoalphanumeric = /([^\#-~| |!])/g;
    return String(str).
    replace(/&/g, '&amp;').
    replace(rsurrogate, function(value) {
        var hi = value.charCodeAt(0);
        var low = value.charCodeAt(1);
        return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';'
    }).
    replace(rnoalphanumeric, function(value) {
        return '&#' + value.charCodeAt(0) + ';'
    }).
    replace(/</g, '&lt;').
    replace(/>/g, '&gt;')
});
