var activityName = "tmth-all-areamodel";
var activityVersion = "1.0";
var tableArray = {"tablesInRow":1, "tablesInCol":1};
var totSplitCount = 4;
var maxCutsInDirection = 2;
var totRows = 4;
var totCols = 5;
var expKeyPad, labelKeyPad, userAnsKeyPad;
var resetState,resetStage;
var userAnsArr = [];
var userAnswerOrder = [];
var rowSplitArray=[];
var colSplitArray=[];
$(document).ready(
    function(){
        pageContainer = $("<div id=\"interactive-container\" />");
        menuContainer = $("<div id=\"page-container\" />");
        page0 = $("<div id=\"page-0\" class=\"page array animated fadeIn\"><header id=\"equation-frame-container\"><div style=\"position:absolute; top:10px; left:50px;\"><div class='fillbox'><input id=\"f1\" class=\"numTxt expLabel\" readonly=\"readonly\" maxlength=\"1\" type=\"text\"/></div><div style=\"margin-left: 18px;margin-right:15px;width:20px; font-family: GillSansNormal; position:relative; top:13px; font-size: 28px; float:left\">&times;</div><div class='fillbox'><input id=\"f3\" class=\"numTxt expLabel\" readonly=\"readonly\" maxlength=\"1\" type=\"text\"/></div><div id=\"solveEquation\" style=\"position:absolute; width:760px; top:18px; left:157px\"><div></div><div></div></div></header><nav id=\"tools-menu-container\"><div class=\"strip-bg\"></div><ul id=\"tools-menu\" role=\"menu\"><li><button class=\"btn primary submenu-trigger disabled\" id=\"cutArrayButton\" disabled=\"disabled\"><span class=\"btn-content\"><span class=\"icon-container\"><i class=\"icon-cut-array-hor\"></i></span><span class=\"text-container\"><span class=\"text\">Cut Area</span></span></span></button><ul class=\"submenu total-items-even\"><li onclick=\"cutFunctionality(this);\"><a href=\"javascript:void(0);\" class=\"btn\" id=\"cutArrayHorizontalButton\"><span class=\"btn-content\"><span class=\"icon-container\"><i class=\"icon-cut-array-hor-green\"></i></span><span class=\"text-container\"><span class=\"text\">Cut Horizontal</span></span></span></a></li><li onclick=\"cutFunctionality(this);\"><a href=\"javascript:void(0);\" class=\"btn\" id=\"cutArrayVerticalButton\"><span class=\"btn-content\"><span class=\"icon-container\"><i class=\"icon-cut-array-vert-green\"></i></span><span class=\"text-container\"><span class=\"text\">Cut Vertical</span></span></span></a></li></ul></li><li><button class=\"btn primary disabled\" id=\"labelArrayButton\" disabled=\"disabled\"><span class=\"btn-content\"><span class=\"icon-container\"><i class=\"icon-label-array\"></i></span><span class=\"text-container\"><span class=\"text\">Label Area</span></span></span></button></li><li><button class=\"btn primary disabled\" id=\"SolveEquationButton\" disabled=\"disabled\"><span class=\"btn-content\"><span class=\"icon-container\"><i class=\"icon-label-array_solve\"></i></span><span class=\"text-container\"><span class=\"text\">Partial Products</span></span></span></button></li><li><button class=\"btn primary submenu-trigger disabled\" id=\"changeObjectButton\" disabled=\"disabled\"><span class=\"btn-content\"><span class=\"icon-container\"><i class=\"icon-change-object\"></i></span><span class=\"text-container\"><span class=\"text\">Sum</span></span></span></button></li></ul></nav><div id=\"array-container\"><div id=\"array-overlaysBlock\"></div><div id=\"array-overlays\"><div class=\"cut-array hor horizontal draggable only-y disabled\" style=\"display: none; top: 0px; left: 0px;\"><div class=\"gripper left\"></div><div class=\"dashed\"></div><div class=\"cut-icon\"></div><div class=\"gripper right\"></div></div><div class=\"cut-array vert vertical draggable only-x disabled\" style=\"display: none;  top: 0px; left: 0px;\"><div class=\"gripper top\"></div><div class=\"dashed\"></div><div class=\"cut-icon\"></div><div class=\"gripper bottom\"></div></div></div><div id=\"gridContainer\"></div></div></div>");
	nav = ("<div class=\"contentFeedback\"><div class=\"btReset\" ><div class=\"icoReset\"></div></div><div class=\"btInfo\" ><div class=\"icoInfo\"></div></div><div class=\"btFeedback\"><div class=\"icoFeed inactive\" id=\"submit\"></div></div><div class=\"score\"><div id=\"contCorrect\"><span id=\"crt\">0</span> <img src=\"images/IconCorrect.png\"></div><div id=\"contIncorrect\"><span id=\"incrt\">0</span><img src=\"images/IconIncorrect.png\"></div></div></div>");
	hiddenTxt = $("<div ><input id=\"editorTxt1\" type=\"hidden\" /><input id=\"editorTxt2\" type=\"hidden\" /><input id=\"editorTxt3\" type=\"hidden\" /><input id=\"editorTxt4\" type=\"hidden\" /><input id=\"editorTxt5\" type=\"hidden\" /><input id=\"editorTxt6\"type=\"hidden\" /><input id=\"editorTxt7\"type=\"hidden\" /><input id=\"editorTxt8\"type=\"hidden\" /><input id=\"editorTxt9\"type=\"hidden\" /><input id=\"editorTxt10\"type=\"hidden\" /></div>");
	vkeyCont = $("<div id=\"vkeyCont\" />");
	page0.append(nav);
	page0.append(hiddenTxt);
	pageContainer.append(vkeyCont);
	menuContainer.append(page0);
        pageContainer.append(menuContainer);
        $('body').append(pageContainer);
        $(".icoReset").css({"opacity":"0.5"});
        
	//Grid Functionalities
	var gridTop = $('<div id="gridTop"></div>');
	var origLabelTop = $('<div id="origLabelTop"><input type="text" class="origLabel numTxt" readonly="true"/></div>');
	var splitLabelsTop = $('<div id="splitLabelsTop"></div>');
	gridTop.append(origLabelTop).append(splitLabelsTop);
	var gridBottom = $('<div id="gridBottom"></div>');
	var origLabelBot = $('<div id="origLabelBot"><input type="text" class="origLabel numTxt" readonly="true"/></div>');
	var splitLabelsBot = $('<div id="splitLabelsBot"></div>');
	var gridSeparator = $('<div id="gridSeparator"></div>');
	var gridWorkArea = $('<div id="gridWorkArea"></div>');
	var areaTable = $('<table cellpadding="0" cellspacing="0" border="0"><tr><td><input type="text" class="userAns" readonly="true"/></td><td><input type="text" class="userAns" readonly="true"/></td><td><input type="text" class="userAns" readonly="true"/></td></tr><tr><td><input type="text" class="userAns" readonly="true"/></td><td><input type="text" class="userAns" readonly="true"/></td><td><input type="text" class="userAns" readonly="true"/></td></tr><tr><td><input type="text" class="userAns" readonly="true"/></td><td><input type="text" class="userAns" readonly="true"/></td><td><input type="text" class="userAns" readonly="true"/></td></tr></table>');
	gridWorkArea.append(areaTable);
	gridBottom.append(origLabelBot).append(splitLabelsBot).append(gridWorkArea).append(gridSeparator);
	$('#gridContainer').append(gridTop).append(gridBottom);
	$('#gridSeparator').css({left:$('#gridWorkArea').position().left+'px',top:$('#gridWorkArea').position().top+'px',width:$('#gridWorkArea').width()+'px',height:$('#gridWorkArea').height()+'px'});
	//End
	
	
	//Outcomes Area
	
	var outcomeArea = $('<div id="outcomeArea"></div>');
	var outcomeTop = $('<div id="outcomeTop"></div>');
	var outcomeMid = $('<div id="outcomeMid"></div>');
	var outcomeBot = $('<div id="outcomeBot"></div>');
	
	var expLeft = $('<div id="expLeft"></div>');
	var expRight = $('<div id="expRight">&times;</div>');
	outcomeTop.append(expLeft).append(expRight);
	outcomeArea.append(outcomeTop).append(outcomeMid).append(outcomeBot);
	$('#page-0').append(outcomeArea);
	$('#outcomeArea').hide();
	//End
          
    try {
	M.parseMath(document.body);
    } catch(e) {}
    
    setTimeout(function(){
      $("body").css({"-webkit-transform":"scale(1)"});
      },1000);
    BindEvents();
    cutArryDrag();
    
    $('.origLabel, .splitLabel, .userAns').hide();
    $('.origLabel').css({'pointer-events':'none'});
    /*Save Functionality*/
    eventBroker = _({}).extend(require('chaplin/lib/event_broker'));
    eventBroker.publishEvent("#fetch", { type : 'state' }, function(state){
      if (state) {
            
            
            _.each(JSON.parse(state), function(value, key, list) {
		
		if(key=="expression"){
		    $('#f1').val(value.left);
		    $('#f3').val(value.right);
		    if (value.state!=null && value.state!=undefined) {
			if (value.state == "disabled") {
			    $('#f1, #f3').attr('disabled', 'disabled').css({'pointer-events':'none'});
			}
		    }
		}else if (key=="splitLabelsTop") {
		    $('#splitLabelsTop').html(value);
		}else if (key=="splitLabelsBot") {
		    $('#splitLabelsBot').html(value);
		}else if(key == "splitLables"){
		    for(var label =0; label < value.length; label++){
			$('.splitLabel').eq(label).val(value[label].val);
			if (value[label].isVisible == true) {
			    $('.splitLabel').eq(label).show()
			}
		    }
		}else if(key == "userAnsLables"){
		    for(var label =0; label < value.length; label++){
			$('.userAns').eq(label).val(value[label].val);
			if (value[label].isVisible == true) {
			    $('.userAns').eq(label).show()
			}
		    }
		}else if(key == "toolsBtnState"){
		    if (value.cutarea == true) {
			$('.origLabel').show();
			if (parseFloat($('#f1').val()) > parseFloat($('#f3').val())) {
			    $('#origLabelTop .numTxt').val($('#f1').val());
			    $('#origLabelBot .numTxt').val($('#f3').val());
			}
			else {
			    $('#origLabelTop .numTxt').val($('#f3').val());
			    $('#origLabelBot .numTxt').val($('#f1').val());
			}
			$('#cutArrayButton').removeAttr('disabled').removeClass('disabled').addClass('active');
		    }
		    if (value.labelarea == true) {
			$('#labelArrayButton').removeAttr('disabled').removeClass('disabled').addClass('active');
		    }
		    if (value.partialproducts == true) {
			$('#SolveEquationButton').removeAttr('disabled').removeClass('disabled').addClass('active');
		    }
		    if (value.sum == true) {
			$('#changeObjectButton').removeAttr('disabled').removeClass('disabled').addClass('active');
		    }
		}else if(key == "gridWorkArea"){
		    $('#gridWorkArea').html(value);
		}else if(key == "outcomeState"){
		    $('#outcomeArea').html(value.content);
		    if (value.isVisible==true) {
			$('#outcomeArea').show();
		    }
		}else if(key == "resetState"){
		    $('.icoReset').css('opacity', value);
		}else if (key=="userAnsArr"){
		    userAnsArr = value;
		}else if(key == "userAnsOrder"){
		    userAnsOrder = value;
		}else if (key=="rowSplitArray") {
		    rowSplitArray = value;
		}else if (key=="colSplitArray") {
		    colSplitArray = value;
		}else if (key=="gridSeparator") {
		    $('#gridSeparator').html(value);
		}
		
		
	    });
	    
	    if (colSplitArray.length>=maxCutsInDirection) {
		$('#cutArrayVerticalButton').parent().removeAttr('onclick').removeClass('selected');
		$('#cutArrayVerticalButton').parent().css({'opacity':'0.5'});
		$('.cut-array.vert').hide();
	    }
	    if (rowSplitArray.length>=maxCutsInDirection) {
		$('#cutArrayHorizontalButton').parent().removeAttr('onclick').removeClass('selected');
		$('#cutArrayHorizontalButton').parent().css({'opacity':'0.5'});
		$('.cut-array.hor').hide();
	    }
      }
    });
    
    
    expKeyPad = new vKeyPad(".expLabel", "#gridContainer", {keys:[1,2,3,4,5,6,7,8,9,0],maximumLength:3,clearZero:false,defaultValue:1});
    labelKeyPad = new vKeyPad(".splitLabel", "#gridContainer", {keys:[1,2,3,4,5,6,7,8,9,0],maximumLength:3,clearZero:false});
    
    expKeyPad.onKeypadHide = function (target){
	var getId = $(target).attr('id');
	if (getId) {
	    if (getId=="f1" || getId=="f3") {
		if ($('#f1').val().length > 0 && $('#f3').val().length > 0 && $('#f1').val() > 0 && $('#f3').val() > 0) {
		    if (parseFloat($('#f1').val()) > parseFloat($('#f3').val())) {
			$('#origLabelTop .numTxt').val($('#f1').val());
			$('#origLabelBot .numTxt').val($('#f3').val());
		    }
		    else {
			$('#origLabelTop .numTxt').val($('#f3').val());
			$('#origLabelBot .numTxt').val($('#f1').val());
		    }
		    $('.origLabel').show();
		    
		    $('#outcomeArea').find('#expLeft').html($('#f1').val());
		    $('#outcomeArea').find('#expRight').html(" &times; "+$('#f3').val());
		    $('#outcomeArea').show();
		    
		    $('#cutArrayButton').removeAttr('disabled').removeClass('disabled').addClass('active');
		}
		enableReset();
	    }
	}
	$(target).css({'background-color':"#FFF"});
	//enableReset();
    }
    expKeyPad.onTextChanged = function (event, keypad){
       enableReset();
    }
    labelKeyPad.onTextChanged = function (event, keypad){
       enableReset();
	var numLabelsVisible = $('.splitLabel:visible').length;
	if (numLabelsVisible > 0) {
	    var answered = 0;
	    $('.splitLabel:visible').each(function (){
		if ($(this).val()!="") {
		    answered++;
		}
	    })
	    if (answered >= numLabelsVisible) {
		$('#SolveEquationButton').removeAttr('disabled').removeClass('disabled').addClass('active');
	    }else {
		$('#SolveEquationButton').attr('disabled','disabled').addClass('disabled').removeClass('active');
	    }
	}
    }
    labelKeyPad.onKeypadHide = function (target){
	$(target).css({'background-color':"#FFF"});
    }
    userAnsKeyPad = new vKeyPad(".userAns", "#gridContainer", {keys:[1,2,3,4,5,6,7,8,9,0],maximumLength:6,clearZero:false});
    userAnsKeyPad.onTextChanged = function (event, keypad){onAnswerUpdate(event, keypad);};
    userAnsKeyPad.onKeypadHide = function (target){
	$(target).css({'background-color':"#FFF"});
    }
});

function saveFunction(){
 eventBroker.publishEvent("#doSave");
}
function enableReset(){
    $('.icoReset').css({'opacity':'1'});
}
function onResetClick(){
    if ($('.icoReset').css('opacity') == 1){
	  $(".icoReset").removeClass('icoResetMove');
	  var to=setTimeout(function(){
		clearInterval(to);
		$(".icoReset").addClass('icoResetMove');
		$('.icoReset').css({'opacity':'0.5','cursor':'default'});
		userAnsArr = [];
		userAnswerOrder = [];
		$('#f1, #f3').val("");
		$('#f1, #f3').removeAttr('disabled').css({'pointer-events':'auto'});
		$('.origLabel, .splitLabel, .userAns').hide();
		$('.origLabel, .splitLabel, .userAns').val("");
		$('#gridWorkArea').removeAttr('class');
		$('#outcomeArea').hide();
		$('#outcomeMid, #outcomeBot, #expLeft, #expRight').html("");
		$('#cutArrayButton').attr('disabled', 'disabled').addClass('disabled').removeClass('active').removeClass('pressed');
		$('#labelArrayButton').attr('disabled', 'disabled').addClass('disabled').removeClass('active');
		$('#SolveEquationButton').attr('disabled', 'disabled').addClass('disabled').removeClass('active');
		$('#changeObjectButton').attr('disabled', 'disabled').addClass('disabled').removeClass('active');
		$('.cut-array').hide();
		$('.submenu.total-items-even').hide();
		$('#gridSeparator').html("");
		$('.operator').remove();
		rowSplitArray = [];
		colSplitArray = [];
		$('#cutArrayHorizontalButton').parent().attr('onclick','cutFunctionality(this);');
		$('#cutArrayVerticalButton').parent().attr('onclick','cutFunctionality(this);');
		$('#cutArrayVerticalButton').parent().css({'opacity':'1'});
		$('#cutArrayHorizontalButton').parent().css({'opacity':'1'});
	  },200);
    }
}


function BindEvents() {
    $(".icoReset").bind('click', onResetClick);
    $('#changeObjectButton').bind('click',onSumBtnClick);
    $('#cutArrayButton').bind('click',cutArryMenu);
    $('#labelArrayButton').bind('click',labelArray)
    $('#SolveEquationButton').bind('click',onPartialProductsBtnClick)
}
function onSumBtnClick(){
    var sumValue = 0;
    $('.outcomes').each(function (){
	sumValue+=parseFloat($(this).text().replace(/,/g,''));
    });
    $('#outcomeBot').html('<div id="sumValue">'+numberWithCommas(sumValue)+'</div>').show();
}
function onPartialProductsBtnClick(){
    $('.cut-array.hor.horizontal,.cut-array.vert.vertical').css({left:"0px",top:"0px"}).hide();
    $('.userAns').show();
}
function cutArryMenu() {
      $('.cut-icon').hide();
      $('.cut-array.hor.horizontal,.cut-array.vert.vertical').css({left:"0px",top:"0px"});
      $('.undo-cut.hor,.undo-cut.vert').css('visibility', 'visible');
      $('#submenu-change-object').hide();
      $('#cutArrayButton').addClass("pressed");
      $('.submenu.total-items-even').toggle();
}
function labelArray() {
    $('.cut-array.hor.horizontal,.cut-array.vert.vertical').css({left:"0px",top:"0px"}).hide();
    $('.splitLabel, .operator').show();
}
function cutFunctionality(ev) {
      $('.cut-array.hor.horizontal,.cut-array.vert.vertical').css({left:"0px",top:"0px"});
      var cutText=$(ev).find(".text").text();
      $('.submenu.total-items-even').find('li').removeClass('selected');
      $(ev).addClass('selected');
      $('.submenu.total-items-even').hide();
      
      if (cutText=="Cut Horizontal") {
            $('.cut-array.hor.horizontal').show();
            $('.cut-array.vert.vertical').hide();
	}
	else if (cutText=="Cut Vertical") {
		    $('.cut-array.hor.horizontal').hide();
		    $('.cut-array.vert.vertical').show();
	}
}


function cutArryDrag() {
    $('.cut-array.hor.horizontal').draggable({
	axis: "y",
	containment:"#array-overlaysBlock",
	start:function(){
	    $('#cutArrayButton').parent().find('.submenu').hide();
	},
	stop:function(){
	    var handlerTop = $(this).offset().top + ($(this).height()/2);
	    var gridAreaTop = $('#gridWorkArea').offset().top;
	    var gridAreaHeight = $('#gridWorkArea').height();
	    var cellHeight = $('#gridWorkArea').height() / totRows;
	    var snapIndex=0;
	    if(handlerTop > gridAreaTop && handlerTop<(gridAreaTop+gridAreaHeight)){
		for(var row=0; row < totRows; row++){
		    var snapPos = gridAreaTop+(row * cellHeight);
		    if (handlerTop > snapPos-(cellHeight/2) && handlerTop < snapPos+(cellHeight/2)) {
			var handlerNewTop = snapPos - $('#gridWorkArea').position().top - ($(this).height()/2)+8;
			$(this).css({'top':handlerNewTop+'px'});
			snapIndex = row;
			if (handlerTop <= gridAreaTop+(cellHeight/2)) {
			    var handlerNewTop = snapPos + cellHeight - $('#gridWorkArea').position().top - ($(this).height()/2)+8;
			    $(this).css({'top':handlerNewTop+'px'});
			    snapIndex = 1;
			}
			break;
		    }
		    if (row==totRows-1) {
		        var handlerNewTop = snapPos - $('#gridWorkArea').position().top - ($(this).height()/2)+8;
			$(this).css({'top':handlerNewTop+'px'});
			snapIndex = row;
		    }
		}
		var canShow = true;
		for(var ind=0; ind<rowSplitArray.length;ind++){
		    if (snapIndex == rowSplitArray[ind]) {
			canShow = false;
			break;
		    }
		}
		if ((rowSplitArray.length + colSplitArray.length) < totSplitCount) {
		    if (canShow && snapIndex>0 && rowSplitArray.length < maxCutsInDirection) {
			$(this).find('.cut-icon').show();
		    }
		    else {
			$(this).find('.cut-icon').hide();
		    }
		}
		try{
		    $(this).find('.cut-icon').unbind('click')
		}catch(e){}
		var target = $(this);
		$(this).find('.cut-icon').bind('click', function (event){splitGrid('horizondal', snapIndex, target);});
	    }else {
		$(this).find('.cut-icon').hide();
	    }
	},
    });
    $('.cut-array.vert.vertical').draggable({
	axis: "x",
	containment:"#array-overlaysBlock",
	start:function(){
	    $('#cutArrayButton').parent().find('.submenu').hide();
	},
	stop:function(){
	    var handlerLeft = $(this).offset().left + ($(this).width()/2);
	    var gridAreaLeft = $('#gridWorkArea').offset().left;
	    var gridAreaWidth = $('#gridWorkArea').width();
	    var cellWidth = $('#gridWorkArea').width() / totCols;
	    var snapIndex=0;
	    if(handlerLeft > gridAreaLeft && handlerLeft<(gridAreaLeft+gridAreaWidth)){
		for(var col=0; col < totCols; col++){
		    var snapPos = gridAreaLeft+(col * cellWidth);
		    if (handlerLeft > snapPos-(cellWidth/2) && handlerLeft < snapPos+(cellWidth/2)) {
			var handlerNewLeft = snapPos - ($(this).width()/2)-6;
			$(this).css({'left':handlerNewLeft+'px'});
			snapIndex = col;
			if (handlerLeft <= gridAreaLeft+(cellWidth/2)) {
			    var handlerNewLeft = snapPos + cellWidth - ($(this).width()/2)-6;
			    $(this).css({'left':handlerNewLeft+'px'});
			    snapIndex = 1;
			}
			break;
		    }
		    if (col==totCols-1) {
		        var handlerNewLeft = snapPos - ($(this).width()/2)-6;
			$(this).css({'left':handlerNewLeft+'px'});
			snapIndex = col;
		    }
		}
		var canShow = true;
		for(var ind=0; ind<colSplitArray.length;ind++){
		    if (snapIndex == colSplitArray[ind]) {
			canShow = false;
			break;
		    }
		}
		if ((rowSplitArray.length + colSplitArray.length) < totSplitCount) {
		    if (canShow && snapIndex>0 && colSplitArray.length < maxCutsInDirection) {
			$(this).find('.cut-icon').show();
		    }
		    else {
			$(this).find('.cut-icon').hide();
		    }
		}
		
		try{
		    $(this).find('.cut-icon').unbind('click')
		}catch(e){}
		var target = $(this);
		console.log(snapIndex);
		$(this).find('.cut-icon').bind('click', function (event){splitGrid('vertical', snapIndex, target);});
	    }else {
		$(this).find('.cut-icon').hide();
	    }
	},
    });
}
function splitGrid(direction, index, target){
    $('#labelArrayButton').removeAttr('disabled').removeClass('disabled').addClass('active');
    $('#f1, #f3').attr({'disabled':'disabled'}).css({'pointer-events':'none'});
    
    if (direction=="horizondal") {
	$('#gridSeparator').append('<div class="hsplit" style="top:'+(index * ($('#gridWorkArea').height() / totRows))+'px;"></div>');
	
	target.css({'top':'0px'});
	target.find('.cut-icon').hide();
	rowSplitArray.push(index);
	resetLabels();
    }
    if (direction=="vertical") {
	$('#gridSeparator').append('<div class="vsplit" style="left:'+(index * ($('#gridWorkArea').width() / totCols))+'px;"></div>');
	target.css({'left':'0px'});
	target.find('.cut-icon').hide();
	colSplitArray.push(index);
	resetLabels();
    }
    
    rowSplitArray.sort();
    colSplitArray.sort();
    $('#gridWorkArea').html('');
    var areaTable = $('<table cellpadding="0" cellspacing="0" border="0"></table>');
    $('#gridWorkArea').append(areaTable);
    var totHeight = 0;
    for(var row=0; row<=rowSplitArray.length; row++)
    {
	var newRow = $('<tr></tr>');
	areaTable.append(newRow);
	
	var totWidth = 0;
	for(var col=0; col<=colSplitArray.length; col++){
	    var newCol = $('<td><input type="text" class="userAns" readonly="true"/></td>');
	    newRow.append(newCol);
	    if (col==0 && colSplitArray.length > 0) {
		totWidth+= colSplitArray[col] * ($('#gridWorkArea').width() / totCols);
		newCol.css({'width':colSplitArray[col] * ($('#gridWorkArea').width() / totCols)+'px'});
	    }
	    else if(colSplitArray.length > 0 && col == colSplitArray.length){
		newCol.css({'width':($('#gridWorkArea').width() - totWidth)+'px'});
		totWidth+= ($('#gridWorkArea').width() - totWidth);
	    }
	    else if(colSplitArray.length > 0){
		totWidth += (colSplitArray[col] - colSplitArray[col-1]) * ($('#gridWorkArea').width() / totCols);
		newCol.css({'width':(colSplitArray[col] - colSplitArray[col-1]) * ($('#gridWorkArea').width() / totCols)+'px'});
	    }
	    else {
		totWidth += $('#gridWorkArea').width();
		newCol.css({'width':$('#gridWorkArea').width()+'px'});
	    }
	    
	}
	if (row==0 && rowSplitArray.length > 0) {
	    totHeight+= rowSplitArray[row] * ($('#gridWorkArea').height() / totRows);
	    newRow.css({'height':rowSplitArray[row] * ($('#gridWorkArea').height() / totRows)+'px'});
	}
	else if(rowSplitArray.length > 0 && row == rowSplitArray.length){
	    newRow.css({'height':($('#gridWorkArea').height() - totHeight)+'px'});
	    totHeight+= ($('#gridWorkArea').height() - totHeight);
	}
	else if(rowSplitArray.length > 0){
	    totHeight+= (rowSplitArray[row] - rowSplitArray[row-1]) * ($('#gridWorkArea').height() / totRows);
	    newRow.css({'height':(rowSplitArray[row] - rowSplitArray[row-1]) * ($('#gridWorkArea').height() / totRows)+'px'});
	}
	else {
	    totHeight += $('#gridWorkArea').height();
	    newRow.css({'height':$('#gridWorkArea').height()+'px'});
	}
    }
    
    $('#splitLabelsTop').html('');
    var labelTopTable = $('<table cellpadding="0" cellspacing="0" border="0"></table>');
    $('#splitLabelsTop').append(labelTopTable);
    var newRow = $('<tr></tr>');
    labelTopTable.append(newRow);
    var totWidth = 0;
    for(var col=0; col<=colSplitArray.length; col++){
	var newCol = $('<td><input type="text" class="splitLabel numTxt" readonly="true"/></td>');
	newRow.append(newCol);
	if (col==0 && colSplitArray.length > 0) {
	    totWidth+= colSplitArray[col] * ($('#gridWorkArea').width() / totCols);
	    newCol.css({'width':colSplitArray[col] * ($('#gridWorkArea').width() / totCols)+'px'});
	}
	else if(colSplitArray.length > 0 && col == colSplitArray.length){
	    newCol.css({'width':($('#gridWorkArea').width() - totWidth)+'px'});
	    totWidth+= ($('#gridWorkArea').width() - totWidth);
	}
	else if(colSplitArray.length > 0){
	    totWidth += (colSplitArray[col] - colSplitArray[col-1]) * ($('#gridWorkArea').width() / totCols);
	    newCol.css({'width':(colSplitArray[col] - colSplitArray[col-1]) * ($('#gridWorkArea').width() / totCols)+'px'});
	}
	else {
	    totWidth += $('#gridWorkArea').width();
	    newCol.css({'width':$('#gridWorkArea').width()+'px'});
	}
    }
    
    
    $('#splitLabelsBot').html('');
    var labelBotTable = $('<table cellpadding="0" cellspacing="0" border="0"></table>');
    $('#splitLabelsBot').append(labelBotTable);
    var totHeight = 0;
    for(var row=0; row<=rowSplitArray.length; row++)
    {
	var newRow = $('<tr><td><input type="text" class="splitLabel numTxt" readonly="true"/></td></tr>');
	labelBotTable.append(newRow);
	
	if (row==0 && rowSplitArray.length > 0) {
	    totHeight+= rowSplitArray[row] * ($('#gridWorkArea').height() / totRows);
	    newRow.css({'height':rowSplitArray[row] * ($('#gridWorkArea').height() / totRows)+'px'});
	}
	else if(rowSplitArray.length > 0 && row == rowSplitArray.length){
	    newRow.css({'height':($('#gridWorkArea').height() - totHeight)+'px'});
	    totHeight+= ($('#gridWorkArea').height() - totHeight);
	}
	else if(rowSplitArray.length > 0){
	    totHeight+= (rowSplitArray[row] - rowSplitArray[row-1]) * ($('#gridWorkArea').height() / totRows);
	    newRow.css({'height':(rowSplitArray[row] - rowSplitArray[row-1]) * ($('#gridWorkArea').height() / totRows)+'px'});
	}
	else {
	    totHeight += $('#gridWorkArea').height();
	    newRow.css({'height':$('#gridWorkArea').height()+'px'});
	}
    }
    
    $('#gridSeparator').find('.vsplit').each(function (){
	$('#splitLabelsTop').append('<div class="operator" style="top:5px; left:'+($(this).position().left-8)+'px">+</div>');
    });
    $('#gridSeparator').find('.hsplit').each(function (){
	$('#splitLabelsBot').append('<div class="operator" style="left:23px; top:'+($(this).position().top-15)+'px">+</div>');
    });
    
    $('.splitLabel, .userAns, .operator').hide();
    userAnsKeyPad.loadControls();
    labelKeyPad.loadControls();
    
    
    if (colSplitArray.length>=maxCutsInDirection) {
	$('#cutArrayVerticalButton').parent().removeAttr('onclick').removeClass('selected');
	$('#cutArrayVerticalButton').parent().css({'opacity':'0.5'});
	$('.cut-array.vert').hide();
    }
    if (rowSplitArray.length>=maxCutsInDirection) {
	$('#cutArrayHorizontalButton').parent().removeAttr('onclick').removeClass('selected');
	$('#cutArrayHorizontalButton').parent().css({'opacity':'0.5'});
	$('.cut-array.hor').hide();
    }
    
}
function resetLabels(){
    $('.splitLabel').val("").hide();
    $('.userAns').val("").hide();
    $('#SolveEquationButton').attr('disabled', 'disabled').addClass('disabled').removeClass('active');
    $('#changeObjectButton').attr('disabled', 'disabled').addClass('disabled').removeClass('active');
    $('#outcomeMid').html("");
    $('#outcomeBot').html("");
    userAnsArr = [];
    userAnswerOrder = [];
}
function onAnswerUpdate(event, keypad) {
    var getIndex = $(keypad.CurrentFocus).index('.userAns');
    userAnsArr[getIndex] = $(keypad.CurrentFocus).val();
    for(var ans=0; ans<userAnsArr.length; ans++)
    {
	if (userAnsArr[ans]!="" && userAnsArr[ans]!=undefined && userAnsArr[ans]!="undefined") {
	    userAnswerOrder.push(ans);
	}
	
    }
    userAnswerOrder = removeDuplicatesInPlace(userAnswerOrder);
    $('#outcomeMid').html("");
    for(var order=0; order<userAnswerOrder.length;order++)
    {
	if (userAnsArr[userAnswerOrder[order]]!="") {
	    $('#outcomeMid').append('<div class="outcomes">'+numberWithCommas(userAnsArr[userAnswerOrder[order]])+'</div>');
	}
	
    }
    var numUserAnsVisible = $('.userAns:visible').length;
    if ($('#outcomeMid > div').length >= numUserAnsVisible) {
	$('#changeObjectButton').removeAttr('disabled').removeClass('disabled').addClass('active');
    }else {
	$('#changeObjectButton').attr('disabled','disabled').addClass('disabled').removeClass('active');
    }
    
    $('#outcomeBot').html("");
}
Array.prototype.removeDuplicates = function (){
  var temp=new Array();
  this.sort();
  for(i=0;i<this.length;i++){
    if(this[i]==this[i+1]) {continue}
    temp[temp.length]=this[i];
  }
  return temp;
}

var removeDuplicatesInPlace = function (arr) {
    var i, j, cur, found;
    for (i = arr.length - 1; i >= 0; i--) {
        cur = arr[i];
        found = false;
        for (j = i - 1; !found && j >= 0; j--) {
            if (cur === arr[j]) {
                if (i !== j) {
                    arr.splice(i, 1);
                }
                found = true;
            }
        }
    }
    return arr;
};
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



eventBroker = _({}).extend(require('chaplin/lib/event_broker'));
eventBroker.subscribeEvent('#doSave', function(state) {
    
    $('.userAns, .splitLabel').css({'background': 'rgb(255, 255, 255)'});
    
      var state = {};
      var expression = {left:$('#f1').val(),right:$('#f3').val(), state:$('#f1').attr('disabled')};
      var splitLables = [];
      for(var label =0; label < $('.splitLabel').length; label++){
	splitLables.push({val:$('.splitLabel').eq(label).val(), isVisible:$('.splitLabel').eq(label).is(':visible')});
      }
      var userAnsLables = [];
      for(var label =0; label < $('.userAns').length; label++){
	userAnsLables.push({val:$('.userAns').eq(label).val(), isVisible:$('.userAns').eq(label).is(':visible')});
      }
      var toolsBtnState = {"cutarea":$('#cutArrayButton').hasClass('active'),"labelarea":$('#labelArrayButton').hasClass('active'),"partialproducts":$('#SolveEquationButton').hasClass('active'),"sum":$('#changeObjectButton').hasClass('active')};
      var outcomeState = {content: $('#outcomeArea').html(), isVisible:$('#outcomeArea').is(':visible')};
      
      resetStage = $('.icoReset').css('opacity');
      
      
      state = {"expression":expression,"splitLabelsTop":$('#splitLabelsTop').html(),"splitLabelsBot":$('#splitLabelsBot').html(),"gridWorkArea":$('#gridWorkArea').html(),"splitLables":splitLables, "userAnsLables":userAnsLables,"toolsBtnState":toolsBtnState, "outcomeState":outcomeState,"resetState":resetStage, "userAnsArr":userAnsArr,"userAnswerOrder":userAnswerOrder, "rowSplitArray":rowSplitArray, "colSplitArray":colSplitArray, "gridSeparator":$('#gridSeparator').html()}
      var message = {
	    type : 'state',
	    data : JSON.stringify(state)
    };
    eventBroker.publishEvent("#save", message);
});