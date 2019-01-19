require(["../scripts/config.js"], function() {
	require(["common", "fontscroll", "jquery", "swiper"], function(com, font, $, Swiper) {

		var mySwiper = new Swiper('.swiper-container', {
			autoplay: true, //可选选项，自动滑动
			loop: true,
			effect: 'fade',
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		})
		
		$(".swiper-container").hover(function(){
			mySwiper.autoplay.stop();
		},function(){
			mySwiper.autoplay.start();
		})


		$(function() {
			$(".tabox-1 .chanlist").find("li").eq(0).addClass("checkactive");
			$(".tabox-1 .check1").show();
			var timelt = null;
			var now = 0;

			function startMovelt() {
				clearInterval(timelt);
				timelt = setInterval(function() {
					if (now) {
						now = 0;
						$(".tabox-1 .check1").fadeIn(500);
						$(".tabox-1 .check2").hide();
						$(".tabox-1 .chanlist").find("li").eq(0).addClass("checkactive").siblings().removeClass("checkactive");
					} else {
						now = 1;
						$(".tabox-1 .check2").fadeIn(500);
						$(".tabox-1 .check1").hide();
						$(".tabox-1 .chanlist").find("li").eq(1).addClass("checkactive").siblings().removeClass("checkactive");
					}
				}, 4800)
			}
			startMovelt();
			$(".tabox-1 .chanlist").on("mouseover", "li", function() {
				clearInterval(timelt);
				$(this).addClass("checkactive").siblings().removeClass("checkactive");
				if ($(this).index() == 0) {
					$(".tabox-1 .check1").fadeIn(500);
					$(".tabox-1 .check2").hide();
				} else {
					$(".tabox-1 .check2").fadeIn(500);
					$(".tabox-1 .check1").hide();
				}
			});
			$(".tabox-1 .chanlist").on("mouseout", "li", function() {
				startMovelt();
			});
			$(".tabox-1").on("mouseover", function() {
				clearInterval(timelt)
			});
			$(".tabox-1").on("mouseout", function() {
				startMovelt()
			});
		})

		$(function() {
			$(".tabox-2 .chanlist").find("li").eq(0).addClass("checkactive");
			$(".tabox-2 .check1").show();
			var timelt = null;
			var now = 0;

			function startMovelt() {
				clearInterval(timelt);
				timelt = setInterval(function() {
					if (now) {
						now = 0;
						$(".tabox-2 .check1").fadeIn(500);
						$(".tabox-2 .check2").hide();
						$(".tabox-2 .chanlist").find("li").eq(0).addClass("checkactive").siblings().removeClass("checkactive");
					} else {
						now = 1;
						$(".tabox-2 .check2").fadeIn(500);
						$(".tabox-2 .check1").hide();
						$(".tabox-2 .chanlist").find("li").eq(1).addClass("checkactive").siblings().removeClass("checkactive");
					}
				}, 4800)
			}
			startMovelt();
			$(".tabox-2 .chanlist").on("mouseover", "li", function() {
				clearInterval(timelt);
				$(this).addClass("checkactive").siblings().removeClass("checkactive");
				if ($(this).index() == 0) {
					$(".tabox-2 .check1").fadeIn(500);
					$(".tabox-2 .check2").hide();
				} else {
					$(".tabox-2 .check2").fadeIn(500);
					$(".tabox-2 .check1").hide();
				}
			});
			$(".tabox-2 .chanlist").on("mouseout", "li", function() {
				startMovelt();
			});
			$(".tabox-2").on("mouseover", function() {
				clearInterval(timelt)
			});
			$(".tabox-2").on("mouseout", function() {
				startMovelt()
			});
		})

		$(function() {
			$(".tabox-4 .chanlist").find("li").eq(0).addClass("checkactive");
			$(".tabox-4 .check1").show();
			var timelt = null;
			var now = 0;

			function startMovelt() {
				clearInterval(timelt);
				timelt = setInterval(function() {
					if (now) {
						now = 0;
						$(".tabox-4 .check1").fadeIn(500);
						$(".tabox-4 .check2").hide();
						$(".tabox-4 .chanlist").find("li").eq(0).addClass("checkactive").siblings().removeClass("checkactive");
					} else {
						now = 1;
						$(".tabox-4 .check2").fadeIn(500);
						$(".tabox-4 .check1").hide();
						$(".tabox-4 .chanlist").find("li").eq(1).addClass("checkactive").siblings().removeClass("checkactive");
					}
				}, 4800)
			}
			startMovelt();
			$(".tabox-4 .chanlist").on("mouseover", "li", function() {
				clearInterval(timelt);
				$(this).addClass("checkactive").siblings().removeClass("checkactive");
				if ($(this).index() == 0) {
					$(".tabox-4 .check1").fadeIn(500);
					$(".tabox-4 .check2").hide();
				} else {
					$(".tabox-4 .check2").fadeIn(500);
					$(".tabox-4 .check1").hide();
				}
			});
			$(".tabox-4 .chanlist").on("mouseout", "li", function() {
				startMovelt();
			});
			$(".tabox-4").on("mouseover", function() {
				clearInterval(timelt)
			});
			$(".tabox-4").on("mouseout", function() {
				startMovelt()
			});
		})

		$(function() {
			function chatScroll() {
				$(".swapcomment").find("ul:first").animate({
					marginTop: "-33px"
				}, 700, function() {
					$(this).css({
						marginTop: "0px"
					}).find("li:first").appendTo(this);
				})
			}
			setInterval(chatScroll, 2000)
		})

		$(".new-goods li:nth-child(1)").mouseover(function() {
			$(this).find("img").attr({
				"src": "https://ecstore.oss-cn-hangzhou.aliyuncs.com/image/TF5-28902.png"
			});
			$(this).find("div").hide();
			$(this).find(".te").hide()
			$(this).find("p").hide();
		})
		$(".new-goods li:nth-child(1)").mouseout(function() {
			$(this).find("img").attr({
				"src": "https://ecstore.oss-cn-hangzhou.aliyuncs.com/public/image/TF5-263x263.png"
			});
			$(this).find("div").show();
			$(this).find(".te").show()
			$(this).find("p").show();
		})
		$(".new-goods li:nth-child(2)").mouseover(function() {
			$(this).find("img").attr({
				"src": "https://ecstore.oss-cn-hangzhou.aliyuncs.com/image/TF3-329.png"
			});
			$(this).find("div").hide();
			$(this).find(".te").hide()
			$(this).find("p").hide();
		})
		$(".new-goods li:nth-child(2)").mouseout(function() {
			$(this).find("img").attr({
				"src": "https://ecstore.oss-cn-hangzhou.aliyuncs.com/public/image/TF3-263x263.png"
			});
			$(this).find("div").show();
			$(this).find(".te").show()
			$(this).find("p").show();
		})
		$(".new-goods li:nth-child(3)").mouseover(function() {
			$(this).find("img").attr({
				"src": "https://ecstore.oss-cn-hangzhou.aliyuncs.com/image/K5-341.png"
			});
			$(this).find("div").hide();
			$(this).find(".te").hide()
			$(this).find("p").hide();
		})
		$(".new-goods li:nth-child(3)").mouseout(function() {
			$(this).find("img").attr({
				"src": "https://ecstore.oss-cn-hangzhou.aliyuncs.com/public/image/K5-263x263.png"
			});
			$(this).find("div").show();
			$(this).find(".te").show()
			$(this).find("p").show();
		})
		$(".new-goods li:nth-child(4)").mouseover(function() {
			$(this).find("img").attr({
				"src": "https://ecstore.oss-cn-hangzhou.aliyuncs.com/image/K6-268.png"
			});
			$(this).find("div").hide();
			$(this).find(".te").hide()
			$(this).find("p").hide();
		})
		$(".new-goods li:nth-child(4)").mouseout(function() {
			$(this).find("img").attr({
				"src": "https://ecstore.oss-cn-hangzhou.aliyuncs.com/public/image/K6-263x263.png"
			});
			$(this).find("div").show();
			$(this).find(".te").show()
			$(this).find("p").show();
		})
		
		

		
		
		$(function() {

			$("nav ul li").mouseover(function() {

				$("nav ol li").eq($(this).index()).show().siblings().hide();

			})
			$(".swiper-container").mouseover(function() {
				$("nav ol li").hide()
			})
			$("#nav-top").mouseover(function() {
				$("nav ol li").hide()
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


	})
})
