

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

/**
 * @description: 验证火车车次
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isTrainNum = value => /^[GCDZTSPKXLY1-9]\d{1,4}$/g.test(value);

/**
 * @description: 验证手机机身码(IMEI)
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isIMEI = value => /^\d{15,17}$/g.test(value);

/**
 * @description: 验证必须带端口号的网址(或ip)
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isHttpAndPort = value => /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/g.test(value);

/**
 * @description: 验证网址(支持端口和 "?+参数" 和 "#+参数)
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isRightWebsite = value => /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/g.test(value);

/**
 * @description: 验证统一社会信用代码
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isCreditCode = value => /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(value);

/**
 * @description: 验证迅雷链接
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isThunderLink = value => /^thunderx?:\/\/[a-zA-Z\d]+=$/g.test(value);

/**
 * @description: 验证ed2k链接(宽松匹配)
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const ised2k = value => /^ed2k:\/\/\|file\|.+\|\/$/g.test(value);

/**
 * @description: 验证磁力链接(宽松匹配)
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isMagnet = value => /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/g.test(value);

/**
 * @description: 验证子网掩码
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isSubnetMask = value => /^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/g.test(value);
