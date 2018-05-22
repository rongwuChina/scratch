(function($) {
    $.getUrlParam = function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2])
        }
        return null
    }
})(jQuery);
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2])
    }
    return null
}
function setspeci() {
    var url = window.location.href;
    var specid = getUrlParam("identifier");
    switch (specid) {
    case "753dbcd80bd17535":
    case "5a5a634fcf2f737a":
    case "753dbcd80bd17535":
    case "fbd2ecd873ceea69":
    case "fbd2ecd873ceea69":
    case "lego":
        speclist();
        return true;
        break;
    case "fd08245578656547":
    case "fd08245578656546":
    case "fd08245578656545":
        speclist2();
        return true;
        break;
    case "3429d1bc64b41929":
    case "f8c37e4b83350e62":
    case "86af23a3a445f337":
    case "2b81ef1b03735f93":
    case "f8c37e4b83350e62":
    case "spacebot":
        speclist3();
        return true;
        break;
    case "kuge":
    case "d0a3d7acd18c903a":
    case "a51fe23129976990":
    case "3378321ae9745cd6":
        speclist5();
        return true;
        break;
    case "kuged":
    case "888":
    case "999":
    case "000":
        speclist6();
        return true;
        break;
    case "play":
    case "70624791db3a0447":
        speclist4();
        return true;
        break;
    case "test":
    case "test":
        speclistt();
        return true;
        break;
    default:
        specs();
        console.log(xml1);
        return true;
        break
    }
    $('span.categoryname').css({"width":"74px","margin-right":"10px"});
}
var workspace = null;
function speclistt() {
    return xml1 = '<xml id="toolbox-simple" style="display:none"><category name="function" colour="#FD7E4C" secondaryColour="#D96131" ></category></xml>'
}
function specs() {
    var url = window.location.href;
    var lang = getUrlParam("lang");
    if (lang == "zh-cn") {
        return xml1 = '<xml id="toolbox-categories" style="display:none"><category url="images/control.png" name="控制" colour="#FD7E4C" secondaryColour="#D96131"><block type="mucontrols_if"></block><block type="mucontrols_ifelsedo"></block><block type="mucontrols_repeat"></block><block type="mucontrols_repeatwhile"></block></category><category name="条件" url="images/conditions.png" colour="#22AB7F" secondaryColour="#389438"><block type="trigger_detect"></block><block type="trigger_see"></block><block type="trigger_position"></block><block type="trigger_size"></block><block type="trigger_area"></block><block type="trigger_true"></block><block type="trigger_false"></block></category><category name="数学" url="images/math.png" colour="#22AB7F" secondaryColour="#389438"><block type="trigger_math"><value name="MATHOPTIONS"><shadow type="trigger_mathoptions"></shadow></value></block><block type="trigger_compare"><value name="COMPAREOPTIONS"><shadow type="trigger_compareoptions"></shadow></value></block><block type="trigger_logic"><value name="LOGICOPTIONS"><shadow type="trigger_logicoptions"></shadow></value></block><block type="trigger_not"></block><block type="trigger_mathnum"></block></category><category name="动作" url="images/basicactions.png" colour="#4C97FF" secondaryColour="#4280D7"><block type="motion_detect"></block><block type="motion_delay"></block><block type="motion_move"></block><block type="motion_follow"></block><block type="motion_search"></block><block type="motion_motor"></block><block type="motion_servo"></block><block type="motion_led"></block><block type="motion_voice"></block><block type="motion_advancedvoice"></block></category></xml>'
    } else {
        return xml1 = '<xml id="toolbox-categories" style="display:none"><category url="images/control.png" name="Control" colour="#FD7E4C" secondaryColour="#D96131"><block type="mucontrols_if"></block><block type="mucontrols_ifelsedo"></block><block type="mucontrols_repeat"></block><block type="mucontrols_repeatwhile"></block></category><category name="Conditions" url="images/conditions.png" colour="#22AB7F" secondaryColour="#389438"><block type="trigger_detect"></block><block type="trigger_see"></block><block type="trigger_position"></block><block type="trigger_size"></block><block type="trigger_area"></block><block type="trigger_true"></block><block type="trigger_false"></block></category><category name="Math" url="images/math.png" colour="#22AB7F" secondaryColour="#389438"><block type="trigger_math"><value name="MATHOPTIONS"><shadow type="trigger_mathoptions"></shadow></value></block><block type="trigger_compare"><value name="COMPAREOPTIONS"><shadow type="trigger_compareoptions"></shadow></value></block><block type="trigger_logic"><value name="LOGICOPTIONS"><shadow type="trigger_logicoptions"></shadow></value></block><block type="trigger_not"></block><block type="trigger_mathnum"></block></category><category name="Actions" url="images/basicactions.png" colour="#4C97FF" secondaryColour="#4280D7"><block type="motion_detect"></block><block type="motion_delay"></block><block type="motion_move"></block><block type="motion_follow"></block><block type="motion_search"></block><block type="motion_motor"></block><block type="motion_servo"></block><block type="motion_led"></block><block type="motion_advancedled"></block><block type="motion_voice"></block><block type="motion_advancedvoice"></block></category></xml>'
    }
}
function speclist() {
    var url = window.location.href;
    var lang = getUrlParam("lang");
    if (lang == "zh-cn") {
        return xml1 = '<xml id="toolbox-categories" style="display:none"><category name="控制" url="images/control.png" colour="#FD7E4C" secondaryColour="#D96131"><block type="mucontrols_if"></block><block type="mucontrols_ifelsedo"></block><block type="mucontrols_repeat"></block><block type="mucontrols_repeatwhile"></block></category><category name="条件" url="images/conditions.png" colour="#22AB7F" secondaryColour="#389438"><block type="trigger_detect"></block><block type="trigger_see"></block><block type="trigger_position"></block><block type="trigger_size"></block><block type="trigger_area"></block><block type="trigger_true"></block><block type="trigger_false"></block></category><category name="数学" url="images/math.png" colour="#22AB7F" secondaryColour="#389438"><block type="trigger_math"><value name="MATHOPTIONS"><shadow type="trigger_mathoptions"></shadow></value></block><block type="trigger_compare"><value name="COMPAREOPTIONS"><shadow type="trigger_compareoptions"></shadow></value></block><block type="trigger_logic"><value name="LOGICOPTIONS"><shadow type="trigger_logicoptions"></shadow></value></block><block type="trigger_not"></block><block type="trigger_mathnum"></block></category><category name="动作" url="images/basicactions.png" colour="#4C97FF" secondaryColour="#4280D7"><block type="motion_detect"></block><block type="motion_voice"></block><block type="motion_led"></block><block type="motion_delay"></block><block type="motion_advancedvoice"></block></category><category name="乐高" colour="#4C97FF" secondaryColour="#4280D7"><block type="motion_legomotor"></block><block type="motion_ev3motor"></block></category></xml>'
    } else {
        return xml1 = '<xml id="toolbox-categories" style="display:none"><category name="Control" url="images/control.png" colour="#FD7E4C" secondaryColour="#D96131"><block type="mucontrols_if"></block><block type="mucontrols_ifelsedo"></block><block type="mucontrols_repeat"></block><block type="mucontrols_repeatwhile"></block></category><category name="Conditions" url="images/conditions.png" colour="#22AB7F" secondaryColour="#389438"><block type="trigger_detect"></block><block type="trigger_see"></block><block type="trigger_position"></block><block type="trigger_size"></block><block type="trigger_area"></block><block type="trigger_true"></block><block type="trigger_false"></block></category><category name="Math" url="images/math.png" colour="#22AB7F" secondaryColour="#389438"><block type="trigger_math"><value name="MATHOPTIONS"><shadow type="trigger_mathoptions"></shadow></value></block><block type="trigger_compare"><value name="COMPAREOPTIONS"><shadow type="trigger_compareoptions"></shadow></value></block><block type="trigger_logic"><value name="LOGICOPTIONS"><shadow type="trigger_logicoptions"></shadow></value></block><block type="trigger_not"></block><block type="trigger_mathnum"></block></category><category name="Actions" url="images/basicactions.png" colour="#4C97FF" secondaryColour="#4280D7"><block type="motion_detect"></block><block type="motion_voice"></block><block type="motion_led"></block><block type="motion_delay"></block><block type="motion_advancedvoice"></block></category><category name="lego" colour="#4C97FF" secondaryColour="#4280D7"><block type="motion_legomotor"></block><block type="motion_ev3motor"></block></category></xml>'
    }
}
function speclist2() {
    var url = window.location.href;
    var lang = getUrlParam("lang");
    if (lang == "zh-cn") {
        return xml1 = '<category name="ev3" colour="#40BF4A" secondaryColour="#3373CC"><block type="motion_voisestop"></block></category>'
    } else {
        return xml1 = '<category name="ev3" colour="#40BF4A" secondaryColour="#3373CC"><block type="motion_voisestop"></block></category>'
    }
}
function speclist3() {
    var url = window.location.href;
    var lang = getUrlParam("lang");
    if (lang == "zh-cn") {
        var xml2 = "";
        xml2 += '<xml id="toolbox-categories" style="display:none"><category name="控制" url="images/control.png" colour="#FD7E4C" secondaryColour="#D96131"><block type="mucontrols_if"></block><block type="mucontrols_ifelsedo"></block><block type="mucontrols_repeat"></block><block type="mucontrols_repeatwhile"></block></category>';
        xml2 += '<category name="条件" url="images/conditions.png" colour="#22AB7F" secondaryColour="#389438"><block type="trigger_true"></block><block type="trigger_false"></block></category><category name="数学" url="images/math.png" colour="#22AB7F" secondaryColour="#389438"><block type="trigger_math"><value name="MATHOPTIONS"><shadow type="trigger_mathoptions"></shadow></value></block><block type="trigger_compare"><value name="COMPAREOPTIONS"><shadow type="trigger_compareoptions"></shadow></value></block><block type="trigger_logic"><value name="LOGICOPTIONS"><shadow type="trigger_logicoptions"></shadow></value></block><block type="trigger_not"></block><block type="trigger_mathnum"></block></category>';
        xml2 += '<category   style="line-height:20px;margin-top:4px;"  name="人工智能" url="images/conditions.png" colour="#22AB7F" secondaryColour="#389438"><block type="spacebot_triggerdetect"></block><block type="spacebot_triggersee"></block><block type="spacebot_triggerposition"></block><block type="spacebot_triggersize2"></block><block type="spacebot_triggerarea"></block><block type="spacebotmotion_detect"></block><block type="spacebotmotion_follow"></block><block type="spacebotmotion_search"></block></category>';
        
        xml2 += '<category name="基础动作" url="images/basicactions.png" colour="#4C97FF" secondaryColour="#4280D7"><block type="motion_voice"></block><block type="spacebotmotion_servo"></block><block type="motion_headvertical"></block><block type="motion_headhorizontal"></block><block type="motion_led"></block><block type="motion_delay"></block></category>';
        
        xml2 += '<category name="高级块" url="images/advancedactions.png" colour="#4C97FF" secondaryColour="#4280D7"><block type="motion_action"></block><block type="spacebot_motionadvancedled"></block><block type="spacebot_motionadvancedvoice"></block><block type="motion_adjustservo"></block><block type="motion_readservo"></block><block type="motion_headservo"></block><block type="motion_setvariable"></block><block type="motion_readvariable"></block><block type="motion_randnumb"></block><block type="motion_starttime"></block><block type="motion_readtime"></block></category></xml>'
    
    } else {
        var xml2 = "";
        xml2 += '<xml id="toolbox-categories" style="display:none"><category name="Control" url="images/control.png" colour="#FD7E4C" secondaryColour="#D96131"><block type="mucontrols_if"></block><block type="mucontrols_ifelsedo"></block><block type="mucontrols_repeat"></block><block type="mucontrols_repeatwhile"></block></category>';
        xml2 += '<category name="Conditions" url="images/conditions.png" colour="#22AB7F" secondaryColour="#389438"><block type="trigger_true"></block><block type="trigger_false"></block></category><category name="Math" url="images/math.png" colour="#22AB7F" secondaryColour="#389438"><block type="trigger_math"><value name="MATHOPTIONS"><shadow type="trigger_mathoptions"></shadow></value></block><block type="trigger_compare"><value name="COMPAREOPTIONS"><shadow type="trigger_compareoptions"></shadow></value></block><block type="trigger_logic"><value name="LOGICOPTIONS"><shadow type="trigger_logicoptions"></shadow></value></block><block type="trigger_not"></block><block type="trigger_mathnum"></block></category>';
        xml2 += '<category  style="line-height:20px;margin-top:4px;" name="AI Blocks" url="images/conditions.png" colour="#22AB7F" secondaryColour="#389438"><block type="spacebot_triggerdetect"></block><block type="spacebot_triggersee"></block><block type="spacebot_triggerposition"></block><block type="spacebot_triggersize2"></block><block type="spacebot_triggerarea"></block><block type="spacebotmotion_detect"></block><block type="spacebotmotion_follow"></block><block type="spacebotmotion_search"></block></category>';
        xml2 += '<category style="line-height:20px;margin-top:4px;" name="Basic Actions" url="images/basicactions.png" colour="#4C97FF" secondaryColour="#4280D7"><block type="motion_voice"></block><block type="spacebotmotion_servo"></block><block type="motion_headvertical"></block><block type="motion_headhorizontal"></block><block type="motion_led"></block><block type="motion_delay"></block></category>';
        xml2 += '<category name="Advanced Block"  style="line-height:20px;margin-top:4px;" url="images/advancedactions.png" colour="#4C97FF" secondaryColour="#4280D7"><block type="motion_action"></block><block type="spacebot_motionadvancedled"></block><block type="spacebot_motionadvancedvoice"></block><block type="motion_adjustservo"></block><block type="motion_readservo"></block><block type="motion_headservo"></block><block type="motion_setvariable"></block><block type="motion_readvariable"></block><block type="motion_randnumb"></block><block type="motion_starttime"></block><block type="motion_readtime"></block></category></xml>'
    }
    return xml1 = xml2
}
function speclist4() {
    return xml1 = '<xml id="toolbox-simple" style="display:none"><block type="motion_head1"></block><block type="motion_head2"></block><block type="motion_head3"></block><block type="motion_head4"></block></xml>'
}
function speclist5() {
    $("#button").hide();
    var url = window.location.href;
    android = 0;
    ios = 0;
    android = getUrlParam("android");
    ios = getUrlParam("ios");
    if (android == 1 || ios == 1) {
        $(".kugebutton").hide()
    } else {
        $(".kugebutton").show()
    }
    $("body").addClass("kuge");
    var url = window.location.href;
    var lang = getUrlParam("lang");
    if (lang == "zh-cn") {
        return xml1 = '<xml id="toolbox-categories" style="display:none"><category name="流程"  colour="#FD7E4C" secondaryColour="#D96131"><block type="kuge_delay"></block><block type="kuge_delay100"></block><block type="kuge_label"></block><block type="kuge_if"></block><block type="kuge_if2"></block><block type="kuge_for"></block></category><category name="控制" colour="#D65CD6" secondaryColour="#BD42BD"><block type="kuge_on"></block><block type="kuge_off"></block><block type="kuge_in"></block><block type="kuge_switch"></block><block type="kuge_ir"></block><block type="kuge_signal"></block><block type="kuge_sound"></block></category><category name="电机" colour="#40BF4A" secondaryColour="#389438"><block type="kuge_dc_cw"></block><block type="kuge_dc_ccw"></block><block type="kuge_dcstop"></block><block type="kuge_speed1"></block><block type="kuge_speed2"></block><block type="kuge_servo1"></block><block type="kuge_servo2"></block><block type="kuge_step1"></block><block type="kuge_step2"></block></category><category name="机器人" colour="#4CBFE6" secondaryColour="#2E8EB8"><block type="kuge_go"></block><block type="kuge_back"></block><block type="kuge_left"></block><block type="kuge_right"></block><block type="kuge_stop"></block><block type="kuge_speed"></block></category><category name="远程" colour="#FF6680" secondaryColour="#FF3355"><block type="kuge_id"></block><block type="kuge_receive"></block><block type="kuge_remote"></block></category><category name="常用块" colour="#00B295" secondaryColour="#0B8E69"><block type="kuge_on"></block><block type="kuge_off"></block><block type="kuge_in"></block><block type="kuge_delay"></block><block type="kuge_for"></block><block type="kuge_go"></block><block type="kuge_back"></block><block type="kuge_left"></block><block type="kuge_right"></block><block type="kuge_dc_cw"></block><block type="kuge_dc_ccw"></block><block type="kuge_dcstop"></block><block type="kuge_label"></block><block type="kuge_if"></block></category></xml>'
    } else {
        return xml1 = '<xml id="toolbox-categories" style="display:none"><category name="Flow" colour="#FD7E4C" secondaryColour="#D96131"><block type="kuge_delay"></block><block type="kuge_delay100"></block><block type="kuge_label"></block><block type="kuge_if"></block><block type="kuge_if2"></block><block type="kuge_for"></block></category><category name="Control" colour="#D65CD6" secondaryColour="#BD42BD"><block type="kuge_on"></block><block type="kuge_off"></block><block type="kuge_in"></block><block type="kuge_switch"></block><block type="kuge_ir"></block><block type="kuge_signal"></block><block type="kuge_sound"></block></category><category name="Motor" colour="#40BF4A" secondaryColour="#389438"><block type="kuge_dc_cw"></block><block type="kuge_dc_ccw"></block><block type="kuge_dcstop"></block><block type="kuge_speed1"></block><block type="kuge_speed2"></block><block type="kuge_servo1"></block><block type="kuge_servo2"></block><block type="kuge_step1"></block><block type="kuge_step2"></block></category><category name="Robot" colour="#4CBFE6" secondaryColour="#2E8EB8"><block type="kuge_go"></block><block type="kuge_back"></block><block type="kuge_left"></block><block type="kuge_right"></block><block type="kuge_stop"></block><block type="kuge_speed"></block></category><category name="Remote" colour="#FF6680" secondaryColour="#FF3355"><block type="kuge_id"></block><block type="kuge_receive"></block><block type="kuge_remote"></block></category><category name="Basic Card" colour="#00B295" secondaryColour="#0B8E69"><block type="kuge_on"></block><block type="kuge_off"></block><block type="kuge_in"></block><block type="kuge_delay"></block><block type="kuge_for"></block><block type="kuge_go"></block><block type="kuge_back"></block><block type="kuge_left"></block><block type="kuge_right"></block><block type="kuge_dc_cw"></block><block type="kuge_dc_ccw"></block><block type="kuge_dcstop"></block><block type="kuge_label"></block><block type="kuge_if"></block></category></xml>'
    }
}
if (getUrlParam("projectid") != null) {
    setTimeout("loads()", 400)
}
function loads() {
    workspace.clear();
    loadproject()
}
robotId = getUrlParam("robotid");
token = "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0ODY2OTMwNjgsInN1YiI6IntcImlkXCI6MTAwMDUwLFwidXNlck5hbWVcIjpcInRlc3QxXCJ9IiwiZXhwIjoxNDg2Nzc5NDY4fQ.eQ4y9H-djpKtCMIuwEkNQ3dO3W-ftLNRtcyqBGZc1ug";
function loadproject() {
    projectId = getUrlParam("projectid");
    $.ajax({
        url: "http://morpx.net:8999/mu-web-agent/visual/getProject?id=" + projectId,
        type: "GET",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "showlist",
        timeout: 8000,
        cache: false,
        success: getxml
    })
}
function getxml(tt) {
    var json = eval(tt.data);
    $.each(json, function(index, item) {
        projectxml = json.xml;
        robotId = json.robot.id;
        official = json.permission
    });
    var xml = Blockly.Xml.textToDom(projectxml);
    Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace)
}
function xmlToJson(xml) {
    var obj = {};
    if (xml.nodeType == 1) {
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue
            }
        }
    } else {
        if (xml.nodeType == 3) {
            obj = xml.nodeValue
        }
    }
    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof (obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson(item)
            } else {
                if (typeof (obj[nodeName].length) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old)
                }
                obj[nodeName].push(xmlToJson(item))
            }
        }
    }
    return obj
}
official = 3;
function saveto() {
    if (Blockly.mainWorkspace.getAllBlocks().length > 0) {
        if (official == 3) {
            var url = window.location.href;
            var lang = getUrlParam("lang");
            if (lang == "zh-cn") {
                var theResponse = window.prompt("保存为我的项目", "请输入您的项目名称：")
            } else {
                var theResponse = window.prompt("Save as my project", "Please enter your project name：")
            }
            if (theResponse != null && theResponse != "") {
                var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
                var x = XML2String(xml);
                var name = theResponse;
                var mutree = methodtree(xml);
                var data = {};
                data.name = name;
                data.robotId = robotId;
                data.xml = $.base64.encode(x);
                data.behaviorTree = $.base64.encode(mutree);
                $.ajax({
                    cache: true,
                    type: "POST",
                    url: "http://morpx.net:8999/mu-web-agent/visual/createProject",
                    data: data,
                    dataType: "jsonp",
                    jsonp: "callback",
                    jsonpCallback: "savepro",
                    async: false,
                    success: function(data) {
                        switch (data.code) {
                        case ("2104"):
                            erryFunction(data.msg);
                            break;
                        case ("2107"):
                            erryFunction(data.msg);
                            break;
                        case ("508"):
                            erryFunction(data.msg);
                            break;
                        case ("501"):
                            erryFunction(data.msg);
                            break;
                        case ("2200"):
                            erryFunction(data.msg);
                            break;
                        default:
                            if (Code.LANG == "zh-cn") {
                                alert("项目保存成功!")
                            } else {
                                alert("Save Project Success!")
                            }
                            break
                        }
                    },
                    error: function() {
                        erryFunc()
                    }
                })
            }
        } else {
            var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
            var x = XML2String(xml);
            var mutree = methodtree(xml);
            var id = projectId;
            var data = {};
            data.id = id;
            data.xml = $.base64.encode(x);
            data.behaviorTree = $.base64.encode(mutree);
            $.ajax({
                cache: true,
                type: "POST",
                url: "http://morpx.net:8999/mu-web-agent/visual/updateProject",
                data: data,
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "savepro",
                async: false,
                success: function(data) {
                    switch (data.code) {
                    case ("2104"):
                        erryFunction(data.msg);
                        break;
                    case ("2107"):
                        erryFunction(data.msg);
                        break;
                    case ("508"):
                        erryFunction(data.msg);
                        break;
                    case ("501"):
                        erryFunction(data.msg);
                        break;
                    case ("2200"):
                        erryFunction(data.msg);
                        break;
                    default:
                        if (Code.LANG == "zh-cn") {
                            alert("项目更新成功!")
                        } else {
                            alert("Update Project Success!")
                        }
                        break
                    }
                },
                error: function() {
                    erryFunc()
                }
            })
        }
    } else {
        var url = window.location.href;
        var lang = getUrlParam("lang");
        if (lang == "zh-cn") {
            alert("画布上没有指令块!")
        } else {
            alert("There are no blocks in the canvas!")
        }
    }
}
function savekuge() {
    if (Blockly.mainWorkspace.getAllBlocks().length > 0) {
        if (official == 3) {
            var url = window.location.href;
            var lang = getUrlParam("lang");
            if (lang == "zh-cn") {
                var theResponse = window.prompt("保存为我的项目", "请输入您的项目名称：")
            } else {
                var theResponse = window.prompt("Save as my project", "Please enter your project name：")
            }
            if (theResponse != null && theResponse != "") {
                var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
                var x = XML2String(xml);
                var name = theResponse;
                var mutree = kuge(xml);
                console.log(mutree);
                var data = {};
                data.name = name;
                data.robotId = robotId;
                data.xml = $.base64.encode(x);
                data.behaviorTree = $.base64.encode(mutree);
                $.ajax({
                    cache: true,
                    type: "POST",
                    url: "http://morpx.net:8999/mu-web-agent/visual/createProject",
                    data: data,
                    dataType: "jsonp",
                    jsonp: "callback",
                    jsonpCallback: "savepro",
                    async: false,
                    success: function(data) {
                        switch (data.code) {
                        case ("2104"):
                            erryFunction(data.msg);
                            break;
                        case ("2107"):
                            erryFunction(data.msg);
                            break;
                        case ("508"):
                            erryFunction(data.msg);
                            break;
                        case ("501"):
                            erryFunction(data.msg);
                            break;
                        case ("2200"):
                            erryFunction(data.msg);
                            break;
                        default:
                            if (Code.LANG == "zh-cn") {
                                alert("项目保存成功!")
                            } else {
                                alert("Save Project Success!")
                            }
                            break
                        }
                    },
                    error: function() {
                        erryFunc()
                    }
                })
            }
        } else {
            var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
            var x = XML2String(xml);
            var mutree = kuge(xml);
            console.log(mutree);
            var id = projectId;
            var data = {};
            data.id = id;
            data.xml = $.base64.encode(x);
            data.behaviorTree = $.base64.encode(mutree);
            $.ajax({
                cache: true,
                type: "POST",
                url: "http://morpx.net:8999/mu-web-agent/visual/updateProject",
                data: data,
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "savepro",
                async: false,
                success: function(data) {
                    switch (data.code) {
                    case ("2104"):
                        erryFunction(data.msg);
                        break;
                    case ("2107"):
                        erryFunction(data.msg);
                        break;
                    case ("508"):
                        erryFunction(data.msg);
                        break;
                    case ("501"):
                        erryFunction(data.msg);
                        break;
                    case ("2200"):
                        erryFunction(data.msg);
                        break;
                    default:
                        if (Code.LANG == "zh-cn") {
                            alert("项目更新成功!")
                        } else {
                            alert("Update Project Success!")
                        }
                        break
                    }
                },
                error: function() {
                    erryFunc()
                }
            })
        }
    } else {
        var url = window.location.href;
        var lang = getUrlParam("lang");
        if (lang == "zh-cn") {
            alert("画布上没有指令块!")
        } else {
            alert("There are no blocks in the canvas!")
        }
    }
}
function erryFunc() {
    var url = window.location.href;
    var lang = getUrlParam("lang");
    if (lang == "zh-cn") {} else {}
    return false
}
function erryFunction(tt) {}
"use strict";
$(function() {
    var android = 0;
    var ios = 0;
    var identifier = 0;
    var url = window.location.href;
    android = getUrlParam("android");
    ios = getUrlParam("ios");
    identifier = getUrlParam("identifier");
});
function categoryname() {
    var arry = ["control", "conditions", "math", "basicactions", "advancedactions"];
    var color = ["#FD7E4C", "#22ab7f", "#00b4ff", "#c490bf", "#eb6877"];
    if ($('body').hasClass('kuge')) {
        $(".categoryname").each(function() {
            var thiscolor = $(this).prev().css('background-color');
            $(this).css("color", thiscolor)
        });
    } else {
        var ios = 0;
        ios = getUrlParam("ios");
        
        $(".categoryname").each(function() {

            var src = $(this).prev("img").attr("src");
            if (src != undefined) {
                for (var i = 0; i < arry.length; i++) {
                    if (src != undefined && src.indexOf(arry[i]) != -1) {
                        $(this).css("color", color[i])
                        if($(window).width()>800){
                            if( ios == 1 ){
                                $('span.categoryname').css("font-size","18px");
                            }else{
                                $('span.categoryname').css("font-size","17px");
                            }
                                
                            }
                            }
                        }
            }

        })
        $('img.categoryimg').css("margin-left","0");
        $('span.categoryname').css({"width":"93px","white-space":"nowrap","overflow-y":"scroll"});
    }
}
function setplayfunction(funcxml) {
    var functionxml = eval(funcxml);
    var length = 0;
    $.each(functionxml, function(i, item) {
        console.log(functionxml);
        var index = i + 1;
        var type = 'motion_function' + index;
        var name = item.fucntionName;
        var intro = item.functionDesc;
        var text = item.functionBody;

        if (item.functionType != undefined && item.functionEditor != undefined) {
            var functiontype = item.functionType;
            var functioneditor = item.functionEditor;
            getfunction(type, name, intro, text, functiontype, functioneditor);
        } else {
            var functiontype = '0';
            var functioneditor = '0';
            getfunction(type, name, intro, text, functiontype, functioneditor);
        }

        length++;
    });
    $('#functionnum').attr('value', length);
}
/**
     * 定义函数模块
     */
function getfunction(type, name, intro, xml, trigger, editor) {
    var names = name;
    //alert(xml);
    // alert(trigger);
    // alert(editor);
    if (trigger == '0' && editor == '1') {
        Blockly.Blocks[type] = {
            init: function() {
                this.jsonInit({
                    message0: names,
                    inputsInline: !0,
                    previousStatement: null,
                    nextStatement: null,
                    category: Blockly.Categories.motion,
                    colour: bcactionhue,
                    colourSecondary: bcactionhue2,
                    colourTertiary: bcactionhue3,
                })
            }
        }
        var mutree = methodtree(Blockly.Xml.textToDom(xml));
        if ($('#' + type).length > 0) {
            $('#' + type).remove();
        }
        // var html='<div id="'+type+'" intro="'+intro+'" mutree="'+mutree+'"name="'+name+'">'+xml+'</div>';
        var html = '<div class="hide" id="' + type + '"intro="' + intro + '" mutree="' + mutree + '"name="' + name + '" type="' + trigger + '" editor="' + editor + '">' + xml + '</div>';
    } else if (trigger == '1' && editor == '0') {
        Blockly.Blocks[type] = {
            init: function() {
                this.jsonInit({
                    message0: names + "%1",
                    args0: [{
                        type: "field_image",
                        src: "media/intro.gif",
                        width: 16,
                        height: 16,
                        onclick: 'funcspace()',
                    }],
                    inputsInline: !0,
                    output: "Boolean",
                    category: Blockly.Categories.operators,
                    colour: Blockly.Colours.motion.primary,
                    colourSecondary: Blockly.Colours.motion.secondary,
                    colourTertiary: Blockly.Colours.motion.tertiary,
                    outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL
                })
            }
        }
        var mutree = methodtree(Blockly.Xml.textToDom(xml));
        if ($('#' + type).length > 0) {
            $('#' + type).remove();
        }
        // var html='<div id="'+type+'" intro="'+intro+'" mutree="'+mutree+'"name="'+name+'">'+xml+'</div>';
        var html = '<div class="hide" id="' + type + '"intro="' + intro + '" mutree="' + mutree + '"name="' + name + '" type="' + trigger + '" editor="' + editor + '">' + xml + '</div>';
    } else if (trigger == '1' && editor == '1') {
        Blockly.Blocks[type] = {
            init: function() {
                this.jsonInit({
                    message0: names,
                    inputsInline: !0,
                    output: "Boolean",
                    category: Blockly.Categories.operators,
                    colour: Blockly.Colours.motion.primary,
                    colourSecondary: Blockly.Colours.motion.secondary,
                    colourTertiary: Blockly.Colours.motion.tertiary,
                    outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL
                })
            }
        }
        var mutree = methodtree(Blockly.Xml.textToDom(xml));
        if ($('#' + type).length > 0) {
            $('#' + type).remove();
        }
        // var html='<div id="'+type+'" intro="'+intro+'" mutree="'+mutree+'"name="'+name+'">'+xml+'</div>';
        var html = '<div class="hide" id="' + type + '"intro="' + intro + '" mutree="' + mutree + '"name="' + name + '" type="' + trigger + '" editor="' + editor + '">' + xml + '</div>';
    } else {
        Blockly.Blocks[type] = {
            init: function() {
                this.jsonInit({
                    message0: names + "%1",
                    args0: [{
                        type: "field_image",
                        src: "media/intro.gif",
                        width: 16,
                        height: 16,
                        onclick: 'funcspace()',
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
        }
        var mutree = methodtree(Blockly.Xml.textToDom(xml));
        if ($('#' + type).length > 0) {
            $('#' + type).remove();
        }
        // var html='<div id="'+type+'" intro="'+intro+'" mutree="'+mutree+'"name="'+name+'">'+xml+'</div>';
        var html = '<div class="hide" id="' + type + '"intro="' + intro + '" mutree="' + mutree + '"name="' + name + '" type="' + trigger + '" editor="' + editor + '">' + xml + '</div>';
    }

    $('body').append(html);
}
;
function getname(xml) {
    var x = Blockly.Xml.domToText(xml);
    var xmlDoc = $(x);
    xmlDoc.find("block").each(function() {
        if ($(this).attr("type") == "function_name") {
            name = $(this).children("field").text();
            return name
        }
    });
    if (xmlDoc.find("block").length == 0) {
        name = 0;
        return 0
    }
}
intro = "";
function getintro() {
    intro = $("#funcintro").val();
    result();
    return intro
}
function funcshow(text) {
    var xml = Blockly.Xml.textToDom(text);
    Blockly.Xml.domToWorkspace(xml, workspace2)
}
function funcspace() { 
    if(Blockly.selected!=null){
    $(".dwt").show();
    var strings = Blockly.selected.type;
    if (strings.indexOf("motion_function") != -1) {
        $("body").attr("functions", "old")
    } else {
        $("body").attr("functions", "new")
    }
    $("#funceditor .injectionDiv").remove();
    setmain2();
    var xml = $("#" + Blockly.selected.type).html();
    funcshow(xml);
    $("#blocklyDiv .blocklyFlyout .blocklyBlockCanvas").attr("transform", "translate(0,2) scale(0.75)")
    }

}
function newfuncspace() {
    $("body").attr("functions", "new");
    $("#funceditor .injectionDiv").remove();
    setmain2()
}
function addnewfunc() {
    var xml = Blockly.Xml.workspaceToDom(workspace2);
    getname(xml);
    if (name != 0) {
        if ($("body").attr("functions") == "new") {
            var functionnum = parseInt($("#functionnum").attr("value")) + 1;
            type = "motion_function" + functionnum;
            $("#functionnum").attr("value", functionnum)
        } else {
            var functionnum = parseInt($("#functionnum").attr("value"));
            type = "motion_function" + functionnum;
            $("#functionnum").attr("value", functionnum)
        }
    }
    move()
}
function addfunction() {
    if ($("body").attr("functions") == "new") {
        if (parseInt($("#functionnum").attr("value")) > 0) {
            var string = '<category name="函数" colour="#4C97FF" secondaryColour="#4280D7">';
            for (var i = 1; i < parseInt($("#functionnum").attr("value")) + 1; i++) {
                string += '<block type="motion_function' + i + '"></block>'
            }
            string += "</category></xml>";
            toolbox = (toolbox).substr(0, xml1.length - 6) + string
        } else {
            toolbox = xml1
        }
        workspace.updateToolbox(toolbox)
    }
    return 0
}
function savefuncshow() {
    $("#funcsave").show();
    $(".dwt").show()
}
function savetask() {
    var type = new Array;
    var funcxml = new Array;
    var funcname = new Array;
    var funcintro = new Array;
    var json = new Array;
    for (var i = 1; i < parseInt($("#functionnum").attr("value")) + 1; i++) {
        type[i - 1] = "motion_function" + i;
        funcname = $("#" + type[i - 1]).attr("name");
        funcintro = $("#" + type[i - 1]).attr("intro");
        funcxml = $("#" + type[i - 1]).html();
        re = new RegExp('"',"g");
        funcxml = funcxml.replace(re, "'");
        json[i - 1] = {
            "fucntionName": funcname,
            "functionDesc": funcintro,
            "functionBody": funcxml
        }
    }
    var functions = JSON.stringify(eval(json));
    $("#tastintro").hide();
    $(".dwt").hide();
    return $("#functionXml").val(functions)
}
function move() {
    $("div#funceditor").hide();
    $("#funceditor .injectionDiv").remove();
    $(".dwt").hide()
}
function show() {
    $("div#funceditor").show()
}
function setmain2() {
    $("#funceditor").show();
    var soundsEnabled = sessionStorage.getItem("soundsEnabled");
    if (soundsEnabled === null) {
        soundsEnabled = true
    } else {
        soundsEnabled = (soundsEnabled === "true")
    }
    setSoundsEnabled(soundsEnabled);
    var match = location.search.match(/dir=([^&]+)/);
    var rtl = match && match[1] == "rtl";
    document.forms.options.elements.dir.selectedIndex = Number(rtl);
    var toolbox;
    var flyout;
    if ($("#funceditor").hasClass("addnew")) {
        var string = '<block type="function_name"></block>';
        string += "</xml>";
        toolbox = xml1.substr(0, xml1.length - 6) + string
    } else {
        toolbox = xml1
    }
    if (!$("#blocklyDiv").hasClass("simple")) {
        flyout = "#283856"
    } else {
        flyout = "#ffffff"
    }
    document.forms.options.elements.toolbox.selectedIndex = toolbox ? 1 : 0;
    match = location.search.match(/side=([^&]+)/);
    var side = match ? match[1] : "start";
    document.forms.options.elements.side.value = side;
    workspace2 = Blockly.inject("funceditor", {
        comments: false,
        disable: false,
        collapse: false,
        media: "media/",
        readOnly: false,
        rtl: rtl,
        scrollbars: true,
        // toolbox: toolbox,
        trashcan: true,
        toolboxPosition: side == "top" || side == "start" ? "start" : "end",
        horizontalLayout: side == "top" || side == "bottom",
        sounds: soundsEnabled,
        zoom: {
            controls: true,
            wheel: true,
            startScale: 0.75,
            maxScale: 4,
            minScale: 0.25,
            scaleSpeed: 1.1
        },
        colours: {
            workspace: "#FFFFFF",
            flyout: flyout,
            scrollbar: "#24324D",
            scrollbarHover: "#0C111A",
            insertionMarker: "#FFFFFF",
            insertionMarkerOpacity: 0.3,
            fieldShadow: "rgba(255, 255, 255, 0.3)",
            dragShadowOpacity: 0.6
        }
    });
    var text = sessionStorage.getItem("textarea");
    if (text) {
        document.getElementById("importExport").value = text
    }
    taChange();
    var state = sessionStorage.getItem("logEvents");
    logEvents(Boolean(state));
    state = sessionStorage.getItem("logFlyoutEvents");
    logFlyoutEvents(Boolean(state));
}
function savefunction() {
    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var funcintro = $("#funcintro").val();
    if (funcintro > 0) {
        var x = XML2String(xml);
        var mutree = methodtree(xml);
        var data = {};
        data.name = funcname;
        data.funcintro = funcintro;
        data.xml = $.base64.encode(x);
        data.behaviorTree = $.base64.encode(mutree);
        $.ajax({
            cache: true,
            type: "POST",
            url: "http://morpx.net:8999/mu-web-agent/visual/createProject",
            data: data,
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "savepro",
            async: false,
            success: function(data) {
                switch (data.code) {
                case ("2104"):
                    erryFunction(data.msg);
                    break;
                case ("2107"):
                    erryFunction(data.msg);
                    break;
                case ("508"):
                    erryFunction(data.msg);
                    break;
                case ("501"):
                    erryFunction(data.msg);
                    break;
                case ("2200"):
                    erryFunction(data.msg);
                    break;
                default:
                    if (Code.LANG == "zh-cn") {
                        alert("项目保存成功!")
                    } else {
                        alert("Save Project Success!")
                    }
                    break
                }
            },
            error: function() {
                erryFunc()
            }
        })
    }
}
function erryFunc() {
    alert("连接错误！");
    return false
}
function erryFunction(tt) {
    alert(tt)
}
function setload(play) {
    var heigh = $(window).height() - 94;
    $('#javascript').css({
        'height': heigh + 'px',
        "top": "44px"
    });
    $('#funceditor').css({
        'height': heigh + 'px',
        "top": "44px"
    });
    var url = window.location.href;
    var lang = getUrlParam("lang");
    if (lang == "zh-cn") {
        var controlshue = '#FD7E4C';
        var controlshue2 = '#E89C4B';
        Blockly.Blocks["mu_start"] = {
            init: function() {
                this.jsonInit({
                    id: "mu_start",
                    message0: "开始",
                    inputsInline: !0,
                    nextStatement: null,
                    category: Blockly.Categories.event,
                    colour: controlshue,
                    colourSecondary: controlshue2,
                    colourTertiary: controlshue2
                })
            }
        }
    } else {
        var controlshue = '#FD7E4C';
        var controlshue2 = '#E89C4B';
        Blockly.Blocks["mu_start"] = {
            init: function() {
                this.jsonInit({
                    id: "mu_start",
                    message0: "start",
                    inputsInline: !0,
                    nextStatement: null,
                    category: Blockly.Categories.event,
                    colour: controlshue,
                    colourSecondary: controlshue2,
                    colourTertiary: controlshue2
                })
            }
        }
    }
    var soundsEnabled = sessionStorage.getItem("soundsEnabled");
    if (soundsEnabled === null) {
        soundsEnabled = true
    } else {
        soundsEnabled = (soundsEnabled === "true")
    }
    setSoundsEnabled(soundsEnabled);
    var match = location.search.match(/dir=([^&]+)/);
    var rtl = match && match[1] == "rtl";
    document.forms.options.elements.dir.selectedIndex = Number(rtl);
    var toolbox;
    var flyout;
    if (setspeci()) {
        if (play != undefined) {
            toolbox = Blockly.Xml.textToDom(play)
        } else {
            setspeci();
            toolbox = Blockly.Xml.textToDom(xml1)
        }
    } else {
        toolbox = getToolboxElement()
    }
    document.forms.options.elements.toolbox.selectedIndex = toolbox ? 1 : 0;
    match = location.search.match(/side=([^&]+)/);
    var side = match ? match[1] : "start";
    document.forms.options.elements.side.value = side;
    workspace = Blockly.inject("blocklyDiv", {
        comments: false,
        disable: false,
        collapse: false,
        media: "media/",
        readOnly: false,
        rtl: rtl,
        scrollbars: true,
        // toolbox: toolbox,
        trashcan: true,
        // toolboxPosition: side == "top" || side == "start" ? "start" : "end",
        horizontalLayout: side == "top" || side == "bottom",
        sounds: soundsEnabled,
        zoom: {
            controls: true,
            wheel: true,
            startScale: 0.75,
            maxScale: 4,
            minScale: 0.25,
            scaleSpeed: 1.1
        },
        colours: {
            workspace: "#f4f4f4",
            flyout: flyout,
            scrollbar: "#24324D",
            scrollbarHover: "#0C111A",
            insertionMarker: "#FFFFFF",
            insertionMarkerOpacity: 0.3,
            fieldShadow: "rgba(255, 255, 255, 0.3)",
            dragShadowOpacity: 0.6
        },
    });
    var text = sessionStorage.getItem("textarea");
    if (text) {
        document.getElementById("importExport").value = text
    }
    taChange();
    categoryname();
    var state = sessionStorage.getItem("logEvents");
    logEvents(Boolean(state));
    state = sessionStorage.getItem("logFlyoutEvents");
    logFlyoutEvents(Boolean(state));
    // $('.blocklyFlyout').css({
    //     'transform': 'translate(0px, 44px)'
    // });
}
function getToolboxElement() {
    var match = location.search.match(/toolbox=([^&]+)/);
    return document.getElementById("toolbox-" + (match ? match[1] : "categories"))
}
function toXml() {
    var output = document.getElementById("importExport");
    var xml = Blockly.Xml.workspaceToDom(workspace);
    output.value = Blockly.Xml.domToPrettyText(xml);
    output.focus();
    output.select();
    taChange()
}
function fromXml() {
    var input = document.getElementById("importExport");
    var xml = Blockly.Xml.textToDom(input.value);
    Blockly.Xml.domToWorkspace(xml, workspace);
    taChange()
}
function toCode(lang) {
    var output = document.getElementById("importExport");
    output.value = Blockly[lang].workspaceToCode(workspace);
    taChange()
}
function taChange() {
    var textarea = document.getElementById("importExport");
    sessionStorage.setItem("textarea", textarea.value);
    var valid = true;
    try {
        Blockly.Xml.textToDom(textarea.value)
    } catch (e) {
        valid = false
    }
    document.getElementById("import").disabled = !valid
}
function logEvents(state) {
    var checkbox = document.getElementById("logCheck");
    checkbox.checked = state;
    sessionStorage.setItem("logEvents", state ? "checked" : "");
    if (state) {
        workspace.addChangeListener(logger)
    } else {
        workspace.removeChangeListener(logger)
    }
}
function logFlyoutEvents(state) {
    var checkbox = document.getElementById("logFlyoutCheck");
    checkbox.checked = state;
    sessionStorage.setItem("logFlyoutEvents", state ? "checked" : "");
    var flyoutWorkspace = (workspace.flyout_) ? workspace.flyout_.workspace_ : workspace.toolbox_.flyout_.workspace_;
    if (state) {
        flyoutWorkspace.addChangeListener(logger)
    } else {
        flyoutWorkspace.removeChangeListener(logger)
    }
}
function logger(e) {
    console.log(e)
}
function glowBlock() {
    if (Blockly.selected) {
        workspace.glowBlock(Blockly.selected.id, true)
    }
}
function unglowBlock() {
    if (Blockly.selected) {
        workspace.glowBlock(Blockly.selected.id, false)
    }
}
function glowStack() {
    if (Blockly.selected) {
        workspace.glowStack(Blockly.selected.id, true)
    }
}
function unglowStack() {
    if (Blockly.selected) {
        workspace.glowStack(Blockly.selected.id, false)
    }
}
function sprinkles(n) {
    var prototypes = [];
    var toolbox = getToolboxElement();
    var blocks = toolbox.getElementsByTagName("block");
    for (var i = 0; i < n; i++) {
        var blockXML = blocks[Math.floor(Math.random() * blocks.length)];
        var block = Blockly.Xml.domToBlock(blockXML, workspace);
        block.initSvg();
        block.moveBy(Math.round(Math.random() * 450 + 40), Math.round(Math.random() * 600 + 40))
    }
}
var equalsXml = ['  <shadow type="operator_equals">', '    <value name="OPERAND1">', '     <shadow type="text">', '      <field name="TEXT">foo</field>', "     </shadow>", "    </value>", '    <value name="OPERAND2">', '      <shadow type="operator_equals"></shadow>', "    </value>", "  </shadow>"].join("\n");
var spaghettiXml = ['  <block type="control_if_else">', '    <value name="CONDITION">', '      <shadow type="operator_equals"></shadow>', "    </value>", '    <statement name="SUBSTACK"></statement>', '    <statement name="SUBSTACK2"></statement>', "    <next></next>", "  </block>"].join("\n");
function spaghetti(n) {
    console.log("Starting spaghetti.  This may take some time...");
    var xml = spaghettiXml;
    for (var i = 0; i < 2 * n; i++) {
        xml = xml.replace(/(<statement name="SUBSTACK2?"?>)<\//g, "$1" + spaghettiXml + "</")
    }
    for (var i = 0; i < n; i++) {
        xml = xml.replace(/(<next>)<\//g, "$1" + spaghettiXml + "</")
    }
    var equalsBlock = equalsXml;
    for (var i = 0; i < n; i++) {
        equalsBlock = equalsBlock.replace(/(<shadow( type="operator_equals")?>)<\/shadow>/g, equalsXml)
    }
    xml = xml.replace(/(<shadow( type="operator_equals")?>)<\/shadow>/g, equalsBlock);
    xml = '<xml xmlns="http://www.w3.org/1999/xhtml">' + xml + "</xml>";
    var dom = Blockly.Xml.textToDom(xml);
    console.time("Spaghetti domToWorkspace");
    Blockly.Xml.domToWorkspace(dom, workspace);
    console.timeEnd("Spaghetti domToWorkspace")
}
function setSoundsEnabled(state) {
    var checkbox = document.getElementById("soundsEnabled");
    checkbox.checked = (state) ? "checked" : "";
    sessionStorage.setItem("soundsEnabled", state)
}
function fakeDrag(id, dx, dy, opt_workspace) {
    var ws = opt_workspace || Blockly.getMainWorkspace();
    var blockToDrag = ws.getBlockById(id);
    if (!blockToDrag) {
        fakeDragWrapper();
        return
    }
    var blockTop = blockToDrag.svgGroup_.getBoundingClientRect().top;
    var blockLeft = blockToDrag.svgGroup_.getBoundingClientRect().left;
    var mouseDownEvent = new MouseEvent("mousedown",{
        clientX: blockLeft + 5,
        clientY: blockTop + 5
    });
    blockToDrag.onMouseDown_(mouseDownEvent);
    setTimeout(function() {
        var mouseMoveEvent = new MouseEvent("mousemove",{
            clientX: blockLeft + dx,
            clientY: blockTop + dy
        });
        blockToDrag.onMouseMove_(mouseMoveEvent);
        setTimeout(function() {
            var mouseUpEvent = new MouseEvent("mouseup",{
                clientX: blockLeft + dx,
                clientY: blockTop + dy
            });
            blockToDrag.onMouseUp_(mouseUpEvent);
            setTimeout(fakeDragWrapper(), 100)
        }, 30)
    }, 30)
}
function fakeDragWrapper() {
    var dragInfo = fakeDragStack.pop();
    if (dragInfo) {
        fakeDrag(dragInfo.id, dragInfo.dx, dragInfo.dy, dragInfo.workspace)
    }
}
function fakeManyDrags() {
    var blockList = workspace.getAllBlocks();
    for (var i = 0; i < 2 * blockList.length; i++) {
        fakeDragStack.push({
            id: blockList[Math.round(Math.random() * (blockList.length - 1))].id,
            dx: Math.round((Math.random() - 0.25) * 200),
            dy: Math.round((Math.random() - 0.25) * 200),
            workspace: workspace
        })
    }
    fakeDragWrapper()
}
function reportDemo() {
    if (Blockly.selected) {
        workspace.reportValue(Blockly.selected.id, document.getElementById("reportValue").value)
    }
}
;