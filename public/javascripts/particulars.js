require(["../scripts/config.js"], function() {
	require(["common", "fontscroll", "jquery", "swiper"], function(com, font, $, Swiper) {

		$(function() {

			$("nav ul li").mouseover(function() {

				$("nav ol li").eq($(this).index()).show().siblings().hide();

			})
			$("#nav-top").mouseover(function() {
				$("nav ol li").hide()
			})
			$("main").mouseover(function() {
				$("nav ol li").hide()
			})
		})
		
		$(".smallImg li").hover(function(){
			$(this).css("border-color","orange");
			$(this).siblings().css("border-color","#ccc")
		})
		
		$(".smallImg li:nth-child(1)").hover(function(){
			$(".bigImg").find("img").attr({
				"src" : "https://ecstore.oss-cn-hangzhou.aliyuncs.com/public/images/f9/51/e2/79e8b22b04468588c42224ef9820a07a8e101eda.png?1544698069.h"
			})
		})
		
		$(".smallImg li:nth-child(2)").hover(function(){
			$(".bigImg").find("img").attr({
				"src" : "https://ecstore.oss-cn-hangzhou.aliyuncs.com/public/images/33/12/a6/0653c3b37446ec02ac6dbd12443f66e0f0d6e0f3.png?1544698140.h"
			})
		})
		
		$(".smallImg li:nth-child(3)").hover(function(){
			$(".bigImg").find("img").attr({
				"src" : "https://ecstore.oss-cn-hangzhou.aliyuncs.com/public/images/62/44/2b/18a0f51afe98a23cff9302914b7540aa46d8fae3.png?1544698143.h"
			})
		})
		
		$(".smallImg li:nth-child(4)").hover(function(){
			$(".bigImg").find("img").attr({
				"src" : "https://ecstore.oss-cn-hangzhou.aliyuncs.com/public/images/db/65/1d/9c63f97ed51dcddd5bab82734f754e8b958004d4.png?1544698145.h"
			})
		})

// 放大镜

		$(".bigImg").hover(function(){
			$(".smallCursor").show();
			$(".bigCursor").show();
		},function(){
			$(".smallCursor").hide();
			$(".bigCursor").hide();			
		})
		
		var scale = $(".cursorImg").height()/$(".bigImg").height();
		
		$(".bigImg").on("mousemove",function(e){
			var _left = e.pageX - $(this).offset().left - $(".smallCursor").width()/2;
			var _top = e.pageY - $(this).offset().top - $(".smallCursor").height()/2;
			$(".smallCursor").css({
				left: Math.min(Math.max(0, _left), $(".bigImg").width()-$(".smallCursor").width()), 
				top:  Math.min(Math.max(0, _top), $(".bigImg").height()-$(".smallCursor").height())
			})
			$(".cursorImg").css({
				left : -$(".smallCursor").position().left*scale,
				top : -$(".smallCursor").position().top*scale
			})
		})

			var num =1;
		$(".increaseBtn").click(function(){
			num++;
			$(".goods_num").val(num)
		})
		
		$(".decreaseBtn").click(function(){
			num--;
			if (num<1) {
				num = 1;
			}
			$(".goods_num").val(num)
			
		})
		
		$(".sys").hover(function(){
			$(".erweima").show();
			$(".xerweima").attr({
				"src":"https://ecstore.oss-cn-hangzhou.aliyuncs.com/public/image/efbe03766c718c9bb21aa37b83a9a99a60388d66.png"
			})
		},function(){
			$(".erweima").hide();
			$(".xerweima").attr({
				"src":"https://ecstore.oss-cn-hangzhou.aliyuncs.com/public/image/a8fc60a1e8985fd15bc4e8e3dd2bebcf5105dadb.png"
			})
		})
		
				var $nav = $("#scrollTop")
		
				$(window).scroll(function() {
					var scrollTop = $(this).scrollTop();
					if (scrollTop >= 1000) {
						$nav.fadeIn(500);
					} else {
						$nav.fadeOut(500);
					}
				})
		
					$("#scrollTop").click(function(){
						$("html").animate({scrollTop: 0}, 500);
					})
		
		$(".main-xq ul li").click(function(){
			$(".main-xq ol li").eq($(this).index()).show().siblings().hide();
			$(this).addClass("list1").siblings().removeClass("list1");
			
		})
		
		

		console.log($(".main-xq").offset().top)
		
		$(window).scroll(function(){
			var scrollTop = $(this).scrollTop();
			if (scrollTop>=820) {
				$(".goods-btn").addClass("btn-position");
				$(".goods-btn").find("button").show();
			} else{
				$(".goods-btn").removeClass("btn-position")
				$(".goods-btn").find("button").hide();
			}
		})
		



	})
})
;