/**
 * 相关过滤器
 * Created by admin on 2017/7/10 0010.
 */
import Vue from 'vue'

/**
 * 连接字符串
 */
Vue.filter('concat', function(value, input) {
  return value + (input || '');
});

/**
 *  截取字符串
 *  length，新字符串长度，truncation，新字符串的结尾的字段,返回新字符串
 */
Vue.filter('truncate', function(str, length, truncation) {
  length = length || 30;
  truncation = typeof truncation === "string" ? truncation : "...";
  return str.length > length ? str.slice(0, length - truncation.length) + truncation : String(str);
});

/**
 * 截取字符串
 * txt 字符串
 * num 字符串显示的长度
 */
Vue.filter('txtSub',function(txt,num = 10) {
  if(txt != '' && txt != undefined && txt != null) {
    return txt.substring(0,num);
  } else {
    return ''
  }
});

/**
 * 日期格式化
 * value 日期
 * type 展示类型
 */
Vue.filter('formatDate',function(value,type = 1) {
  if(value != '' && value != undefined && value != null) {
    var date = new Date(value);
    var Y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var H = date.getHours();
    var i = date.getMinutes();
    var s = date.getSeconds();
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
    }
    return  str;
  }
});


/**
 * 根据日期获取天数
 */
Vue.filter('dateDiff',function(endDate) {
  if(endDate != '' && endDate != undefined && endDate != null) {
    var startDate = new Date().getTime(); //获取当前的日期，这里显示的是时间戳
    var times = new Date(endDate) - startDate;
    var get_Day = parseInt(times/(3600*24*1000));
    return get_Day;
  } else {
    return '';
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
 * 隐藏字符串中间四位，变成*星号
 */
Vue.filter('formatString',function(val){
  if(val != '' && val != undefined && val != null) {
    //return new Array(val.length).join('*') + val.substr(-1);
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

/**
 * 数字格式化
 * @param number
 * @param decimals
 * @param point
 * @param thousands
 * @returns {*|string}
 */
function numberFormat(number, decimals, point, thousands) {
  //form http://phpjs.org/functions/number_format/
  //number    必需，要格式化的数字
  //decimals  可选，规定多少个小数位。
  //point 可选，规定用作小数点的字符串（默认为 . ）。
  //thousands 可选，规定用作千位分隔符的字符串（默认为 , ），如果设置了该参数，那么所有其他参数都是必需的。
  number = (number + '')
    .replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 3 : Math.abs(decimals),
    sep = thousands || ",",
    dec = point || ".",
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + (Math.round(n * k) / k)
          .toFixed(prec)
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
    .split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
  }
  if ((s[1] || '')
      .length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1)
      .join('0')
  }
  return s.join(dec)
}
Vue.filter('number', numberFormat);
