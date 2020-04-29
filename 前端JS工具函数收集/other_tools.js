/*
 * 更多的工具函数
 * 平时可能常用的工具函数， 包含数字， 字符串， 数组和对象等等操作
 */

/**
 *  @description 金钱格式化， 三位加逗号
 *  @param { number } num
 */
export const formatMoney = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

/**
 * @description: 截取字符串并加身略号
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export function subText(str, length) {
    if (str.length === 0) {
        return '';
    }
    if (str.length > length) {
        return str.substr(0, length) + "...";
    } else {
        return str;
    }
}
