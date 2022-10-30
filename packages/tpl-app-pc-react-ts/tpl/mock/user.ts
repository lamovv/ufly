import {
  createHash
} from 'crypto';

export default {
  'POST /api/login': (req, res) => {
    const userInfo = {
      name: '信员',
      uid: '21358609',
      avatar: 'https://gw.alicdn.com/tfs/TB1FgiTv4D1gK0jSZFsXXbldVXa-500-500.png',
    };

    const token = createHash('md5').update(userInfo.uid, 'utf-8').digest('base64');

    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    res.setHeader('Set-Cookie', [`userInfo=${encodeURIComponent(
      JSON.stringify(userInfo)
    )};path=/`, `token=${token};path=/`]);

    const body = {
      code: 200,
      success: true,
      message: '成功登录',
      data: userInfo
    }
    res.json(body);
  },

  'POST /api/logout': (req, res) => {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');

    const expires = new Date(Date.now() - 86400000).toUTCString();
    res.setHeader('Set-Cookie', [`userInfo=;expires=${expires};path=/`, `token=;expires=${expires};path=/`]);
    
    const body = {
      code: 200,
      success: true,
      message: '成功登出',
      data: null
    }
    res.json(body);
  },
};
