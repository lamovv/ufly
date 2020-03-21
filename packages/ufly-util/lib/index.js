'use strict';
exports.getUserHome = () => process.env[process.platform=='win32' ? 'USERPROFILE' : 'HOME'];

const getStackTrace = () => {
  let obj = {};
  Error.captureStackTrace(obj, getStackTrace);
  return obj.stack;
};

const log = console.log;

exports.log = function () {
  const stack = getStackTrace() || '';
  const matches = stack.match(/\(.*?\)/g) || [];
  const line = matches[1] || '';
  
  for (var i in arguments) {}
  
  if (typeof arguments[i] == 'object') {
    arguments[i] = JSON.stringify(arguments[i]);
  }
  arguments[i] += ' --> ' + line.replace('(', '').replace(')', '');
  log.apply(console, arguments);
};


/**
 * 格式化时间戳
 * @param {String} formatter    指定的时间格式
 * @param {Number} timestamp 时间戳，秒(10位)或毫秒(13位)
 * @returns {String}
 */
exports.date = (formatter, timestamp) => {
  timestamp = String(timestamp).length == 13 ? timestamp : timestamp * 1000;
  var jsdate = timestamp ? new Date(timestamp) : new Date();
  var pad = function (n, c) {
    n = n + '';
    return n.length < c ? (new Array(++c - n.length).join('0') + n) : n;
  };
  var txt_weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var txt_ordin = { 1: 'st', 2: 'nd', 3: 'rd', 21: 'st', 22: 'nd', 23: 'rd', 31: 'st' };
  var txt_months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var f = {
    //天
    d: function () {
      return pad(f.j(), 2);
    },
    D: function () {
      var t = f.l();
      return t.substr(0, 3);
    },
    j: function () {
      return jsdate.getDate();
    },
    l: function () {
      return txt_weekdays[f.w()];
    },
    N: function () {
      return f.w() + 1;
    },
    S: function () {
      return txt_ordin[f.j()] ? txt_ordin[f.j()] : 'th';
    },
    w: function () {
      return jsdate.getDay();
    },
    z: function () {
      return (jsdate - new Date(jsdate.getFullYear() + '/1/1')) / 864e5 >> 0;
    },
    //星期
    W: function () {
      var a = f.z(), b = 364 + f.L() - a;
      var nd2, nd = (new Date(jsdate.getFullYear() + '/1/1').getDay() || 7) - 1;

      if (b <= 2 && ((jsdate.getDay() || 7) - 1) <= 2 - b) {
        return 1;
      } else {

        if (a <= 2 && nd >= 4 && a >= (6 - nd)) {
          nd2 = new Date(jsdate.getFullYear() - 1 + '/12/31');
          return date('W', Math.round(nd2.getTime() / 1000));
        } else {
          return (1 + (nd <= 3 ? ((a + nd) / 7) : (a - (7 - nd)) / 7) >> 0);
        }
      }
    },
    //月
    F: function () {
      return txt_months[f.n()];
    },
    m: function () {
      return pad(f.n(), 2);
    },
    M: function () {
      var t = f.F();
      return t.substr(0, 3);
    },
    n: function () {
      return jsdate.getMonth() + 1;
    },
    t: function () {
      var n = jsdate.getMonth() + 1;
      if (n === 2) {
        return 28 + f.L();
      } else {
        if (n & 1 && n < 8 || !(n & 1) && n > 7) {
          return 31;
        } else {
          return 30;
        }
      }
    },
    //年
    L: function () {
      var y = f.Y();
      return (!(y & 3) && (y % 1e2 || !(y % 4e2))) ? 1 : 0;
    },
    Y: function () {
      return jsdate.getFullYear();
    },
    y: function () {
      return (jsdate.getFullYear() + '').slice(2);
    },
    //时间
    a: function () {
      return jsdate.getHours() > 11 ? 'pm' : 'am';
    },
    A: function () {
      return f.a().toUpperCase();
    },
    B: function () {
      var off = (jsdate.getTimezoneOffset() + 60) * 60;
      var theSeconds = (jsdate.getHours() * 3600) + (jsdate.getMinutes() * 60) + jsdate.getSeconds() + off;
      var beat = Math.floor(theSeconds / 86.4);
      if (beat > 1000) beat -= 1000;
      if (beat < 0) beat += 1000;
      if ((String(beat)).length == 1) beat = '00' + beat;
      if ((String(beat)).length == 2) beat = '0' + beat;
      return beat;
    },
    //小时
    g: function () {
      return jsdate.getHours() % 12 || 12;
    },
    G: function () {
      return jsdate.getHours();
    },
    h: function () {
      return pad(f.g(), 2);
    },
    H: function () {
      return pad(jsdate.getHours(), 2);
    },
    //分钟
    i: function () {
      return pad(jsdate.getMinutes(), 2);
    },
    //秒
    s: function () {
      return pad(jsdate.getSeconds(), 2);
    },
    //时区
    O: function () {
      var t = pad(Math.abs(jsdate.getTimezoneOffset() / 60 * 100), 4);
      t = (jsdate.getTimezoneOffset() > 0 ? '-' : '+') + t;
      return t;
    },
    P: function () {
      var O = f.O();
      return (O.substr(0, 3) + ':' + O.substr(3, 2));
    },
    //完整的日期／时间
    c: function () {
      return f.Y() + '-' + f.m() + '-' + f.d() + 'T' + f.h() + ':' + f.i() + ':' + f.s() + f.P();
    },
    U: function () {
      return Math.round(jsdate.getTime() / 1000);
    }
  };
  return formatter.replace(/[\\]?([a-zA-Z])/g, (t, s) => {
    var ret;
    if (t !== s) {
      //escaped
      ret = s;
    } else if (f[s]) {
      //a date function exists
      ret = f[s]();
    } else {
      //nothing special
      ret = s;
    }
    return ret;
  });
};