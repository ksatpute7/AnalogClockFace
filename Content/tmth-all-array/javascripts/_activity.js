var activityName = "tmth-all-array";
var activityVersion = "2.0";
var submitEnable = 0;
var secondFormula = false;
var resetBlock=false;
var submitBlock=false;
var filledCount=0;
var numKeypad;
var currHorizontalPos = -1;
var currverticaPos = -1;
var currverticaParent = -1;
var arrayCreated = true;
var userAnswer = new Array();
var changeObjectName="icon-change-object-black-circle";
var splitArray = [{"row":"", "col":""}];
var tableArray = {"tablesInRow":1, "tablesInCol":1};
var snapToPoint = -1;
var rowSplitArray = [];
var colSplitArray = [];
var totSplitCount = 3;
var maxCutsInDirection = 2;
$(document).ready(
    function(){
	//$('body').css({'-webkit-transform':'scale(0.91)'});

       
        pageContainer = $("<div id=\"interactive-container\" />");
        menuContainer = $("<div id=\"page-container\" />");
        page0 = $("<div id=\"page-0\" class=\"page array animated fadeIn\"><header id=\"equation-frame-container\"><div style=\"position:absolute; top:10px; left:50px;\"><div class='fillbox'><input id=\"f1\" class=\"numTxt\" readonly=\"readonly\" maxlength=\"1\" type=\"text\"/></div><div style=\"margin-left: 10px;width:20px; font-family: GillSansNormal; position:relative; top:13px; font-size: 28px; float:left\">&times;</div><div class='fillbox'><input id=\"f3\" class=\"numTxt\" readonly=\"readonly\" maxlength=\"1\" type=\"text\"/></div><div id=\"solveEquation\" style=\"position:absolute; width:760px; top:18px; left:157px\"><div></div><div></div></div></header><nav id=\"tools-menu-container\"><div class=\"strip-bg\"></div><ul id=\"tools-menu\" role=\"menu\"><li><button class=\"btn primary disabled\" id=\"createArrayButton\" disabled=\"disabled\"><span class=\"btn-content\"><span class=\"icon-container\"><i class=\"icon-create-array\"></i></span><span class=\"text-container\"><span class=\"text\">Create Array</span></span></span></button></li><li><button class=\"btn primary submenu-trigger disabled\" id=\"cutArrayButton\" disabled=\"disabled\"><span class=\"btn-content\"><span class=\"icon-container\"><i class=\"icon-cut-array-hor\"></i></span><span class=\"text-container\"><span class=\"text\">Cut Array</span></span></span></button><ul class=\"submenu total-items-even\"><li onclick=\"cutFunctionality(this);\"><a href=\"javascript:void(0);\" class=\"btn\" id=\"cutArrayHorizontalButton\"><span class=\"btn-content\"><span class=\"icon-container\"><i class=\"icon-cut-array-hor-green\"></i></span><span class=\"text-container\"><span class=\"text\">Cut Horizontal</span></span></span></a></li><li onclick=\"cutFunctionality(this);\"><a href=\"javascript:void(0);\" class=\"btn\" id=\"cutArrayVerticalButton\"><span class=\"btn-content\"><span class=\"icon-container\"><i class=\"icon-cut-array-vert-green\"></i></span><span class=\"text-container\"><span class=\"text\">Cut Vertical</span></span></span></a></li></ul></li><li><button class=\"btn primary disabled\" id=\"labelArrayButton\" disabled=\"disabled\"><span class=\"btn-content\"><span class=\"icon-container\"><i class=\"icon-label-array\"></i></span><span class=\"text-container\"><span class=\"text\">Label Array</span></span></span></button></li><li><button class=\"btn primary disabled\" id=\"SolveEquationButton\" disabled=\"disabled\"><span class=\"btn-content\"><span class=\"icon-container\"><i class=\"icon-label-array_solve\"></i></span><span class=\"text-container\"><span class=\"text\">Solve Equation</span></span></span></button></li><li><button class=\"btn primary submenu-trigger disabled\" id=\"changeObjectButton\" disabled=\"disabled\"><span class=\"btn-content\"><span class=\"icon-container\"><i class=\"icon-change-object\"></i></span><span class=\"text-container\"><span class=\"text\">Change Object</span></span></span></button><ul id=\"submenu-change-object\" class=\"submenu total-items-odd\" style=\"display: none; height:500px; overflow-y:auto; -webkit-overflow-scrolling:touch;\"><li onclick=\"ChangeObjectImage(this)\"><a href=\"javascript:void(0);\" class=\"btn\"><div class=\"btn-content\"><div class=\"icon-container\"><i class=\"icon icon-change-object-beachball\" data-css-icon-classes=\"icon-change-object-beachball\"><div class=\"overlay\"></div></i></div><div class=\"text-container\"><span class=\"text\">Beachball</span></div></div></a></li><li onclick=\"ChangeObjectImage(this)\"><a href=\"javascript:void(0);\" class=\"btn\"><div class=\"btn-content\"><div class=\"icon-container\"><i class=\"icon icon-change-object-chair\" data-css-icon-classes=\"icon-change-object-chair\"><div class=\"overlay\"></div></i></div><div class=\"text-container\"><span class=\"text\">Chair</span></div></div></a></li><li onclick=\"ChangeObjectImage(this)\" class=\"selected\"><a href=\"javascript:void(0);\" class=\"btn\"><div class=\"btn-content\"><div class=\"icon-container\"><i class=\"icon icon-change-object-black-circle\" data-css-icon-classes=\"icon-change-object-black-circle\"><div class=\"overlay\"></div></i></div><div class=\"text-container\"><span class=\"text\">Circle</span></div></div></a></li><li onclick=\"ChangeObjectImage(this)\"><a href=\"javascript:void(0);\" class=\"btn\"><div class=\"btn-content\"><div class=\"icon-container\"><i class=\"icon icon-change-object-black-gApple\" data-css-icon-classes=\"icon-change-object-black-gApple\"><div class=\"overlay\"></div></i></div><div class=\"text-container\"><span class=\"text\">Green Apple</span></div></div></a></li><li onclick=\"ChangeObjectImage(this)\"><a href=\"javascript:void(0);\" class=\"btn\"><div class=\"btn-content\"><div class=\"icon-container\"><i class=\"icon icon-change-object-black-redApple\" data-css-icon-classes=\"icon-change-object-black-redApple\"><div class=\"overlay\"></div></i></div><div class=\"text-container\"><span class=\"text\">Red Apple</span></div></div></a></li><li onclick=\"ChangeObjectImage(this)\"><a href=\"javascript:void(0);\" class=\"btn\"><div class=\"btn-content\"><div class=\"icon-container\"><i class=\"icon icon-change-object-black-pinkFly\" data-css-icon-classes=\"icon-change-object-black-pinkFly\"><div class=\"overlay\"></div></i></div><div class=\"text-container\"><span class=\"text\">Pink Fly</span></div></div></a></li><li onclick=\"ChangeObjectImage(this)\"><a href=\"javascript:void(0);\" class=\"btn\"><div class=\"btn-content\"><div class=\"icon-container\"><i class=\"icon icon-change-object-black-yellowFly\" data-css-icon-classes=\"icon-change-object-black-yellowFly\"><div class=\"overlay\"></div></i></div><div class=\"text-container\"><span class=\"text\">Yellow Fly</span></div></div></a></li><li onclick=\"ChangeObjectImage(this)\"><a href=\"javascript:void(0);\" class=\"btn\"><div class=\"btn-content\"><div class=\"icon-container\"><i class=\"icon icon-change-object-baloon\" data-css-icon-classes=\"icon-change-object-baloon\"><div class=\"overlay\"></div></i></div><div class=\"text-container\"><span class=\"text\">Air Balloon</span></div></div></a></li><li onclick=\"ChangeObjectImage(this)\"><a href=\"javascript:void(0);\" class=\"btn\"><div class=\"btn-content\"><div class=\"icon-container\"><i class=\"icon icon-change-object-bird\" data-css-icon-classes=\"icon-change-object-bird\"><div class=\"overlay\"></div></i></div><div class=\"text-container\"><span class=\"text\">Bird</span></div></div></a></li><li onclick=\"ChangeObjectImage(this)\"><a href=\"javascript:void(0);\" class=\"btn\"><div class=\"btn-content\"><div class=\"icon-container\"><i class=\"icon icon-change-object-carrot\" data-css-icon-classes=\"icon-change-object-carrot\"><div class=\"overlay\"></div></i></div><div class=\"text-container\"><span class=\"text\">Carrot</span></div></div></a></li><li onclick=\"ChangeObjectImage(this)\"><a href=\"javascript:void(0);\" class=\"btn\"><div class=\"btn-content\"><div class=\"icon-container\"><i class=\"icon icon-change-object-cat\" data-css-icon-classes=\"icon-change-object-cat\"><div class=\"overlay\"></div></i></div><div class=\"text-container\"><span class=\"text\">Cat</span></div></div></a></li><li onclick=\"ChangeObjectImage(this)\"><a href=\"javascript:void(0);\" class=\"btn\"><div class=\"btn-content\"><div class=\"icon-container\"><i class=\"icon icon-change-object-dog\" data-css-icon-classes=\"icon-change-object-dog\"><div class=\"overlay\"></div></i></div><div class=\"text-container\"><span class=\"text\">Dog</span></div></div></a></li><li onclick=\"ChangeObjectImage(this)\"><a href=\"javascript:void(0);\" class=\"btn\"><div class=\"btn-content\"><div class=\"icon-container\"><i class=\"icon icon-change-object-robot\" data-css-icon-classes=\"icon-change-object-robot\"><div class=\"overlay\"></div></i></div><div class=\"text-container\"><span class=\"text\">Robot</span></div></div></a></li><li onclick=\"ChangeObjectImage(this)\"><a href=\"javascript:void(0);\" class=\"btn\"><div class=\"btn-content\"><div class=\"icon-container\"><i class=\"icon icon-change-object-gDuck\" data-css-icon-classes=\"icon-change-object-gDuck\"><div class=\"overlay\"></div></i></div><div class=\"text-container\"><span class=\"text\">Duck</span></div></div></a></li></ul></li></ul></nav><div id=\"array-container\"><div id=\"array-overlaysBlock\"></div><div id=\"array-overlays\"><div class=\"cut-array hor horizontal draggable only-y disabled\" style=\"display: none; top: 0px; left: 0px;\"><div class=\"gripper left\"></div><div class=\"dashed\"></div><div class=\"cut-icon\"></div><div class=\"gripper right\"></div></div><div class=\"cut-array vert vertical draggable only-x disabled\" style=\"display: none;  top: 0px; left: 0px;\"><div class=\"gripper top\"></div><div class=\"dashed\"></div><div class=\"cut-icon\"></div><div class=\"gripper bottom\"></div></div></div><div id=\"array-cuts\"></div><div id=\"array-labels\"></div><div id=\"array-space\"><div id=\"gridSeparator\"></div><div class=\"gridContainer\"><div class=\"grid inactive\" style=\"left: 270px; top: 63px; display:none\"></div></div></div></div></div>");
	
        
         //next1= $("<div class=\"nextBtn\"></div>");
        
	//page1 = $("<div id=\"page-1\" class=\"page\"><div class\"testingArea\"></div><div class='container_box2'><div class='fillbox'><div id=\"f6\" class=\"numTxt\" contentEditable=\"false\"></div></div><div class='fillbox'><div id=\"f7\" class=\"numTxt\" contentEditable=\"false\"></div></div><div class='textbox' style='border-right:0px'>$4$</div><div class='fillbox'><div id=\"f8\" class=\"numTxt\" contentEditable=\"false\"></div></div><div class='textbox'>$3 1/3$</div><div class='fillbox' style='border-right:0px;'><div id=\"f9\" class=\"numTxt\" contentEditable=\"false\"></div></div><div class='textbox' style='border-bottom:0px;'>$2 2/3$</div><div class='fillbox' style='border-bottom:0px;'><div id=\"f10\" class=\"numTxt\" contentEditable=\"false\"></div></div><div class='textbox' style='border-right:0px; border-bottom:0px;''>$1 1/3$</div></div></div>");
        
        //pre1= $("<div class=\"preBtn\"></div>");
	
	nav = ("<div class=\"contentFeedback\"><div class=\"btReset\" ><div class=\"icoReset\"></div></div><div class=\"btInfo\" ><div class=\"icoInfo\"></div></div><div class=\"btFeedback\"><div class=\"icoFeed inactive\" id=\"submit\"></div></div><div class=\"score\"><div id=\"contCorrect\"><span id=\"crt\">0</span> <img src=\"images/IconCorrect.png\"></div><div id=\"contIncorrect\"><span id=\"incrt\">0</span><img src=\"images/IconIncorrect.png\"></div></div></div>");
	
	hiddenTxt = $("<div ><input id=\"editorTxt1\" type=\"hidden\" /><input id=\"editorTxt2\" type=\"hidden\" /><input id=\"editorTxt3\" type=\"hidden\" /><input id=\"editorTxt4\" type=\"hidden\" /><input id=\"editorTxt5\" type=\"hidden\" /><input id=\"editorTxt6\"type=\"hidden\" /><input id=\"editorTxt7\"type=\"hidden\" /><input id=\"editorTxt8\"type=\"hidden\" /><input id=\"editorTxt9\"type=\"hidden\" /><input id=\"editorTxt10\"type=\"hidden\" /></div>");
	vkeyCont = $("<div id=\"vkeyCont\" />");

	page0.append(nav);
	page0.append(hiddenTxt);
	pageContainer.append(vkeyCont);
	menuContainer.append(page0);
	//menuContainer.append(page1);
        pageContainer.append(menuContainer);
        //pageContainer.append(next1);
        //pageContainer.append(pre1);
        $('body').append(pageContainer);
	
        
        //$('.nextBtn').unbind('click');
         
	//$(".keypadHolder").draggable({containment: "#vkeyCont"});

          $(".icoReset").css({"opacity":"0.5"});
          $(".icoReset").bind('click', resetenable);
          
          
          
          
          
/*Save Functionality*/

eventBroker = _({}).extend(require('chaplin/lib/event_broker'));
eventBroker.publishEvent("#fetch", { type : 'state' }, function(state){
      if (state) {
            var savedState = JSON.parse(state);
            if (savedState.activityName == activityName && savedState.activityVersion == activityVersion) {
            _.each(JSON.parse(state), function(value, key, list) {
		
		if(key=="splitArray")
		{
		    for(var item=0; item<value.length;item++)
			splitArray.push({"row":value[item].row,"col":value[item].col});
		}
		if(key=="tableArray")
		{
		    tableArray=value;
		}
		if(key=="snapToPoint")
		    snapToPoint = parseInt(value);
		if(key=="rowSplitArray")
		{
		    for(var item=0; item<value.length;item++)
		    rowSplitArray.push(value[item]);
		}
		if(key=="colSplitArray")
		{
		    for(var item=0; item<value.length;item++)
		    colSplitArray.push(value[item]);
		}
		if(key=="totSplitCount")
		    totSplitCount = parseInt(value);
		if(key=="maxCutsInDirection")
		    maxCutsInDirection = parseInt(value);
		if (key=="gridSeparator")
		    $('#gridSeparator').html(value);
		
                  if(key == "headerVal"){
                        $("#equation-frame-container").html(value);
                  }
                  
                  if(key == "toolbarVal"){
                        $("#tools-menu-container").html(value);
                  }
                  
                  if(key == "cutArrayVal"){
                        $("#array-overlays").html(value);
                  }
                  
                  if(key == "gridContainerVal"){
                        $(".gridContainer").html(value)
                  }
                  
                  if(key == "arrayLabels") {
                        $("#array-labels").html(value);
                  }
                  
                  if(key == "textVal") {
                        var textVal = value;
                        for(var numB = 0; numB < $(".numTxt").length; numB++){
                              $('.numTxt').eq(numB).val(textVal[numB]);
                        }
                  }
                  
                  if(key == "arrayCreated") {
                        arrayCreated = value;
                  }
                  
                  if (key=="userAnswer") {
                        userAnswer = value;
                  }
		  if (key=="resetOpacity") {
		    $(".icoReset").css({"opacity":value});
		  }
		  if (key=="changeObjectName") {
		    changeObjectName = value;
		  }
                  
            });
            }
    }
    
    
});
eventBroker = _({}).extend(require('chaplin/lib/event_broker'));
eventBroker.subscribeEvent('#doSave', function(state) {
      var state = {};
      
      /*Change here for each interactive*/
      
      var textVal = new Array();
      for(var i=0; i<$('.numTxt').length; i++){
            textVal[i] = $('.numTxt').eq(i).val();
      }
      
      var headerVal = $("#equation-frame-container").html();
      var toolbarVal = $("#tools-menu-container").html();
      var cutArrayVal = $("#array-overlays").html();
      var gridContainerVal = $(".gridContainer").html();
      var gridSeparator = $('#gridSeparator').html();
      var arrayLabels = $("#array-labels").html();
      var resetOpacity = $(".icoReset").css("opacity");
      
      state = {"activityName":activityName,"activityVersion":activityVersion,"splitArray": splitArray, "tableArray": tableArray, "snapToPoint": snapToPoint, "rowSplitArray": rowSplitArray, "colSplitArray": colSplitArray, "totSplitCount": totSplitCount, "maxCutsInDirection": maxCutsInDirection, "headerVal":headerVal,"toolbarVal":toolbarVal,"cutArrayVal":cutArrayVal, "gridContainerVal": gridContainerVal, "gridSeparator":gridSeparator, "arrayLabels": arrayLabels,"textVal":textVal, "arrayCreated": arrayCreated,"userAnswer":userAnswer, "resetOpacity":resetOpacity,"changeObjectName":changeObjectName};
    /**/
    var message = {
	    type : 'state',
	    data : JSON.stringify(state)
    };
    eventBroker.publishEvent("#save", message);
});

    try {
	M.parseMath(document.body);
    } catch(e) {}
    
    setTimeout(function(){
      $("body").css({"-webkit-transform":"scale(1)"});
      },1000);
    
      $(window).bind("mousedown", function(){
            setTimeout(function(){
                  onTextChanged();
            },200)
      });
      
      
      numKeypad = new vKeyPad('.numTxt');
       numKeypad.onTextChanged = function(keypad){
            onComplete(keypad);
      }
      $(".keypadHolder").draggable({containment: "#vkeyCont"});
      $('#page-1').css({'visibility':'hidden'});
      $('#page-0').click(function(event){
            if (!$(event.target).hasClass("numTxt") && !$(event.target).parentsUntil(".numTxt").parent().hasClass('numTxt')) {
                  numKeypad.hidePad();
                  $('.numTxt').css({'background-color':'#FFFed2'})
            }
	    console.log($(event.target).parents('.btn.primary').length);
	    if ($(event.target).parents('.btn.primary').length <= 0) {
		$('#cutArrayButton').parent().find('.submenu').hide();
	    }
	    
      });
      ChangeObject();
      cutArryDrag();
      $(".cut-icon").bind("click", cutArray);
});



/* NAV */
function toggleClassButton(element,className){
	var currentButton=element;
	if(!currentButton.hasClass(className)){
		currentButton.addClass(className);
	}else{
		currentButton.removeClass(className);	
	}
}


var pageCount = 1;


function btnsub() {
          $('.icoReset').css({'opacity':'1','cursor':'pointer'});
          $(".icoReset").bind('click',resetenable);
}

function saveFunction(){
 eventBroker.publishEvent("#doSave");
}

function onTextChanged(event) {
      var row= $('#f1').val();
      var colum= $('#f3').val();
      //console.log(row, colum)
      
      
      if((row>0) && (colum>0) && arrayCreated){
            $('#createArrayButton,#changeObjectButton').removeAttr("disabled");
            $('#createArrayButton,#changeObjectButton').removeClass("disabled");
            $('#createArrayButton,#changeObjectButton').addClass("active");
      }
      
      if((row!="") || (colum!="")) {
            $(".icoReset").css({"opacity": "1"});
      }
      
      if(!arrayCreated){
            $('#f1, #f3').attr("disabled", "disabled");
            $('#createArrayButton').attr("disabled", "disabled").addClass("disabled").removeClass("active");
      }else{
            $('#f1, #f3').removeAttr("disabled");
      }
     
}

function resetenable(){
      
      if ($('.icoReset').css('opacity') == 1){
            $(".icoReset").removeClass('icoResetMove');
            var to=setTimeout(function(){
                  clearInterval(to);
                  $(".icoReset").addClass('icoResetMove');
                  $('.icoReset').css({'opacity':'0.5','cursor':'default'});
            },200);
            
            $('#gridSeparator').html("");
            $(".gridContainer").html("");
            $(".grid").hide();
            $('.submenu.total-items-even').hide();
            $('.submenu.total-items-odd').hide();
            $(".cut-array").hide();
            $('#createArrayButton, #cutArrayButton, #labelArrayButton, #SolveEquationButton, #changeObjectButton').removeClass('active').addClass("disabled").attr('disabled','disabled').removeClass("pressed");
            $('.gridContainer').find('.hor').remove();
            $('.gridContainer').find('.vert').remove();
            $("#solveEquation").html("");
            $("#array-labels").html("");
            $('.numTxt').prop("disabled", false).val("");
            $('.numTxt').css({'background-color':'#FFFed2'})
            arrayCreated = true;
            userAnswer = new Array();
	    $('#submenu-change-object').find('li').removeClass('selected');
            changeObjectName="icon-change-object-black-circle";
	    $('#submenu-change-object').find('li').eq(2).addClass('selected');
	    
	    splitArray = [{"row":"", "col":""}];
	    tableArray = {"tablesInRow":1, "tablesInCol":1};
	    snapToPoint = -1;
	    rowSplitArray = [];
	    colSplitArray = [];
	    totSplitCount = 3;
	    maxCutsInDirection = 2;
	    $('#cutArrayHorizontalButton').parent().attr('onclick','cutFunctionality(this);');
	    $('#cutArrayVerticalButton').parent().attr('onclick','cutFunctionality(this);');
      }
}


function ChangeObject() {
      $('#changeObjectButton').bind('click',ChangeObjectDropDown);
      $('#createArrayButton').bind('click',stamPimageCreate);
      $('#cutArrayButton').bind('click',cutArryMenu);
      $('#labelArrayButton').bind('click',labelArray)
      $('#SolveEquationButton').bind('click',solveEquationFunction)
}
function ChangeObjectDropDown() {
      $('.submenu.total-items-even').hide();
      $('#submenu-change-object').toggle();
      if($(this).hasClass("pressed")){
       $(this).removeClass("pressed");   
      }
      else{
      $(this).addClass("pressed");   
            
      }
}

function ChangeObjectImage(ev) {
    $('#submenu-change-object').find('li').removeClass('selected');
    $(ev).addClass('selected');
    var classes=$(ev).find(".icon").attr('class');
    classes = classes.split(' ')[1];
    $('.grid').find('.icon').removeClass(changeObjectName);
    $('.grid').find('.icon').addClass(classes);
    changeObjectName = classes;
    $('#submenu-change-object').hide();
}
function enableInputTxt(){
    
}
function stamPimageCreate() {

      arrayCreated = false;
      $('#labelArrayButton').removeAttr("disabled");
      $('#labelArrayButton').removeClass("disabled");
      $('#labelArrayButton').addClass("active");
      var elementCreate=$('.gridContainer').find('.button-delete').length;
      if (elementCreate==0) {
            $('.submenu.total-items-even').hide();
            $('#submenu-change-object').hide();
     $(".line").remove();
    var row= $('#f1').val();
    var colum= $('#f3').val();
    if ((row!="") && (colum!="")) {
	if ($('#f3').val()=="1" && $('#f1').val()=="1") {
       $('.btn.primary.submenu-trigger').attr("disabled");
      $('.btn.primary.submenu-trigger').addClass("disabled");
      $('.btn.primary.submenu-trigger').removeClass("active");
	}
	else{
      $('.btn.primary.submenu-trigger').removeAttr("disabled");
      $('.btn.primary.submenu-trigger').removeClass("disabled");
      $('.btn.primary.submenu-trigger').addClass("active");
      }
      
      splitArray = [{"row":row, "col":colum}];
      tableArray = {"tablesInRow":1, "tablesInCol":1};
      $(".gridContainer").html("");
      
	var newContainer = $('<table align="center" id="gridContainer" cellpadding="0" cellspacing="0"></table>');
	for(var tabRowIndex=0; tabRowIndex<tableArray.tablesInRow;tabRowIndex++)
	{
	    var newTabRow = $('<tr></tr>');
	    for(var tabColIndex=0; tabColIndex<tableArray.tablesInCol;tabColIndex++)
	    {
		var newTabCol = $('<td></td>');
		var grid = $('<table class="grid" cellpadding="0" cellspacing="0"></table>')
		for(var rowIndex=0; rowIndex<splitArray[tabRowIndex].row;rowIndex++)
		{
		    var newRow = $('<tr></tr>');
		    for(var colIndex=0; colIndex<splitArray[tabColIndex].col;colIndex++)
		    {
			var newCol = $('<td><i class="icon '+changeObjectName+'"></i></td>');
			newRow.append(newCol);
		    }
		    grid.append(newRow);
		}
		newTabCol.append(grid);
		newTabRow.append(newTabCol);
	    }
	    newContainer.append(newTabRow);
	}
	$(".gridContainer").append(newContainer);
      
      
	/*$(".grid.inactive").show();
      for (var i=0;i<row;i++) {
	$(".grid.inactive").append('<div class="line"></div>')
      }
      for (var j=0;j<colum;j++) {
	      $(".line").append('<div class="array-element"><i class="icon '+changeObjectName+'"></i></div>');
      }*/
      
      
    }
    else{
      $(".grid.inactive").hide();
    }
      }

}
function cutArryMenu() {
      $('#solveEquation').html("");
      $('.spaceAdjust').remove();
      userAnswer = new Array();
      $('.cut-icon').hide();
      $('.cut-array.hor.horizontal,.cut-array.vert.vertical').css({left:"0px",top:"0px"});
      //if ($('.undo-cut.hor').length>0) {
      //      $('.hor').show();
      //}
      //else if ($('.undo-cut.hor').length>0) {
      //      $('.vert').show();
      //}
      $("#array-labels").html("");
      $('.undo-cut.hor,.undo-cut.vert').css('visibility', 'visible');
      var deleteButtonCount= $('.gridContainer').find('.button-delete').length;
      //if (deleteButtonCount==0)
      {
      $('#submenu-change-object').hide();
      $('#cutArrayButton').addClass("pressed");
      $('.submenu.total-items-even').toggle();
      }
      
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
function labelArray() {
      $('#solveEquation').html("");
      try{
	$('#cutArrayButton').unbind('click',cutArryMenu);
	}
	catch(e){}
	$('.submenu.total-items-even').hide();
      $('#cutArrayButton').bind('click',cutArryMenu);
      $('#cutArrayButton').removeClass('disabled').addClass('active').removeAttr('disabled').addClass('pressed');
      userAnswer = new Array();
      var totRows = $('#f1').val();
	var totCols = $('#f3').val();
	$('.undo-cut.hor,.undo-cut.vert').css('visibility', 'hidden');
	$('.cut-array.vert,.cut-array.hor').hide();
	var getHorCount= rowSplitArray.length;
	var getVerCount= colSplitArray.length;
	var boxHeight = parseFloat($('.grid').find('td').eq(0).css('height'));
	var boxWidth = parseFloat($('.grid').find('td').eq(0).css('width'));
	
	$('.spaceAdjust').remove();
	$('#gridContainer > tbody > tr > td').after('<td class="spaceAdjust" style="width:50px;"></td>');
	
	
	var colsCheckPoints = [];
	try{
	    $('.grid').each(function(){
		colsPerGrid = $(this).find('tr').eq(0).find('td').length;
		for(var check=0; check<colsPerGrid;check++)
		{
		    colsCheckPoints.push($(this).find('tr').eq(0).find('td').eq(check).offset().left);
		}
	    });
	
	}catch(e){}
	colsCheckPoints = colsCheckPoints.removeDuplicates();
    
	var rowsCheckPoints = [];
	try{
	    $('.grid').each(function(){
		rowsPerGrid = $(this).find('tr').length;
		for(var check=0; check<rowsPerGrid;check++)
		{
		    rowsCheckPoints.push($(this).find('tr').eq(check).offset().top);
		}
	    });
	
	}catch(e){}
	rowsCheckPoints = rowsCheckPoints.removeDuplicates();
	
	$("#array-labels").html("");
	if (getHorCount>=0 && getVerCount==0) {
	    for(var rows=0; rows<rowSplitArray.length+1; rows++)
	    {
		var label = $('<div class="label userInput right"><input direction="left" style="width:40px; height:40px; float:left;" type="text" class="numTxt" readonly="true" value="" maxlength="2"/> <div style="margin-left: 5px;width:20px; font-family: GillSansNormal; position:relative; top:5px; font-size: 28px; float:left">&times;</div><input direction="right" style="width:40px; height:40px; float:left;" type="text" class="numTxt" readonly="true" value="" maxlength="2"/></div>');
		var topVal=0;
		var hei = 0;
		var braceTop = 0;
		var braceLeft = ($('#gridContainer').offset().left-$("#array-labels").offset().left)+$('#gridContainer').width();
		if (rows==0) {
		    topVal = ($('#gridContainer').offset().top - $("#array-labels").offset().top) + (rowSplitArray[0] * boxHeight)/2-10;
		    braceTop = $('#gridContainer').offset().top - $("#array-labels").offset().top;
		    try{
			hei = ($('.undo-cut.hor').eq(0).offset().top - $('#gridContainer').offset().top)/2 - 8;
		    }catch(e){}
		    
		}
		else if (rowSplitArray[rows]!=undefined) {
		    topVal = ($('#gridContainer').offset().top - $("#array-labels").offset().top + (rowSplitArray[rows-1] * boxHeight) + ((rowSplitArray[rows] - rowSplitArray[rows-1]) * boxHeight)/2) + 10;
		    braceTop = $('#gridContainer').offset().top - $("#array-labels").offset().top + (rowSplitArray[rows-1] * boxHeight)+23;
		    hei = ((rowSplitArray[rows] - rowSplitArray[rows-1]) * boxHeight)/2-6;
		}
		else {
		    topVal = ($('#gridContainer').offset().top+$('#gridContainer').height()-$("#array-labels").offset().top) - ((totRows - rowSplitArray[rowSplitArray.length-1]) * boxHeight)/2 - 30;
		    braceTop = ($('#gridContainer').offset().top+$('#gridContainer').height()-$("#array-labels").offset().top) - ((totRows - rowSplitArray[rowSplitArray.length-1]) * boxHeight)-23;
		    hei = ((totRows - rowSplitArray[rowSplitArray.length-1]) * boxHeight)/2-6;
		}
		if (rowSplitArray.length <= 0) {
		    topVal = $('#gridContainer').offset().top - $("#array-labels").offset().top + ($('#gridContainer').height()/2)-20;
		    braceTop = $('#gridContainer').offset().top - $("#array-labels").offset().top;
		    hei = $('#gridContainer').height()/2-20;
		}
		
		
		label.css({'left':(braceLeft+18-50)+'px','top':topVal+'px', 'height':'30px'});
		$("#array-labels").append(label);
		
		$("#array-labels").append('<div class="label right xAlign" txtindex="'+rows+'" style="top: '+braceTop+'px; left: '+(braceLeft-50)+'px;"><div class="curly-brackets"><div class="beginning-edge"></div><div class="line left" style="height: '+hei+'px;"></div><div class="middle-edge"></div><div class="line right" style="height: '+hei+'px;"></div><div class="ending-edge"></div></div></div>');
	    }
	}
	else if (getHorCount>0 && getVerCount<2) {
	    for(var rows=0; rows<rowSplitArray.length+1; rows++)
	    {
		var labelRight = $('<div class="label userInput right"><input direction="left" style="width:40px; height:40px; float:left;" type="text" class="numTxt" readonly="true" value="" maxlength="2"/> <div style="margin-left: 5px;width:20px; font-family: GillSansNormal; position:relative; top:5px; font-size: 28px; float:left">&times;</div><input direction="right" style="width:40px; height:40px; float:left;" type="text" class="numTxt" readonly="true" value="" maxlength="2"/></div>');
		var labelLeft = $('<div class="label userInput left"><input direction="left" style="width:40px; height:40px; float:left;" type="text" class="numTxt" readonly="true" value="" maxlength="2"/> <div style="margin-left: 5px;width:20px; font-family: GillSansNormal; position:relative; top:5px; font-size: 28px; float:left">&times;</div><input direction="right" style="width:40px; height:40px; float:left;" type="text" class="numTxt" readonly="true" value="" maxlength="2"/></div>');
		var topVal=0;
		var hei = 0;
		var braceTop = 0;
		var braceLeft = ($('#gridContainer').offset().left-$("#array-labels").offset().left)+$('#gridContainer').width();
		if (rows==0) {
		    topVal = ($('#gridContainer').offset().top - $("#array-labels").offset().top) + (rowSplitArray[0] * boxHeight)/2-10;
		    braceTop = $('#gridContainer').offset().top - $("#array-labels").offset().top;
		    try{
			hei = ($('.undo-cut.hor').eq(0).offset().top - $('#gridContainer').offset().top)/2 - 8;
		    }catch(e){}
		    
		}
		else if (rowSplitArray[rows]!=undefined) {
		    topVal = ($('#gridContainer').offset().top - $("#array-labels").offset().top + (rowSplitArray[rows-1] * boxHeight) + ((rowSplitArray[rows] - rowSplitArray[rows-1]) * boxHeight)/2) + 10;
		    braceTop = $('#gridContainer').offset().top - $("#array-labels").offset().top + (rowSplitArray[rows-1] * boxHeight)+23;
		    hei = ((rowSplitArray[rows] - rowSplitArray[rows-1]) * boxHeight)/2-6;
		}
		else {
		    topVal = ($('#gridContainer').offset().top+$('#gridContainer').height()-$("#array-labels").offset().top) - ((totRows - rowSplitArray[rowSplitArray.length-1]) * boxHeight)/2 - 30;
		    braceTop = ($('#gridContainer').offset().top+$('#gridContainer').height()-$("#array-labels").offset().top) - ((totRows - rowSplitArray[rowSplitArray.length-1]) * boxHeight)-24;
		    hei = ((totRows - rowSplitArray[rowSplitArray.length-1]) * boxHeight)/2-8;
		}
		if (rowSplitArray.length <= 0) {
		    topVal = $('#gridContainer').offset().top - $("#array-labels").offset().top + ($('#gridContainer').height()/2)-20;
		    braceTop = $('#gridContainer').offset().top - $("#array-labels").offset().top;
		    hei = $('#gridContainer').height()/2-20;
		}
		
		
		labelRight.css({'left':(braceLeft+20-50)+'px','top':topVal+'px', 'height':'30px'});
		labelLeft.css({'left':(braceLeft-($('#gridContainer').width())-130)+'px','top':topVal+'px', 'height':'30px'});
		$("#array-labels").append(labelRight);
		$("#array-labels").append(labelLeft);
		
		$("#array-labels").append('<div class="label right xAlign" txtindex="'+rows+'" style="top: '+braceTop+'px; left: '+(braceLeft-50)+'px;"><div class="curly-brackets"><div class="beginning-edge"></div><div class="line left" style="height: '+hei+'px;"></div><div class="middle-edge"></div><div class="line right" style="height: '+hei+'px;"></div><div class="ending-edge"></div></div></div>');
		$("#array-labels").append('<div class="label left xAlign" txtindex="'+rows+'" style="top: '+braceTop+'px; left: '+(braceLeft-$('#gridContainer').width()-12)+'px;"><div class="curly-brackets"><div class="beginning-edge"></div><div class="line left" style="height: '+hei+'px;"></div><div class="middle-edge"></div><div class="line right" style="height: '+hei+'px;"></div><div class="ending-edge"></div></div></div>');
	    }
	}
	else if (getHorCount==0 && getVerCount>0) {
	    for(var cols=0; cols<colSplitArray.length+1; cols++)
	    {
		var labelBottom = $('<div class="label userInput bottom"><input direction="left" style="width:40px; height:40px; float:left;" type="text" class="numTxt" readonly="true" value="" maxlength="2"/> <div style="margin-left: 5px;width:20px; font-family: GillSansNormal; position:relative; top:5px; font-size: 28px; float:left">&times;</div><input direction="right" style="width:40px; height:40px; float:left;" type="text" class="numTxt" readonly="true" value="" maxlength="2"/></div>');
		var leftVal=0;
		var wid = 0;
		var braceTop = ($('#gridContainer').offset().top-$("#array-labels").offset().top)+$('#gridContainer').height();
		var braceLeft = 0;
		if (cols==0) {
		    leftVal = ($('#gridContainer').offset().left - $("#array-labels").offset().left) + (colSplitArray[0] * boxWidth)/2-46;
		    /*if (colSplitArray[cols]==1) {
			leftVal -= 45;
		    }*/
		    braceLeft = $('#gridContainer').offset().left - $("#array-labels").offset().left;
		    try{
			wid = ($('#gridContainer > tbody > tr > td').eq(0).width()-40)/2;//($('.undo-cut.vert').eq(0).offset().left - $('#gridContainer').offset().left)/2;
		    }catch(e){}
		    
		}
		else if (colSplitArray[cols]!=undefined) {
		    leftVal = ($('#gridContainer').offset().left - $("#array-labels").offset().left + (colSplitArray[cols-1] * boxWidth) + ((colSplitArray[cols] - colSplitArray[cols-1]) * boxWidth)/2) - 23+50;
		    braceLeft = $('#gridContainer').offset().left - $("#array-labels").offset().left + (colSplitArray[cols-1] * boxWidth)+23+50;
		    wid = ((colSplitArray[cols] - colSplitArray[cols-1]) * boxWidth)/2-10;
		    /*if (colSplitArray[cols] - colSplitArray[cols-1]==1) {
			leftVal+=23;
		    }*/
		}
		else {
		    leftVal = ($('#gridContainer').offset().left+$('#gridContainer').width()-$("#array-labels").offset().left) - ((totCols - colSplitArray[colSplitArray.length-1]) * boxWidth)/2 - 71-50;
		    braceLeft = ($('#gridContainer').offset().left+$('#gridContainer').width()-$("#array-labels").offset().left) - ((totCols - colSplitArray[colSplitArray.length-1]) * boxWidth)-23-50;
		    wid = ((totCols - colSplitArray[colSplitArray.length-1]) * boxWidth)/2-10;
		    /*if (colSplitArray[colSplitArray.length-1]-colSplitArray[colSplitArray.length-2]==1) {
			leftVal+=23;
		    }
		    else if (totCols - colSplitArray[colSplitArray.length-1]==1) {
			leftVal+=23;
		    }
		    if (colSplitArray[colSplitArray.length-1]-colSplitArray[colSplitArray.length-2]==1 && totCols - colSplitArray[colSplitArray.length-1]==1) {
			leftVal+=46;
		    }*/
		}
		if (colSplitArray.length <= 0) {
		    leftVal = $('#gridContainer').offset().left - $("#array-labels").offset().left + ($('#gridContainer').width()/2)-46-50;
		    braceLeft = $('#gridContainer').offset().left - $("#array-labels").offset().left-50;
		    wid = $('#gridContainer').width()/2-20;
		}
		
		
		labelBottom.css({'left':leftVal+'px','top':(braceTop+18)+'px', 'height':'30px'});
		$("#array-labels").append(labelBottom);
		
		$("#array-labels").append('<div class="label bottom xAlign" txtindex="'+cols+'" style="left: '+braceLeft+'px; top: '+braceTop+'px;"><div class="curly-brackets"><div class="beginning-edge"></div><div class="line top" style="width: '+wid+'px;"></div><div class="middle-edge"></div><div class="line bottom" style="width: '+wid+'px;"></div><div class="ending-edge"></div></div></div>');
	    }
	}
	else if (getHorCount>=0 && getVerCount>=2) {
	    for(var cols=0; cols<colSplitArray.length+1; cols++)
	    {
		var labelBottom = $('<div class="label userInput bottom"><input direction="left" style="width:40px; height:40px; float:left;" type="text" class="numTxt" readonly="true" value="" maxlength="2"/> <div style="margin-left: 5px;width:20px; font-family: GillSansNormal; position:relative; top:5px; font-size: 28px; float:left">&times;</div><input direction="right" style="width:40px; height:40px; float:left;" type="text" class="numTxt" readonly="true" value="" maxlength="2"/></div>');
		var labelTop = $('<div class="label userInput top"><input direction="left" style="width:40px; height:40px; float:left;" type="text" class="numTxt" readonly="true" value="" maxlength="2"/> <div style="margin-left: 5px;width:20px; font-family: GillSansNormal; position:relative; top:5px; font-size: 28px; float:left">&times;</div><input direction="right" style="width:40px; height:40px; float:left;" type="text" class="numTxt" readonly="true" value="" maxlength="2"/></div>');
		var leftVal=0;
		var wid = 0;
		var braceTop = ($('#gridContainer').offset().top-$("#array-labels").offset().top)+$('#gridContainer').height();
		var braceLeft = 0;
		if (cols==0) {
		    leftVal = ($('#gridContainer').offset().left - $("#array-labels").offset().left) + (colSplitArray[0] * boxWidth)/2-46;
		    /*if (colSplitArray[cols]==1) {
			leftVal -= 45;
		    }*/
		    braceLeft = $('#gridContainer').offset().left - $("#array-labels").offset().left;
		    try{
			wid = ($('#gridContainer > tbody > tr > td').eq(0).width()-40)/2;//($('.undo-cut.vert').eq(0).offset().left - $('#gridContainer').offset().left)/2;
		    }catch(e){}
		    
		}
		else if (colSplitArray[cols]!=undefined) {
		    leftVal = ($('#gridContainer').offset().left - $("#array-labels").offset().left + (colSplitArray[cols-1] * boxWidth) + ((colSplitArray[cols] - colSplitArray[cols-1]) * boxWidth)/2) - 23+50;
		    braceLeft = $('#gridContainer').offset().left - $("#array-labels").offset().left + (colSplitArray[cols-1] * boxWidth)+23+50;
		    wid = ((colSplitArray[cols] - colSplitArray[cols-1]) * boxWidth)/2-10;
		    /*if (colSplitArray[cols] - colSplitArray[cols-1]==1) {
			leftVal+=23;
		    }*/
		}
		else {
		    leftVal = ($('#gridContainer').offset().left+$('#gridContainer').width()-$("#array-labels").offset().left) - ((totCols - colSplitArray[colSplitArray.length-1]) * boxWidth)/2 - 71-50;
		    braceLeft = ($('#gridContainer').offset().left+$('#gridContainer').width()-$("#array-labels").offset().left) - ((totCols - colSplitArray[colSplitArray.length-1]) * boxWidth)-23-50;
		    wid = ((totCols - colSplitArray[colSplitArray.length-1]) * boxWidth)/2-10;
		    /*if (colSplitArray[colSplitArray.length-1]-colSplitArray[colSplitArray.length-2]==1) {
			leftVal+=23;
		    }
		    else if (totCols - colSplitArray[colSplitArray.length-1]==1) {
			leftVal+=23;
		    }
		    if (colSplitArray[colSplitArray.length-1]-colSplitArray[colSplitArray.length-2]==1 && totCols - colSplitArray[colSplitArray.length-1]==1) {
			leftVal+=46;
		    }*/
		}
		if (colSplitArray.length <= 0) {
		    leftVal = $('#gridContainer').offset().left - $("#array-labels").offset().left + ($('#gridContainer').width()/2)-46-50;
		    braceLeft = $('#gridContainer').offset().left - $("#array-labels").offset().left-50;
		    wid = $('#gridContainer').width()/2-20;
		    
		}
		
		
		labelBottom.css({'left':leftVal+'px','top':(braceTop+18)+'px', 'height':'30px'});
		labelTop.css({'left':leftVal+'px','top':(braceTop-($('#gridContainer').height())-70)+'px', 'height':'30px'});
		$("#array-labels").append(labelBottom);
		$("#array-labels").append(labelTop);
		
		$("#array-labels").append('<div class="label bottom xAlign" txtindex="'+cols+'" style="left: '+braceLeft+'px; top: '+braceTop+'px;"><div class="curly-brackets"><div class="beginning-edge"></div><div class="line top" style="width: '+wid+'px;"></div><div class="middle-edge"></div><div class="line bottom" style="width: '+wid+'px;"></div><div class="ending-edge"></div></div></div>');
		$("#array-labels").append('<div class="label top xAlign" txtindex="'+cols+'" style="left: '+braceLeft+'px; top: '+(braceTop-($('#gridContainer').height())-12)+'px;"><div class="curly-brackets"><div class="beginning-edge"></div><div class="line top" style="width: '+wid+'px;"></div><div class="middle-edge"></div><div class="line bottom" style="width: '+wid+'px;"></div><div class="ending-edge"></div></div></div>');
	    }
	}
	
      $(".keypadHolder").remove();
      numKeypad = new vKeyPad('.numTxt');
      
      numKeypad.onTextChanged = function(keypad){
            onComplete(keypad);
      }
      
      $('#createArrayButton').removeClass('active').addClass("disabled").attr('disabled','disabled');
      arrayCreated = false;
      $("#f1, #f3").attr('disabled','disabled');
      
      //nacreateArrayButtonShowHide();
      
      if (getHorCount==0 && getVerCount==0){
        $('#SolveEquationButton').removeClass('active');
	$('#SolveEquationButton').addClass("disabled");
	$('#SolveEquationButton').attr('disabled','disabled');
      
     }
     else{
	if ($('#array-labels').find('input').length>0){
	    $('#SolveEquationButton').removeAttr("disabled");
	    $('#SolveEquationButton').removeClass("disabled");
	    $('#SolveEquationButton').addClass("active");
	}
     }
}

function cutArryDrag() {
    
      var vertcutBlock=457;
	$('.cut-array.hor.horizontal').draggable({axis: "y", containment:"#array-overlaysBlock",start:function(){$('#cutArrayButton').parent().find('.submenu').hide();},
      stop: function(event, ui) {
            $('.cut-icon').hide();
	    var handlePos = $(this).offset();
	    var handleHight = $(this).height();
	    
	    var gridPos = $("#gridContainer").offset();
	    var checkPoints = [];
	    
	    var totRows = $('#f1').val;
	    var boxHeight = parseFloat($('.grid').find('td').eq(0).css('height'));
	    
	    try{
		$('.grid').each(function(){
		    rowsPerGrid = $(this).find('tr').length;
		    for(var check=0; check<rowsPerGrid;check++)
		    {
			checkPoints.push($(this).find('tr').eq(check).offset().top);
		    }
		});
	    
	    }catch(e){}
	    checkPoints = checkPoints.removeDuplicates();
	    snapToPoint = -1;
	    for(var check=0; check<checkPoints.length;check++)
	    {
		var handleBarTop = (handlePos.top+(handleHight/2));
		if (handleBarTop < checkPoints[check]+(boxHeight/2) && handleBarTop > checkPoints[check]-(boxHeight/2)) {
		    snapToPoint = check;
		    break;
		}
	    }
	    
	    $('.undo-cut.hor').each(function(){
	    var handleBarTop = (snapToPoint!=-1 ? checkPoints[snapToPoint] : handlePos.top+(handleHight/2));
	    console.log(handleBarTop, ($(this).offset().top+($(this).height()/2)));
	      if (handleBarTop > ($(this).offset().top+($(this).height()/2))-(boxHeight/2) && handleBarTop < ($(this).offset().top+($(this).height()/2)+(boxHeight/2))) {
		snapToPoint = rowSplitArray[$(this).attr('splitIndex').split('_')[1]]+1;
	      }
	      else if (handleBarTop < ($(this).offset().top+($(this).height()/2))+(boxHeight/2) && handleBarTop > ($(this).offset().top+($(this).height()/2))) {
		snapToPoint = rowSplitArray[$(this).attr('splitIndex').split('_')[1]]-1;
	      }
	      if (handleBarTop > checkPoints[checkPoints.length-1]) {
		
	      }
	     });
	    
	    snapToPoint = (snapToPoint ==0 ? 1 : snapToPoint);
	    snapToPoint = (snapToPoint >=checkPoints.length ? checkPoints.length-1 : snapToPoint);
	    if (snapToPoint<0) {
		if (handlePos.top < ($("#gridContainer").offset().top + $("#gridContainer").height())) {
		    snapToPoint = totRows-1;
		}
	    }
	    
	    if (snapToPoint>=0) {
		var posHandle = checkPoints[snapToPoint] - $(this).parent().offset().top - (handleHight/2) + 3;
		$(this).css({'top':posHandle+'px'});
		$('.cut-icon').show();
		var handle = $(this);
		$('.undo-cut.hor').each(function(){
		if (handle.position().top+(handleHight/2) < $(this).position().top+$(this).height()+20 && handle.position().top+(handleHight/2) > $(this).position().top-20) {
		       $('.cut-icon').hide(); 
		}
		});
		
	    }
	    
       
        }                                 });
    $('.cut-array.vert.vertical').draggable({axis: "x", containment:"#array-overlaysBlock",start:function(){$('#cutArrayButton').parent().find('.submenu').hide();},
           stop: function(event, ui) {
	    
	    
	    $('.cut-icon').hide();
	    var handlePos = $(this).offset();
	    var handleWidth = $(this).width();
	    
	    var gridPos = $("#gridContainer").offset();
	    var checkPoints = [];
	    
	    var totCols = $('#f3').val();
	    var boxWidth = parseFloat($('.grid').find('td').eq(0).css('width'));
	    
		//checkPoints.push(gridPos.top+(check * boxHeight)+7);
		try{
		    $('.grid').each(function(){
			colsPerGrid = $(this).find('tr').eq(0).find('td').length;
			for(var check=0; check<colsPerGrid;check++)
			{
			    checkPoints.push($(this).find('tr').eq(0).find('td').eq(check).offset().left);
			}
		    });
		
		}catch(e){}
		checkPoints = checkPoints.removeDuplicates();
	    
	    snapToPoint = -1;
	    for(var check=0; check<checkPoints.length;check++)
	    {
		var handleBarLeft = (handlePos.left+(handleWidth/2));
		if (handleBarLeft < checkPoints[check]+(boxWidth/2) && handleBarLeft > checkPoints[check]-(boxWidth/2)) {
		    snapToPoint = check;
		    break;
		}
		
	    }
	    
	    $('.undo-cut.vert').each(function(){
	    var handleBarLeft = (snapToPoint!=-1 ? checkPoints[snapToPoint] : handlePos.left+(handleWidth/2));
	    console.log(handleBarLeft, ($(this).offset().left+($(this).width()/2)));
	      if (handleBarLeft > ($(this).offset().left+($(this).width()/2))-(boxWidth/2) && handleBarLeft < ($(this).offset().left+($(this).width()/2))) {
		snapToPoint = colSplitArray[$(this).attr('splitIndex').split('_')[1]]+1;
	      }
	      else if (handleBarLeft < ($(this).offset().left+($(this).width()/2))+(boxWidth/2) && handleBarLeft > ($(this).offset().left+($(this).width()/2))) {
		snapToPoint = colSplitArray[$(this).attr('splitIndex').split('_')[1]]-1;
	      }
	     });
	    
	    snapToPoint = (snapToPoint ==0 ? 1 : snapToPoint);
	    snapToPoint = (snapToPoint >=checkPoints.length ? checkPoints.length-1 : snapToPoint);
	    if (snapToPoint<0) {
		if (handlePos.left > checkPoints[checkPoints.length-1] && handlePos.left < ($("#gridContainer").offset().left + $("#gridContainer").width())) {
		    snapToPoint = checkPoints.length-1;
		}
	    }
	    
	    if (snapToPoint>=0) {
		var posHandle = checkPoints[snapToPoint] - $(this).parent().offset().left - (handleWidth/2) + 3;
		$(this).css({'left':posHandle+'px'});
		$('.cut-icon').show();
		var handle = $(this);
		$('.undo-cut.vert').each(function(){
		if (handle.position().left+(handleWidth/2) < $(this).position().left+$(this).width()+20 && handle.position().left+(handleWidth/2) > $(this).position().left-20) {
		       $('.cut-icon').hide(); 
		}
		});
	    }
	    
	    
            /*var getXPos= ui.position.left;
            var lines = $(".gridContainer").find(".array-element");
            var verLineActPos = $(".vertical").position().left;
            var verLinePos = ($(".vertical").position().left+$(".vertical").width()/2-1);
            $('.cut-array.vert.vertical').addClass('disabled');
            currverticaPos = -1;
            for (var i=0; i<lines.length; i++) {
                  var line = lines.eq(i);
                  
                  var parent = line.parent();
                  if (parent.children()[0] != line[0]) {
                        var variation = line.position().left-verLinePos;
			console.log("variation",variation)
                        var success = true;
                        $('.undo-cut.vert').each(function(){
                              if ((verLineActPos+($(".vertical").width()/2)+4) >= $(this).position().left-(line.width()/2) && (verLineActPos+($(".vertical").width()/2)+4) <= $(this).position().left+$(this).width()+(line.width()/2)) {
                                    currverticaPos = -1;
                                    $(".vertical").css({"left":"0px"});
                                    success = false;
                              }
                             });
                        
                        if (!success) {
                              break;
                        }
                        if(Math.abs(variation) < line.width()/2){
                              $(".vertical").css({"left":(variation+verLineActPos)+"px"});
                              
                              currverticaParent = line.parents(".grid");
                              currverticaPos = line.parent().children().index(line);
                              $('.undo-cut.vert').each(function(){
                              if (($(".vertical").position().left+($(".vertical").width()/2)+4) >= $(this).position().left-(line.width()/2) && ($(".vertical").position().left+($(".vertical").width()/2)+4) <= $(this).position().left+$(this).width()+(line.width()/2)) {
                                    currverticaPos = -1;
                                    $(".vertical").css({"left":"0px"});
                              }
                             });
                              $('.cut-array.vert.vertical').removeClass('disabled');
                              break;
                        }
                        else if (verLineActPos <= lines.eq(0).position().left+(lines.eq(0).width()/2)) {
                              $(".vertical").css({"left":(lines.eq(0).position().left+lines.eq(0).width()-($(".vertical").width()/2)+4)+"px"});
                              currverticaParent = line.parents(".grid");
                              currverticaPos = line.parent().children().index(line);
                              $('.undo-cut.vert').each(function(){
                              if (($(".vertical").position().left+($(".vertical").width()/2)+4) >= $(this).position().left-(line.width()/2) && ($(".vertical").position().left+($(".vertical").width()/2)+4) <= $(this).position().left+$(this).width()+(line.width()/2)) {
                                    currverticaPos = -1;
                                    $(".vertical").css({"left":"0px"});
                              }
                             });
                              $('.cut-array.vert.vertical').removeClass('disabled');
                              break;
                        }
                        else if ((verLineActPos+($(".vertical").width()/2)+4) >= lines.eq(lines.length-1).position().left+(lines.eq(lines.length-1).width()/2)) {
                              $(".vertical").css({"left":(lines.eq(lines.length-1).position().left-($(".vertical").width()/2)+4)+"px"});
                              currverticaParent = line.parents(".grid");
                              currverticaPos = line.parent().children().index(line);
                              $('.undo-cut.vert').each(function(){
                              if (($(".vertical").position().left+($(".vertical").width()/2)+4) >= $(this).position().left-(line.width()/2) && ($(".vertical").position().left+($(".vertical").width()/2)+4) <= $(this).position().left+$(this).width()+(line.width()/2)) {
                                    currverticaPos = -1;
                                    $(".vertical").css({"left":"0px"});
                              }
                             });
                              $('.cut-array.vert.vertical').removeClass('disabled');
                              break;
                        }
                  }
            }
            
      //if ($('.gridContainer').height()>457) {
      //      consloe.log("da");
      //   
      //}
        
      var leftArry =$('.gridContainer').find(".grid").eq(0).position().left;
       var Dragvert =$('.vert').position().left;
       if (Dragvert>leftArry) {
            $('.cut-icon').show();
       }*/
        }});
}

function cutArray(event){
    $('.cut-icon').hide();
    $('.cut-array.hor.horizontal').animate({left:"0px",top:"0px"});
    $('.cut-array.vert.vertical').animate({left:"0px",top:"0px"});
    var isHorizontal = $(this).parents(".horizontal").length;
    var isVertical = $(this).parents(".vertical").length;
    
    
    if (isHorizontal) {
      rowSplitArray.push(snapToPoint);
      rowSplitArray.sort();
      tableArray.tablesInRow = rowSplitArray.length+1;
    }
    
    if (isVertical) {
      colSplitArray.push(snapToPoint);
      colSplitArray.sort();
      tableArray.tablesInCol = colSplitArray.length+1;
    }
    cut_joinGrid();
    nacreateArrayButtonShowHide();
}
function cut_joinGrid() {
    var totRows = $('#f1').val();
    var totCols = $('#f3').val();
    splitArray = [];
    for(var rowSplit=0; rowSplit<rowSplitArray.length+1;rowSplit++)
    {
	for(var colSplit=0; colSplit<colSplitArray.length+1;colSplit++)
	{
	    var rowVal = "";
	    var colVal = "";
	    
	    if (rowSplit == 0) {
		rowVal = rowSplitArray[rowSplit];
	    }
	    else if(rowSplitArray[rowSplit]!=undefined){
		rowVal = rowSplitArray[rowSplit] - rowSplitArray[rowSplit-1];
	    }
	    else {
		rowVal = totRows - rowSplitArray[rowSplitArray.length - 1];
	    }

	    if (rowSplitArray.length==0) {
		rowVal = totRows;
	    }
	    
	    if (colSplit == 0) {
		colVal = colSplitArray[colSplit];
	    }
	    else if(colSplitArray[colSplit]!=undefined){
		colVal = colSplitArray[colSplit] - colSplitArray[colSplit-1];
	    }
	    else {
		colVal = totCols - colSplitArray[colSplitArray.length - 1];
	    }
	    
	    if (colSplitArray.length==0) {
		colVal = totCols;
	    }
	    splitArray.push({"row":rowVal,"col":colVal});
	}
    }
    
    $(".gridContainer").html("");
    
  
    var newContainer = $('<table align="center" id="gridContainer" cellpadding="0" cellspacing="0"></table>');
    $(".gridContainer").append(newContainer);
    var gridIndex = 0;
    for(var tabRowIndex=0; tabRowIndex<tableArray.tablesInRow;tabRowIndex++)
    {
	var newTabRow = $('<tr></tr>');
	newContainer.append(newTabRow);
	for(var tabColIndex=0; tabColIndex<tableArray.tablesInCol;tabColIndex++)
	{
	    var newTabCol = $('<td></td>');
	    newTabRow.append(newTabCol);
	    
	    var grid = $('<table class="grid" cellpadding="0" cellspacing="0"></table>')
	    newTabCol.append(grid);
	    for(var rowIndex=0; rowIndex<splitArray[gridIndex].row;rowIndex++)
	    {
		var newRow = $('<tr></tr>');
		for(var colIndex=0; colIndex<splitArray[gridIndex].col;colIndex++)
		{
		    var newCol = $('<td><i class="icon '+changeObjectName+'"></i></td>');
		    newRow.append(newCol);
		}
		grid.append(newRow);
	    }
	    gridIndex++;
	}
    }
  
  $("#gridSeparator").html("");
    var colsCheckPoints = [];
    try{
	$('.grid').each(function(){
	    colsPerGrid = $(this).find('tr').eq(0).find('td').length;
	    for(var check=0; check<colsPerGrid;check++)
	    {
		colsCheckPoints.push($(this).find('tr').eq(0).find('td').eq(check).offset().left);
	    }
	});
    
    }catch(e){}
    colsCheckPoints = colsCheckPoints.removeDuplicates();
    
    for(var cut=0; cut<colSplitArray.length;cut++){
	var leftPos = colsCheckPoints[colSplitArray[cut]] - $(".gridContainer").offset().left-18-12;
	var hei = $("#gridContainer").height();
	var topPos = $("#gridContainer").offset().top - $("#gridContainer").parent().offset().top;
	$("#gridSeparator").append('<div class="undo-cut vert" splitIndex="col_'+cut+'" style="height: '+hei+'px; left: '+leftPos+'px; top:'+topPos+'px; z-index:50"><div class="button-delete" onclick="joinGrid(this)"></div><div class="dashed"></div></div>');
    }
    
    var rowsCheckPoints = [];
    
    try{
	$('.grid').each(function(){
	    rowsPerGrid = $(this).find('tr').length;
	    for(var check=0; check<rowsPerGrid;check++)
	    {
		rowsCheckPoints.push($(this).find('tr').eq(check).offset().top);
	    }
	});
    
    }catch(e){}
    rowsCheckPoints = rowsCheckPoints.removeDuplicates();
    console.log("rowsCheckPoints", rowsCheckPoints)
    for(var cut=0; cut<rowSplitArray.length;cut++){
	var topPos = rowsCheckPoints[rowSplitArray[cut]] - $(".gridContainer").offset().top-18-11;
	var wid = $("#gridContainer").width();
	var leftPos = $("#gridContainer").offset().left - $("#gridContainer").parent().offset().left;
	$("#gridSeparator").append('<div class="undo-cut hor" splitIndex="row_'+cut+'" style="width: '+wid+'px; left:'+leftPos+'px; top: '+topPos+'px; z-index:50"><div class="button-delete" onclick="joinGrid(this)"></div><div class="dashed"></div></div>');
    }
    
    try{
	$('#cutArrayButton').unbind('click',cutArryMenu);
    }
    catch(e){}
    if((rowSplitArray.length+colSplitArray.length) < totSplitCount)
    {
	$('#cutArrayButton').bind('click',cutArryMenu);
	$('#cutArrayButton').removeClass('disabled').addClass('active').removeAttr('disabled').addClass('pressed');
	
	console.log(rowSplitArray.length, colSplitArray.length, maxCutsInDirection);
	if (rowSplitArray.length < maxCutsInDirection) {
	    $('#cutArrayHorizontalButton').parent().attr('onclick','cutFunctionality(this);');
	}
	else {
	    $('#cutArrayHorizontalButton').parent().removeAttr('onclick').removeClass('selected');
	    $('.cut-array.hor').hide();
	}
	if (colSplitArray.length < maxCutsInDirection) {
	    $('#cutArrayVerticalButton').parent().attr('onclick','cutFunctionality(this);');
	}
	else {
	    $('#cutArrayVerticalButton').parent().removeAttr('onclick').removeClass('selected');
	    $('.cut-array.vert').hide();
	    
	}
    }
    else {
	$('#cutArrayButton').addClass('disabled').removeClass('active').attr('disabled', 'disabled').removeClass('pressed');
	$('.cut-array.vert').hide();
	$('.cut-array.hor').hide();
	$('#cutArrayButton').parent().find('.submenu').hide();
	$('#cutArrayVerticalButton').parent().removeAttr('onclick').removeClass('selected');
	$('#cutArrayHorizontalButton').parent().removeAttr('onclick').removeClass('selected');
	
    }
    
    
}
function joinGrid(target) {
    var indexValue = $(target).parent().attr('splitIndex');
    var indexId = indexValue.split('_')[1];
    if (indexValue.indexOf('row')!=-1) {
	rowSplitArray.splice(indexId, 1);
        rowSplitArray.sort();
	tableArray.tablesInRow = rowSplitArray.length+1;
    }
    else if (indexValue.indexOf('col')!=-1) {
	colSplitArray.splice(indexId, 1);
        colSplitArray.sort();
	tableArray.tablesInCol = colSplitArray.length+1;
    }
    cut_joinGrid();
}
function joinVerticalGrids(target) {
      var gridIndex = $(target).index('.button-delete');
      var lineIndex = 0;
      $('.grid').eq(gridIndex+1).find('.line').each(function (){
            $('.grid').eq(gridIndex).find('.line').eq(lineIndex).append($(this).find('.array-element').clone());
            lineIndex++;
      });
      $('.grid').eq(gridIndex+1).remove();
      $(target).parent('.vert').remove();
      
      for(var vertCut=0; vertCut< $('.vert').length; vertCut++){
                              $('.vert').eq(vertCut).css({'left':($('.grid').eq(vertCut).position().left-18)+'px'});
                        }
                        $('.cut-array.vert.vertical').css({left:"0px",top:"0px"});
                        nacreateArrayButtonShowHide();
}
function joinHoriLineDelete(target) {
      var gridIndex = $(target).index('.button-delete');
      $('.grid').eq(gridIndex+1).find('.line').each(function(){
            $('.grid').eq(gridIndex).append($(this).clone());
            });
      $('.grid').eq(gridIndex+1).remove();
      $(target).parent().parent().remove();
      nacreateArrayButtonShowHide();
}
function nacreateArrayButtonShowHide() {
     var getHorCount= rowSplitArray.length;
     var getVerCount= colSplitArray.length;
     if (getHorCount==0 && getVerCount==0){
      $('#createArrayButton').removeAttr("disabled");
      $('#createArrayButton').removeClass("disabled");
      $('#createArrayButton').addClass("active");
      //arrayCreated = true;
      $('#SolveEquationButton').removeClass('active');
      $('#SolveEquationButton').addClass("disabled");
     $('#SolveEquationButton').attr('disabled','disabled');
      
     }
     else{
      $('#createArrayButton').removeClass('active');
      $('#createArrayButton').addClass("disabled");
     $('#createArrayButton').attr('disabled','disabled');
     //arrayCreated = false;
     //$('#SolveEquationButton').removeAttr("disabled");
     // $('#SolveEquationButton').removeClass("disabled");
     // $('#SolveEquationButton').addClass("active");
     if ($('#array-labels').find('input').length>0){
      $('#SolveEquationButton').removeAttr("disabled");
      $('#SolveEquationButton').removeClass("disabled");
      $('#SolveEquationButton').addClass("active");
     }
     }
     
     
     
}



function solveEquationFunction() {
      $('#solveEquation').html("");
      var getHorCount= rowSplitArray.length;
     var getVerCount= colSplitArray.length;
     var grids = $(".gridContainer").find(".grid");
    if (getHorCount>0 || getVerCount>0) {
	var updateEq=[];
	$('#solveEquation').html("");
	$('#solveEquation').append('=&nbsp;<div id="equationtop" style="position:relative; top:-20px; left:10px"></div><div id="equationbottom" style="position:relative; top:-27px; left:20px; clear:both;"></div>');
	for(var i=0; i<userAnswer.length; i++)
	{
	    if (userAnswer[i]!=undefined) {
		if (userAnswer[i].left!="" && userAnswer[i].right!="") {
		    updateEq.push('('+(userAnswer[i].left+' X '+userAnswer[i].right)+')')
		}
		
            }
	}
     
     jointxt =updateEq.join(' + ');
     
     $('#equationtop').append('<div style="float:left; position:relative; top:-10px; margin-left:10px;">'+jointxt.replace(/X/g,'&times;')+'</div>')
     var divs=[];
     
     for(var gridsInnerLines=0;gridsInnerLines<userAnswer.length;gridsInnerLines++)
      {
            if(updateEq[gridsInnerLines]!=undefined){
            divs.push('<input style="width:45px; margin-left:0px; font-size:16px; text-align:center; margin-right:0px; float:left; height:30px; background-color:rgb(255, 254, 210);border: 1px solid rgb(76, 111, 50); border-radius: 2px;" type="text" class="numTxt solveEq" readonly="true" value="" maxlength="2"/>');
            }
      }
     jointxt =divs.join('<div style="float:left; font-size:20px; position:relative; margin-left:2px; padding: 2px 2px;">+</div>');
     
     if (updateEq.length>0)
     $('#equationbottom').append(jointxt+'<div style="float:left; text-align:center; font-size:16px;">&nbsp; = &nbsp;</div><input style="width:60px; text-align:center;  font-size:16px; margin-left:0px; height:30px; float:left; background-color:rgb(255, 254, 210);border: 1px solid rgb(76, 111, 50); border-radius: 2px;" type="text" class="numTxt solveEq" readonly="true" value="" maxlength="2"/>')
      }
      $(".keypadHolder").remove();
      numKeypad = new vKeyPad('.numTxt');
      
      numKeypad.onTextChanged = function(keypad){
            onComplete(keypad);
      }
}

function updateEquations() {
      $('#solveEquation').html("");
      var getHorCount= rowSplitArray.length;
     var getVerCount= colSplitArray.length;
     var grids = $(".gridContainer").find(".grid");
    if (getHorCount>0 || getVerCount>0) {
	var updateEq=[];
	$('#solveEquation').html("");
	$('#solveEquation').append('=&nbsp;<div id="equationtop" style="position:relative; top:-20px; left:10px"></div><div id="equationbottom" style="position:relative; top:-27px; left:20px; clear:both;"></div>');
	for(var i=0; i<userAnswer.length; i++)
	{
	    if (userAnswer[i]!=undefined) {
		updateEq.push('('+(userAnswer[i].left+' X '+userAnswer[i].right)+')')
            }
	}
     
     jointxt =updateEq.join(' + ');
     
     $('#equationtop').append('<div style="float:left; position:relative; top:-10px; margin-left:10px;">'+jointxt.replace(/X/g,'&times;')+'</div>')
     var divs=[];
     
     for(var gridsInnerLines=0;gridsInnerLines<userAnswer.length;gridsInnerLines++)
      {
            if(updateEq[gridsInnerLines]!=undefined){
            divs.push('<input style="width:45px; margin-left:0px; margin-right:0px; float:left; height:30px; background-color:rgb(255, 254, 210);border: 1px solid rgb(76, 111, 50); border-radius: 2px;" type="text" class="numTxt" readonly="true" value="" maxlength="2"/>');
            }
      }
     jointxt =divs.join('<div style="float:left; font-size:20px; position:relative; text-align:center; margin-left:2px; padding: 2px 2px;">+</div>');
     
     if (updateEq.length>0)
     $('#equationbottom').append(jointxt+'<div style="float:left; font-size:20px;">&nbsp; = &nbsp;</div><input style="width:60px; margin-left:0px; height:30px; float:left; background-color:rgb(255, 254, 210);border: 1px solid rgb(76, 111, 50); border-radius: 2px;" type="text" class="numTxt" readonly="true" value="" maxlength="2"/>')
      }
      $(".keypadHolder").remove();
      numKeypad = new vKeyPad('.numTxt');
      
      numKeypad.onTextChanged = function(keypad){
            onComplete(keypad);
      }
      /*if (getVerCount>0) {
            var updateEq=[];
      $('#solveEquation').html("");
      $('#solveEquation').append('=&nbsp;<div id="equationtop" style="position:relative; top:-20px; left:10px"></div><div id="equationbottom" style="position:relative; top:-40px; left:10px; clear:both;"></div>');
     
     for(var i=0; i<userAnswer.length; i++)
     {
      if (userAnswer[i]!=undefined) {
            if (userAnswer[i].length == 1)
                  try{
                  if (isNaN(parseInt(userAnswer[i].substr(1, 1))) && eval(userAnswer[i].replace('×', '*').replace('−','-')))
                        if (userAnswer[i].substr(1, 1)=="−" || userAnswer[i].substr(1, 1)=="+") {
                        updateEq.push('('+userAnswer[i]+')')
                  }
                  else{
                        updateEq.push('('+(userAnswer[i].substr(0,1)+'X'+userAnswer[i].substr(2,1))+')')
                  }
                  }catch(e){}
      }
      
     }
     jointxt =updateEq.join(' + ');
     
     $('#equationtop').append('<div style="float:left; position:relative; top:-10px; margin-left:10px;">'+jointxt.replace(/X/g,'&times;')+'</div>')
     var divs=[];
     for (var gridsInnerLines=0;gridsInnerLines<userAnswer.length;gridsInnerLines++)
     {
     
      if (updateEq[gridsInnerLines]!=undefined) {
            divs.push('<div style="float:left; position:relative; text-align:center; padding-bottom:23px; width:50px; height:20px; border:1px solid #41920A; top:15px; margin-left:2px; background:#fff;line-height: 24px;">'+eval(updateEq[gridsInnerLines].replace('X','*').replace('−','-'))+'</div>');
      }
     }
     
     jointxt =divs.join('<div style="float:left; position:relative; text-align:center; padding-bottom:23px; top:15px; margin-left:2px; padding: 2px 2px;">+</div>');
     
     if (updateEq.length>0) 
      $('#equationbottom').append(jointxt+'<div style="float:left; position:relative; text-align:center; padding-bottom:23px; top:15px; margin-left:2px;padding: 2px 2px;">=</div>'+'<div style="float:left; position:relative; background:#fff; text-align:center; padding-bottom:23px; top:15px; margin-left:2px; border:1px solid #41920A; width:50px; height:20px;line-height: 24px;">'+eval(updateEq.join(' + ').replace(/X/g,'*').replace(/−/g,'-'))+'</div>')
      }*/
}

function onComplete(keypad) {
      if($(keypad.CurrentFocus).closest('.label').hasClass('userInput')){
            var userInput = keypad.CurrentFocus.value;
            //if (userInput.length == 3) {
              //    if (isNaN(parseInt(userInput.substr(1, 1)))) {
	      var labelIndex = $(keypad.CurrentFocus).parent().index('.userInput');
	      var leftLabel = $(keypad.CurrentFocus).parent().find('input').eq(0).val();
	      var rightLabel = $(keypad.CurrentFocus).parent().find('input').eq(1).val();
	      leftLabel = (leftLabel == undefined ? "" : leftLabel);
	      rightLabel = (rightLabel == undefined ? "" : rightLabel);
                        userAnswer[labelIndex] = {"left":leftLabel,"right":rightLabel};
            //            updateEquations();
                //  }
                  
           // }
            
      }
      //updateEquations();
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