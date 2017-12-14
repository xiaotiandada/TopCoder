// 获取元素
let getElem  = function (selector) {
    return document.querySelector(selector);
}
let getAllElem= function (selector) {
    return document.querySelectorAll(selector)
}


// 获取元素样式
let getCls = function (element) {
    return element.getAttribute('class');
}
// 设置元素样式
let setCls = function (element, cls) {
    return element.setAttribute('class',cls);
}
// 为元素添加样式
let addCls = function (element, cls) {
    let baseCls= getCls(element);
    if(baseCls.indexOf(cls) == -1){
        setCls(element,baseCls+' '+cls);
    }
}

//为元素删除样式
let delCls = function (element, cls) {
    let baseCls = getCls(element);
    if(baseCls.indexOf(cls) != -1){
        setCls(element,baseCls.split(cls).join(' ').replace(/\s+/g,''));
    }
}
