require(["../scripts/config.js"], function() {
	require(["common", "fontscroll", "jquery", "swiper","jquery.cookie"], function(com, font, $, Swiper,cookie) {

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

	$(function(){
		$(".smallImg li").hover(function() {
			$(this).css("border-color", "orange");
			$(this).siblings().css("border-color", "#ccc")
		})

		$(".smallImg li:nth-child(1)").hover(function() {
			$(".bigImg").find("img").attr({
				"src": "https://ecstore.oss-cn-hangzhou.aliyuncs.com/public/images/f9/51/e2/79e8b22b04468588c42224ef9820a07a8e101eda.png?1544698069.h"
			})
		})

		$(".smallImg li:nth-child(2)").hover(function() {
			$(".bigImg").find("img").attr({
				"src": "https://ecstore.oss-cn-hangzhou.aliyuncs.com/public/images/33/12/a6/0653c3b37446ec02ac6dbd12443f66e0f0d6e0f3.png?1544698140.h"
			})
		})

		$(".smallImg li:nth-child(3)").hover(function() {
			$(".bigImg").find("img").attr({
				"src": "https://ecstore.oss-cn-hangzhou.aliyuncs.com/public/images/62/44/2b/18a0f51afe98a23cff9302914b7540aa46d8fae3.png?1544698143.h"
			})
		})

		$(".smallImg li:nth-child(4)").hover(function() {
			$(".bigImg").find("img").attr({
				"src": "https://ecstore.oss-cn-hangzhou.aliyuncs.com/public/images/db/65/1d/9c63f97ed51dcddd5bab82734f754e8b958004d4.png?1544698145.h"
			})
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

		$("#scrollTop").click(function() {
			$("html").animate({
				scrollTop: 0
			}, 500);
		})

		$(".main-xq ul li").click(function() {
			$(".main-xq ol li").eq($(this).index()).show().siblings().hide();
			$(this).addClass("list1").siblings().removeClass("list1");

		})



		$.ajax({
			url:'http://localhost:3000/goods',
			// url:'http://api.douban.com/v2/movie/top250',
			success:function(res){
				console.log('前端抓取后的接口',res);
				var ocont = document.getElementById("cont");
							var str = ""
					//		根据数据,渲染页面
							for(var i=0;i<res.length;i++){
								
								str = str + '<div class="box"><img src="'+ res[i].src +'"/><p>'+ res[i].name +'</p><span>'+ res[i].price +'</span><em + lzh= "'+ res[i].goodsId +'">加入购物车</em> </div>';
							}
							
							ocont.innerHTML = str;
							
							// ocont.onclick = function  (eve) {
							// 	var e = eve || window.event
							// 	var target = e.target ||e.srcElement
							// 	if (target.nodeName == "EM") {
							// 		var id = target.getAttribute("lzh")
							// 		setCookie(id,id)
							// 	}
							// }
			}
		})


				$("#paixu span:nth-child(2)").click(function(){
					
					$.getJSON("http://localhost:8000/json-data/goods-list.json","",function(data){
							function up(x,y){
								return x.price-y.price
							}
							
							data.sort(up)
							console.log(data)
							var ocont = document.getElementById("cont");
							var str = ""
							
							for(var i=0;i<data.length;i++){
								
								str = str + '<div class="box"><img src="'+ data[i].src +'"/><p>'+ data[i].name +'</p><span>'+ data[i].price +'</span><em + lzh= "'+ data[i].goodsId +'">加入购物车</em> </div>';
							}
							
							ocont.innerHTML = str;
							
						}) 
						})

		
		class Shop{
			constructor(options) {
			    this.cont = options.cont;
				this.url = options.url;
				
				this.load();
			}
			load(){
				var that = this;
				$.ajax({
					url:this.url,
					success:function(res){
						that.res = res;
						that.display()
					}
				})				
			}
			display(){
				var str ="";
				$.each(this.res,function(index,value){
					// console.log(value)
					str += `<div class="box" index="${value.goodsId}">
					<img src="${value.src}">
					<p>${value.name}</p>
					<span>${value.price}</span>
					<em>加入购物车</em>
					</div>`
				});
				this.cont.html(str);
				this.addEvent();
			}
			addEvent(){
				var that = this;
				this.cont.on("click","em",function(){
					that.id = $(this).parent().attr("index");
					that.setCookie();
				})
			}
			setCookie(){
				this.goods = JSON.parse($.cookie("goods")) || [];
				if (this.goods.length<1) {
					this.goods.push({
						id:this.id,
						num:1
					})
				}else{
					var that = this;
					var onOff = true;
					$.each(this.goods,function(index,value){
						if (value.id == that.id) {
							that.goods[index].num++;
							onOff = false;
						}
					})
					if (onOff) {
						this.goods.push({
							id:this.id,
							num:1
						})
					}
				}
			$.cookie("goods",JSON.stringify(this.goods))
			console.log(JSON.parse($.cookie("goods")))
			}
		}
		
		new Shop({
			url:"http://localhost:3000/goods",
			cont:$("#cont")
		})
		
	})
})
