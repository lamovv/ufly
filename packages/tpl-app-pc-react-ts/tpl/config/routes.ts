export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './home',
    access: 'canRead',
  },
  {
    name: '登录',
    path: '/login',
    component: './login',
    access: 'canRead',
  },
  {
    name: '我的',
    path: '/my',
    component: './my',
    access: 'needLogin',
  },
  {
    path: '*',
    component: './404',
    access: 'canRead',
  },
];
