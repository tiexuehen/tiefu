$(function () {
    //鼠标移入效果
    $(".r-lists").hover(function () {
        $(this).addClass("active");
    },function () {
        $(this).removeClass("active")
    })
    
    //楼层
    $(".ct-left>ul>li").click(function () {
        var index=$(this).index(".ct-left>ul>li");
        var ot=$(".r-listsr").eq(index).offset().top;
        $("body,html").animate({scrollTop:ot},500)

    })
    
    

    // var nav=document.querySelectorAll(".nav");
    // var lists=document.querySelectorAll(".r-lists");
    // var obj;
    // for(let i=0;i<nav.length;i++){
    //     nav[i].onclick=function () {
    //         alert(1);
    //         var ot=lists[i].offsetTop-10;
    //         animate(obj,{scrollTop:ot},500);
    //     }
    // }


    
    
    

});
