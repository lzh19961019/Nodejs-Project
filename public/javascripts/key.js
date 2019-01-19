			var otxt = document.getElementsByClassName("keywords")[0];
			var droplist = document.getElementsByClassName("droplist")[0];
		
			otxt.addEventListener("input",function() {
				
				var _script = document.createElement("script");
				_script.src = `http://suggestion.baidu.com/su?wd=${this.value}&cb=callback`;
				document.body.appendChild(_script)
				droplist.style.display = "block";
				
			})
			
			function callback(Date){
				droplist.innerHTML = "";
				Date.s.forEach(item => {
					var li = document.createElement("li");
					li.innerText = item;
					droplist.appendChild(li)
				})
				
						var index = -1;
				 		var ali = Array.from(droplist.children)
				
				
				 		
				   	for(var i=0;i<ali.length;i++){
							ali[i].liyang = i
							ali[i].onmouseenter = function(){
								
								for(var j=0;j<ali.length;j++){
									ali[j].className = "";
								}
								this.className = "active";
								index = this.liyang
								otxt.value =  this.innerHTML
							}
						}
					document.onclick = function(){
						droplist.style.display = "none"
					}
			}