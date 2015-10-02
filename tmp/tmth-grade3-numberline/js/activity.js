var mainParent, container, controlPanel, numberlineHolder, equationHolder;
var numberline, numericKeyPad;
var feedback, settingBtns, addRemoveBtns;
var messageBox, blocker;
var eventType = "click";
var storedNumericType = "whole";
$(document).ready(function(){
    if ('ontouchstart' in document.documentElement) {
        eventType = 'touchstart';
    }
    
    mainParent = $("body");
    mainParent.bind("touchmove", function(e){ e.preventDefault(); });
    container = $("<div id=\"container\" class=\"container\"></div>");
    controlPanel = $("<div id=\"controlPanel\"></div>");
    numberlineHolder = $("<div id=\"numlineHolder\"></div>");
    var equationText = $("<div id=\"eqcontent\">Enter the matching equation below:</div>");
    equationHolder = $("<div id=\"equationHolder\"></div>");
    activityHolder = $("<div id='activityHolder'></div>");
    messageBox = $("<div id=\"messageBox\"><div id=\"messageBox_blocker\"></div><div id=\"messageBox_box\"><div id=\"messageBox_message\"></div><div id=\"messageBox_btnOk\" class=\"btnDesing\">Ok</div></div></div>");
    blocker = $("<div id=\"generalBlocker\" style=\"z-index:25;\" ></div>");
    feedback = $("<div class=contentFeedback> <div class=btReset><div class=icoReset></div> </div> <div class=\"btInfo\"><div class=\"icoInfo\"></div></div><div class=\"btFeedback\"> <div class=\"icoFeed\"></div> </div> <div class=\"score\"> <div id=\"contCorrect\">0 <img src=\"images/IconCorrect.png\"></div><div id=\"contIncorrect\">0 <img src=\"images/IconIncorrect.png\"></div> </div>  </div> ");
    
    settingBtns = $("<div id=\"settingBtn\"></div><div id=\"LockBtn\" class=\"unlocked\"></div>");
    addRemoveBtns = $("<div id=\"btn_addPoint\" class=\"addRemoveBtns\"></div><div id=\"btn_addForward\" class=\"addRemoveBtns\"></div><div id=\"btn_addBackward\" class=\"addRemoveBtns\"></div><div id=\"btn_addDifference\" class=\"addRemoveBtns\"></div><div id=\"btn_eraser\" class=\"addRemoveBtns\"></div>");
    Qblocker = $("<div id=\"block\"></div><div id=\"QBlocker\" style=\"z-index:100000;\" ><span style=\"font-size:22px;\">&#8220;How to write fractions and mixed numbers with the keypad:</span><br/>To write a fraction, type the numerator then press the <img src=\"images/04.png\"/> button to enter the denominator.<br/><br/>To write a mixed number, first type the whole number portion of the mixed number, then press the <img src=\"images/02.png\"/> button to enter the numerator. Once the numerator is typed, press the <img src=\"images/04.png\"/> button to enter the denominator.&#8221;<div class=\"qcloseBtn\" onclick=\"Qclose()\"></div></div>");
    container.append(controlPanel).append(activityHolder).append(feedback).append(messageBox).append(blocker).append(Qblocker);
    activityHolder.append(numberlineHolder).append(equationText).append(equationHolder).append(settingBtns).append(addRemoveBtns);
    mainParent.append(container);
    
    blocker.hide();
    
    /*Control Panel*/
    controlPanel.append("<div class=\"closeBtn\" onclick=\"showControls(true,false)\"></div><div class=\"checkBox\" style=\"display:inline-block;\"><input type=\"radio\" id=\"rad_whole\" name=\"NumberType\" checked value=\"wholeNumbers\" /> <label for=\"rad_whole\">Whole numbers only</label><br><input type=\"radio\" id=\"rad_fraction\" name=\"NumberType\" value=\"fractionNumbers\" /> <label for=\"rad_fraction\">Fractions</label><br></div>");
    controlPanel.append("<div class=\"valuesHolder\">Start number: <div id=\"input_startNumber\" class=\"inputDiv settingInput\">$0$</div><br/>End number: <div id=\"input_end\" class=\"inputDiv settingInput\">$10$</div><br/><span id=\"decimal_intervalLabel\" style=\"margin-top:50px;\">Value of interval between tick marks: </span><span id=\"fraction_intervalLabel\" style=\"margin-top:50px;\">Value of interval between tick marks: </span><div id=\"input_interval\" value=\"1\" class=\"inputDiv settingInput\"></div>"+

"<div id=\"decimal_interval\"><input type=\"radio\" checked id=\"dec_interval_1\" name=\"dec_interval\" /><label class=\"rightPad\" for=\"dec_interval_1\">$0.1$</label> <input type=\"radio\" id=\"dec_interval_2\" name=\"dec_interval\" /><label class=\"rightPad\" for=\"dec_interval_2\">$0.01$</label> <input type=\"radio\" id=\"dec_interval_3\" name=\"dec_interval\" /><label class=\"rightPad\" for=\"dec_interval_3\">$0.001$</label></div>"+
    
"<div id=\"fraction_interval\"><input type=\"radio\" checked id=\"interval_2\" name=\"interval\" /><label class=\"rightPad\" for=\"interval_2\">$1/2$</label> <input type=\"radio\" id=\"interval_3\" name=\"interval\" /><label class=\"rightPad\" for=\"interval_3\">$1/3$</label> <input type=\"radio\" id=\"interval_4\" name=\"interval\" /><label class=\"rightPad\" for=\"interval_4\">$1/4$</label> <input type=\"radio\" id=\"interval_6\" name=\"interval\" /><label  class=\"rightPad\" for=\"interval_6\">$1/6$</label> <input type=\"radio\" id=\"interval_8\" name=\"interval\" /><label class=\"rightPad\" for=\"interval_8\">$1/8$</label> </div><div class=\"settingInst\">The number line will be automatically locked. To unlock it, simply press the lock/unlock button at the top of the screen.</div></div>");
    controlPanel.append("<div id=\"btn_generate\" class=\"btnDesing\"><span>Generate</span></div>");
    messageBox.hide();
    $("#messageBox_btnOk").click(function(){messageBox.hide();})
    $("#btn_generate").click(changeNumberLine);
    $('#btn_addPoint').bind("click",addPointFn);
    $('#btn_addForward').bind("click",addForwardFn);
    $('#btn_addBackward').bind("click",addBackwardFn);
    $('#btn_addDifference').bind("click",addDifferenceFn);
    $('#btn_eraser').bind("click",eraserFn);
    $('#LockBtn').bind("click",lockFunc);
    /**/
    M.parseMath(document.body);
    numberline = new Numberline(numberlineHolder, equationHolder, {topSpace:60, widthAdjMargin: 30,minimumStart:0,maximumEnd:1000, applyKeyPadCallBack:function(){
	return new vKeyPad(".settingInput");
    }});
    numberline.setNumericState=function () {
        try {
            if (this.options.numericType == "decimal" && Math.round(this.options.xInterval) != this.options.xInterval) this.NumericKeypad.enableDecimal(true);
            else this.NumericKeypad.enableDecimal(false);
            if (this.options.numericType == "fraction") this.NumericKeypad.enableFraction(true);
            else this.NumericKeypad.enableFraction(true);
        }
        catch (e) { }
    }
    numberline.setNumericState();
    numberline.triggerParseMath = function(){
	M.parseMath(document.body);
    }
    numberline.lockRuler(true);
    numberline.triggerChange = function(){
        enableReset();
    }
    $(".icoReset").css({"opacity":"0.5"});
    $(".icoReset").bind(eventType, resetClick);
     eventBroker = _({}).extend(require('chaplin/lib/event_broker'));
	eventBroker.publishEvent("#fetch", { type : 'state' }, function(state) {
	    if (state) {
		_.each(JSON.parse(state), function(value, key, list) {
		     if (key == "numberlineValue") numberline.values = value;
		    else if (key == "icoReset") $(".icoReset").css({"opacity":value});
		    else if (key == "LockClass") $("#LockBtn").attr("class",value);
		    else if (key == "addpoint") $("#btn_addPoint").attr("class",value);
		    else if (key == "addForward") $("#btn_addForward").attr("class",value);
		    else if (key == "addBackward") $("#btn_addBackward").attr("class",value);
		    else if (key == "addDifference") $("#btn_addDifference").attr("class",value);
		    else if (key == "eraser") $("#btn_eraser").attr("class",value);
		    else if (key == "currentMode") numberline.currentMode = value;
		    else if (key == "equationHolder") $("#equationHolder").html(value);
		    else if(key == "curTickStart") numberline.options.curTickStart = value;
		    else if(key == "curTicks") numberline.options.curTicks = value;
		    else if(key == "xInterval") numberline.options.xInterval = value;
		    else if(key == "numericType") numberline.options.numericType = value;
		    //else if(key == "denominator") numberline.options.denominator = value;
		    else if(key == "rad") $("#rad_whole")[0].checked = value;
		    else if(key == "frac") $("#rad_fraction")[0].checked = value;
		    else if(key == "storedNumericType") storedNumericType = value;
		    else if(key == "f1") document.getElementById("interval_2").checked = value;
		    else if(key == "f2") document.getElementById("interval_3").checked = value;
		    else if(key == "f3") document.getElementById("interval_4").checked = value;
		    else if(key == "f4") document.getElementById("interval_6").checked = value;
		    else if(key == "f5") document.getElementById("interval_8").checked = value;
		    else if (key == "lockstate")
		    {
			numberline.rulerLocked = !value;
			lockFunc();
		    }
		});
	    }
	    numberline.setRulerWidth(numberline.options.curTicks);
	    numberline.NumericKeypad.loadControls();
	});
    setTimeout(function(){
        $('body').css({'-webkit-transform':'scale(1)'});
	$(".icoReset").bind(eventType, resetClick);
	numberline.drawRuler();
    }, 1000);
    
    $('#settingBtn').bind(eventType, function(){
        showControls();
    });
    
    $(".icoReset").bind(eventType, resetClick);
    
    numericKeyPad = new vKeyPad(".settingInput");
    numericKeyPad.enableDecimal(true);
    numericKeyPad.enableFraction(true);

    $('input[name="NumberType"]').change(function(){
        onNumericTypeChange(this);
    });
    onNumericTypeChange(null,storedNumericType);
});


function eraserFn() {
     var thisMode = "remove"
        if (numberline.currentMode != thisMode && numberline.values.length != 0) {
            changeMode(thisMode);
            $(this).addClass('selected');
        }
        else if(numberline.currentMode == thisMode){
            changeMode("");
            $(this).removeClass('selected');
        }
}

function addDifferenceFn() {	
    var thisMode = "createDifference"
        if (numberline.currentMode != thisMode) {
            changeMode(thisMode);
            $(this).addClass('selected');
        }
        else{
            changeMode("");
            $(this).removeClass('selected');
        }
}

function addForwardFn() {
    var thisMode = "createForward"
        if (numberline.currentMode != thisMode) {
            changeMode(thisMode);
            $(this).addClass('selected');
        }
        else{
            changeMode("");
            $(this).removeClass('selected');
        }
}

function addBackwardFn() {
    var thisMode = "createBackward"
        if (numberline.currentMode != thisMode) {
            changeMode(thisMode);
            $(this).addClass('selected');
        }
        else{
            changeMode("");
            $(this).removeClass('selected');
        }
}


function addPointFn() {
    var thisMode = "createPoint"
        if (numberline.currentMode != thisMode) {
            changeMode(thisMode);
            $(this).addClass('selected');
        }
        else{
            changeMode("");
            $(this).removeClass('selected');
        }
}

function lockFunc() {
    enableReset();
    if(numberline.rulerLocked) {
            numberline.lockRuler(false);
            $(this).addClass('selected');
        }else{
            numberline.lockRuler(true);
            $(this).removeClass('selected');
    }
}


function enableReset(){
    $(".icoReset").css({"opacity":"1"});
}

function onNumericTypeChange(selectedType, numericType, dontLoadDefaults){
    var isFirstLoad = numericType?true:false;
    if (selectedType) numericType = selectedType.value.replace("Numbers","");
    numericType = numericType ? numericType : "whole";
    storedNumericType = numericType;
    $('input[value^="'+storedNumericType+'"]').prop('checked', true);
    if (!dontLoadDefaults) {
	var startNo = numberline.options.curTickStart;
	var endNo = (numberline.options.curTicks+numberline.options.curTickStart)-1;
	var interval=numberline.options.xInterval;
	var denominator=numberline.options.denominator;
	if (numericType == "fraction") {
	    var startRem = startNo%denominator;
	    var endRem = endNo%denominator;
	    startNo = Math.floor(startNo / denominator);
	    endNo = Math.floor(endNo / denominator);
	    if (startRem) startNo = startNo+" "+startRem+"/"+denominator;
	    if (endRem) endNo = endNo+" "+endRem+"/"+denominator;
	}
	else {
	    startNo *= interval;
	    endNo *= interval;
	}
	
	if (!isFirstLoad) {
	    startNo = 0;
	    endNo = 10;
	}
	
	$('#input_startNumber').attr("mathtext", "");
	$('#input_startNumber').attr("actualtext", "");
	$('#input_end').attr("mathtext", "");
	$('#input_end').attr("actualtext", "");
	$('#input_interval').attr("mathtext", "");
	$('#input_interval').attr("actualtext", "");
	
        $('#input_startNumber').text("$"+startNo+"$");
        $('#input_end').text("$"+endNo+"$");
        $('#input_interval').text(numberline.options.xInterval);
	//document.getElementById("dec_interval_1").checked = true;
	
	
	if (!isFirstLoad) {
	    document.getElementById("interval_2").checked = true;
	}
	else{
	   // if (storedNumericType == "fraction") document.getElementById("interval_"+denominator).checked = true;
	}
    }
    if (numericType == "fraction") {
        $('#decimal_interval').hide();
        $('#input_interval').hide();
        $('#decimal_intervalLabel').hide();
        $('#fraction_interval').show();
        $('#fraction_intervalLabel').show();
        numericKeyPad.enableFraction(true);
        numericKeyPad.enableDecimal(false);
    }
    else {
        $('#decimal_intervalLabel').show();
        $('#fraction_interval').hide();
        $('#fraction_intervalLabel').hide();
        numericKeyPad.enableFraction(false);
        if (numericType == "decimal"){
            $('#input_interval').hide();
            $('#decimal_interval').show();
            numericKeyPad.enableDecimal(true);
        }
        else {
            $('#input_interval').show();
            $('#decimal_interval').hide();
            numericKeyPad.enableDecimal(false);
        }
    }
    M.parseMath(document.body);
}

function showControls(isForce, isShow) {
    var show = !$('#controlPanel').is(':visible');
    $("#LockBtn").removeClass('selected');
    numberline.lockRuler(true);
    if (isForce) show = isShow;
    if (!show) {
        $('#controlPanel').css({display:'none'});
	blocker.css({display:'none'});
        $('#settingBtn').css({"opacity":"1"});
    }else{
        $('#settingBtn').css({"opacity":"0.5"});
        $('#controlPanel').css({display:'block'});
	blocker.css({display:'block'});
        $('input[value^="'+storedNumericType+'"]').prop('checked', true);
        onNumericTypeChange(null, storedNumericType, true);
    }
}


function resetClick() {
    if ($('.icoReset').css('opacity') == "1") {
	$(".icoReset").removeClass('icoResetMove');
	var to=setTimeout(function(){
	clearInterval(to);
	$(".icoReset").addClass('icoResetMove');
	$('.icoReset').css({'opacity':'0.5','cursor':'default'});
	},200);
	onNumericTypeChange(null, "whole");
	numberline.reset();
	$('#equationHolder').html("");
	numberline.currentMode = "";
	$("#btn_addPoint").removeClass("selected");
	$("#btn_addForward").removeClass("selected");
	$("#btn_addBackward").removeClass("selected");
	$("#btn_addDifference").removeClass("selected");
	$("#btn_eraser").removeClass("selected");
	$("#LockBtn").removeClass('selected');
	numberline.lockRuler(true);
    }
}

function changeMode(mode, isReset){
    $('div[id^="btn_"]').removeClass('selected');
    numberline.currentMode = mode;
    if (!isReset) enableReset();
}

function changeNumberLine(){
    enableReset();
    $("#LockBtn").removeClass('selected');
    numberline.lockRuler(true);
    //if(document.getElementById("rad_decimal").checked) storedNumericType = "decimal";
  if(document.getElementById("rad_fraction").checked) storedNumericType = "fraction";
    var interval = 1;
    var denominator = 1;
    var start = 0;
    var end = 11;
    var success = true;
    var errorMessage = "Error in parsing Data. Please ensure your input.";
    try{
        start = $("#input_startNumber").children().eq(0).attr("alttext");
        end = $("#input_end").children().eq(0).attr("alttext");
        if (storedNumericType == "fraction") {
            interval = 1;
            if(document.getElementById("interval_2").checked) denominator = 2;
            else if(document.getElementById("interval_3").checked) denominator = 3;
            else if(document.getElementById("interval_4").checked) denominator = 4;
            else if(document.getElementById("interval_6").checked) denominator = 6;
            else if(document.getElementById("interval_8").checked) denominator = 8;
            else if(document.getElementById("interval_10").checked) denominator = 10;
        }
        else if (storedNumericType == "decimal") {
            denominator = 1;
            if(document.getElementById("dec_interval_1").checked) interval = 0.1;
            else if(document.getElementById("dec_interval_2").checked) interval = 0.01;
            else if(document.getElementById("dec_interval_3").checked) interval = 0.001;
        }
        else {
            denominator = 1;
            interval = parseFloat($("#input_interval").text().toString());
        }
        if (!start) start = $("#input_startNumber").text();
        if (!end) end = $("#input_end").text();
        denominator = denominator ? denominator : 1;
        interval = interval ? interval : 1;
        var result = numberline.changeSetting(storedNumericType.toString(), start.toString(), interval.toString(), end.toString(), denominator);
        success = result.value;
        //$("#input_startNumber").html(result.start ? "$" + result.start + "$" : 0);
        //$("#input_interval")[0].value = result.interval;
        //$("#input_end")[0].value = result.count;
        M.parseMath(document.body);
        errorMessage = result.errorMessage;
    }
    catch(e){ success = false; errorMessage = e; }
    if (!success){
        if (errorMessage != "") {
            $("#messageBox_message").html(errorMessage);
            messageBox.show();
        }
    }
    else showControls(true, false);
}


function Qinst() {
    $("#QBlocker").show();
    $("#block").show();
}

function Qclose() {
    $("#QBlocker").hide();
    $("#block").hide();
}



eventBroker = _({}).extend(require('chaplin/lib/event_broker'));
eventBroker.subscribeEvent('#doSave', function(state) {
    var states = {};
    var arrows = numberline.values;
    var resultantVal = [];
    var numericType = numberline.options.numericType;
    //numberline.values[i].keyedText = $(numberline.values[i].displayBox).attr("mathtext");
    for(var arrIndx=0; arrIndx<arrows.length; arrIndx++){
	var arrow = arrows[arrIndx];
	var resArrow = {};
	for (var arrVal in arrow) {
	    if(arrVal != "displayBox" && arrVal != "equationBox"){
		resArrow[arrVal] = arrow[arrVal];
	    }
	}
	resultantVal.push(resArrow);
    }
    
    var rad = $("#rad_whole")[0].checked;
    var frac = $("#rad_fraction")[0].checked;
    var equationHolder = $("#equationHolder").html();
    var addpoint = $("#btn_addPoint").attr("class");
    var addForward = $("#btn_addForward").attr("class");
    var addBackward  = $("#btn_addBackward").attr("class");
    var addDifference  = $("#btn_addDifference").attr("class");
    var eraser  = $("#btn_eraser").attr("class");
    var f1 =  document.getElementById("interval_2").checked;
    var f2 = document.getElementById("interval_3").checked;
    var f3 = document.getElementById("interval_4").checked;
    var f4 = document.getElementById("interval_6").checked;
    var f5 = document.getElementById("interval_8").checked;
    
    //"denominator":numberline.options.denominator,
    states = {"numberlineValue":resultantVal,"curTickStart":numberline.options.curTickStart, "curTicks":numberline.options.curTicks,"xInterval":numberline.options.xInterval,"icoReset":$(".icoReset").css("opacity"),"lockstate":numberline.rulerLocked,"LockClass":$("#LockBtn").attr("class"),"currentMode":numberline.currentMode,"equationHolder":equationHolder,"addpoint":addpoint,"addForward":addForward,"addBackward":addBackward,"addDifference":addDifference,"eraser":eraser,"numericType":numericType,"rad":rad,"frac":frac,"storedNumericType":storedNumericType,"f1":f1,"f2":f2,"f3":f3,"f4":f4,"f5":f5};
    var message = {
	type : 'state',
	data : JSON.stringify(states)
    };
    eventBroker.publishEvent("#save", message);
});
function saveFunction(){
    eventBroker.publishEvent("#doSave");
}