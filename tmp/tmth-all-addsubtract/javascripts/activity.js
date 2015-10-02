var i=0;
var pstat=0;
var count=0;
var indata=new Array();
var resultVal_0_arr=new Array();
var resultVal_1_arr=new Array();
var symbol;
var divCount=0;
var c;
var c_symbl;
var h=0;
var retVal=0;
var resultVal_0=0;
var resultVal_1=0;
var canDo=0;
var h;
var b=0;
var _result_0=0;
var _result_1=0;
var _result_0_1=0;
var _result_0_0=0;
var _result_sub_0=0;
var _result_sub_1=0;
var suboption=0;
var carrY=0;
var diagStat_0=0;
var diagStat_1=0;
var dropedBox;
var saveObjectAry = {'valDivs':{},'exDivs':{}};
var InputId;
window.onload=function() 
{ 
	
}


function reset_h()
{
	for(j=1;j<=100;j++)
	{
		$("#symb_"+j).removeClass('sprite');
	}
}
var getclickedid;
$(document).ready(function()
	{ 
			//alert("welcome");
			create_elements(9);
			for(i=0;i<=9;i++)
			{
			$("#symb_"+i).addClass('drag');
			
			}
			
		enableDragOptions('drag');	
		enableDropBoxes();
		enableDropDragBoxes();
		enableDropDropBoxes();
		$(".drop_drag").draggable('disable');
		$(".operand").click(InputClick);
		$(".btReset").click(ResetClick);
		$("#opt_2").unbind();
		
		// Retrive Saved State Start  
	eventBroker = _({}).extend(require('chaplin/lib/event_broker'));
	eventBroker.publishEvent("#fetch", { type : 'state' }, function(state) {
		if (state) {

			/*_.each(JSON.parse(state), function(value, key, list) {
			  holderArray=value[0];
			  placedarra=value[1];
			  permanantArray=value[2];
			  checkstage=value[3];
			  txtobj = value[4];
			  finalcmp=value[5];
				console.log("Anitha fetch : " +finalcmp);
		
				//
			});*/
			
			saveObjectAry = JSON.parse(state);
			//saveObjectAry = {'valDivs':{},'exDivs':{}};
			//$("#opt_2").trigger('click');
			console.log(Object.keys(saveObjectAry.valDivs).length);
			if(Object.keys(saveObjectAry.valDivs).length)
			{
			if(saveObjectAry.exDivs.opt_symbl=="+" || !saveObjectAry.exDivs.opt_symbl)
			{
			 
				console.log('hai');
			 
			 if(saveObjectAry.exDivs.opt_symbl)
			 {
				$("#opt_0").trigger('click');
			 }
			 
			}
			else
			{
			
			 $("#opt_1").trigger('click');
			
			 //alert("sdfsdfSDFSDF123");
			}
			
			console.log(saveObjectAry);
			//alert(saveObjectAry.valDivs.diagonal_01);
			
			$.each(saveObjectAry.valDivs,function(k,p){
				console.log(k,p);
				
				
				if(saveObjectAry.exDivs.opt_symbl =="+" || !saveObjectAry.exDivs.opt_symbl)
				{ 
					 if(k!="drop_0_8" && k!="drop_0_9")
					 {
						if(p!="")
						{
						$("#"+k).show();
						 //$("#opt_0").trigger('click');
						}
					}
					
				}
				else
				{ 
					//alert("4");
					 if(k!="drop_0_6")
					 {//alert(k);
					 if(p!="")
						{
					  $("#"+k).show();
					  //$("#opt_1").trigger('click');
					  }
					
					 if(saveObjectAry.exDivs.opt_21=="1")
					 { 
					  $("#opt_2").css("borderColor","#ca33be");
					 }
					 }
					 else
					 {
					   $("#"+k).hide();
					   $("#drop_6").hide();
					 }
					
					 
				}
				$("#"+k).html(Number(p));
			});
			$("#opt_symbl").html(saveObjectAry.exDivs.opt_symbl);
			
			}
			
			if(saveObjectAry.valDivs.diagonal_01==1)
			{ //alert("true");
			 $("#diagonal_0").css("display","block");
			  $("#opt_1").trigger('click');
			   $("#opt_2").trigger('click');
			}
			if(saveObjectAry.valDivs.diagonal_11==1)
			{ //alert("true");
			 $("#diagonal_1").css("display","block");
			  $("#opt_1").trigger('click');
			   $("#opt_2").trigger('click');
			}
			
		}
	});
	// Retrive Saved State End 
	
	
	
	eventBroker.subscribeEvent('#doSave', function(state) {
	    var state = {};
		/*var dropar=new Array();
		var dragarr=new Array();
		var originalarr=new Array();
		var txtarray=new Array();
		var dumflag=false;
		dropar=holderArray;
		originalarr=permanantArray;
		
		dragarr=placedarra;
		dumflag=checkstage;
		
		var txtstate = jQuery.extend({},txtobj);
		txtarray=finalcmp;
		console.log("Anitha save : " +finalcmp);
		var storageValue = [dropar,dragarr,originalarr,dumflag,txtstate,txtarray];
		state[0] = storageValue;*/
		
	  /*  $('.innerDiv').each(function(){
		var areaID = $(this).parent().parent().attr('id');
		var numAns = $(this).find('input').eq(0).val();
		var txtAns = $(this).find('textarea').eq(0).val();
		var isActivityComplete = window.complete;
		
		console.log(isActivityComplete)
	    });*/
	    //saveObjectAry.dropdDivs,textInptVal
		savingfn();
		//saveObjectAry = {};
		
		
		
		//saveDataCollectFn();
		state = saveObjectAry;
		
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
	});
	
	
 /* drag option */
function enableDragOptions(clname)
{
	//console.log(clname);
	$("."+clname).css('cursor', 'pointer');
	
	$("."+clname).draggable(
	{ 
	helper:"clone",
	//cursorAt:{left:25, top:20},
		drag: function( event, ui ) 
		{
		
		//console.log("hai");
			//bool=false;
			draggedDiv =$(this).attr("id");
			//console.log("class :"+draggedDiv);
			
			
	       // $("."+clname).css({'z-index':'10'});
		},
		
		start:function(evt,ui)
		{
			$(".ui-draggable-dragging").addClass('dummy');
			 $(this).draggable("option", "cursorAt", {
				left: Math.floor(ui.helper.width() / 2),
				top: Math.floor(ui.helper.height() / 2)
			  }); 
		},
		revert:function(evt,ui)
		{
			return true;
		},
	});
	
}

function enableDropBoxes()
{ 
	{
		$(".drop").droppable(	
		{
			drop: function( event, ui ) 
			{//alert(dropedElementId);
				//bool=true;
				ui.helper.data('dropped',false);
				dropedBox = $(this).attr("class");
				//console.log(dropedBox);
				ui.draggable.data('dropped', true);
				//_currDrop=$("#drop_0");
				dropedElementId = ui.helper.attr("class");
				
				
 
				//console.log("enna varum"+dropedElementId);
				fnRightDrop(dropedElementId,dropedBox);
				
				//isPlaying = true;
			},
		
			
		});
	}
}
function enableDropDropBoxes()
{ 
	{
		$(".drop_drop").droppable(	
		{   
			drop: function( event, ui ) 
			{//alert(dropedElementId);
				//bool=true;
				//dropedBox = $(this).attr("class");
				//console.log(dropedBox);
				
				//_currDrop=$("#drop_0");
				
				dropedDropElementId = ui.helper.attr("id");
				dropedDropClacss = ui.helper.attr("class");
				
 
				//console.log(dropedDropElementId);
				fnRightDropDrop(dropedDropElementId);
				
				//isPlaying = true;
			},
		
			
		});
	}
}
function fnRightDropDrop(dropedDropElementId)
{
//console.log("ddddsddd"+dropedDropClacss);

if(dropedDropElementId)
{
$("#"+dropedDropElementId).html('').css('display','none');
var d1=dropedDropElementId.split("_")[0]+"_"+dropedDropElementId.split("_")[2];

$("#"+d1).css('border','none');
$("#"+d1).css('border','1.5px dashed #808080');
}
else
{
$(".dummy").css('display','none');
}
}


function fnRightDrop(dropedElementId,dropedBox)
{ //alert(dropedElementId);
	var dropClass=dropedBox.split(" ")[0].trim().split("_")[1].trim()
//$(".drop_"+dropClass).css('border','none');
//console.log("dropclass = "+dropClass);
	var getName=dropedElementId.split(" ")[0].trim();
	var getName1=dropedElementId.split(" ")[0].trim().split("_")[1].trim();
	
	$(".dummy").css('display','none');
	if(getName1!="drag")
	{
	
	$(".drop_drag_"+dropClass).css('display','block').html(getName1);
	//$(".drop_drag_"+dropClass).css('border','none');
	
	if(dropClass<7)
	{
	$(".drop_drag_"+dropClass).draggable('enable').css({'opacity':'1','fontSize':'80px','width':'130px','height':'130px','lineHeight':'130px'});
	}
	else
	{
	$(".drop_drag_"+dropClass).draggable('enable').css({'opacity':'1','fontSize':'32px','width':'60px','height':'70px','lineHeight':'70px'});
	}
	if(b==0 && dropClass>3 )
	{
	//$("#drop_0_4").css('display','none').html('');
	//$("#drop_0_5").css('display','none').html('');
	for(k=4;k<=9;k++)
	{
	//$("#drop_0_"+k).html('');
	$(".dummy").css('display','none');
	}
	}
	else if(b==1 && dropClass>3)
	{ console.log("ccccccccccccccccc" + getName1 +"--"+_result_0);
		//$(".drop_"+dropClass).css('border','none');
		
		
		switch(dropClass)
		{
			/*case '4':
				//console.log("ariyarmavathu"+_result_0);
				 if(getName1==_result_0)
				 {
					$("#drop_0_4").css('display','block').html(_result_0);
					//$("#drop_4").css('border','none');
					$(".dummy").css('display','none');
				 }
				 else
				 {
					$("#drop_0_4").css('display','none').html('');
					$(".dummy").css('display','block');
					$("#drop_4").css('border','none');
					$("#drop_4").css('border','1px solid #808080');
				 }
			break;
			
			case '5':
				//console.log("case 5");
				if(getName1==_result_1)
				 {
					$("#drop_0_5").css('display','block').html(_result_1);
					$(".dummy").css('display','none');
					//$("#drop_5").css('border','none');
				 }
				 else
				 {
					$("#drop_0_5").css('display','none').html('');
					$(".dummy").css('display','block');
					$("#drop_5").css('border','none');
					$("#drop_5").css('border','1px solid #808080');
				 }
			break;
			
			case '6':
				if(getName1==_result_0_1)
				 {
					$("#drop_0_6").css('display','block').html(_result_0_1);
					$(".dummy").css('display','none');
					//$("#drop_6").css('border','none');
				 }
				 else
				 {
					$("#drop_0_6").css('display','none').html('');
					$(".dummy").css('display','block');
					$("#drop_6").css('border','none');
					$("#drop_6").css('border','1px solid #808080');
				}
				
			break;*/
			
			case '7':
					 $("#drop_0_7").css('color','#000000');
				/*if(suboption==0)
				{				
					if(getName1 == $("#drop_7").html())
					{*/
					$("#drop_0_7").html(getName1);
					$(".dummy").css('display','none');
					/*}
					else
					{
					$("#drop_7").html('');
					$(".dummy").css('display','block');
					}
				}
				else if(suboption==1)
				{
					if(getName1 == (Number($("#drop_0_0").html())-1))
					{
					$("#drop_7").html(getName1);
					$(".dummy").css('display','none');
					}
					else
					{
					$("#drop_7").html('');
					$(".dummy").css('display','block');
					}
				}*/
				
					
					//alert("sdfsdf");
			break;
			case '8':
					 $("#drop_0_8").css('color','#000000');
				/*if(getName1 == _result_sub_0)
				{*/
				$("#drop_0_8").html(getName1);
				$(".dummy").css('display','none');
				/*}
				else
				{
				$("#drop_8").html('');
				$(".dummy").css('display','block');
				}*/
					
					//alert("sdfsdf");
			break;
			case '9':
					 $("#drop_0_9").css('color','#000000');
				/*if(getName1 == _result_sub_1)
				{*/
				$("#drop_0_9").html(getName1);
				$(".dummy").css('display','none');
				/*}
				else
				{
				$("#drop_9").html('');
				$(".dummy").css('display','block');
				}*/
					
					//alert("sdfsdf");
			break;
		}
		
	
		
		
	}
	
	}
}

function create_elements(divCount) 
{
for(i=0;i<=divCount;i++)
	{
	var iDiv = document.createElement('div');
	iDiv.id = 'symb_'+i;
	iDiv.className='symb_'+i;
	
	iDiv.style.border="2px solid #FFFFFF";
	iDiv.style.backgroundColor="#FFC53E";
	//iDiv.style.opacity="0.5";
	iDiv.style.fontSize = "50px";
	iDiv.style.width="65px";
	iDiv.style.height="65px";
	iDiv.style.cssFloat="left";
	iDiv.style.lineHeight="65px";
	iDiv.style.borderRadius="5px";
	iDiv.style.marginLeft="4px";
	
	
	iDiv.style.cursor="pointer";
	iDiv.innerHTML=i;
	iDiv.style.textShadow="0 -1px 0 #888";
		

	//iDiv.setAttribute("onclick","welcome("+i+")");
	

	var s = document.getElementById('mydiv');
	s.appendChild(iDiv);//alert("sdfsdf");
	}
}

function InputClick(e)
{
	
	$("#opt_2").bind('click',InputClick);
	InputId=this.id.split("_")[1];
	
	if(InputId == '0' || InputId == '1')
	{
	
	//if($("#carry_0").html()!='' || $("#carry_1").html()!='')
	//{
	//console.log("comming");
	$("#carry_0").html('');
	$("#carry_1").html('');
	//}
	}
	
	//console.log("InputId   _:"+InputId);
	
	
	//console.log("kaaatu : "+InputId);
	var val1=$("#drop_0_0").html()+$("#drop_0_1").html()
	//alert(val1);
	var val2=$("#drop_0_2").html()+$("#drop_0_3").html()
	//alert(val2);
	if(Number(val1)>=Number(val2))
	{
		canDo=1;
	}
	else
	{
		canDo=0;
	}
	b=1;
	//$("#drop_0_4").css('display','block');
	//$("#drop_0_5").css('display','block');
	switch(InputId)
	{
		case '0':
			//console.log("Return da nayae : ");
			diagStat_0=0;
			diagStat_1=0;
			$("#drop_0_0").off('click');
			$("#drop_0_1").off('click');
			$("#opt_2").off('click');
			$("#opt_2").css('borderColor','#808080');
						 $(".drop_drag").draggable('enable');
						 $(".drop_drag").css('cursor','pointer');
			$("#carry_0").html('');
				$("#carry_1").html('');
				$("#diagonal_0").css('display','none');
				$("#diagonal_1").css('display','none');
				$("#carry_0").html('');
				$("#carry_1").html('');
				$("#opt_symbl").html('+');
				$("#separator").css('width','330px');
				
				suboption=0;
				//$("#opt_symbl").css('border','1px solid #598300');
				//$("#opt_symbl").css('backgroundColor','#61c634');
				//$("#drop_0_4").css('display','none').html('');
				//$(".dummy").css('display','none');
				//$("#drop_0_5").css('display','none').html('');
				//$("#drop_0_6").css('display','none').html('');
				//$("#drop_4").css('border','none');
				//$("#drop_4").css('border','1.5px dashed #808080');
				//$("#drop_5").css('border','none');
				//$("#drop_5").css('border','1.5px dashed #808080');
				//$("#drop_6").css('border','none');
				//$("#drop_6").css('border','1.5px dashed #808080');
				$("#drop_7").css('display','block').html('');
				$("#drop_7_0").css('display','block').html('');
				//$("#drop_0_7").css('display','block').html('');
				$("#drop_8").css('display','none').html('');
				$("#drop_8_0").css('display','none').html('');
				$("#drop_0_8").css('display','none');
				$("#drop_9").css('display','none').html('');
				$("#drop_9_0").css('display','none').html('');
				$("#drop_0_9").css('display','none');
				//checkDropValues();
				
				//if(retVal==1)
				//{
					$(".drop_drag").draggable('enable');
					$("#opt_"+InputId).css('cursor','default');
					$("#opt_symbl").css('display','block');
					//$("#diagonal_2").css('display','none');
					//12-11 $("#carry_0").html(Number($("#drop_0_0").html()-1));
					$("#carry_0").css('color','#daf470');
					$("#carry_1").css('color','#daf470');
					/*if($("#result_1").html()=="" && $("#result_0").html()=="" && )
					{
					$("#opt_"+InputId).css('opacity','0.5');
					
					
					$(".drop_drag").draggable('disable');
					/*}
					else
					{
					//console.log("empty illa....");
					}*/
					additionLogic();
					$("#opt_2").html('');
					//$("#opt_0").unbind();
				//}
		break;
		
		case '1':
				//$("#carry_0").html('');
				//$("#carry_1").html('');
				$("#opt_2").on('click');
				suboption=1;
				diagStat_0=0;
			    diagStat_1=0;
				$("#drop_0_0").on('click');
				$("#drop_0_1").on('click');
				$("#opt_symbl").html('&ndash;');
				$("#separator").css('width','330px');
					$("#drop_6").css('display','none');
					$("#drop_0_6").css('display','none');
				//$("#opt_symbl").css('border','1px solid #ca33be');
				//$("#opt_symbl").css('backgroundColor','#f95f92');
				//$("#drop_0_4").css('display','none').html('');
				//$(".dummy").css('display','none');
				//$("#drop_0_5").css('display','none').html('');
				//$("#drop_4").css('border','none');
				//$("#drop_4").css('border','1.5px dashed #808080');
				//$("#drop_5").css('border','none');
				//$("#drop_5").css('border','1.5px dashed #808080');
				
				$("#drop_7").css('display','block').html('');
				$("#drop_7_0").css('display','block').html('');
				$("#drop_0_7").css('display','block');
				$("#drop_8").css('display','block').html('');
				$("#drop_8_0").css('display','block').html('');
				$("#drop_0_8").css('display','block');
				$("#drop_9").css('display','block').html('');
				$("#drop_9_0").css('display','block').html('');
				$("#drop_0_9").css('display','block');
				//checkDropValues();
				//if(retVal==1)
				//{
					/*if(canDo==1)
					{*/
					$("#opt_symbl").css('display','block');
					//$("#opt_"+InputId).css('opacity','0.5');
					$("#opt_"+InputId).css('cursor','pointer');
					 $(".drop_drag").draggable('enable');
						 $(".drop_drag").css('cursor','pointer');
					subtractLogic();
					//_result_0=_result_0-1;
					$("#opt_2").click(function(){ 
					//alert($("#opt_2").css('borderColor'));
						if($("#opt_2").css('borderColor')=='rgb(128, 128, 128)')
						{
						// console.log("default");
						 $("#opt_2").css('borderColor','#ca33be');
						 $(".drop_drag").draggable('disable');
						 $(".drop_drag").css('cursor','default');
						 $("#drop_0_0").click(function(){
								if(diagStat_0==0)
								{
								$("#diagonal_0").css('display','block');
								diagStat_0=1;
								 $(".drop_drag").draggable('disable');
						 $(".drop_drag").css('cursor','default');
								}
								else
								{
								$("#diagonal_0").css('display','none');
								diagStat_0=0;
								$(".drop_drag").draggable('enable');
						 $(".drop_drag").css('cursor','pointer');
								}
						  
						 });
						 $("#drop_0_1").click(function(){
								if(diagStat_1==0)
								{
								$("#diagonal_1").css('display','block');
								diagStat_1=1;
								 $(".drop_drag").draggable('disable');
						 $(".drop_drag").css('cursor','default');
								}
								else
								{
								$("#diagonal_1").css('display','none');
								
								diagStat_1=0;
								$(".drop_drag").draggable('enable');
						 $(".drop_drag").css('cursor','pointer');
								}
							});
						}
						else
						{
						 $("#opt_2").css('borderColor','#808080');
						 //$(".drop_drag").draggable('enable');
						 //$(".drop_drag").css('cursor','pointer');
						 diagStat_0=0;
						 diagStat_1=0;
						 $("#drop_0_0").off('click');
						 $("#drop_0_1").off('click');
						}
					});
					$("#opt_2").html('/');
					
					
					//$("#opt_1").unbind();
					/*}
					else
					{
						ResetClick();
					}*/
					
				//}
				
		break;
		
		case '2':
		/*if($("#opt_2").html() == 'C')
		{
		additionLogic();
		}
		else if($("#opt_2").html() == 'B')
		{
		}*/
				//if(document.getElementById("carry_0carry_0").style.display=='none')
				//{
				//$("#carry_0").css('display','block');
				//$("#carry_1").css('display','block');
				if($("#opt_2").html()=='/')
				{ 
				//subtractLogic();
				if($("#drop_0_1").html()<$("#drop_0_3").html())
				{
				//$("#diagonal_0").css('display','block');
				//$("#diagonal_1").css('display','block');
				
				}
				$("#carry_0").css('color','#000000');
				$("#carry_1").css('color','#000000');
				//}
				}
				else if($("#opt_2").html()=='C')
				{
				//additionLogic();
				//$("#carry_0").css('display','none');
				//$("#carry_1").css('display','none');
				$("#diagonal_0").css('display','none');
				$("#diagonal_1").css('display','none');
				$("#carry_0").css('color','#000000');
				$("#carry_1").css('color','#000000');
				}
		break;
	
	}
}

function subtractLogic()
{
	//console.log("Subtraction L");
	 $("#opt_2").css('display','block');
	$("#carry_0").html('');
	$("#carry_1").html('');
	indata.length=0;
	resultVal_0_arr.length=0;
	resultVal_1_arr.length=0;
	// $("#drop_7").html(Number($("#drop_0_0").html()));
	// $("#drop_7").css('color','#daf470');
	for(j=0;j<=3;j++)
	{
	//console.log($("#drop_0_"+j).html());
	indata.push($("#drop_0_"+j).html());
	//console.log(indata);
	}
	if($("#drop_0_1").html()>$("#drop_0_3").html())
	{
	//console.log("result_1_"+Number($("#drop_0_1").html()-$("#drop_0_3").html()));	
	 
	  //$("#result_1").html(Number($("#drop_0_1").html()-$("#drop_0_3").html()));
	  //$("#result_0").html(Number($("#drop_0_0").html()-$("#drop_0_2").html()));
	 _result_1 = Number($("#drop_0_1").html()-$("#drop_0_3").html());
	 _result_0 = Number($("#drop_0_0").html()-$("#drop_0_2").html());
	// $("#drop_8").html('');
	// $("#drop_9").html('');
	_result_sub_0="";
	_result_sub_1="";
	 
	 //console.log("result_1_"+_result_1+"_"+_result_0);	
	}
	
	if($("#drop_0_0").html()==$("#drop_0_2").html())
	{
	 //console.log("direct minus = "+Number($("#drop_0_1").html()-$("#drop_0_3").html()) );	
	 
	  //$("#result_1").html(Number($("#drop_0_1").html()-$("#drop_0_3").html()));
	  //$("#result_0").html(Number($("#drop_0_0").html()-$("#drop_0_2").html()));
	 _result_0 = Number($("#drop_0_0").html()-$("#drop_0_2").html());
	 _result_sub_0="";
	_result_sub_1="";
	}
	if($("#drop_0_1").html()==$("#drop_0_3").html())
	{
	 //console.log("direct minus = "+Number($("#drop_0_1").html()-$("#drop_0_3").html()) );	
	 
	 // $("#result_1").html(Number($("#drop_0_1").html()-$("#drop_0_3").html()));
	  //$("#result_0").html(Number($("#drop_0_0").html()-$("#drop_0_2").html()));
	  
	  _result_1 = Number($("#drop_0_1").html()-$("#drop_0_3").html());
	  _result_sub_0="";
	_result_sub_1="";
	 
	}
	if($("#drop_0_1").html()<$("#drop_0_3").html())
	{
	 console.log("borrow minus");
	 
	 
	// $("#drop_7").html(Number($("#drop_0_0").html()-1));
	 
	 // $("#carry_0").css('color','#daf470');
	//12-11 $("#carry_1").html(1+$("#drop_0_1").html());
	 // $("#carry_1").css('color','#daf470');
	 //$("#result_1").html(Number($("#carry_1").html()-$("#drop_0_3").html()));
	 //$("#result_0").html(Number($("#carry_0").html()-$("#drop_0_2").html()));
	 
	 _result_1 = Number((Number($("#drop_0_1").html())+10)-$("#drop_0_3").html());
	 _result_sub_0=(Number($("#drop_0_1").html())+10).toString().split('')[0];
	 _result_sub_1=(Number($("#drop_0_1").html())+10).toString().split('')[1];
	// console.log("_result_sub_0 "+_result_sub_0+"_result_sub_1 :"+_result_sub_1);
	 _result_0 = Number((Number($("#drop_0_0").html())-1)-$("#drop_0_2").html());
	// console.log("result_0"+_result_0);
	 _result_0=_result_0-1;
	}
	//resultVal_0=Number(indata[1])-Number(indata[3]);
	//console.log("vantha value 1 : "+resultVal_0);
	//resultVal_0_arr.push(resultVal_0);
	if($("#drop_0_0").html()>$("#drop_0_2").html() && $("#result_1").html()!="")
	{
	// console.log("direct minus = "+Number($("#drop_0_1").html()-$("#drop_0_3").html()) );	
	 
	  //$("#result_1").html(Number($("#drop_0_1").html()-$("#drop_0_3").html()));
	  if($("#drop_7").html()!="")
	 {
	  //$("#result_1").html(Number($("#drop_0_1").html()-$("#drop_0_3").html()));
	  //$("#result_0").html(Number($("#carry_0").html()-$("#drop_0_2").html()));
	  _result_0 = Number($("#drop_7").html()-$("#drop_0_2").html());
	  console.log("coming...");
	 // _result_sub_0="";
	//_result_sub_1="";
	 }
	 else
	 {
	 //alert("sdfsdf");
		 //$("#result_0").html(Number($("#drop_0_0").html()-$("#drop_0_2").html()));
		 _result_0 = Number((Number($("#drop_0_0").html())-1)-$("#drop_0_2").html());
		 
	 }
	 
	}
	if($("#drop_0_0").html()<$("#drop_0_2").html() && $("#result_1").html()!="")
	{
	// console.log("direct minus = "+Number($("#drop_0_1").html()-$("#drop_0_3").html()) );	
	 if($("#drop_7").html()!="")
	 {
	  //$("#result_1").html(Number($("#drop_0_1").html()-$("#drop_0_3").html()));
	  //$("#result_0").html(Number($("#carry_0").html()-$("#drop_0_2").html()));
	  console.log("coming...");
	 _result_0 = Number($("#drop_7").html()-$("#drop_0_2").html());
	 }
	 else
	 {
		 //$("#result_0").html(Number($("#drop_0_0").html()-$("#drop_0_2").html()));
		 _result_0 = Number($("#drop_0_0").html()-$("#drop_0_2").html());
	 }
	 
	}
}

function additionLogic()
{	    $("#opt_2").css('display','none');
		$("#separator").css('width','410px');
		$("#drop_6").css('display','block');
		$("#drop_0_6").css('display','block');
		$("#drop_6").css('border','1.5px dashed #808080');
		$("#drop_0_6").css('border','1.5px dashed #808080');
		//alert("sdf");
	$("#carry_0").html('');
	$("#carry_1").html('');
	indata.length=0;
	resultVal_0_arr.length=0;
	resultVal_1_arr.length=0;
	for(j=0;j<=3;j++)
	{
	//console.log($("#drop_0_"+j).html());
	indata.push($("#drop_0_"+j).html());
	//console.log(indata);
	}
	resultVal_0=Number(indata[1])+Number(indata[3]);
	//console.log("vantha value 1 : "+resultVal_0);
	resultVal_0_arr.push(resultVal_0);
	//console.log("Array : "+resultVal_0_arr.toString().length);
	//console.log("hxsfdhxdfhsert456454_"+resultVal_0_arr.toString().split('')[1]);
	
	var resultLength=resultVal_0_arr.toString().length;
	//alert(resultLength);
	if(resultLength!=1)
	{
	//alert("coming");
	//alert(resultVal_0_arr.toString().split('')[1]);
	_result_1= Number(resultVal_0_arr.toString().split('')[1]);
	//console.log("_result_1 = "+_result_1);
	 
	 
	 //$("#drop_7").html(resultVal_0_arr.toString().split('')[0]);
	// $("#drop_7").css('color','#daf470');
	 resultVal_1=Number(indata[0])+Number(indata[2]);
	 //console.log("vantha value 2 : "+resultVal_1);
	 resultVal_1_arr.push(resultVal_1);
	 //$("#opt_2").css('display','block');
	 //$("#diagonal_2").css('display','block');
	 _result_0=Number(resultVal_1_arr[0]+Number(resultVal_0_arr.toString().split('')[0]));
	// console.log("LENGTH: "+_result_0.toString().length);
	 if(_result_0.toString().length!=1)
	 {  
		_result_0_0=_result_0.toString();
		_result_0=_result_0_0.split('')[1];
		_result_0_1=_result_0_0.split('')[0];
		//console.log("testval : "+_result_0_1);
		//$("#separator").css('width','410px');
		//$("#drop_6").css('display','block');
		//$("#drop_0_6").css('display','block');
	 }
	 else
	 {
		//$("#separator").css('width','164px');
	 }
	 //console.log("_result_0 = "+_result_0);
	}
	else
	{
		_result_1=Number(resultVal_0_arr[0]);
		_result_0=Number(indata[0])+Number(indata[2]);
		if(_result_0.toString().length!=1)
		{  
		_result_0_0=_result_0.toString();
		_result_0=_result_0_0.split('')[1];
		_result_0_1=_result_0_0.split('')[0];
		//console.log("testval : "+_result_0_1);
		//$("#separator").css('width','244px');
		//$("#drop_6").css('display','block');
		//$("#drop_0_6").css('display','block');
		}
		else
		{
		//$("#separator").css('width','164px');
		//$("#drop_6").css('display','none');
		//$("#drop_0_6").css('display','none');
		}//console.log("vantha value 2 : "+resultVal_1);
		//$("#result_0").html(resultVal_1);
	}
	
	
	//$("#result_0").html(resultVal_1_arr.toString())
	
}

function checkDropValues()
{
	//console.log("check : "+$(".drop_drag").html());
	if($("#drop_0_0").html()!="" && $("#drop_0_1").html()!="" && $("#drop_0_2").html()!="" && $("#drop_0_3").html()!="")
	{
		//console.log("Not empty");
		retVal=1;
		
		
		
	}
	else
	{
		//console.log("Empty");
		retVal=0;
		//$("#opt_symbl").html('');
		
	}
	
}

function enableDropDragBoxes()
{
	//console.log(clname);
	$(".drop_drag").css('cursor', 'pointer');
	
	$(".drop_drag").draggable(
	{ 
	//helper:"clone",
	cursorAt:{left:32, top:32},
	revertDuration: 400,
		drag: function( event, ui ) 
		{
		dropedBox = '';
		//console.log("hai");
			//bool=false;
			dropdragdraggedDiv =$(this).attr("class");
			//console.log("class :"+draggedDiv);
			
			
	       // $("."+clname).css({'z-index':'10'});
		  // console.log("welcome");
		},
		revert:function(evt,ui)
		{
			return true;
		},
		start:function(evt,ui)
		{	
		dropdragdraggedDiv =$(this).attr("class").split(" ")[0].trim().split("_")[2];
		console.log("dropdragdraggedDiv come "+dropdragdraggedDiv);
			//ui.helper.data('dropped', false);
					if(dropdragdraggedDiv<7)
					{
					$(this).css({'opacity':'0.5','fontSize':'50px','width':'65px','height':'65px','lineHeight':'65px'});
					}
					else
					{
					$(this).css({'opacity':'0.5','fontSize':'32px','width':'60px','height':'70px','lineHeight':'70px'});
					}
			$(this).mouseup(function(){
			if(ui.helper.data('dropped')==true)
			{
			ui.helper.data('dropped',false);
			//alert("true");
					if(dropdragdraggedDiv<7)
					{
				$(this).css({'opacity':'1','fontSize':'80px','width':'130px','height':'130px','lineHeight':'130px','padding':'0px'});
					}
					else
					{
					$(this).css({'opacity':'1','fontSize':'32px','width':'60px','height':'70px','lineHeight':'70px','padding':'0px'});
					}
			}
			else
			{
			//alert("false");
			if(dropedBox.split(" ")[0]=="")
			{
			ui.helper.data('dropped',false);
			$(this).css({'opacity':'0','fontSize':'0px','width':'0px','height':'0px','lineHeight':'0px','padding':'0px'});
			//$(this).css('opacity','0').html('');
			}
			
			}
				
});
//console.log("executing...");
		},
		stop:function(evt,ui)
		{
		dropdragdraggedDivstop =$(this).attr("class").split(" ")[0].trim().split("_")[2];
		console.log("dropdragdraggedDivstop"+dropdragdraggedDivstop);
			//$(this).animate({'opacity':'1','fontSize':'80px','width':'130px','height':'130px','lineHeight':'130px'},2);
			//alert('stop: dropped=' + ui.helper.data('dropped'));
			if(ui.helper.data('dropped')==true)
			{
			ui.helper.data('dropped',false);
			//alert("true");
					if(dropdragdraggedDivstop<7)
					{ //alert('1-6'+dropdragdraggedDivstop)
			$(this).css({'opacity':'1','fontSize':'80px','width':'130px','height':'130px','lineHeight':'130px','padding':'0px'});
					}
					else
					{//alert('7-9'+dropdragdraggedDiv)
					$(this).css({'opacity':'1','fontSize':'32px','width':'60px','height':'70px','lineHeight':'70px','padding':'0px'});
					}
			}
			else
			{
			//alert("false");
			ui.helper.data('dropped',false);
			//$(this).css('opacity','0').html('');
			$(this).css({'opacity':'0','fontSize':'0px','width':'0px','height':'0px','lineHeight':'0px','padding':'0px'}).html('');
			}
		},
		
	});
	
}

function ResetClick()
{ 
	$("#opt_2").unbind('click');
	for(k=0;k<=5;k++)
	{
	$(".drop_drag_"+k).css('border','1.5px dashed #808080');
	$(".drop_drag_"+k).html('');
	}
	for(m=0;m<=2;m++)
	{
	$("#opt_"+m).css('cursor','pointer');
	}
	//$("#result_0").html('');
	//$("#result_1").html('');
	/*$("#carry_0").html('').css('display','none');
	$("#carry_1").html('').css('display','none');*/
	for(j=0;j<=9;j++)
	{
	$("#drop_0_"+j).css('display','none').html('');
	}
	
	indata.length=0;
	resultVal_0_arr.length=0;
	resultVal_1_arr.length=0;
	$("#diagonal_0").css('display','none');
	$("#diagonal_1").css('display','none');
	$("#opt_symbl").css('display','none');
	$("#opt_2").css('display','none');
	$("#opt_2").html('');
	$("#diagonal_2").css('display','none');
	$("#drop_7").html('').css('color','#daf470').css('display','none');
	$("#drop_7_0").html('').css('color','#daf470').css('display','none');
	$("#drop_8").html('').css('color','#daf470').css('display','none');
	$("#drop_8_0").html('').css('color','#daf470').css('display','none');
	$("#drop_9").html('').css('color','#daf470').css('display','none');
	$("#drop_9_0").html('').css('color','#daf470').css('display','none');
	$("#separator").css('width','279px');
	$("#drop_6").css('display','none').html('');
	$("#drop_0_6").css('display','none').html('');
	$("#opt_symbl").css('display','none');
	$("#opt_symbl").html('');
	diagStat_0=0;
	diagStat_1=0;
	$("#drop_0_0").off('click');
	$("#drop_0_1").off('click');
	$("#opt_2").css('borderColor','#808080');
	$("#opt_2").off('click');
	saveObjectAry = {};
	saveObjectAry = {'valDivs':{},'exDivs':{}};
}

function savingfn()
{ 
	saveObjectAry = {};
	saveObjectAry = {'valDivs':{},'exDivs':{}};
	$('.drop_drag').each(function(i,v) {
	if($(v).html()!="" && $(v).html()!=null)
	{
    saveObjectAry.valDivs[$(v).attr('id')] = $(v).html();
	}
	if($("#diagonal_0").css("display")!="none")
	{
	saveObjectAry.valDivs['diagonal_01'] = 1;
	}
	if($("#diagonal_1").css("display")!="none")
	{
	saveObjectAry.valDivs['diagonal_11'] = 1;
	}
});

console.log(Object.keys(saveObjectAry.valDivs).length);
if(Object.keys(saveObjectAry.valDivs).length)
{
 saveObjectAry.exDivs['opt_symbl']=$("#opt_symbl").html();

 if($("#opt_2").css('borderColor')=="rgb(202, 51, 190)")
 {
  
  saveObjectAry.exDivs['opt_21']=1;
 }
 else
 {
   saveObjectAry.exDivs['opt_21']=0;
 }
} 
 //saveObjectAry['opt_2']=$("#opt_2").css('borderColor');

console.log(saveObjectAry);
}