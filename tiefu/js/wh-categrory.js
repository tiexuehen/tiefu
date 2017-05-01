$(function(){
//宗教定制
var li=$('.wh-li:first');
    var zj=$('.wh-zj');
    li.click(function(){
        $('html,body').animate({scrollTop:zj.offset().top}, 500);
});
//个人定制
    var li1=$('.wh-li:nth-child(2)');
    var gr=$('.wh-gr');
    li1.click(function(){
        $('html,body').animate({scrollTop:gr.offset().top}, 500);
    });
//博物馆定制
    var li2=$('.wh-li:last');
    var bwg=$('.wh-bwg');
    li2.click(function(){
        $('html,body').animate({scrollTop:bwg.offset().top}, 500);
    });

})