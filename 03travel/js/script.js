
$(document).ready(function(){
	$(".tapWrap > div").hide();
	$(".tapWrap > div").eq(0).show();
	$(".select01 > ul > li").click(function(){
		var liNum = $(this).index();
		console.log(liNum);
		$(".select01 > ul >li").removeClass();
		 $(this).addClass("active");
		 $(".tapWrap > div").hide();
		$(".tapWrap > div").eq(liNum).show();
	});
});

