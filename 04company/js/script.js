$(document).ready(function(){
	var myslider = $(".slider").bxSlider({
		auto:true,
		controls:false
	});

	$(".prev").click(function(){
		myslider.goToPrevSlide();
		return false;
	});
	$(".next").click(function(){
		myslider.goToNextSlide();
		return false;
	});

	var slider2Btn= $(".slider2").bxSlider({
		auto:true,
		controls:false,
		paser:false,
	});
	$(".btn .prev01").click(function(){
		 slider2Btn.goToPrevSlide();
		return false;
	});
	$(".btn .next01").click(function(){
		 slider2Btn.goToNextSlide();
		return false;
	});
	$("#main_header .lan li").click(function(){
		var lang =$(this).index();
		console.log(lang);
		$("#main_header .lan li").removeClass();
		$(this).addClass("on");	

	});

	
	$(".toggleMenu").click(function(){
		var myClass = $(this).attr("class");
		console.log(myClass);
		if(myClass == "toggleMenu"){
			$(this).addClass("change");
			$("#main_header #main_menu").stop().animate({left:-50},300);

			$(".box").css("display","block")
		}else{
			$(this).removeClass("change");
			$("#main_header #main_menu").stop().animate({left:"-100%"},300);
			
		}
	});
	$(window).resize(function(){
		var wSize = $(window).width();
		console.log(wSize);
		if(wSize > 960){
			$("#header_top").find("toggleMenu").removeClass("change");
		}else{
			$("#header_top").find(".toggleMenu").removeClass("change");
			$("main_manu").css({left:"-100%"});
		
		}
	});

	$(".movie").colorbox({iframe:true,innerWidth:900,innerHeight:500});

	
	function calcHeight(){

	 var the_height=
	 document.getElementById('the_iframe').contentWindow.
	 document.body.scrollHeight;


	 document.getElementById('the_iframe').height=
	 the_height;


	 document.getElementById('the_iframe').style.overflow = "hidden";
	}






});
new WOW().init();