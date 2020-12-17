//전역변수////////////////
//1. 페이지번호를 먹이는 전역변수
var pno = 0;
//2. 전체 페이지 수
var totnum = 3;
//3. 광스크롤방지
var psts = 0; //0은 허용이고 1은 불허용이다
//4. 한페이지 높이값
var winH = $(window).height();
//5. 마지막 페이지 스크롤 막기상태값
var lastSts = 0; //0-허용, 1-막기
//6. 마지막 페이지 스크롤을 막기위해 구분해주는 값
// 왜만드는가? 마지막 페이지 도착후 바로 잠그면
// 바로 위로 올라가는게 안되기때문
// 따라서 마지막 페이지 스크롤을 시작할때 잠궈준다.
// 마지막 페이지 스크롤을 시작하면 상태값을 1로 바꿔준다.
var allowit = 0;


$(function () {
    
    /*전체페이지 스크롤*/
    $(document).on("mousewheel DOMMouseScroll", function (e) {

        if (lastSts === 1) return true;

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
        }
        //윗방향
        else {
            pno--;
            if (pno === -1) pno = 0;
        }
        //console.log("pno:" + pno);

        $("html,body").stop().animate({
            scrollTop: (winH * pno) + "px"
        }, 400);

        //두번째 페이지에서 자동스크롤 잠금
        if (pno === 1 && allowit === 1) lastSts = 1;
    }); /////// mousewheel /////////////////

    /*두번째 페이지에서 스크롤 막기*/
    $(".content_wrap").scroll(function () {
        var scTop = $(this).scrollTop();
        console.log("스크롤위치:" + scTop);

        // 마지막 페이지의 스크롤이 상단0에 도착하면 자동스크롤 잠금 상태 풀기
        if (scTop === 0) {
            setTimeout(function () {
                lastSts = 0; // 마지막 페이지 잠금 상태 초기화!
                allowit = 0; //잠금허락 상태값 초기화!
            }, 600);

        } /// if //////////////////

        
        var thisheight = $(this).height();
        if (scTop > 0) allowit = 1; //잠금상태 허락할까요? 상태값 1로(응!true)
        if ((scTop + thisheight) === y){
                lastSts = 0; // 마지막 페이지 잠금 상태 초기화!
                allowit = 0; //잠금허락 상태값 초기화!
        }

        


    }); /////// scroll /////////////////

    /*툴활용도**************************************/
    $(".mytoolplus").click(function () {
        $(".tooluse").slideDown(400);
    });
    $(".tuclose").click(function () {
        $(".tooluse").fadeOut(400);
    });

$(".tutop_cont").eq(1).hide();
    
    $(".tool_design").click(function () {
        $(".tutop_cont").eq(0).siblings().hide();
        $(".tutop_cont").eq(0).show();
    });
    $(".tool_coding").click(function () {
        $(".tutop_cont").eq(1).siblings().hide();
        $(".tutop_cont").eq(1).show();
    });


});
