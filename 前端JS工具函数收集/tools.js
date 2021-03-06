
//正则校验check工具函数


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

/**
 * @description: 验证linux "文件夹"路径
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isLinuxFolderPath = value => /^(\/[^/]+)+\/?$/g.test(value);

/**
 * @description: 验证linux "文件"路径
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isLinuxFilePath = value => /^(\/[^/]+)+$/g.test(value);

/**
 * @description: 验证window "文件夹"路径
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isWindowsFolderPath = value => /^[a-zA-Z]:\\(?:\w+\\?)*$/g.test(value);

/**
 * @description: 验证window下 "文件"路径
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isWindowsFilePath = value => /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/g.test(value);

/**
 * @description: 验证股票代码(A股)
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isAShare = value => /^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/g.test(value);

/**
 * @description: 验证版本号格式必须为X.Y.Z
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isVersion = value => /^\d+(?:\.\d+){2}$/g.test(value);

/**
 * @description: 验证视频链接地址（ 视频格式可按需增删）
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isVideoUrl = value => /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i.test(value);

/**
 * @description: 验证图片链接地址（ 图片格式可按需增删）
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isImageUrl = value => /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(value);

/**
 * @description: 验证银行卡号（ 10 到30位, 覆盖对公 / 私账户, 参考微信支付）
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isAccountNumber = value => /^[1-9]\d{9,29}$/g.test(value);

/**
 * @description: 验证中文姓名
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isChineseName = value => /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value);

/**
 * @description: 验证英文姓名
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isEnglishName = value => /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(value);

/**
 * @description: 验证车牌号(新能源)
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isLicensePlateNumberNER = value => /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/g.test(value);

/**
 * @description: 验证车牌号(非新能源)
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isLicensePlateNumberNNER = value => /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/g.test(value);

/**
 * @description: 验证车牌号(新能源 + 非新能源)
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isLicensePlateNumber = value => /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(value);

/**
 * @description: 验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isMPStrict = value => /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(value);

/**
 * @description: 验证手机号中国(宽松), 只要是13, 14, 15, 16, 17, 18, 19 开头即可
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isMPRelaxed = value => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(value);

/**
 * @description: 验证email(邮箱)
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isEmail = value => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(value);

/**
 * @description: 验证座机电话(国内), 如: 0341 - 86091234
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isLandlineTelephone = value => /\d{3}-\d{8}|\d{4}-\d{7}/g.test(value);

/**
 * @description: 验证身份证号(1 代, 15 位数字)
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isIDCardOld = value => /^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$/g.test(value);

/**
 * @description: 验证身份证号(2 代, 18 位数字), 最后一位是校验位, 可能为数字或字符X
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isIDCardNew = value => /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/g.test(value);

/**
 * @description: 验证身份证号, 支持1 / 2 代(15 位 / 18 位数字)
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isIDCard = value => /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g.test(value);

/**
 * @description: 验证护照（ 包含香港、 澳门）
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isPassport = value => /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/g.test(value);

/**
 * @description: 验证帐号是否合法(字母开头， 允许5 - 16 字节， 允许字母数字下划线组合
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isWebAccount = value => /^[a-zA-Z]\w{4,15}$/g.test(value);

/**
 * @description: 验证中文 / 汉字
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isChineseCharacter = value => /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(value);

/**
 * @description: 验证小数
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isDecimal = value => /^\d+\.\d+$/g.test(value);

/**
 * @description: 验证数字
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isNumber = value => /^\d{1,}$/g.test(value);

/**
 * @description: 验证qq号格式
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isQQNum = value => /^[1-9][0-9]{4,10}$/g.test(value);

/**
 * @description: 验证数字和字母组成
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isNumAndStr = value => /^[A-Za-z0-9]+$/g.test(value);

/**
 * @description: 验证英文字母
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isEnglish = value => /^[a-zA-Z]+$/g.test(value);

/**
 * @description: 验证大写英文字母
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isCapital = value => /^[A-Z]+$/g.test(value);

/**
 * @description: 验证小写英文字母
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const isLowercase = value => /^[a-z]+$/g.test(value);

//浏览器操作相关browser工具函数

/**
 * @description: 返回当前url
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const currentURL = () => window.location.href;

/**
 * @description: 获取url参数（ 第一种）
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export function getUrlParam(name, origin = null) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = null;
    if (origin == null) {
        r = window.location.search.substr(1).match(reg);
    } else {
        r = origin.substr(1).match(reg);
    }
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}


/**
 * @description: 获取url参数（ 第二种）
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export function getUrlParams(name, origin = null) {
    let url = location.href;
    let temp1 = url.split('?');
    let pram = temp1[1];
    let keyValue = pram.split('&');
    let obj = {};
    for (let i = 0; i < keyValue.length; i++) {
        let item = keyValue[i].split('=');
        let key = item[0];
        let value = item[1];
        obj[key] = value;
    }
    return obj[name];
}

/**
 * @description: 修改url中的参数
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export function replaceParamVal(paramName, replaceWith) {
    var oUrl = location.href.toString();
    var re = eval('/(' + paramName + '=)([^&]*)/gi');
    location.href = oUrl.replace(re, paramName + '=' + replaceWith);
    return location.href;
}

/**
 * @description: 删除url中指定的参数
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export function funcUrlDel(name) {
    var loca = location;
    var baseUrl = loca.origin + loca.pathname + "?";
    var query = loca.search.substr(1);
    if (query.indexOf(name) > -1) {
        var obj = {};
        var arr = query.split("&");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].split("=");
            obj[arr[i][0]] = arr[i][1];
        }
        delete obj[name];
        var url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&");
        return url
    }
}
/**
 * @description: 获取窗口可视范围的高度
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export function getClientHeight() {
    let clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    } else {
        clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    return clientHeight;
}

/**
 * @description: 获取窗口可视范围宽度
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export function getPageViewWidth() {
    let d = document,
        a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
    return a.clientWidth;
}

/**
 * @description: 获取窗口宽度
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export function getPageWidth() {
    let g = document,
        a = g.body,
        f = g.documentElement,
        d = g.compatMode == "BackCompat" ? a : g.documentElement;
    return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}

/**
 * @description: 获取窗口尺寸
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export function getViewportOffset() {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        // ie8及其以下
        if (document.compatMode === "BackCompat") {
            // 怪异模式
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            }
        } else {
            // 标准模式
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        }
    }
}

/**
 * @description: 获取滚动条距顶部高度
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export function getPageScrollTop() {
    let a = document;
    return a.documentElement.scrollTop || a.body.scrollTop;
}

/**
 * @description: 获取滚动条距左边的高度
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export function getPageScrollLeft() {
    let a = document;
    return a.documentElement.scrollLeft || a.body.scrollLeft;
}

/**
 * @description: 开启全屏
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export function launchFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen()
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen()
    }
}

/**
 * @description: 关闭全屏
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen()
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
    }
}

/**
 * @description: 返回当前滚动条位置
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

/**
 * @description: 滚动到指定元素区域
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const smoothScroll = element => {
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    });
};


/**
 * @description: 平滑滚动到页面顶部
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};

/**
 * @description: http跳转https
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const httpsRedirect = () => {
    if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};


/**
 * @description: 检查页面底部是否可见
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export const bottomVisible = () => {
    return document.documentElement.clientHeight + window.scrollY >=
        (document.documentElement.scrollHeight || document.documentElement.clientHeight);
};


/**
 * @description: 打开一个窗口
 * @param { string } url
 * @param { string } windowName
 * @param { number } width
 * @param { number } height
 */
export function openWindow(url, windowName, width, height) {
    var x = parseInt(screen.width / 2.0) - width / 2.0;
    var y = parseInt(screen.height / 2.0) - height / 2.0;
    var isMSIE = navigator.appName == "Microsoft Internet Explorer";
    if (isMSIE) {
        var p = "resizable=1,location=no,scrollbars=no,width=";
        p = p + width;
        p = p + ",height=";
        p = p + height;
        p = p + ",left=";
        p = p + x;
        p = p + ",top=";
        p = p + y;
        window.open(url, windowName, p);
    } else {
        var win = window.open(
            url,
            "ZyiisPopup",
            "top=" +
            y +
            ",left=" +
            x +
            ",scrollbars=" +
            scrollbars +
            ",dialog=yes,modal=yes,width=" +
            width +
            ",height=" +
            height +
            ",resizable=no"
        );
        eval("try { win.resizeTo(width, height); } catch(e) { }");
        win.focus();
    }
}

/**
 * @description: 自适应页面（ rem）
 * @param {type} 
 * @return: 
 * @author: lgw
 */
export function AutoResponse(width = 750) {
    const target = document.documentElement;
    target.clientWidth >= 600 ?
        (target.style.fontSize = "80px") :
        (target.style.fontSize = target.clientWidth / width * 100 + "px");
}





