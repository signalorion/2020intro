$(function () {
    /*인트로에서*/
    $(".bigsemo").click(function () {
        $(".clickhand").hide();
        $(".search_intro_box").animate({
            top: "0"
        }, 600);
        $(".search_intro_box").css({
            transform: "translateX(-50%)"
        });
        $(".bigsemo").fadeOut(200);
        $(".intro_bbg").delay(900).slideDown();
        $(".searchtab").show();
    });
    $(".clickhand").click(function () {
        $(this).hide();
        $(".search_intro_box").animate({
            top: "0"
        }, 600);
        $(".search_intro_box").css({
            transform: "translateX(-50%)"
        });
        $(".bigsemo").fadeOut(200);
        $(".intro_bbg").delay(900).slideDown();
        $(".searchtab").show();
    });

    $(".index_close").click(function () {
        $(".clickhand").delay(700).fadeIn();
        $(".search_intro_box").animate({
            top: "50%"
        }, 600);
        $(".search_intro_box").css({
            transform: "translate(-50%, -50%)"
        });
        $(".bigsemo").delay(300).fadeIn();
        $(".intro_bbg").hide();
        $(".searchtab").hide();
    });


}); //////////제이쿼리코드블록////////////////////////////
//////////////////////////////////////////////////////
