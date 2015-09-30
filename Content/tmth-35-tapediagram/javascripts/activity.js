var gamevariable='';
var clickArray=new Array();
var bindnumpadfn;
var bindunknowclick;
var bindfocusfn1;
var bindfocusfn2;
var bindfocusfn3;

var backgroundpos= {};
backgroundpos={'g':["-20px -18px","-356px -18px","-691px -18px"],
			   'i':["-19px -310px","-311px -310px","-604px -310px","-896px -310px"]};

var colorget;
var colflag = false;
var firstnum;
var secnum;
var thirdnum;
var idgetting='';


var numwid;


var colorplarr = ["FBFFA5","3BB878","00BFF3","FFF467","FBAF5C","A763A8","ACD372","1ABBB4","F26C4F"];


var akeys=[1,2,3,4,5,6,7,8,9,0];
	
var isVisible;

var questionmarkArray=new Array();	
			   
window.onload=function(){
	$('#infoContainer').css('display','none');
	$('#errorContainer').css('display','none');
	$('#mainContainerHidden').css('display','none');
	$('#errtxt').html('');	
	$('input').addClass('response');
	//alert(states);
	ButtonCreation(4,"icon_i",10);

	$("#icon_i_1").click(function(){
		showproblem(this.id);
		gamevariable='firsticon';
		
	});
	$("#icon_i_2").click(function(){
		actSecond();
		gamevariable='secondicon';
	});
	$("#icon_i_3").click(function(){
		third_tool();
		gamevariable='thirdicon';

	});
	$("#icon_i_4").click(function(){
		fourth_tool();
		gamevariable='fourthicon';
		
	});
			

	$(".icoReset").click(function () {
		var current=$(this);
			current.removeClass('icoResetMove');
			var to=setTimeout(function(){
				clearInterval(to);
				current.addClass('icoResetMove');
			},200)
				
		if(gamevariable=='firsticon')	{
			
			for(var i=1;i<=3;i++) {
				$("#num_"+i).val('?').css('color','rgb(102, 102, 102)');
				$("#num_"+i).unbind('click').unbind('focus');
				$("#num_"+i).bind('click',bindnumpadfn);
			}
			$("#anumpad").css('display','none');
			$("#num_2").css({'left':'146px'});
			$("#num_3").css({'right':'146px'});
			$("#line_cut").css({'left':'362px'});
			$("#line_2").css({'width':'362px'});
			$("#line_1").css({'width':'362px'});
			$("#tap_0").css({'width':'367px','background-color':'rgb(251, 175, 92)'});
			$("#tap_1").css({'width':'368px','background-color':'rgb(0, 191, 243)'});
			$("#ans_0").val('');
			$("#ans_1").css({'left':'30px'}).val('');
			$("#ans_2").css({'left':'392px'}).val('');
			$("#num_1").bind('focus',bindfocusfn1);
			$("#num_2").bind('focus',bindfocusfn2);
			$("#num_3").bind('focus',bindfocusfn3);
			
			
			$("#num_2_val").val($("#num_2").css('left'));
			$("#num_3_val").val($("#num_3").css('right'));
			
			$("#line_1_val").val($("#line_1").css('width'));
			$("#line_2_val").val($("#line_2").css('width'));
			
			$("#tap_0_val").val($("#tap_0").css('width'));
			$("#tap_1_val").val($("#tap_1").css('width'));
			
			$("#tap_0_color").val($("#tap_0").css('background-color'));
			$("#tap_1_color").val($("#tap_1").css('background-color'));
			
			$("#line_cut_val").val($("#line_cut").css('left'));
			
			$("#ans_1_val").val($("#ans_1").css('left'));
			$("#ans_2_val").val($("#ans_2").css('left'));

		}

		if(gamevariable=='secondicon'){
			
			for(h=0;h<2;h++)		{
				$("#txt_area_"+h).val('');
			}
			
			$("#num_input_par_0").css('background-color','rgb(251, 175, 92)');
			$("#num_input_par_1").css({'width':'325px','background-color':'rgb(0, 191, 243)'});
			$("#mun_2").css('left',((Number($("#num_input_par_1").width()/2))-38)+'px');
			$("#num_input_par_2").css('width',Number($("#num_div_par_0").width()-$("#num_input_par_1").width()-5)+'px');
			$("#mun_3").css('right',((Number($("#num_input_par_2").width()/2))-38)+'px');
			$("#line_cut_second").css('left',((Number($("#num_input_par_1").width()))-4)+'px');
			$("#anumpad").css('display','none');
			for(var g=1;g<=3;g++)		{
				$("#mun_"+g).val('?').css('color','rgb(102, 102, 102)');
				$("#mun_"+g).unbind('click').unbind('focus');
				$("#mun_"+g).bind('click',bindnumpadfn);
			}
			$("#mun_1").bind('focus',bindfocusfn1);
			$("#mun_2").bind('focus',bindfocusfn2);
			$("#mun_3").bind('focus',bindfocusfn3);
			
			
				$("#mun_2_val").val($("#mun_2").css('left'));
				$("#mun_3_val").val($("#mun_3").css('right'));
				
				$("#num_input_par_2_val").val($("#num_input_par_2").css('width'));
				$("#num_input_par_1_val").val($("#num_input_par_1").css('width'));
				
				$("#line_cut_second_val").val($("#line_cut_second").css('left'));
				
				$("#num_input_par_0_color").val($("#num_input_par_0").css('background-color'));
				$("#num_input_par_1_color").val($("#num_input_par_1").css('background-color'));
				
		}
		if(gamevariable=='thirdicon')	{
			$("#errorcondition").html('');
			$("#greyBox").empty();
			$("#greyBox").css('background-color','#DCDCDC');
			$("#numberLine").empty();
			$('#firstValue').val('');
			$('#secondValue').val('');
			$("#partValue").css('width','80px');
			$("#anumpad").css('display','none');
			for(var j=1;j<=3;j++)		{
				$("#thridnum_"+j).val('?').css('color','rgb(102, 102, 102)');
				$("#thridnum_"+j).unbind('click').unbind('focus');
				$("#thridnum_"+j).bind('click',bindnumpadfn);
			}
			$("#thridnum_1").bind('focus',bindfocusfn1);
			$("#thridnum_2").bind('focus',bindfocusfn2);
			$("#thridnum_3").bind('focus',bindfocusfn3);
			
			$("#greyBox_color").val('rgb(220, 220, 220)');
			$("#sub_class_1_color").val('rgb(172, 211, 114)');

		}
		if(gamevariable=='fourthicon'){
			$("#errorcondition").html('');
			$("#greyBox_fourth").empty();
			$("#greyBox_fourth").css({'background':'#DCDCDC','border':'1.5px dashed black'});
			$("#greyBox_one").css({'background':'#DCDCDC','border':'1.5px dashed black','width':'66px'});
			$("#partValuefourth").css('width','66px');
			$("#firstValue_fourth").val('');
			$("#secondValue_fourth").val('');
			$("#anumpad").css('display','none');
			for(var j=1;j<=3;j++)
			{
				$("#fourthdnum_"+j).val('?').css('color','rgb(102, 102, 102)');
				$("#fourthdnum_"+j).unbind('click').unbind('focus');
				$("#fourthdnum_"+j).bind('click',bindnumpadfn);
			}
			$("#fourthdnum_1").bind('focus',bindfocusfn1);
			$("#fourthdnum_2").bind('focus',bindfocusfn2);
			$("#fourthdnum_3").bind('focus',bindfocusfn3);
			$("#greyBox_fourth").unbind("click");
			$("#greyBox_one").unbind("click");

		}
		resetState();
	});

	$("#errtxt").click(function (event,txt) {
		$('#errorContainer').css('display','block');
		$('#mainContainerHidden').css('display','block');
		$('#errtxt').html(txt);	
	});
	$('#errclose').click(function(){
		$('#errorContainer').css('display','none');
		$('#mainContainerHidden').css('display','none');
	});
	$('#mainContainerHidden').click(function(){
		$('#errorContainer').css('display','none');
		$('#mainContainerHidden').css('display','none');
	});

	colorpallateload();
	acreatenumpad(akeys);
	
	$(function() {
		$("#anumpad" ).draggable({ cancel: "div.akeyCss, div.sprite1" });
		$("#colorpallate").draggable();
	});
	eventBroker.publishEvent("#fetch", { type : 'state' }, function(state) { fetchCallBack(state); 	});
	
	validatequestionbox1("num_1");
	validatequestionbox2("mun_1");
	fn_Division("thirdnum_1");
	fn_validation("fourthdnum_1");
}
function ButtonCreation(e,dId,brad){
	var dIdsplit = dId.split("_")[1];
	var divid = document.getElementById(dId);
	if($("#"+dId+">p").length == 0)	{
		var para=document.createElement('p');
		para.style.wordWrap="break-word";
		for(var i=1;i<=e;i++)		{
			var dateSpan = document.createElement('span');
			dateSpan.id = "icon_"+dIdsplit+"_"+i;
			dateSpan.style.position="relative";
			dateSpan.style.display="inline-block";
			dateSpan.style.margin="10px";
			dateSpan.style.width="278px";
			dateSpan.style.height="278px";
			dateSpan.style.align='center';
			dateSpan.style.left='10px';
			dateSpan.style.textAlign='center';
			dateSpan.style.cursor='pointer';
			dateSpan.style.border="0px solid black";
			dateSpan.style.borderRadius=brad+"px";
			dateSpan.style.lineHeight="250px";
			dateSpan.style.fontWeight="bold";
			dateSpan.style.backgroundPosition=backgroundpos[dIdsplit][i-1];
			para.appendChild(dateSpan);
		}
		divid.appendChild(para);
	}
}


function tcalfn(){
	$(document).on('click',function()	{
		$("#colorpallate").toggle(function(){$(document).off('click')});
	});
}
	
function colorpallateload(){
	if($("#colorpallate > span").size()==0)	{
		for(i=0;i<9;i++){
			var iDiv = document.createElement('span');
			iDiv.id = 'colrp_'+i;
			iDiv.className='dyn_tap_div_'+i;
			iDiv.style.border="0px solid #FFFFFF";
			iDiv.style.backgroundColor="#"+colorplarr[i];
			iDiv.style.fontSize = "20px";
			iDiv.style.width="30px";
			iDiv.style.height="30px";
			iDiv.style.lineHeight="20px";
			iDiv.style.display="inline-block";
			iDiv.style.marginRight="5px";
			iDiv.style.marginLeft="5px";
			iDiv.style.marginTop="5px";
			//iDiv.style.marginBottom="5px";
			//iDiv.style.borderRadius="20px";
			iDiv.style.cursor="default";
			var s = document.getElementById('colorpallate');
			s.appendChild(iDiv);
		}
	}
}




