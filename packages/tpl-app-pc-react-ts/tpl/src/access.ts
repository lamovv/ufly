// 定义访问权限名称及值
export default function (initialState: { userInfo: any }) {
  const { userInfo } = initialState;

  return {
    canRead: () => {
      console.log('--');
      return true;
    },
    needLogin: !!userInfo?.uid,
  };
}
