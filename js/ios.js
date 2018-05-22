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
/*
 * web端操作结束
 * ios操作开始
 * 
 */

//传输字符串到ios 或者是传输行为树数据
//add by rongw  uploadtoapp
function uploadtoapp(){
	  var count= Blockly.mainWorkspace.getAllBlocks().length;
	  if(count){
	  		var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
	  		var mutree=methodtree(xml);
				var filename=prompt("Enter name of this project");
				if(filename){
						var text= Blockly.Xml.domToText(xml);
						var data={
							filename:filename,
							xml:text,
							mutree:mutree
						}
						userFunc2(data);
				}
	  }else{
	  	alert('There is no block in the canvas');
	  }
}

//传输字符串到ios 或者是传输行为树数据
//add by rongw  uploadtoapp
function uploadtoapp2(){
	  var count= Blockly.mainWorkspace.getAllBlocks().length;
	  if(count){
	  		    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
				text=methodtree(xml);
				var data={
					xml:text
				}
				userFunc3(data);
	  }else{
	  	alert('There is no block in the canvas');
	  }
};

//从ios接收数据并渲染到画布中
function iosload(text){
      // text='<xml xmlns=""><block type="mucontrols_switch" id="7x+t.#x9BssO?HynC]/V" x="164" y="138"><value name="switch"><block type="trigger_users" id="W#zpVb42i5t4ub`+D_vj"><field name="NAME">user1</field></block></value><value name="case0"><block type="trigger_users" id="{A/u+Xta%L3pSDt1bCM,"><field name="NAME">user1</field></block></value><statement name="DO0"><block type="motion_voise" id="HckaFVQyjK~)MX:jJ6n("><field name="NAME">voice1</field></block></statement><next><block type="mucontrols_switch" id="!S3xq/eHH3r{wnwiuKGZ"><value name="switch"><block type="trigger_users" id="{J)j9lPT[Eh``p3Q}wT["><field name="NAME">user1</field></block></value><value name="case0"><block type="trigger_users" id="IngrfXg#:PhT1e)2??n*"><field name="NAME">user1</field></block></value><statement name="DO0"><block type="motion_voise" id="b=5I}(VV/_6(q4tj%(Mm"><field name="NAME">voice1</field></block></statement><next><block type="mucontrols_switch_case" id="+w?ChDuj`c/b!I,?~?d`"><value name="case0"><block type="trigger_users" id="(C.b/`?NiR@*_}8Ux(R;"><field name="NAME">user1</field></block></value><statement name="DO0"><block type="motion_voise" id="aO:aYZ`u]@`U.WXR(7OB"><field name="NAME">voice1</field></block></statement><next><block type="mucontrols_switch_default" id="hW%0sw[{;Yk)/xL(/mai"><statement name="NAME"><block type="motion_led" id="d]`e0D.gsCbuzO3SVpVv"><field name="color">blue</field><value name="counts_number"><block type="math_numbs" id="BdE|{NEuj|p2G;44Ysr9"><field name="NUM">1</field></block></value></block></statement></block></next></block></next></block></next></block></xml>';		
	  var xml = Blockly.Xml.textToDom(text);			
      var count = workspace.getAllBlocks().length;
      if (count && confirm('Replace existing blocks?')) {
         Blockly.mainWorkspace.clear();
      }
            xml=position(xml);
            Blockly.Xml.domToWorkspace(xml,workspace);
            Blockly.mainWorkspace.clearUndo();
      }
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
 
                      }
              });
              console.log($(this).attr("x")+xmlDoc[0]);
              return xmlDoc[0];
      }
	function ioscount(){
			var count = workspace.getAllBlocks().length;
			return count;
	}
	function iosupxml(){
  		var xml = Blockly.Xml.workspaceToDom(workspace);
			var text= Blockly.Xml.domToText(xml);
			return text;
	}//android 函数   传输xml
	function iosuptree(){
  		var xml = Blockly.Xml.workspaceToDom(workspace);
			var text= adrtotree(xml);
			return text;
	}//android 函数   传输行为树
	function iosupkuge(){
  		var xml = Blockly.Xml.workspaceToDom(workspace);
			var text= kuge(xml);
			return text;
	}//android 函数   传输行为树
function deletes(){
	$('.injectionDiv').remove();
}

$(function(){
	ios=0;
	var url=window.location.href;
	ios=getUrlParam('ios');
	if(ios==1){
		 $('#button').hide();
		 $('.kugebutton').hide();
		 $('#prev').hide();
		
	}
})

