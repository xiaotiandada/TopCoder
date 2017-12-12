// 获取元素
var getElem  = function (selector) {
    return document.querySelector(selector);
}
var getAllElem= function (selector) {
    return document.querySelectorAll(selector)
}


// 获取元素样式
var getCls = function (element) {
    return element.getAttribute('class');
}
// 设置元素样式
var setCls = function (element, cls) {
    return element.setAttribute('class',cls);
}
// 为元素添加样式
var addCls = function (element, cls) {
    var baseCls= getCls(element);
    if(baseCls.indexOf(cls) == -1){
        setCls(element,baseCls+' '+cls);
    }
}

//为元素删除样式
var delCls = function (element, cls) {
    var baseCls = getCls(element);
    if(baseCls.indexOf(cls) != -1){
        setCls(element,baseCls.split(cls).join(' ').replace(/\s+/g,''));
    }
}
