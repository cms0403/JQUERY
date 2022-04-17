//요기 jquery코드
//근데...js링크가 먼저일어남
//도큐먼트 레디

$(document).ready(function() {

    //dark버튼
    $("#dark").click(function() {

        if($("#dark").hasClass("dark") ) {
            $("body").css("backgroundColor", "black");
            $("p, h3, a").css("color", "white");
            $("#dark").html("밝게보기"); //innerHTML
            $("#dark").addClass("white"); //클래스속성 삭제
            $("#dark").removeClass("dark"); //클래스 속성 추가
        } else {
            $("body").css("backgroundColor", "white");
            $("p, h3, a").css("color", "black");
            $("#dark").html("어둡게보기"); //innerHTML
            $("#dark").addClass("dark"); //클래스속성 삭제
            $("#dark").removeClass("white"); //클래스 속성 추가
        }


    });
    

    $("#name").click(function() {
        if($("#name").hasClass("name")) {

        } else {
            
        }
    })

})












