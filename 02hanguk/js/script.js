$(document).ready(function () {
    var prevnext = $(".slider").bxSlider({
        touchEnabled: false,
        auto: true,
        controls: false,

    });
    $('.btn_prev').click(function () {
        prevnext.goToPrevSlide();
        return false;
    });

    $('.btn_next').click(function () {
        prevnext.goToNextSlide();
        return false;
    });



    $(".slider02").bxSlider({
        controls: false,
        auto: true,
        touchEnabled: false,
        mode: 'fade'
    });

    var updown = $(".slider03").bxSlider({
        controls: false,
        auto: true,
        touchEnabled: false,
        pager: false,
        mode: 'vertical',
        // pagerCustom:'.bx-pager',

    });

    $(".btn_up").click(function () {
        updown.goToPrevSlide();
        return false;
    });
    $(".btn_down").click(function () {
        updown.goToNextSlide();
        return false;
    });

    var tabBtn = $(".util_wrap .left_menu ul li");
    var tabCont = $("#content .bg_patten > div ");

    tabCont.hide().eq(0).show();
    tabBtn.click(function(e){
        e.preventDefault;
        var target = $(this);
        var index = target.index();
        tabBtn.removeClass("active");
        target.addClass("active");
        tabCont.css("display","none");
        tabCont.eq(index).css("display","block");
    });







});
