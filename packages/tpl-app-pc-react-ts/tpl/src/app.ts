import browserUpdate from 'browser-update';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import cookie from 'js-cookie';
import { history } from 'umi';
import request from 'umi-request';
// 语言配置
dayjs.locale('zh-cn');
// 浏览器检测，主流版本以下引导升级
browserUpdate({
  // 定制 "更新浏览器" 的引导页
  // url: ''
});

// 从cookie读取用户信息
interface IUserInfo {
  name?: string;
  uid?: string | number;
  avatar?: string;
}
let userInfo: IUserInfo = {};
try {
  const uInfo = cookie.get('userInfo');
  if (uInfo) {
    userInfo = JSON.parse(decodeURIComponent(uInfo));
  }
} catch {
  //
}

// 路由切换时，如 发送埋点
export function onRouteChange({ location }: any) {
  // 发送页面埋点
}

// // 动态修改路由
// export function patchClientRoutes({ routes }) {
// }

// 去登录
const toLogin = () => {
  const { pathname, search } = <Location>history.location;
  const redirect = encodeURIComponent(`${pathname}${search}`);
  if (pathname !== '/login') {
    history.replace(`/login?redirect=${redirect}`);
  }
  return {};
};

export const getInitialState = () => {
  try {
    // 用户信息
    const { uid } = userInfo;
    // 白名单外页面，有登录态要求。未登录，则引导去登录
    if (!~['/404', '/home', '/'].indexOf(history.location.pathname) && !uid) {
      return toLogin();
    }

    // 鉴权token
    const token = cookie.get('token');
    if (token) {
      // 统一配置请求头
      request.extendOptions({
        headers: {
          'x-token': token,
        },
      });
    }
    return { userInfo };
  } catch {
    //
  }

  return {};
};
