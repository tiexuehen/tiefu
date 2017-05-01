/**
 * Created by ASUS on 2017/5/1.
 */
window.onload=function () {
    var load=document.querySelector(".hll-foot .hll-bottom1 .hll-totop");
    var obj=0;
    window.onscroll=function () {
        obj=document.body.scrollTop ===0?document.documentElement:document.body;
    };

    load.onclick=function(){
        animate(obj, {scrollTop: 0},3000);
    }
};
