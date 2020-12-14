//컨텐츠페이지 자바스크립트

//전역변수////////////////
//1. 페이지번호를 먹이는 전역변수
var pno = 0;
//2. 전체 페이지 수
var totnum = 4;
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
    
    
    

    /*썸네일 호버시*/
    $(".renew_hover1").hide();
    $(".cont1_main section").hover(function () {
        $(".renew_hover1", this).stop().fadeIn();
    }, function () {
        $(".renew_hover1", this).stop().fadeOut();
    });

    $(".cont1_main section a").click(function (e) {
        e.preventDefault();
    });

    /*썸네일클릭시*/
    $(".cont_detail").hide();
    $(".renew_sec1").click(function () {
        $(".cont_detail.cd1").fadeIn();
    });
    $(".renew_sec10").click(function () {
        $(".cont_detail.cd10").fadeIn();
    });
    $(".renew_sec2").click(function () {
        $(".cont_detail.cd2").fadeIn();
    });
    $(".renew_sec20").click(function () {
        $(".cont_detail.cd20").fadeIn();
    });
    $(".renew_sec3").click(function () {
        $(".cont_detail.cd5").fadeIn();
    });
    $(".renew_sec30").click(function () {
        $(".cont_detail.cd50").fadeIn();
    });


    /*디테일페이지*/
    /*디테일 썸네일클릭시*/
    $(".imgtop").click(function () {
        $(".imgtop", this).children().eq(0).hide();
        $(".dnimg", this).fadeIn(400);
    });
    $(".imgbottom").click(function () {
        $(".imgbottom", this).children().eq(0).hide();
        $(".dnimg", this).fadeIn(400);
    });
    
    /*5번*/
    $(".img_left").click(function () {
        $(this).children().eq(0).hide();
        $(".dnimg", this).fadeIn(400);
    });
    $(".img_right").click(function () {
        $(this).children().eq(0).hide();
        $(".dnimg", this).fadeIn(400);
    });
    
    
    

    $(".search_tit").click(function () {
        $(".cont_detail").fadeOut(400);
    });

    $(".clicktoclose").click(function () {
        $(".cont_detail").fadeOut(400);
    });


    $(".prev_detail").click(function () {
        $(this).parent().hide();
        $(this).parent().prev().show();
    }); //////////이전클릭////////////////////

    $(".next_detail").click(function () {
        $(this).parent().hide();
        $(this).parent().next().show();
    }); //////////다음클릭////////////////////









}); //////////제이쿼리코드블록////////////////////////////
//////////////////////////////////////////////////////
