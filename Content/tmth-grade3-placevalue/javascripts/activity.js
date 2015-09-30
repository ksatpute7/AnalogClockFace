 var activity;
eventBroker = _({}).extend(require('chaplin/lib/event_broker'));
$(document).ready(function(){
    var pagecontainer = $('<div id="interactive-container" />');
    var menucontainer = $('<div id="pagecontainer" />');
    var page0 = $('<div id="page-0" class="page" />');
    var instruction = $('<div id="blocker" onClick="instruct()" ></div><div class="question" onClick="instruct()"><div style="position:absolute; left:2%; top:4%; opacity:0.6;"><div><img src="images/btInfoOn.png" width="25px" height="27px" /></div></div><span style="text-align:left; font-family:myFontfamily; left:40px; line-height:1.4em; width:435px; position:absolute; top:45px;">Instruction to come.</span><div class=\"closeBtn\" >&#x000D7;</div></div>');
    var title = $('<div id="title"></div>')
    var tableContainer = $('<div id="tableContainer"></div>');
    var navBtns = $('<div class="contentFeedback"><div class="pagebtnCon"><div class="btReset"><div class="icoReset"></div> </div> <div class="btInfo" style="opacity:1"><div class="icoInfo"></div></div><div class="btFeedback"><div class="icoFeed"></div> </div> <div class="score"> <div id=contCorrect><span id="countCorrect">0</span> <img src=images/IconCorrect.png></div><div id=contIncorrect><span id="countIncorrect">0</span> <img src=images/IconIncorrect.png></div></div></div>');
    page0.append(instruction);
    page0.append(title);
    page0.append(tableContainer);
    page0.append(navBtns);
    menucontainer.append(page0);
    pagecontainer.append(menucontainer);
    $("body").append(pagecontainer);
    $(".icoInfo").bind("click", showInstruction);
    $(".icoReset").css({'opacity':'0.5'});
    showInstruction();
    activity = new PlaceValueTable($('#tableContainer'), {title:"", grade:'3',minRow:1, maxRow:5, defaultRows:1, isInstructionNeeded:true, preLoadValues:[], preLoadedCellBg:'', canRemovePreLoadedRows:false, headerAudios:[]});
    /*Fetch Functionality*/
    setTimeout(function (){
	eventBroker.publishEvent("#fetch", { type : 'state' }, function(state) {
	    if (state) {
		_.each(JSON.parse(state), function(value, key, list) {
		    if (key == "isResetEnabled") {
			if (value=="true") {
			    $(".icoReset").css({'opacity':'1','cursor':'pointer'});
			    $(".icoReset").bind('click',reset);
			}
		    }
		    else if (key=="mainTable") {
			    $('.mainTable').html(value);
			    activity.checkState();
			    try{
				$('.removeColumn').unbind('click', activity.removeRows);
			    }catch(e){}
			    try{$('.removeColumn').bind('click', activity.removeRows);}catch(e){}
			    try{
			    $('.audioicon').unbind('click', activity.playValueAudio);
			    }catch(e){}
			    try{$('.audioicon').bind('click', activity.playValueAudio);}catch(e){}
			    
			    $('#upBtn').bind(this.DownEvent, this.arrangeRow);
			    $('#downBtn').bind(this.DownEvent, this.arrangeRow);
			    $('input[type="checkbox"]').bind('click', function(event){activity.chooseRow(event);});
			    
			    activity.keypad.loadControls();
			    activity.keypad.onTextChanged = function(event, target){
				$(target.CurrentFocus).attr('value',$(target.CurrentFocus).val());
			    }
			    activity.keypad.onTextBoxFocus = function(target){
				target.parent().css({'background-color':'"#faecc9"'});
			    }
			    activity.keypad.onTextBoxBlur = function(target){
				target.parent().css({'background-color':'"#fff"'});
			    }
			}
		});
	    }
	});
    }, 100);
});

function instruct()
{
    $(".question, #blocker").hide();
    $('.btInfo').css({'opacity':'1'});
}
	
function showInstruction()
{
    $(".question, #blocker").hide();
    $('.btInfo').css({'opacity':'0.5'});
}
function resetEnable(){
    $(".icoReset").css({'opacity':'1','cursor':'pointer'});
    try{
	$(".icoReset").unbind('click',reset);
    }catch(e){}
    $(".icoReset").bind('click',reset);
}

function reset() {
    $(".icoReset").removeClass('icoResetMove');
    var to=setTimeout(function(){
        clearInterval(to);
	activity.reset();
        $(".icoReset").addClass('icoResetMove');				
    });
    setTimeout(function(){
	$(".icoReset").css({'opacity':'0.5','cursor':'default'});
	$(".icoReset").unbind('click',reset);
    },800);
}
/*Save Functionality*/
eventBroker.subscribeEvent('#doSave', function(state) {
    var isResetEnabled = ($(".icoReset").css('opacity') < 1 ? "false" : "true");
    $('.numTxt').each(function (){
	$(this).css({'background': '#FFF'});
    });
    
    var state = {"isResetEnabled":isResetEnabled, 'mainTable':$('.mainTable').html()};
    var message = {
	type : 'state',
	data : JSON.stringify(state)
    };
    eventBroker.publishEvent("#save", message);
});
function saveFunction(){
    eventBroker.publishEvent("#doSave");
}