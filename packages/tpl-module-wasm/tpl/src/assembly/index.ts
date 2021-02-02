/**
 * @author {{author}}
 * @date {{date}}
 */

// the env from JS
@external('env', 'logi')
declare function logi(v: i32): void;
@external('env', 'logs')
declare function logs(s: string): void;
@external('env', 'vdata')
declare const vdata: i32;
// logi(vdata); // 使用console.log打印wasm内i32数据

/**
 * 版本比较大小
 * @param {string}  va 
 * @param {string}  vb 
 * @param {i8=}  digit 
 * @return {i8}
 *  - a > b ，return 1
 *  - a = b ，return 0
 *  - a < b ，return -1
 */
export function compareVersion(va: string, vb: string, digit: i8 = 3): i8 {
  // logs(va); // 使用console.log打印wasm内string数据
  
  if(!va && !vb){
    return 0;
  }else if(!va){
    return -1;
  }else if(!vb){
    return 1;
  }

  const aArr: string[] = va.split('.');
  const bArr: string[] = vb.split('.');

  let i = -1;
  while(++i < digit){
    if(aArr[i] > bArr[i]){
      return 1;
    }else if(aArr[i] < bArr[i]){
      return -1;
    }
  }

  return 0;
}