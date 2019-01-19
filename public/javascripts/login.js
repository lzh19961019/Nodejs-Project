require(["../scripts/config.js"], function() {
	require(["common", "fontscroll", "jquery", "swiper","jquery.cookie","jquery.validate"], function(com, font, $, Swiper,cookie,validate) {
		
		$(".imgDiv").mouseover(function(){
			$(this).find("p").css("display","block")
		})
		$(".imgDiv").mouseleave(function(){
			$(this).find("p").css("display","none")
		})
		
		// 验证登录界面
		
		const phoneRegex = new RegExp("^1[3458][0-9]{9}$");
		
		$(".loginButn").click(function(){
			if ($(".txt").val().length == 0) {
				$(".logTip").text("用户名不能为空，请填写用户名！").show();
			} else if(false == phoneRegex.test($(".txt").val())){
				$(".logTip").text("手机号输入有误").show();
			}else if($(".pass").val().length == 0){
				$(".logTip").text("密码不能为空，请填写密码！").show();
			}else if($(".verify").val().length == 0){
				$(".logTip").text("验证码不能为空，请填写验证码！").show();
			}
			else{
				$(".logTip").hide();
			}
		})
		
		
		
		
		$(".change").click(function(){
			console.log("2")
			$(".imgDiv img").attr(
				'src','https://oauth2.lechange.cn/validateCode/mark?=' + Math.random()*100000
			)
		})
		
		// class Login {
		// 			constructor() {
		// 			this.btn = $(".loginButn");
		// 			this.user = $(".txt");
		// 			this.pass = $(".pass");
		// 			this.getCookie();
		// 			this.addEvent();
		// 			}
		// 			getCookie() {
		// 				this.goods = JSON.parse($.cookie("goods"));
						
		// 			}
		// 			addEvent() {
		// 				var that = this;
		// 				this.btn.on("click",function(){
		// 					that.userV = that.user.val()
		// 					that.passV = that.pass.val()
		// 					$.each(that.goods,function(index,value){
		// 						if (value.user != that.userV) {
		// 							alert("用户不存在")
		// 						}else if(value.user == that.userV && value.pass != that.passV){
		// 							alert("密码错误")
		// 						}else if(value.user == that.userV && value.pass == that.passV){
		// 							window.location.href ="http://localhost:3000/index.html"
		// 						}
								
		// 					})
		// 				})
		
		// 			}
		// 		}
		
		// 		new Login()
		
				$(document).ready(function(){
					//设置cookie
					  function setCookie(name,psw,idate){
						var oDate = new Date();
						oDate.setDate(oDate.getDate()+idate)
						document.cookie = name+'='+psw+';expires'+idate;
					  }
					  //读取cookie
					  function getCookie(key){
						var arr = document.cookie.split(';')
						for(var i=0;i<arr.length;i++){
						  var arr2 = arr[i].split('=');
						  if(arr2[0]==key){
							return arr2[1];
						  }
						}
						return '';
					  }
					//如果有存入的cookie,取出账户名显示在input框;
					 $('#loginusername').val(getCookie('username'));
					//查询数据库确认账户密码是否正确
					 $("#info_submit").click(function(){
						var username=$('#loginusername').val();
						var password=$('#loginpassword').val();
						//这里实现对 username和password格式的判断
						//........
						//发送ajax请求 使用post方式发送json字符串给后台login
						$.ajax({
							type: "get",
							url: "http://localhost:3000/login",
							dataType: "json",
							data:{ username: username, password: password },
							success: function(data){
							//接受返回的数据，前端判断采取的动作
							  console.log(data);
							  if(data){
								  if(data.message=="false"){
									window.location.href="#";
									alert('账号密码错误')
								  }else{
									alert('登陆成功');
									//登录成功将用户名存入cookie;
									if($('#mycheck').prop('checked')==true){
									  setCookie('username',username,7);
									}
									window.location.href="http://localhost:3000";
								  }
							  }
							}
						});
					});
				  })
			})
		})
		