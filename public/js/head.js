(function(){
    var scrollInit = function () {
        var head = getElem('#heads')
        var headTop = document.body.scrollTOp || document.documentElement.scrollTop
        if(headTop > 50){
            addCls(head, 'head_black')
        }else{
            delCls(head, 'head_black')
        }
    }
    window.onscroll = function () {
        scrollInit()
    }
})()