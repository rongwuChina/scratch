(function ($) {
                $.getUrlParam = function (name) {
                    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                    var r = window.location.search.substr(1).match(reg);
                    if (r != null) return unescape(r[2]); return null;
                }
            })(jQuery);
            function getUrlParam(name) {
                                    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                                    var r = window.location.search.substr(1).match(reg);
                                    if (r != null) return unescape(r[2]); return null;
                                }
//android 函数   清空、传输行为树、传输xml、加载xml
  //转换成行为树
function adrtotree(xml){
	    return methodtree(xml);
	}
	function adrcount(){
			var count = Blockly.mainWorkspace.getAllBlocks().length;
			window.control.processadrcount(count);
			return count;
	}
	function adrdel(){  
      		Blockly.mainWorkspace.clear();
	}//android 函数   清空
	function adrupxml(){
  		var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
			var text= Blockly.Xml.domToText(xml);
			window.control1.processadrupxml(text);
			return text;
	}//android 函数   传输xml
	function adruptree(){
  		var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
			var text= adrtotree(xml);
			window.control2.processadruptree(text);
			return text;
	}//android 函数   传输行为树

	function adrloadxml(text){
	   var xml = Blockly.Xml.textToDom(text);
             xml=position(xml);
             Blockly.Xml.domToWorkspace(xml,Blockly.mainWorkspace);
             Blockly.mainWorkspace.clearUndo();
	}//android 函数   加载xml
	
function position(xml){
        var x=Blockly.Xml.domToText(xml);
        var xmlDoc = $(x);
        var result="";
        //处理过程 end
        //
        /* mutree mutree mutree解析开始*/     
        xmlDoc.find("block").each(function (index) {  

                if(index=1){
                        $(this).attr("x",'100');
                        $(this).attr("y",'30');
                        console.log($(this).attr("x")+$(this).attr("y"));
                }
        });
        console.log($(this).attr("x")+xmlDoc[0]);
        return xmlDoc[0];
}

	function adrupkuge(){
  		var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
		var text= kuge(xml);
		window.control2.processadruptree(text);
		return text;
	}//android 函数   传输行为树	
//android 函数   结束

//convert xml object to string 
//数据转换：将xml对象转换成字符串形式
function XML2String(tt) { 
		// for IE 
		if (window.ActiveXObject) { 
		  return tt.xml; 
		} 
		// for other browsers 
		else { 
		  return (new XMLSerializer()).serializeToString(tt); 
		} 
} 
//数据转换：将string对象转换成xml形式
//convert string to xml object 
function String2XML(str) { 
	// for IE 
	if (window.ActiveXObject) { 
		var xmlobject = new ActiveXObject("Microsoft.XMLDOM"); 
		xmlobject.async = "false"; 
		xmlobject.loadXML(str); 
		return xmlobject; 
	} 
	// for other browsers 
	else { 
		var parser = new DOMParser(); 
		var xmlobject = parser.parseFromString(str, "text/xml"); 
		return xmlobject; 
	} 
} 


$(function(){
	android=0;
	var url=window.location.href;
	android=getUrlParam('android');
	if(android==1){
		 $('#button').hide();
		 $('.kugebutton').hide();
		 $('#prev').hide();
		
	}
})
/*
 * 开始语音定制化
 * D:2017.03.08
 * by rongw
 */

//加载voice 的名称
//从服务器加载voice feilddown
//addroid 调用并
//loadvoice([{"slotId":1,"name":"狗叫",},{"slotId":2,"name":"狗叫",},{"slotId":3,"name":"狗叫",}]);
//var json=[{"slotId":1,"name":"狗叫",},{"slotId":2,"name":"狗叫",},{"slotId":3,"name":"狗叫",}];
function loadvoice(json){
    var arry=eval(json);
    var voicedata=new   Array();
    $.each(arry, function (index, item) {
		voicedata[index]= new Array(arry[index].name,arry[index].slotId);	
    });
	getvoicedown(voicedata);
}
function getvoicedown(voicedata){
           if(voicedata==undefined || voicedata==[] || voicedata==''){

           }else{
	//motion         sound vedio声音
	Blockly.Blocks['motion_voice'] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.actions_voice+"%1",
            args0: [{
                type: "field_dropdown",
                name: "voice",
                options: voicedata
            }],
            inputsInline: !0,
            previousStatement: null,
            nextStatement: null,
            category: Blockly.Categories.motion,
            colour: bcactionhue,
            colourSecondary: bcactionhue2,
            colourTertiary: bcactionhue3,
        })
    }
    };
    Blockly.Blocks['motion_advancedvoice'] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.actions_advancedvoice+"%1 %2 %3",
            args0: [{
                type: "field_dropdown",
                name: "id4",
                options: [["1", "1"], ["2", "2"], ["3", "3"],["4", "4"]]
            }, {
                type: "field_dropdown",
                name: "speed2",
                options: [[Blockly.Msg.field_mode3, "3"], [Blockly.Msg.field_mode4, "4"]]
                //[Blockly.Msg.field_mode1, "1"], [Blockly.Msg.field_mode2, "2"], 
            }, {
                type: "field_dropdown",
                name: "voice",
                options: voicedata
               }],
            inputsInline: !0,
            previousStatement: null,
            nextStatement: null,
            category: Blockly.Categories.motion,
            colour: bcactionhue,
            colourSecondary: bcactionhue2,
            colourTertiary: bcactionhue3,
        })
    }
};
Blockly.Blocks['spacebot_advancedvoice'] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.actions_advancedvoice+"%1 %2 %3",
            args0: [{
                type: "field_dropdown",
                name: "id4",
                options: [["1", "1"], ["2", "2"], ["3", "3"],["4", "4"]]
            }, {
                type: "field_dropdown",
                name: "speed2",
                options: [[Blockly.Msg.field_mode3, "3"], [Blockly.Msg.field_mode4, "4"]]
                //[Blockly.Msg.field_mode1, "1"], [Blockly.Msg.field_mode2, "2"], 
            }, {
                type: "field_dropdown",
                name: "voice",
                options: voicedata
               }],
            inputsInline: !0,
            previousStatement: null,
            nextStatement: null,
            category: Blockly.Categories.motion,
            colour: adactionhue,
            colourSecondary: adactionhue2,
            colourTertiary: adactionhue3,
        })
    }
};
Blockly.Blocks['spacebot_motionadvancedvoice'] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.actions_advancedvoice+"%1 %2 %3",
            args0: [{
                type: "field_dropdown",
                name: "id4",
                options: [["1", "1"], ["2", "2"], ["3", "3"],["4", "4"]]
            }, {
                type: "field_dropdown",
                name: "speed2",
                options: [[Blockly.Msg.field_mode3, "3"], [Blockly.Msg.field_mode4, "4"]]
                //[Blockly.Msg.field_mode1, "1"], [Blockly.Msg.field_mode2, "2"], 
            }, {
                type: "field_dropdown",
                name: "voice",
                options: voicedata
               }],
            inputsInline: !0,
            previousStatement: null,
            nextStatement: null,
            category: Blockly.Categories.motion,
            colour: adactionhue,
            colourSecondary: adactionhue2,
            colourTertiary: adactionhue3,
        })
    }
};

}
}

//web端获取是否点击voice块

t=setInterval('voiceset()','100');
function voiceset(){
	if(Blockly.selected!=null && Blockly.selected.type=='motion_voice' && Blockly.selected.inputList[0].fieldRow[1].dropDownOpen_){
	    android=0;
		ios=0;
		var url=window.location.href;
		android=getUrlParam('android');
		ios=getUrlParam('ios');
	    choose=Blockly.selected;
	    voice=true;
  	}
	else if(Blockly.selected!=null && Blockly.selected.type=='motion_advancedvoice' && Blockly.selected.inputList[0].fieldRow[3].dropDownOpen_){
  		android=0;
		ios=0;
		var url=window.location.href;
		android=getUrlParam('android');
		ios=getUrlParam('ios');
	    choose=Blockly.selected;
	    voice=true;
  	}
	else if(Blockly.selected!=null && Blockly.selected.type.indexOf('advancedvoice')>-1 && Blockly.selected.inputList[0].fieldRow[3].dropDownOpen_){
  		android=0;
		ios=0;
		var url=window.location.href;
		android=getUrlParam('android');
		ios=getUrlParam('ios');
	    choose=Blockly.selected;
	    voice=true;
  	}
  	
	else{
  		voice=false;
  	}	
};

//android 调用改函数判断是否点击：如果结果为true则点击了voice选择项
//setInterval('getvoice()','302');
function getvoice(){
	if(voice==true){
		return true;
	}else{
		return false;
	}
		
};

//voice名称以及对应的id:voicename、option
//setvoice('狗叫狗叫ing','4');
function setvoice(voicename,option){
	$('.goog-option').removeClass('goog-option-selected');
	$('.goog-option').attr('aria-checked','false');
	$('.goog-option').eq(option-1).addClass('goog-menuitem-active');
	$('.goog-option').eq(option-1).attr('aria-checked','true');
	var id=$('.goog-option').eq(option-1).attr('id');
	$('.blocklyDropdownMenu').attr('aria-activedescendant',id);
	Blockly.DropDownDiv.hide();
	if(choose.inputList[0].fieldRow.length==4){
		choose.inputList[0].fieldRow[3].setValue(option);
	    choose.inputList[0].fieldRow[3].setText(voicename);
	}else{
		choose.inputList[0].fieldRow[1].setValue(option);
	    choose.inputList[0].fieldRow[1].setText(voicename);
	}		
}

//保存voice 的名称
function savevoice(name,option){
	$.ajax({
		type:"post",
		url:"",
		async:true,
		data:"",
	});
}

function showlist1(pagenum){
 	     	//我创建的项目
         $.ajax({  
             url: '/mu-web-agent/visual/userProject?currentPage='+pagenum,  
             type: 'GET',  
             dataType: 'json',  
             timeout: 6000,  
             cache: false,   
             success: succFunction1, //成功执行方法  
             error: erryFunction,  //错误执行方法   
         }) ;
}

function getvoiceid(){
	var xml=Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
	var x=Blockly.Xml.domToText(xml);
	var huhu=Blockly.Xml.textToDom(x);;
	var xmlDoc = $(x);
	var voiceid='';
    //处理过程 end
    /* mutree mutree mutree解析开始*/	  
    xmlDoc.find("block,statement").each(function () {
		//repeat 的 do解析 start
		if($(this).attr("name")){
				
		}
		//repeat 的 do解析 end
		else{
		  	//block 解析
		  	/*
			 * mutree框架的开始
			 * 特殊的有 repeat
			 * 其他的对应到相关的规范
			 */
	    	var type=$(this).attr("type");
	    	var id=$(this).attr("id");
	    	var x=$(this).attr("x"); 	
		  /*
		   * 块的参数解析开始
		   * 特殊的包括number、多个参数是，隔开
		   * counts_number:=;counts_numbers: , ;
		   */	
			//各种参数的解析 1char,2char,4char
			$(this).children("field").each(function(index){
				 var feild=$(this);
				 if( $(this).attr('name')!='OPERAND' && $(this).attr('name')!='OP' && $(this).attr('name')!='COMPARE' && $(this).attr('name')!='LOGIC' && $(this).attr('name')!='AI' && $(this).attr('name')!='BI'){
					  var resultli=feild.html();
					  if(feild.attr('name')=='voice'){
					  	  voiceid +=parseInt(resultli)+';';
	                  }
		    		}//elseif								 			   
			})//each
		}				
   });
    //打开mutree显示窗口以及透明蒙版
    return voiceid;   
}


/**
 * 侧边栏
 */
 function adrspeclist4(xmls){
   xmls='<xml id="toolbox-simple" style="display:none">'+xmls+'</xml>';
   $('#toolbox-simple').remove();
   $('body').append(xmls);
   window.control1.processadrupxml(text);
   return xml1=xmls;
 }





 //web端获取是否点击voice块

 setInterval('dropdownset()','100');
 function dropdownset(){
     if(Blockly.selected!=null && Blockly.selected.type=='motion_led' && Blockly.selected.inputList[0].fieldRow[1].dropDownOpen_){
         android=0;
         ios=0;
         var url=window.location.href;
         android=getUrlParam('android');
         ios=getUrlParam('ios');
         select=Blockly.selected;
         dropdown=true;
     }
     else if(Blockly.selected!=null && Blockly.selected.type=='motion_advancedvoice' && Blockly.selected.inputList[0].fieldRow[3].dropDownOpen_){
         android=0;
         ios=0;
         var url=window.location.href;
         android=getUrlParam('android');
         ios=getUrlParam('ios');
         select=Blockly.selected;
         dropdown=true;
     }
     else if(Blockly.selected!=null && Blockly.selected.type.indexOf('advancedvoice')>-1 && Blockly.selected.inputList[0].fieldRow[3].dropDownOpen_){
         android=0;
         ios=0;
         var url=window.location.href;
         android=getUrlParam('android');
         ios=getUrlParam('ios');
         select=Blockly.selected;
         dropdown=true;
     }
     else{
         dropdown=false;
     }   
 };

 //android 调用改函数判断是否点击：如果结果为true则点击了voice选择项
 //setInterval('getvoice()','302');
 function getdropdown(){
     if(dropdown==true){
         return true;
     }else{
         return false;
     }
         
 };

 //voice名称以及对应的id:voicename、option
 //setvoice('狗叫狗叫ing','4');
 function setdropdown(selection,option){
     $('.goog-option').removeClass('goog-option-selected');
     $('.goog-option').attr('aria-checked','false');
     $('.goog-option').eq(option-1).addClass('goog-menuitem-active');
     $('.goog-option').eq(option-1).attr('aria-checked','true');
     var id=$('.goog-option').eq(option-1).attr('id');
     $('.blocklyDropdownMenu').attr('aria-activedescendant',id);
     Blockly.DropDownDiv.hide();
         select.inputList[0].fieldRow[1].setValue(option);
         select.inputList[0].fieldRow[1].setText(selection);
     
 }