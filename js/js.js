/*검색창 열림확인*/
//이걸 왜 하냐? 검색창이 열리고 또 검색박스을 클릭하면 x버튼 눌러서 닫았을 때
//중복으로 검색창이 열리게 되기 때문...
var dcsb = 0; //0은 불허용이고 1은 허용



$(function () {
    /*인트로에서*/
    $(".search_box_fake").click(function () {
        if(dcsb ===1){
            return false;
        }
        $(".clickhand").hide();
        $(".search_intro_box").animate({
            top: "0"
        }, 600);//////인트로박스 위치설정/////////
        $(".search_intro_box").css({
            transform: "translateX(-50%)"
        });/////////인트로박스 css설정////////
        $(".bigsemo").fadeOut(200);
        
        $(".intro_bbg").delay(900).slideDown();
        $(".searchtab").show();
        
        dcsb =1; //검색창이 열린 상태에서 검색박스를 눌렀을 때 x버튼을 누른 효과를 낼 순 없을까??
        
    });
    $(".clickhand, .bigsemo").click(function () {
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
        
        dcsb=0;
    });

    $(".search_box").click(function(e){
        e.preventDefault();
    });
    
    /*개별 페이지공통*/
    $(".search_box").click(function(){
        $(".search_list").stop().slideToggle();
    });
    
    $(".sl_index_close").click(function(e){
        e.preventDefault();
        $(".search_list").slideUp();
    });
    
    $(".sl_index a").hover(function(){
        var sl_index = $(this).attr("data-color");
        console.log(sl_index);
        
        $(this).css({
            backgroundColor:sl_index
        });
    }, function(){
        
        $(this).css({
            background:"transparent"
        });
    });
    
    /*내 소개 페이지*/
    //내가 이 페이지에 도달했을 때 이 효과가 나게 할 수 없을까?
    $(".mycertifi, .mystudy, .mytool").animate({
        width:"35%"
    },700);
   
   

    
    
    
    
    
}); //////////제이쿼리코드블록////////////////////////////
//////////////////////////////////////////////////////
