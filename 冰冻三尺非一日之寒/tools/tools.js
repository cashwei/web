

/**
 * @description: 验证不能包含字母
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isNoWord = value => /^[^A-Za-z]*$/g.test(value);

/**
 * @description: 验证中文和数字
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isCHNAndEN = value => /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/g.test(value);

/**
 * @description: 验证邮政编码(中国)
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isPostcode = value => /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(value);

/**
 * @description: 验证微信号， 6 至20位， 以字母开头， 字母， 数字， 减号， 下划线
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isWeChatNum = value => /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(value);

/**
 * @description: 验证16进制颜色
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isColor16 = value => /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(value);



