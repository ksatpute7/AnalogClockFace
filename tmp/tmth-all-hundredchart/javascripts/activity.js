// developed by Lapiz */
var pageContainer, menuContainer, page0,color_code, color_obj = "#color1",feedbackStatus=false;
var PageContent = {};
var numberChart;
var index;
var colAppliedRC = [];
var colAppliedAtStretch = [];
var isMouseDown = false;

var mouseStartEvent = "mousedown";
var mouseMoveEvent = "mousemove";
var mouseUpEvent = "mouseup";


$(document).ready(
    function(){
	
	if('ontouchstart' in document) {
	    mouseStartEvent = "touchstart";
	    mouseMoveEvent = "touchmove";
	    mouseUpEvent = "touchend";
	}
	
	setTimeout(function(){
	    $('body').css({'-webkit-transform':'scale(1)'});  
	},500);
            
	document.onkeydown = function(){
	    if(window.event && window.event.keyCode == 9) 
	    { // Capture and remap TAB
		window.event.keyCode = 9;
	    }
	    if(window.event && window.event.keyCode == 9) 
	    { // New action for TAB
		//alert('The TAB key was pressed');
		return false; 
	    }
	}
	//$('body').css({'-webkit-transform':'scale(0.91)'});
	//This function is called after the page loads. We are adding the all the elements to the html here.
        var table=["<div id=\"blocker\" onclick=\"instruct()\"></div><div class=\"question\" onclick=\"instruct()\"><div style=\"position:absolute; left:2%; top:5%; opacity:0.6;\" id=\"instructions-button\"><img src=\"images/btInfoOn.png\" width=\"25px\" height=\"27px\" /></div><span style=\"text-align:left; font-family:myFontfamily; font-size:21px;left:40px; line-height:1.4em; width:320px; position:absolute; top:45px;\">Tap a color to highlight it. Then tap the number(s) you want to color. A number can be colored with 1, 2, or 3 colors. To erase a color, highlight that color and then tap on the number where you want to erase that color.</span><div class=\"closeBtn\" >&#x000D7;</div><div style=\"position:absolute; left:43%; top:75%;\" ></div></div>"];
        pageContainer = $("<div id=\"interactive-container\" />");
        menuContainer = $("<div id=\"page-container\" />");
	menuContainer1 = $("<div id=\"page-container1\" />");
        footerContainer = $("<div class=\"container\"><div class=\"contentFeedback\"><div class=\"btReset\"><div class=\"icoReset\"></div></div><div class=\"btInfo\"><div id=\"icoinf\" onclick=\"openInst()\" class=\"icoInfo\"></div></div><div class=\"btFeedback\"><div class=\"icoFeed\"></div></div></div></div></div>");
	page0 = $("<div id=\"page-0\" class=\"page\" />");
        blocksContainer = $("<div id=\"second\"><div id=\"blocks-container\"><div id=\"Multiply_table\"><table id=\"inner_table\"></table></div></div>");
	color_picker = $("<div id=\"color_picker\"><table><tr><td id=\"color1\" class=\"selected\" onclick=\"fixColor(this)\"></td><td id=\"color2\" onclick=\"fixColor(this)\"></td><td id=\"color3\" onclick=\"fixColor(this)\"></td></tr><tr><td id=\"color4\" onclick=\"fixColor(this)\"></td><td id=\"color5\" onclick=\"fixColor(this)\"></td><td id=\"color6\" onclick=\"fixColor(this)\"></td></tr><tr><td id=\"color7\" onclick=\"fixColor(this)\"></td><td id=\"color8\" onclick=\"fixColor(this)\"></td><td id=\"color9\" onclick=\"fixColor(this)\"></td></tr></table></div></div>");
        page0.append(table[0]);
	page0.append(footerContainer);
        menuContainer.append(page0);
	pageContainer.append(menuContainer1);
	pageContainer.append(menuContainer);
        $('body').append(pageContainer);
        toggleClassButton($(this),'icoInfoMove');
        page0.append(blocksContainer);
	page0.append(color_picker);
	table_creation();
	$(".icoInfo").on('click',function () {
	    $('.question,#blocker').show();
	    toggleClassButton($(".icoInfo"),'icoInfoMove');
	    $('#icoinf').css('background-image', 'url('+'./images/btInfoOn.png'+')');
	});
	
	 $('.icoReset').css({'opacity':'0.5'});
	   $(".icoReset").bind('click', resetfn);

    index = $("#inner_table").find("td").length;
    numberChart = new NumberChart($("#inner_table").find("td"), index);
    
    var selectedColor = $("#color_picker .selected");
	if (selectedColor.length > 0) fixColor(selectedColor[0]);
    
	/*Saved state*/
eventBroker = _({}).extend(require('chaplin/lib/event_broker'));
eventBroker.publishEvent("#fetch", { type : 'state' }, function(state) {
    if(state){
	_.each(JSON.parse(state), function(value, key, list){
	    if(key == "selectedId") {
		$("[id^=color]").removeClass("selected");
		$("#"+value).addClass("selected");
	    }
	    
	    if(key == "resetState"){
		$(".icoReset").css({'opacity':value});
	    }
	    if(key == "colorsObj") {
		numberChart.colors = value;
	    }
	})
	numberChart.reDraw();
	var selectedColor = $("#color_picker .selected");
	if (selectedColor.length > 0) fixColor(selectedColor[0]);
    }
    
});


eventBroker.subscribeEvent('#doSave', function(state) {
    var states = {};
    
    selectedId = $(".selected").attr("id");
    resetState = $(".icoReset").css('opacity');
    colorsObj = numberChart.colors;
    console.log('>>>>>>>>>',resetState);
    
    
    states = {"selectedId": selectedId, "resetState": resetState, "colorsObj": colorsObj};    
    var message = {
	    type : 'state',
	    data : JSON.stringify(states)
    };
    eventBroker.publishEvent("#save", message);
    
    });



    
});



function table_creation() {
    $("#inner_table")[0].innerHTML=""
    for (i=0; i<10; i++) {
        table_inner = "<tr>"
        for (j=0; j<10; j++) {
            table_inner += "<td id='r" + i + "c" + j +"' class=\"table_data\"'><span>" +(((i*10)+j+1)+0)+"</span></td>"
        }
        table_inner += "</tr>"
        $("#inner_table")[0].innerHTML+=table_inner;
    }
    
    $(".table_data").bind(mouseStartEvent, startApplyColor);
    $(window).bind(mouseMoveEvent, tryToApplyColor);
    $(window).bind(mouseUpEvent, resetApplyColorState);
}

function startApplyColor(event){
    isMouseDown = true;
    tryToApplyColor(event, this);
}
function tryToApplyColor(event, element){
    if (isMouseDown) {
	if (!element){
	    element = this;
	    try{
		var el = document.elementFromPoint(event.originalEvent.touches[0].pageX, event.originalEvent.touches[0].pageY);
	    }catch(e){
		var el = document.elementFromPoint(event.pageX, event.pageY);
	    }
	    element = $(el);
	    if (!element.hasClass(".table_data")) element = element.parents(".table_data");
	    element = element[0];
	}
	
	if (element)
	    if (colAppliedAtStretch.indexOf(element.id) < 0) {
		var allow = true;
		if (colAppliedAtStretch.length == 0) colAppliedRC = getRowAndCol(element);
		else {
		    var RC_details = getRowAndCol(element);
		    if (RC_details[0] != colAppliedRC[0] && RC_details[1] != colAppliedRC[1]) allow = false;
		}
		if (allow) {
		    colAppliedAtStretch.push(element.id);
		    applyColor(element);
		}
	    }
    }
}

function getRowAndCol(element){
    var row = 0;
    var col = 0;
    var splitVal = element.id.split("c");
    row = parseInt(splitVal[0].replace(/[a-zA-Z]/g, ""));
    col = parseInt(splitVal[1].replace(/[a-zA-Z]/g, ""));
    return [row, col];
}

function resetApplyColorState(event){
    colAppliedAtStretch = [];
    colAppliedRC = [];
    isMouseDown = false;
}
function fixColor(obj) {
    color_code = $("#" + obj.getAttribute("id")).css("background-color");
    color_obj = "#" + obj.getAttribute("id");
    
    $("[id^=color]").removeClass("selected");
    $(obj).addClass("selected");
}
var count=0;
function applyColor(cell_obj)
    {
	var selectedCell = ($(cell_obj).find("span").text()-1);
	
	numberChart.createAngle(selectedCell, color_code);
	$('.icoReset').css({'opacity':'1'});
    }
function instruct(){
	$('.question,#blocker').hide();
	$('.icoInfo').css({'opacity':'1'});
	try {
		$('#instructions-button-container').unbind('click',openInst);
	} catch(e){}
		$('#instructions-button-container').bind('click',openInst);
}
function openInst(){
	$('.question,#blocker').show();
	$('.icoInfo').css({'opacity':'0.5'});
}
function toggleClassButton(element,className){
    var currentButton=element;
    if(!currentButton.hasClass(className)){
	currentButton.addClass(className);
    }
    else{
	currentButton.removeClass(className);	
    }
}
function resetfn(){
    if ($('.icoReset').css('opacity') == 1) {
	$('.icoReset').removeClass('icoResetMove');
	var target = $(this);
	var to=setTimeout(function(){
	    clearInterval(to);
	    target.addClass('icoResetMove');
	    $(".icoReset ").css({'opacity':'0.5','cursor':'default'});
	    $(".icoFeed").css({"opacity":"0.5"});
	},200);
	numberChart.resetAct();
	$("[id^=color]").removeClass("selected");
	$("#color1").addClass("selected");
	color_code="rgb(255, 255, 0)";
    }
}

function saveFunction(){
    eventBroker.publishEvent("#doSave");
}
