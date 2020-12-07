//전역변수////////////////
//1. 페이지번호를 먹이는 전역변수
var pno = 0;
//2. 전체 페이지 수
var totnum = 3;
//3. 광스크롤방지
var psts = 0; //0은 허용이고 1은 불허용이다
//4. 한페이지 높이값
var winH = $(window).height();

$(function () {
    /*전체페이지 스크롤*/
    $(document).on("mousewheel DOMMouseScroll", function (e) {

        /////// 광스크롤막기 /////////////////
        if (psts === 1) return true; //돌아가!
        psts = 1; //잠금(기존0값을 변경)
        setTimeout(function () {
            psts = 0;
        }, 600); /// 타임아웃 ///
        ////////////////////////////////////

        e = window.event || e;
        var delta = e.detail ? e.detail : e.wheelDelta;
        //console.log("델타:"+delta);
        //아랫방향
        if (delta < 0) {
            pno++;
            if (pno === totnum) pno = totnum - 1;
        } else {
            pno--;
            if (pno === -1) pno = 0;
        }
        //console.log("pno:" + pno);

        $("html,body").stop().animate({
            scrollTop: (winH * pno) + "px"
        }, 400);

    }); /////// mousewheel /////////////////
});