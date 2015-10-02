var pageContainer, menuContainer, page0, eventBroker;

var topequ1 =[];
var botequ = [];
	
$(document).ready(
    function(){
	var table=["<div id=\"blocker\" onclick=\"instruct()\" ></div><div class=\"question\" onclick=\"instruct()\"><div style=\"position:absolute; left:2%; top:4%; opacity:0.6;\" ><div><img src=\"images/btInfoOn.png\" width=\"25px\" height=\"27px\" /></div></div><span style=\"text-align:left; font-family:myFontfamily; left:70px; line-height:1.4em; width:526px; position:absolute; top:58px;\">  Match each riddle card with the number card it describes. </span><i style=\"font-size: 21px;  float:right; opacity: .6;\" class=\"closeBtn icon icon-emove\" ><strong>&times;</strong></i></div>"];
	
        pageContainer = $("<div id=\"interactive-container\" />");
        menuContainer = $("<div id=\"page-container\" />");
        page0 = $("<div id=\"page-0\" class=\"page\" />");
		
		
       	blocker = $("<div id=\"blocker\" />");
	blocker.css({'position':'absolute','left':'0px','top':'0px','width':'1024px','height':'704px','background-color': 'rgba(0,0,0,0.5)','z-index':'1100','display':'none'})

	prom = $("<div class=\"promp\">Are you sure you want to clear your work?<br /><input class=\"txt1\" id=\"ok\" type=\"button\" value=\"yes\" readonly=\"true\" onclick=\"confirmBtn(this)\"/><input class=\"txt1\" onclick=\"confirmBtn(this)\" id=\"cancel\" type=\"button\" value=\"no\" readonly=\"true\" /></div>");
	promblock = $("<div id=\"blocker1\" />");
	nav = ("<div class=\"contentHolder\"><div class=\"container\"><div class=\"contentFeedback\"><div class=\"btReset\" ><div class=\"icoReset\"></div></div><div class=\"btInfo\" onclick=\"openInst()\" ><div class=\"icoInfo\"></div></div><div class=\"btFeedback\"><div class=\"icoFeed inactive\" id=\"submit\"></div></div><div class=\"score\"><div id=\"contCorrect\"><span id=\"crt\">0</span> <img src=\"images/IconCorrect.png\"></div><div id=\"contIncorrect\"><span id=\"incrt\">0</span><img src=\"images/IconIncorrect.png\"></div></div></div></div></div>")
	
	$('body').append(table[0]);


	page0.append(nav);
	page0.append(prom);
	page0.append(promblock);

    menuContainer.append(page0);
    pageContainer.append(menuContainer);
    $('body').append(pageContainer);
	
	(function($){
    $.fn.doubletap = function(fn) {
        return fn ? this.bind('doubletap', fn) : this.trigger('doubletap');
    };
 
    $.attrFn.doubletap = true;
 
    $.event.special.doubletap = {
        setup: function(data, namespaces){
            $(this).bind('touchend', $.event.special.doubletap.handler);
        },
 
        teardown: function(namespaces){
            $(this).unbind('touchend', $.event.special.doubletap.handler);
        },
 
        handler: function(event){
            var action;
 
            clearTimeout(action);
 
            var now       = new Date().getTime();
            //the first time this will make delta a negative number
            var lastTouch = $(this).data('lastTouch') || now + 1;
            var delta     = now - lastTouch;
            var delay     = delay == null? 500 : delay;
 
            if(delta < delay && delta > 0){
                // After we detct a doubletap, start over
                $(this).data('lastTouch', null);
 
                // set event type to 'doubletap'
                event.type = 'doubletap';
 
                // let jQuery handle the triggering of "doubletap" event handlers
                $.event.handle.apply(this, arguments);
            }else{
                $(this).data('lastTouch', now);
 
                action = setTimeout(function(evt){
                    // set event type to 'doubletap'
                    event.type = 'tap';
 
                    // let jQuery handle the triggering of "doubletap" event handlers
                    $.event.handle.apply(this, arguments);
 
                    clearTimeout(action); // clear the timeout
                }, delay, [event]);
            }
        }
    };
})(jQuery);	
	
	
	/*Calling the function*/
	question();
	
	
/* Keypad Intialization */        
        //numKeypad = new vKeyPad(".numTxt");
	
	$(".icoReset").unbind('click',reset);
	resetEnable();
	page0.click(function(event){
		var targ = event.target.id.toString();
		if(targ.indexOf("page") >= 0){;}
	   
    });
	
	// Retrive Saved State Start  
	eventBroker = _({}).extend(require('chaplin/lib/event_broker'));
	eventBroker.publishEvent("#fetch", { type : 'state' }, function(state) {
		if (state) {

			_.each(JSON.parse(state), function(value, key, list) {
			  
				topequ1 = value[0];
				botequ = value[1];
				
			});

		}
	});
	// Retrive Saved State End 
	
	
	
	eventBroker.subscribeEvent('#doSave', function(state) {
	    var state = {};
		
		var topequ1_1 =[];
		var botequ_1 = [];
		
		for(var n=1; n <= 7;n++){
			topequ1[n] = $("#optionMainDiv_"+n).children().attr('id');
			console.log("topequ1 : "+topequ1);
						
		}
		for(var w=1; w<= 7 ;w++ ){
			botequ[w] = $("#ans_"+w).children().attr('id');
			console.log("botequ : "+botequ);
			
		}
		topequ1_1 = topequ1;
		botequ_1 = botequ;
	  
		var storageValue = [topequ1_1, botequ_1];
		state[0] = storageValue;
		//var storageValue = [savarra1,remarra1];
		//state[0] = storageValue;
		
		
	    
	    var message = {
		type : 'state',
		data : JSON.stringify(state)
	    };
	    
	    eventBroker.publishEvent("#save", message);
	    
	    $(".cancel-button").addClass("inactive");
	    $(".save-canvas-button").addClass("inactive");
	    $(".save-state-button").addClass("inactive");
	    $(".modal-message").html("Saved!").show();
	    //setTimeout(function(){closeModalContainer();},1000);
	});

	
	
	eventBroker.subscribeEvent('#doFinish', function() {
	    //Save Score Start
	    var mimimumCorrect = this.mimimumCorrect;
	    var complete = window.complete;
	    var numberCorrect = this.numberCorrect;
	    var message = {
		    completion : 0,//complete,
		    success : 0,//numberCorrect >= mimimumCorrect,
		    score : 0//numberCorrect / whole
	    };
	    eventBroker.publishEvent("#finish", message);
	    
	    //Save Score End
	});
	for(var d = 1; d <= topequ1.length; d++){
		
		console.log("** : "+topequ1[d]);
		if(topequ1[d] != '' || topequ1[d] != "null"){
			$("#"+topequ1[d]).appendTo("#optionMainDiv_"+d);
			$("#"+topequ1[d]).css({"left":"-2px","top":"-2px","opacity":"1"});
		}
		if(topequ1[d] == '' || topequ1[d] == "null"){
			$("#optionMainDiv_"+d).css({'display':'block'});
		}
	}
	for(var d=1; d<= botequ.length; d++){
		
		console.log("** : "+botequ[d]);
		if(botequ[d] != '' || botequ[d] != "null"){
			$("#"+botequ[d]).appendTo("#ans_"+d);
			$("#"+botequ[d]).css({"left":"-2px","top":"-2px","opacity":"1"});
		}
		if(botequ[d] == '' || botequ[d] == "null"){
			$("#ans_"+d).css({'display':'block'});
		}
		
	}
	
   });


function shuff(arra)
		{
			arra.sort(function() { return 0.5 - Math.random() });
			return arra;
		}
		

var numKeypad;



$(window).click(function(e){
     var closeKbd = $(event.target).attr('class');
	    if(closeKbd != "vkBtn" && closeKbd != "keypadHolder ui-draggable" && closeKbd != "numTxt" && closeKbd != "vkBtnEmp" && closeKbd != "vkBtnBS"){
			try {
				//numKeypad.hidePad();
			} catch(e) {
				
			}
			
		}
});

function instruct(){
	$('.question,#blocker').hide();
	try {
		$('.icoInfo').removeClass('icoInfoMove');
		$('#instructions-button-container').unbind('click',openInst);
	} catch(e){}
		$('#instructions-button-container').bind('click',openInst);
		
}

function openInst(){
	$('.question,#blocker').show();
}

/* NAV */
function toggleClassButton(element,className){
	var currentButton=element;
	if(!currentButton.hasClass(className)){
		currentButton.addClass(className);
	}else{
		currentButton.removeClass(className);	
	}
}


function  resetEnable() {
  $(".icoReset").css({'opacity':'1','cursor':'pointer'});
  $(".icoReset").bind('click',reset);
}



function reset() {
	localStorage.removeItem('sample-interactive');
	var current=$(this);
	current.removeClass('icoResetMove');
	var to=setTimeout(function(){
		clearInterval(to);
		current.addClass('icoResetMove');				
	})
	setTimeout(function(){
		  $(".icoReset").css({'opacity':'.5','cursor':'default'});
		  $(".score").css({'display':'none'});
		  $(".icoFeed").css({'background-image':'url(images/btFeedOff@2x.png)','cursor':'default'})
		  try{$(".icoReset").unbind('click',reset);}catch(e){}
		
		 //topequ1 = '';
		// botequ = '';
		
		$("#containDiv").remove();
		$("#ansDiv").remove();
		$("#optionDiv").remove();
		
		console.log("check"); 
		question();
	   
	},800);
}
	
function saveFunction() {
    eventBroker.publishEvent("#doSave");
}

function closeModalContainer(){
    $("#modal-container").remove();
    try{$(".close-button").unbind('click', closeModalContainer);}catch(e){}
    try{$(".cancel-button").unbind('click', closeModalContainer);}catch(e){}
    try{$(".save-state-button").unbind('click', saveFunction);}catch(e){}
}



/*drag and drop*/

function question()
{
	resetEnable();
	var resultArray=[];
	var toBeshfulled = [1,2,3,4,5,6,7];
	
	var radomarray1=[];
	var radomarray2=[];
		
	var radomarray=[];
	var ansarray=[];
	var i = 0;
	/*Creating divs for question, answer and option*/
	$("<div/>",{"id":"containDiv"}).appendTo(page0);
		
	$("<div/>",{"id":"quesDiv"}).appendTo("#containDiv");
	//$("<div/>",{"id":"quesDiv"}).appendTo(page0);
	
	$("<div/>",{"class":"ques","id":"ques_1",style:"top:10px;"}).html("I have 23 tens and 6 ones. <br>Who am I?").appendTo(quesDiv);
	$("<div/>",{"class":"ques","id":"ques_2",style:"top:95px;"}).html("I have 50 tens and 13 ones. <br>Who am I?").appendTo(quesDiv);
	$("<div/>",{"class":"ques","id":"ques_3",style:"top:180px;"}).html("I have 40 tens and 7 ones. <br>Who am I?").appendTo(quesDiv);
	$("<div/>",{"class":"ques","id":"ques_4",style:"top:265px;"}).html("I have 10 tens and 500 ones. <br>Who am I?").appendTo(quesDiv);
	$("<div/>",{"class":"ques","id":"ques_5",style:"top:350px;"}).html("I am 183. I have 23 ones and 1 hundred. <br>How many tens do I have?").appendTo(quesDiv);
	$("<div/>",{"class":"ques","id":"ques_6",style:"top:435px;"}).html("I am 500. I have 9 tens and 10 ones. <br>How many hundreds do I have?").appendTo(quesDiv);
	$("<div/>",{"class":"ques","id":"ques_7",style:"top:520px;"}).html("I am 490. I have 18 tens and 10 ones. <br>How many hundreds do I have?").appendTo(quesDiv);
	
	
	$("<div/>",{"id":"ansDiv"}).appendTo("#containDiv");
	$("<div/>",{"class":"ans dropAns","id":"ans_1","value":"a_1",style:"top:10px;"}).appendTo(ansDiv);
	$("<div/>",{"class":"ans dropAns","id":"ans_2","value":"a_2",style:"top:95px;"}).appendTo(ansDiv);
	$("<div/>",{"class":"ans dropAns","id":"ans_3","value":"a_3",style:"top:180px;"}).appendTo(ansDiv);
	$("<div/>",{"class":"ans dropAns","id":"ans_4","value":"a_4",style:"top:265px;"}).appendTo(ansDiv);
	$("<div/>",{"class":"ans dropAns","id":"ans_5","value":"a_5",style:"top:350px;"}).appendTo(ansDiv);
	$("<div/>",{"class":"ans dropAns","id":"ans_6","value":"a_6",style:"top:435px;"}).appendTo(ansDiv);
	$("<div/>",{"class":"ans dropAns","id":"ans_7","value":"a_7",style:"top:520px;"}).appendTo(ansDiv);
	
	$("<div/>",{"id":"optionDiv"}).appendTo("#containDiv");
	
	
	//creating random div
	
	q={
	 quesarra:{
			  'q1':['600','4'],
			  'q2':['6','5'],
			  'q3':['4','6'],
			  'q4':['513','2'],
			  'q5':['236','1'],
			  'q6':['3','7'],
			  'q7':['407','3'],
			  }
	  }
	
	
	
	var shuffledarray = shuff(toBeshfulled);
	var k=10;
	var m=-1;
	var j=0,r=1;
	
	for(var i=1; i <= 7; i++){
	
		$("<div/>",{"class":"optionMain dropOpt","id":"optionMainDiv_"+i,style:"position:absolute;width:120px;height:70px;margin-left:30px;top:"+k+"px;border:1px solid #fceabb;"}).appendTo("#optionDiv");       
		k=k+85;
	
		console.log(Number(q.quesarra['q'+shuffledarray[i-1]][1]));
		
		$("<div/>",{"class":"option dragOpt","id":"opt_"+Number(q.quesarra['q'+shuffledarray[i-1]][1]),"value":"a_"+Number(q.quesarra['q'+shuffledarray[i-1]][1]),style:"left:0px;top:0px;z-index:1"}).html(Number(q.quesarra['q'+shuffledarray[i-1]][0])).appendTo("#optionMainDiv_"+i);       
		
	
	}
	
	
	
	console.log("rr");	
	
	var array = Array.prototype.indexOf ?
function(arr, val) {
    return arr.indexOf(val) > -1;
} :

function(arr, val) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === val) {
            return true;
        }
    }
    return false;
}

function removeRedundant(arr, equals) {
  var val, origArr = arr.slice(0);
  arr.length = 0;

  for (var i = 0, len = origArr.length; i < len; ++i) {
    val = origArr[i];
    if (!array(arr, val)) {
        arr.push(val);
    }
  }

  return arr;
}

var a=1;
 $(".dragOpt").draggable({
		
		start:function(event,ui){$(this).css("z-index", a++)},
		
		drag:function(event,ui){
				
		$( ".dragOpt" ).draggable("option","opacity",0.8);
		 console.log("y");
		 
	 },
		revert: function(event,ui)
		{
		$(this).animate({'left':'-2px','top':'-2px'},300);
		
		},
					
	  containment:"#containDiv"
	});
 
 $(".dropOpt,.dropAns").droppable({
		
				accept:".dragOpt",
						
			drop:function(event,ui)
			{ 
				
				var curParent = ui.draggable.parent().attr("id");
				var curParentClass = ui.draggable.parent().attr("class");		
				var curDropClass = ui.draggable.parent().hasClass('dropAns');						
				var varia = curParentClass.split("_")[1];
				varia1 = parseInt(varia);					
				var prevChild = $(this).children().attr("id");			
				var findClass = $(this).hasClass('dropOpt');
				var findClass1 = $(this).hasClass('dropAns');			
				var childCount = $(this).children().length;
					
				for(var a=1; a<=7; a++){
				
				if($("#optionMainDiv_"+a).children().length == 0){
					resultArray.push(a, varia1);
				}
				else{
					resultArray.push(varia1);					
				}				
				}
					
					
				resultArray = resultArray.filter(Number);
			removeRedundant(resultArray);
			
			Array.min = function( resultArray ){
				return Math.min.apply( Math, resultArray );
			};

			var minVal = Array.min(resultArray);

			if((childCount == 0) && (findClass == true)){
				ui.draggable.appendTo($(this)).css({"left":"-1px","top":"-1px","opacity":"1"});
			}
			
			else if((childCount <= 1) && (findClass1 == true)){
				ui.draggable.appendTo($(this)).css({"left":"0px","top":"0px"});
				$("#"+prevChild).appendTo("#optionMainDiv_"+minVal).css({"left":"0px","top":"0px","opacity":"1"});
			}
			
			else{
				return false;
			} 
				
			resultArray.length = 0;	
		
			
			},

 });
 
}

