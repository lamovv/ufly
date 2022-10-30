import { history } from 'umi';
export interface LinkProps {
  url: string;
  children: React.ReactElement;
  // 跳转方法，默认使用umi的history.push
  push?: (url: string) => void;
  onClick?: (url?: any) => void;
  isSpan?: boolean;
}

const Link = ({ url, children, push, onClick, isSpan }: LinkProps) => {
  const clickHandler: any = (evt: Event) => {
    if (typeof onClick === 'function') {
      onClick();
    }

    if (push) {
      push(url);
    } else {
      history.push(url);
    }
  };

  // 默认使用a标签，不能指定spmD，aplus会自动编码生成
  let tpl;
  if (isSpan) {
    tpl = <span onClick={clickHandler}>{children}</span>;
  } else {
    tpl = <a onClick={clickHandler}>{children}</a>;
  }

  return tpl;
};

export default Link;
