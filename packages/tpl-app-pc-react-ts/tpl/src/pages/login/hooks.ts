import { useRequest } from '@umijs/hooks';

// 获取组织结构
function useTopid(mobile: string) {
  return useRequest({
    url: 'top/list',
    method: 'POST',
    data: {
      salesmanPhone: mobile,
    },
  });
}
// 获取验证码
function useVcode(mobile: string) {
  return useRequest({
    api: 'tool/send.validate.code',
    method: 'POST',
    data: {
      telephone: mobile,
    },
  });
}

export { useTopid, useVcode };
