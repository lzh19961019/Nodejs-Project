require(["../scripts/config.js"], function() {
	require(["common", "fontscroll", "jquery", "swiper", "jquery.cookie","mgd","jquery.validate"], function(com, font, $, Swiper, cookie,mgd,validate) {

		document.documentElement.style.overflowY = 'hidden';
		document.documentElement.style.overflowX = 'hidden';

		$(".imgDiv").mouseover(function() {
			$(this).find("p").css("display", "block")
		})
		$(".imgDiv").mouseleave(function() {
			$(this).find("p").css("display", "none")
		})

		$(".checkImg1").click(function() {
			$(this).hide().siblings().show();
		})

		$(".checkImg2").click(function() {
			$(this).hide().siblings().show();
		})

		// 手机号验证

		$(".phoneNumber").blur(function() {
			const phoneRegex = new RegExp("^1[3458][0-9]{9}$");

			if ($(this).val().length == 0) {
				$(".regTip").hide();
			} else if (false == phoneRegex.test($(this).val())) {
				$(".regTip").text("手机号输入有误").show();
			} else {
				$(".regTip").hide();
			}
		})


		//密码验证
		$(".password").keyup(function() {
			const strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
			const mediumRegex = new RegExp(
				"^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
			const enoughRegex = new RegExp("(?=.{6,}).*", "g");
			const weakRegex = new RegExp("^([0-9]+|[a-zA-Z]+|[!@#$%^&*]+)$")

			if (false == enoughRegex.test($(this).val())) {
				$(".regTip").text("密码长度低于6位").show();
				//密码小于六位的时候，密码强度图片都为灰色

			} else if (strongRegex.test($(this).val())) {
				$(".pwStr").find("span").css("background", "green");
				$(".pwStr").find(".textId").show().text("强");
				$(".regTip").hide();
				//密码为八位及以上并且字母数字特殊字符三项都包括,强度最强 

			} else if (mediumRegex.test($(this).val())) {
				$(".pwStr").find("span:nth-child(1)").css("background", "orange");
				$(".pwStr").find("span:nth-child(2)").css("background", "orange");
				$(".pwStr").find("span:nth-child(3)").css("background", "#d9d9d9");
				$(".pwStr").find(".textId").show().text("中");
				$(".regTip").hide();
				//密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等 
			} else if (weakRegex.test($(this).val())) {
				$(".pwStr").find("span:nth-child(1)").css("background", "red");
				$(".pwStr").find("span:nth-child(2)").css("background", "#d9d9d9");
				$(".pwStr").find("span:nth-child(3)").css("background", "#d9d9d9");
				$(".pwStr").find(".textId").show().text("弱");
				$(".regTip").hide();
			}

			if ($(this).val().length == 0) {
				$(".regTip").hide();
				$(".pwStr").find("span").css("background", "#d9d9d9");
				$(".textId").hide();
			}

		})

		$(".secondPas").keyup(function() {
			if ($(this).val() != $(".password").val()) {
				$(".regTip").text("两次输入密码不一致！").show();
			} else if ($(".password").val().length < 6) {
				$(".regTip").text("密码长度低于6位").show();
			} else {
				$(".regTip").hide();
			}
		})

		//验证码切换
		$(".change").click(function() {
			console.log("2")
			$(".imgDiv img").attr(
				'src', 'https://oauth2.lechange.cn/validateCode/mark?=' + Math.random() * 100000
			)
		})



			$(document).ready(function(){
				$("#signupForm").validate({
						rules: {
							username: {
								required: true,
								minlength: 2
							},
							password: {
								required: true,
								minlength: 5
							},
							confirm_password: {
								required: true,
								minlength: 5,
								equalTo: "#password"
							},
							agree:"required"
						},
						messages: {
							username: {
								required: "请输入用户名",
								minlength: "用户名必需由最少两个字母组成"
							},
							password: {
								required: "请输入密码",
								minlength: "密码长度不能小于 5 个字母"
							},
							confirm_password: {
								required: "请输入密码",
								minlength: "密码长度不能小于 5 个字母",
								equalTo: "两次密码输入不一致"
							}
						}
				});
		
				$("#login_submit").click(function(){
					var username=$('#username').val();
					var password=$('#password').val();
					//这里实现对 username和password格式的判断
					//........
					//发送ajax请求 使用post方式发送json字符串给后台login
					$.ajax({
						type: "get",
						url: "http://localhost:3000/register",
						dataType: "json",
						data:{ username: username, password: password },
						success: function(data){
						//接受返回的数据，前端判断采取的动作
						console.log(data);
						if(data){
							if(data.message=="false"){
							alert('账号已存在');
							window.location.href="#";
							}else{
							alert('注册成功');
							window.location.href="http://localhost:3000";
							}
						}
						}
					});
				});
			});
	

	})
})
