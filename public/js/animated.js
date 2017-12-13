(function(){

    /**
     * 回到顶部获取变量
     */
    var oScrollTop = getElem('#scrollTop')
    var clientHeight = document.documentElement.clientHeight
    var timer = null
    var isTop = true

    /**
     * 导航变色变量
     */
    var scrollInit = function () {
        var head = getElem('#heads')
        var headTop = document.body.scrollTOp || document.documentElement.scrollTop

        if(headTop > 50){
            addCls(head, 'head_black')
        }else{
            delCls(head, 'head_black')
        }
    }

    /**
     * 头部动画
     */
    function clientHF(){
        var sTop = document.body.scrollTop || document.documentElement.scrollTop
        if(sTop >= clientHeight){
            addCls(oScrollTop,'scrollLeft')
        }else{
            delCls(oScrollTop,'scrollLeft')
        }
        if(!isTop){
            clearInterval(timer)
        }
        isTop = false
    }




    /**
     * 回到顶部
     */
    function oScrollTopF(){
        timer = setInterval(function(){
            var sTop = document.body.scrollTop || document.documentElement.scrollTop
            var ispeed = Math.floor(-sTop / 6)

            document.documentElement.scrollTop  = document.body.scrollTop = sTop + ispeed

            isTop = true
            if(sTop == 0){
                clearInterval(timer)
            }
        },30)
    }

    /**
     * 解决用户屏幕过长 无法正常显示回到顶部的bug
     * @return {number}
     */
    function getScrollTop() {
        var scrollTop = 0,
            bodyScrollTop = 0,
            documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
    }

    //文档的总高度
    function getScrollHeight() {
        var scrollHeight = 0,
            bodyScrollHeight = 0,
            documentScrollHeight = 0;
        if (document.body) {
            bodyScrollHeight = document.body.scrollHeight;
        }
        if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
    }
    //浏览器视口的高度
    function getWindowHeight() {
        var windowHeight = 0;
        if (document.compatMode == "CSS1Compat") {
            windowHeight = document.documentElement.clientHeight;
        } else {
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    }

    /**
     * 到底部添加class
     */
    function isBottom() {
        if (getScrollTop() + getWindowHeight() == getScrollHeight()) {
            addCls(oScrollTop,'scrollLeft')
        }
    }

    /**
     * 滑动调用
     */
    window.onscroll = function () {
        scrollInit()
        clientHF()
        isBottom()

    }
    /**
     * 回到顶部单击调用
     * @type {oScrollTopF}
     */
    oScrollTop.onclick = oScrollTopF
})()