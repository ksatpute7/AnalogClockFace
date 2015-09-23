var container, canvasClock;
var adjClock;
var eventType = "click";
var isFiveMinsIncReq = true;
var isShadeReq = false;

$(document).ready(function(){
    
     if("ontouchstart" in document.documentElement){
	eventType = "touchstart"
    }
    
    var table=["<div id=\"blocker\" ontouchstart=\"instruct()\"></div><div class=\"question\" onclick=\"instruct()\"><div style=\"position:absolute; left:2%; top:5%; opacity:0.6;\" id=\"instructions-button\"><img src=\"images/btInfoOn.png\" width=\"25px\" height=\"27px\" /></div><span style=\"text-align:left; font-family:myFontfamily; font-size:21px;left:42px; line-height:1.4em; width:390px; position:absolute; top:35px;\">Move the minute hand of the clock <br/>around the clock face.</span><div class=\"closeBtn\" >&#x000D7;</div><div style=\"position:absolute; left:43%; top:75%;\" ></div></div>"];
    
    footerContainer = $("<div class=\"container\"><div class=\"contentFeedback\"><div class=\"btReset\"><div class=\"icoReset\"></div></div><div class=\"btInfo\"><div id=\"icoinf\" onclick=\"openInst()\" class=\"icoInfo\"></div></div><div class=\"btFeedback\"><div class=\"icoFeed\"></div></div></div></div></div>");
    container = $('<div id="interactive_Container"></div>');
    canvasClock = $('<canvas id="clock" width="600" height="600" style="border:0px solid;"></canvas>');
    container.append(table[0]);
    container.append(footerContainer);
    container.append(canvasClock);
    $("body").append(container);
    
    adjClock = new AdjustableClock(canvasClock, {digital:false});
    
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
     $(window).bind("mousedown touchstart",function(e){
	//e.preventDefault();
	
    })
    
    $(".icoInfo").on('click',function () {
        $('.question,#blocker').show();
        toggleClassButton($(".icoInfo"),'icoInfoMove');
	 $('#icoinf').css('background-image', 'url('+'./images/btInfoOn.png'+')');
    });
    
    $(".icoReset").unbind(eventType,resetfn);
    
           /*Save Functionality*/
    eventBroker = _({}).extend(require('chaplin/lib/event_broker'));
    eventBroker.publishEvent("#fetch", { type : 'state' }, function(state) {
	if (state) {
            _.each(JSON.parse(state), function(value, key, list) {
		if (key == "totMin") {
		    _this.totMinutes = value;
		}
		else if (key == "minX") {
		    _this.minuteX = value;
		}
		else if (key == "minY") {
		    _this.minuteY = value;
		}
		else if (key == "prvAngle") {
		    _this.prvAngle = value;
		}
		else if (key == "newAngle") {
		    _this.newAngle = value;
		}
		else if (key == "hourAngle") {
		    _this.hourAngle = value;
		}
		else if (key == "minuteAngle") {
		    _this.minuteAngle = value;
		}
		else if (key=="resetStatus") {
		    if (value=="1") {
			$(".icoReset").css('opacity','1');
			try{$(".icoReset").unbind('touchstart click',resetfn);}catch(e){}
			$(".icoReset").bind('touchstart click',resetfn);
		    }
		}
	    });
	    setTimeout(function(){
		$('body').css({'-webkit-transform':'scale(1)'});
		_this.drawClock();	
	    }, 500);
	}
    });
});



function instruct(){
	$('.question,#blocker').hide();
	$('.icoInfo').css({'opacity':'1'});
	try {
		$('#instructions-button-container').unbind(eventType,openInst);
	} catch(e){}
		$('#instructions-button-container').bind(eventType,openInst);
}

function openInst(){
	$('.question,#blocker').show();
	$('.icoInfo').css({'opacity':'0.5'});
}

function toggleClassButton(element,className){
	
	var currentButton=element;
	if(!currentButton.hasClass(className)){
		currentButton.addClass(className);
	}else{
		currentButton.removeClass(className);	
	}
}


function resetfn(){
    try {
	    $(".icoReset").unbind(eventType,resetfn);
    }
    catch(e) {
	    $(".icoReset").bind(eventType,resetfn);
    }
    $(".icoReset").removeClass('icoResetMove');
    var to=setTimeout(function(){
	    clearInterval(to); $(".icoReset").addClass('icoResetMove');
    },200)
    $('.icoReset').css({'opacity':'0.5', 'cursor':'default'});
    $(".icoReset").unbind('touchstart click',resetfn);
    _this.clockReset();
}

eventBroker = _({}).extend(require('chaplin/lib/event_broker'));
eventBroker.subscribeEvent('#doSave', function(state) {
    var states = {};
    var totMin = _this.totMinutes;
    var minX = _this.minuteX;
    var minY = _this.minuteY;
    var prvAngle = _this.prvAngle;
    var newAngle= _this.newAngle;
    var hourAngle= _this.hourAngle;
    var minuteAngle= _this.minuteAngle;
    states = {"totMin":totMin,"minX":minX ,"minY":minY ,"prvAngle":prvAngle ,"newAngle":newAngle, "hourAngle":hourAngle,"minuteAngle":_this.minuteAngle,"resetStatus":$('.icoReset').css('opacity')};
    var message = {
	type : 'state',
	data : JSON.stringify(states)
    };
    eventBroker.publishEvent("#save", message);
});
    
function saveFunction(){
    eventBroker.publishEvent("#doSave");
}