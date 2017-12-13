// (function(){
//     var oScrollTop = getElem('#scrollTop')
//     var clientHeight = document.documentElement.clientHeight
//     var timer = null
//     var isTop = true
//
//     window.onscroll = function(){
//         var sTop = document.body.scrollTop || document.documentElement.scrollTop
//         if(sTop >= clientHeight){
//             addCls(oScrollTop,'scrollLeft')
//         }else{
//             delCls(oScrollTop,'scrollLeft')
//         }
//         if(!isTop){
//             clearInterval(timer)
//         }
//         isTop = false
//     }
//     function oScrollTopF(){
//         timer = setInterval(function(){
//             var sTop = document.body.scrollTop || document.documentElement.scrollTop
//             var ispeed = Math.floor(-sTop / 6)
//
//             document.documentElement.scrollTop  = document.body.scrollTop = sTop + ispeed
//
//             isTop = true
//             if(sTop == 0){
//                 clearInterval(timer)
//             }
//         },30)
//     }
//     oScrollTop.onclick = oScrollTopF
// })()