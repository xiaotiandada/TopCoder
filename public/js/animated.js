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
     * 滑动调用
     */
    window.onscroll = function () {
        scrollInit()
        clientHF()
    }
    /**
     * 回到顶部单击调用
     * @type {oScrollTopF}
     */
    oScrollTop.onclick = oScrollTopF
})()