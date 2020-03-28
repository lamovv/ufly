// the env from JS
@external('env', 'log')
export declare function logi(v: i32): void;
@external('env', 'gValue')
export declare const gValue:i32;

logi(gValue);

/**
 *  @return
 *  - a > b ，return 1
 *  - a = b ，return 0
 *  - a < b ，return -1
 */
export function compareVersion(va: string, vb: string, digit: i8 = 3): i8 {
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