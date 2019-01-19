require(["../scripts/config.js"], function() {
	require(["common", "fontscroll", "jquery", "swiper", "jquery.cookie"], function(com, font, $, Swiper, cookie) {
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
		
		console.log()
		
		if(JSON.parse($.cookie("goods")) == 0){
			$(".tb-main").hide();
		}else{
			$(".box").hide();
		}
		
		class car {
			constructor(options) {
				this.url = options.url;
				this.tbody = options.tbody;
				this.getCookie();
				this.load();
			}
			getCookie() {
				this.goods = JSON.parse($.cookie("goods"));
				
			}
			load() {
				var that = this;
				$.ajax({
					url: this.url,
					success: function(res) {
						that.res = res;
						that.display();
					}
				})
			}
			display() {

				var str = "";
				$.each(this.res, (key, item) => {
					$.each(this.goods, (index, value) => {
						if (item.goodsId == value.id) {
							str +=
								`<tr>
										<td><img src="${item.src}"/></td>
										<td>${item.name}</td>
										<td style="color:red;">￥${item.price}</td>
										<td><button type="button" class="down" readonly="readonly" style="width:20px;">-</button><input type="text" value="${value.num}" style="width:20px;text-align:center;"><button type="button" class="up" style="width:20px;">+</button></td>
										<td style="color:red;">￥${parseInt(item.price)*value.num}.00</td>
										<td index="${value.id}"><em>删除</em></td>
									</tr>`
						}
					});
				});
				this.tbody.html(str);
				this.addEvent();
				var tr = document.querySelectorAll("tbody tr")
				var sum = 0;
				for(var i=0;i<tr.length;i++){
					var temp = parseInt(tr[i].children[4].innerHTML.substring(1))
					sum = sum + temp;
				}
					$("#money p:nth-child(1)").html("总金额:"+"￥"+sum+".00");
					$("#money p:nth-child(2)").html("商品总金额:"+"￥"+sum+".00");	
			}
			addEvent() {
				var that = this;
				this.tbody.on("click", "em", function() {
					$(this).parent().parent().remove();
					//						找到点击的货号
					that.id = $(this).parent().attr("index");
					//						删除
					that.setCookie(function(i) {
						that.goods.splice(i, 1)
					});
					if(that.goods == 0){
						$(".tb-main").hide();
						$(".box").show();
					}else{
						$(".box").hide();
					}
				})
				
				this.tbody.on("click","button",function(){
					if($(this).attr("class") == "down"){
					let i = parseInt($(this).siblings("input").val())
					i-=1;
					if (i<1) {
						i=1
					}
					$(this).siblings("input").val(i)
					
					}else{
					let i = parseInt($(this).siblings("input").val())
					i+=1
					$(this).siblings("input").val(i)
					}
					
					that.id = $(this).parent().next("td").next("td").attr("index");
					var sum = parseInt($(this).parent().prev("td").html().substring(1))
					var number = $(this).siblings("input").val();
					$(this).parent().next("td").html("￥"+number*sum+".00");
					var ele = $(this).siblings("input")
					that.setCookie(function(i) {
						that.goods[i].num = ele.val();
					})
					var tr = document.querySelectorAll("tbody tr")
					var sum = 0;
					for(var i=0;i<tr.length;i++){
						var temp = parseInt(tr[i].children[4].innerHTML.substring(1))
						sum = sum + temp;
					}
					$("#money p:nth-child(1)").html("总金额:"+"￥"+sum+".00");
					$("#money p:nth-child(2)").html("商品总金额:"+"￥"+sum+".00");	
				})
				
				this.tbody.on("input", "input", function() {
					that.id = $(this).parent().next("td").next("td").attr("index");
					var sum = parseInt($(this).parent().prev("td").html().substring(1))
					var number = $(this).val();
					$(this).parent().next("td").html("￥"+number*sum+".00");
					
					var ele = $(this)
					//						修改
					that.setCookie(function(i) {
						that.goods[i].num = ele.val();
					})
					var tr = document.querySelectorAll("tbody tr")
					var sum = 0;
					for(var i=0;i<tr.length;i++){
						var temp = parseInt(tr[i].children[4].innerHTML.substring(1))
						sum = sum + temp;
					}
					$("#money p:nth-child(1)").html("总金额:"+"￥"+sum+".00");
					$("#money p:nth-child(2)").html("商品总金额:"+"￥"+sum+".00");	
				})
				

			}
			setCookie(callback) {
				for (var i = 0; i < this.goods.length; i++) {
					if (this.goods[i].id == this.id) {
						callback(i)
						break;
					}
				}
				$.cookie("goods", JSON.stringify(this.goods))
			}
		}

		new car({
			url: "http://localhost:3000/goods",
			tbody: $(".tab tbody"),
		})
		
		
		
	})
})
