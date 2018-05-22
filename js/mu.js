 /* mublock 函数
  * add by rongw D:2016.12
  * 保存、运行、加载xml
  */
 //上传到服务器
function saveto(){
		 var theResponse = window.prompt("保存项目名称","请输入该项目的名称以便下次识别：");
		 if (theResponse!=null && theResponse!="")
   	 {
			    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
				var x=XML2String(xml);
				var name=theResponse;
				var data={};
				data.x=x;
				data.name=name;
//				$.ajax({
//		            cache: true,
//		            type: "POST",
//		            url:'device/unBindUser',
//		            data:data ,
//							  dataType: "json",
//		            async: false,
//		            beforeSend: LoadFunction2(), //加载执行方法 
//		            error: erryFunction2(),//错误执行方法  
//		            success: function(){
//		            		  
//		                	switch(data.code){
//		                		case(2104):
//		                			erryFunction();
//		                			$('#muadderror .muaddtips').append(error1);
//		                		break;
//		                		case(2107):
//		                			erryFunction();
//		                			$('#muadderror .muaddtips').append(error2);
//		                		break;
//		                		default:
//		                			window.location.reload();
//		                		break;
//		                	}
//		            },//成功执行方法
//		    		});
    	}	
}

/**
 * Save blocks to local file.
 * 保存到本地     以.xml的形式
 */
function save() {
  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
// var insertText = '<robot>document.getElementById("robots").innerhtml</robot>';
// document.getElementsByTagName("xml").appendChild(insertText);
  var data = Blockly.Xml.domToText(xml);
  var fileName = window.prompt('What would you like to name your file?', 'BlocklyDuino');
  if(fileName){
    var blob = new Blob([data], {type: 'text/xml'});
    saveAs(blob, fileName + ".xml");
  } 
};

//加载xml   从数据库中读取字符串
function loadFiles(text){
      text='<xml xmlns="http://www.w3.org/1999/xhtml"><block type="mu_start" id="acFndWBWvo3)cD+0i;b0" x="25" y="246"><next><block type="mucontrols_repeat_ext" id="Uy1mYO`Abv43DCuv+L~m"><value name="TIMES"><shadow type="math_whole_number" id="*|p6w02Ofp}RbBnt@/zB"><field name="NUM">10</field></shadow></value><statement name="DO1"><block type="control_wait" id="xg,+-5WA/k%{GD`^uMK?"><value name="DURATION"><shadow type="math_positive_number" id="yH6|@OImO!)m:MA%~[.h"><field name="NUM">1</field></shadow></value></block></statement></block></next></block></xml>';
      //    textsuc ='<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_if" id="30p,gOiGjub8gd9INFKN" x="166" y="203"><mutation else="1"></mutation><value name="IF0"><block type="trigger_users" id="TgIVp5x5vqqL8Kl{Vf3e"><field name="NAME">user1</field></block></value><statement name="DO0"><block type="motion_voise" id="n|C3LK*D19|B8`zLtwBp"><field name="NAME">voice1</field></block></statement><statement name="ELSE"><block type="motion_led" id="k5q4r}wN-Dj4AqRU%dOb"><field name="color">blue</field><value name="counts_number"><block type="math_number" id="XIAQp:QJcWlZX1!xkw*-"><field name="NUM">1</field></block></value></block></statement></block></xml>';
//	  text1 ='<xml xmlns="http://www.w3.org/1999/xhtml"><block type="mucontrols_switch" id="D#_UoTd?TAh|tCyuVN+P" x="0" y="0"><value name="NAME"><block type="trigger_line" id="@r{rAi1O2AT(5~@7[iDb"></block></value></block><block type="motion_voise" id=";DK0`d.N7Bil*MT[@cVj" x="0" y="0"><field name="NAME">voice1</field></block><block type="trigger_line" id="pTKlQ[fFfkZL/vr.]}?R" x="20" y="20"></block><block type="mucontrols_switch" id="VGM91{,2ssm/a.Q,oE[~" x="163" y="163"><value name="NAME"><block type="trigger_line" id="7J;qY~SO,gnLlTK,;QY*"></block></value><value name="NAME"><block type="trigger_line" id="nuwsjt-EzR;MNcA|^;M*"></block></value><statement name="NAME"><block type="motion_voise" id="0KXQEprnCy+7WwCzR866"><field name="NAME">voice1</field></block></statement></block></xml>';
//	  text2='<xml xmlns="http://www.w3.org/1999/xhtml"><block type="mucontrols_if" id="u|Ta+(e7|]E/0R+8BaOl" x="88" y="138"><value name="NAME"><block type="trigger_line" id="JI}(ij(KKA7~Z+?#s0OG"></block></value><statement name="NAME"><block type="mucontrols_switch" id="tioj-AEl`S].a2-%Rxxc"><statement name="NAME"><block type="motion_voise" id="Hf/|ohPr{@4+FN:Y,;0`"><field name="NAME">voice1</field><next><block type="motion_movesteps" id=";P)h0%]iS3xT4,|,}a8,"><field name="steps">10</field></block></next></block></statement></block></statement></block></xml>';
	  var xml = Blockly.Xml.textToDom(text);			
      var count = Blockly.mainWorkspace.getAllBlocks().length;
      if (count && confirm('Replace existing blocks?')) {
         Blockly.mainWorkspace.clear();
         Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
      }else{
      	 Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
      }
}

//撤销
//加载xml   从数据库中读取字符串
function backfunc(){
	  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);			
      var count = Blockly.mainWorkspace.getAllBlocks().length;
      if (count && confirm('Replace existing blocks?')) {
         Blockly.mainWorkspace.clear();
         Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
      }else{
      	 Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
      }
}

/**
 * Execute the user's code.
 * Just a quick and dirty eval.  No checks for infinite loops, etc.
 */
function runJS() {
  var code = Blockly.Generator.prototype.workspaceToCode('JavaScript');
  try {
    eval(code);
  } catch (e) {
    alert('Program error:\n' + e);
  }
}
function showJS(){
	var code = Blockly.Generator.prototype.workspaceToCode('JavaScript');
	console.log(code);
}

/**
 * Backup code blocks to localStorage.
 */
function backup_blocks() {
  if ('localStorage' in window) {
    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    window.localStorage.setItem('arduino', Blockly.Xml.domToText(xml));
  }
}

/**
 * Restore code blocks from localStorage.
 */
function restore_blocks() {
  if ('localStorage' in window && window.localStorage.arduino) {
    var xml = Blockly.Xml.textToDom(window.localStorage.arduino);
    Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
  }
}

/**
* Save Arduino generated code to local file.
*/
function saveCode() {
  var fileName = window.prompt('What would you like to name your file?', 'BlocklyDuino')
  //doesn't save if the user quits the save prompt
  if(fileName){
    var blob = new Blob([Blockly.Arduino.workspaceToCode()], {type: 'text/plain;charset=utf-8'});
    saveAs(blob, fileName + '.ino');
  }
};



/**
 * Load blocks from local file.
 */
function load(event) {
  var files = event.target.files;
  // Only allow uploading one file.
  if (files.length != 1) {
    return;
  }

  // FileReader
  var reader = new FileReader();
  reader.onloadend = function(event) {                    
    var target = event.target;
    // 2 == FileReader.DONE
    if (target.readyState == 2) {
      try {
        var xml = Blockly.Xml.textToDom(target.result);
      } catch (e) {
        alert('Error parsing XML:\n' + e);
        return;
      }
      var count = Blockly.mainWorkspace.getAllBlocks().length;
      if (count && confirm('Replace existing blocks?\n"Cancel" will merge.')) {
        Blockly.mainWorkspace.clear();
      }
      Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
    }
    // Reset value of input after loading because Chrome will not fire
    // a 'change' event if the same file is loaded again.
    document.getElementById('load').value = '';
  };
  reader.readAsText(files[0]);
};

/**
 * Discard all blocks from the workspace.
 */
function discard() {
  var count = Blockly.mainWorkspace.getAllBlocks().length;
  if ( window.confirm('Delete all ' + count + ' blocks?')) {

    Blockly.mainWorkspace.clear();

  }
};

/*
 * auto save and restore blocks
 */
function auto_save_and_restore_blocks() {
  // Restore saved blocks in a separate thread so that subsequent
  // initialization is not affected from a failed load.
  window.setTimeout(restore_blocks, 0);
  // Hook a save function onto unload.
  bindEvent(window, 'unload', backup_blocks);
  tabClick(selected);

  // Init load event.
  var loadInput = document.getElementById('load');
  loadInput.addEventListener('change', load, false);
  document.getElementById('fakeload').onclick = function() {
    loadInput.click();
  };
};

/**
 * Bind an event to a function call.
 * @param {!Element} element Element upon which to listen.
 * @param {string} name Event name to listen to (e.g. 'mousedown').
 * @param {!Function} func Function to call when event is triggered.
 *     W3 browsers will call the function with the event object as a parameter,
 *     MSIE will not.
 */
function bindEvent(element, name, func) {
  if (element.addEventListener) {  // W3C
    element.addEventListener(name, func, false);
  } else if (element.attachEvent) {  // IE
    element.attachEvent('on' + name, func);
  }
};

//loading examples via ajax
var ajax;
function createAJAX() {
  if (window.ActiveXObject) { //IE
    try {
      return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        return new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e2) {
        return null;
      }
    }
  } else if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  } else {
    return null;
  }
};

function onSuccess() {
  if (ajax.readyState == 4) {
    if (ajax.status == 200) {
      try {
        var xml = Blockly.Xml.textToDom(ajax.responseText);
      } catch (e) {
        alert('Error parsing XML:\n' + e);
        return;
      }
      var count = Blockly.mainWorkspace.getAllBlocks().length;
      if (count && confirm('Replace existing blocks?\n"Cancel" will merge.')) {
        Blockly.mainWorkspace.clear();
      }
      Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
    } else {
      alert("Server error");
    }
  }
}

function load_by_url(uri) {
  ajax = createAJAX();
  if (!ajax) {
　　   alert ('Not compatible with XMLHttpRequest');
　　   return 0;
　  }
  if (ajax.overrideMimeType) {
    ajax.overrideMimeType('text/xml');
  }

　　ajax.onreadystatechange = onSuccess;
　　ajax.open ("GET", uri, true);
　　ajax.send ("");
};


//add by rongw
// 上传数据到指定的地方      
// 或者是上传数据到小mu从而控制小mu运行
function uploadCode(code, callback) {
    var target = document.getElementById('content_arduino');
    var spinner = new Spinner().spin(target);

    var url = "http://www.morpx.com";
    var method = "POST";

    // You REALLY want async = true.
    // Otherwise, it'll block ALL execution waiting for server response.
    var async = true;

    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if (request.readyState != 4) { 
            return; 
        }
        
        spinner.stop();
        
        var status = parseInt(request.status); // HTTP response status, e.g., 200 for "200 OK"
        var errorInfo = null;
        switch (status) {
        case 200:
            break;
        case 0:
            errorInfo = "code 0\n\nCould not connect to server at " + url + ".  Is the local web server running?";
            break;
        case 400:
            errorInfo = "code 400\n\nBuild failed - probably due to invalid source code.  Make sure that there are no missing connections in the blocks.";
            break;
        case 500:
            errorInfo = "code 500\n\nUpload failed.  Is the Arduino connected to USB port?";
            break;
        case 501:
            errorInfo = "code 501\n\nUpload failed.  Is 'ino' installed and in your path?  This only works on Mac OS X and Linux at this time.";
            break;
        default:
            errorInfo = "code " + status + "\n\nUnknown error.";
            break;
        };
        
        callback(status, errorInfo);
    };

    request.open(method, url, async);
    request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    request.send(code);	     
};

//上传到服务器      .xml文件
//add by Rongw
function uploadClick() {
    // var code = Blockly.Arduino.workspaceToCode();
    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var data = Blockly.Xml.domToText(xml);
    console.log(xml);
    var fileName = window.prompt('What would you like to name your file?', 'BlocklyDuino');
    console.log(fileName);
    // Store data in blob.
    // var builder = new BlobBuilder();
    // builder.append(data);
    // saveAs(builder.getBlob('text/plain;charset=utf-8'), 'blockduino.xml');
    if(fileName){
      var blob = new Blob([data], {type: 'text/xml'});
      var url = "http://morpx.net:8999/mushop/index.php";
      var formData = new FormData();
      var name = fileName;
      formData.append("file",data);
      formData.append("name",name);
      $.ajax({ 
      url : url, 
      type : 'POST', 
      data : formData, 
      // 告诉jQuery不要去处理发送的数据
      processData : false, 
      // 告诉jQuery不要去设置Content-Type请求头
      contentType : false,
      beforeSend:function(){
      console.log(name+"正在进行，请稍候");
      },
      success : function(responseStr) { 
      if(responseStr.status===0){
      alert("成功"+name+'.xml'+responseStr);
      }else{
      alert("失败"+name+'.xml');
      }
      }, 
      error : function(responseStr) { 
      alert("访问被拒绝"+name+'.xml');
      } 
      });
    } 
};


//add by Rongw
function uploadCodes(){
  var formData = new FormData();
  var name = fileName;
  formData.append("file",data);
  formData.append("name",name);
  $.ajax({ 
  url : Url, 
  type : 'POST', 
  data : formData, 
  // 告诉jQuery不要去处理发送的数据
  processData : false, 
  // 告诉jQuery不要去设置Content-Type请求头
  contentType : false,
  beforeSend:function(){
  console.log("正在进行，请稍候");
  },
  success : function(responseStr) { 
  if(responseStr.status===0){
  console.log("成功"+responseStr);
  }else{
  console.log("失败");
  }
  }, 
  error : function(responseStr) { 
  console.log("error");
  } 
  });
}

function resetClick() {
    var code = "void setup() {} void loop() {}";

    uploadCode(code, function(status, errorInfo) {
        if (status != 200) {
            alert("Error resetting program: " + errorInfo);
        }
    });
};


