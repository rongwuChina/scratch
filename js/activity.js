function getUrlParam(name) {
	           var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	           var r = window.location.search.substr(1).match(reg);
	           if (r != null) return unescape(r[2]); return null;
           }
           $(function(){
           	var id,lang,token=''; //活动id，语言环境，token
           	var url=window.location.href;
                     id=getUrlParam('id');
                     lang=getUrlParam('lang');
                     token=getUrlParam('token');
             
                     if(lang=='zh-cn'){
                     	var geturl='http://api.cn.morpx.com/content/getContentList'; //中文环境活动接口地址
                     	// token="eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTYyNjU5NjksInN1YiI6IntcImlkXCI6MTAwMDUwLFwidXNlck5hbWVcIjpcInRlc3QxXCJ9IiwiZXhwIjoxNTMxODE3OTY5fQ.pw1QjcevJIIHSe2OFxiG-havUU7rzNQ2GOMPaHEm1u0";
                     }else{
                     	// token="eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTYyNjU5MjgsInN1YiI6IntcImlkXCI6MTAwMDUwLFwidXNlck5hbWVcIjpcInRlc3QxXCJ9IiwiZXhwIjoxNTMxODE3OTI4fQ.ZX4RZWqz4vfxNkUxF_1xvuWEzmVkX67emeK_roZNVmk";
                     	var geturl='http://api.morpx.com/content/getContentList'; //英文环境活动接口地址
                     }
		$.ajax({
		    type: "get",
		    url: geturl,
		    headers: {
		            token: token,
		    },
		    dataType: "json",
		    async: true,
		    success: function(e) {
		    	console.log(eval(e));
                  if(e){
                   	if(e.code == 0){
                   		var data=eval(e).data;
                   		console.log(id);
                   		for(var i=0;i<data.length;i++){
 			    if(data[i].id==id){
                                          var name=data[i].name;
                                          var note=data[i].note;
                                          var content=data[i].contentDesc;
                                          $('#contentName').html(name);
                                          $('#conent').html(content);
                                          $('#note').html(note);
 			    }		
                   		}
                   		
                   	} 
                   	else if(e.code == 500){
                   		var message = e.msg;
                   		$('#errMsg').show();
                   		$('#errMsg .message').text(message);
                   	     
                   	}

                   	else {
                   		var message = e.message;
                   		$('#errMsg').show();
                   		$('#errMsg .message').text(message);
                   	}
                  }else{
                  	  alert(e.data);
                      return true;
                  }
		      },
		     error: function(data){
		      var jsonText = JSON.stringify(data);
		      alert("connect error");
		       }
		});


           })
