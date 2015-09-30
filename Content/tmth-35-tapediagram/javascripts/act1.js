
function showproblem(idgett){
	idgetting=idgett;

	$("#BackBtn").unbind();
	$("#BackBtn").click(goHome);
	$("#mainDiv_1").css('display','block');
	$("#Wrapper_1").css('display','none');


	var keypadpos =[[-50,130,1,9999,"focus"],[-50,180,1,999,"focus"],[-50,-270,1,999,"focus"]];
	for(var i=1; i<=3; i++) {
		
		$("#num_"+i).unbind("click");
		$("#num_"+i).click(bindunknowclick=function() {
			$("#errtxt").trigger("click",["This is the unknown in your equation."]);
		});
		$("#num_"+i).unbind("click");
		$("#num_"+i).click(bindnumpadfn=function() {
			if($(this).val()=="?")	{
				$(this).val('');
			}
			var p=$(this).offset();
			var pheight = $(this).height();
			var keypadposs = keypadpos[(this.id).split("_")[1]-1];
			ashownumpad(this.id,p.top+keypadposs[0],p.left+keypadposs[1],pheight,keypadposs[2],keypadposs[3],keypadposs[4]);
		 });
	}

	$("#num_1").unbind("focus");
	$("#num_2").unbind("focus");
	$("#num_3").unbind("focus");
	$("#num_1").focus(bindfocusfn1=function(){
		validatequestionbox1(this.id);
	});
	$("#num_2").focus(bindfocusfn2=function() {
		validatequestionbox1(this.id);
	});
	$("#num_3").focus(bindfocusfn3=function(){
		validatequestionbox1(this.id);
	});
	
	
			
	$("#tap_0").resizable({
		minWidth:120,
		maxWidth:615,
		containment: "parent" ,
		handles: 'e',
		resize: function( event, ui ) {
		
		$("#num_2").css('left',((Number($("#tap_0").width()/2))-38)+'px');
		$("#num_3").css('right',((Number($("#tap_1").width()/2))-38)+'px');
		
		$("#line_1").css('width',Number($(this).width()-5)+'px');
		$("#line_2").css('width',Number($("#tap_cont").width()-$(this).width()-10)+'px');
		
		$("#tap_1").css('width',Number($("#tap_cont").width()-$(this).width()-5)+'px');
		
		$("#line_cut").css('left',((Number($("#tap_0").width())-5))+'px');
		
		$("#ans_1").css('left',((Number($("#tap_0").width()/2))-153)+'px');
		$("#ans_2").css('left',((Number($("#tap_0").width()/2))+209)+'px');
		
		$( "#colorpallate" ).css('left',($('#line_cut').position().left+80));
		
		$("#num_2_val").val($("#num_2").css('left'));
		$("#num_3_val").val($("#num_3").css('right'));
		
		$("#line_1_val").val($("#line_1").css('width'));
		$("#line_2_val").val($("#line_2").css('width'));
		
		$("#tap_0_val").val($("#tap_0").css('width'));
		$("#tap_1_val").val($("#tap_1").css('width'));
		
		$("#line_cut_val").val($("#line_cut").css('left'));
		
		$("#ans_1_val").val($("#ans_1").css('left'));
		$("#ans_2_val").val($("#ans_2").css('left'));
		
			
			
		}
	});	
		

	for(v=0;v<2;v++)		{
		$("#tap_"+v).on('click',showcolorpallet);
	}
	
}



function validatequestionbox1(curid){
	
	firstno=$("#num_1");
	secondno=$("#num_2");
	thirdno=$("#num_3");
	firstnumber =$("#num_1").val();
	secondnumber=$("#num_2").val();
	thirdnumber =$("#num_3").val();
	var firstnumberval = parseInt((firstnumber=='?' || firstnumber=='')?0:firstnumber);
	var secondnumberval = parseInt((secondnumber=='?' || secondnumber=='')?0:secondnumber);
	var thirdnumberval = parseInt((thirdnumber=='?' || thirdnumber=='')?0:thirdnumber);
	
	if(firstnumber==""){
		firstno.val('?').css('color','rgb(102, 102, 102)');
	}
	if(secondnumber==""){
		secondno.val('?').css('color','rgb(102, 102, 102)');
	}
	if(thirdnumber==""){
		thirdno.val('?').css('color','rgb(102, 102, 102)');
	}
	
			
	if(firstnumber=='?'){
		$("#num_1").css("color","rgb(102, 102, 102)");
		$("#num_1").unbind('click').unbind('focus');
		$("#num_1").bind('click',bindnumpadfn).bind('focus',bindfocusfn1);
	}
	if(secondnumber=='?'){
		$("#num_2").css("color","rgb(102, 102, 102)");
		$("#num_2").unbind('click').unbind('focus');
		$("#num_2").bind('click',bindnumpadfn).bind('focus',bindfocusfn2);
	}
	if(thirdnumber=='?'){
		$("#num_3").css("color","rgb(102, 102, 102)");
		$("#num_3").unbind('click').unbind('focus');
		$("#num_3").bind('click',bindnumpadfn).bind('focus',bindfocusfn3);
	}
	
	var errorflag=true;
	if(firstnumberval < secondnumberval && firstnumberval != 0){
		$("#"+curid).val('');
		if(curid=="num_2"){
			$("#errtxt").trigger("click",["A part must be smaller than the whole."]);
		}else{
			$("#errtxt").trigger("click",["The whole must be greater than the parts."]);
		}
		$("#anumpad").css('display','block');
		errorflag=false;
		//return false;
	}
	
	if(firstnumberval < thirdnumberval && firstnumberval != 0){
		$("#"+curid).val('');
		if(curid=="num_3"){
			$("#errtxt").trigger("click",["A part must be smaller than the whole."]);
		}else{
			$("#errtxt").trigger("click",["The whole must be greater than the parts."]);
		}
		$("#anumpad").css('display','block');
		errorflag=false;
		//return false;
	}
	
	if(errorflag){
	if(firstnumberval!= 0 && secondnumberval != 0 )	{
		thirdno.unbind('click').unbind('focus').bind("click",bindunknowclick);
		thirdno.css('color','#000000');
		$("#anumpad").css('display','none');
	}
	if(secondnumberval!= 0 && thirdnumberval!= 0)	{
		firstno.unbind('click').unbind('focus').bind("click",bindunknowclick);
		firstno.css('color','#000000');
		$("#anumpad").css('display','none');
	}
	if(thirdnumberval!= 0 && firstnumberval!= 0) {
		secondno.unbind('click').unbind('focus').bind("click",bindunknowclick);
		secondno.css('color','#000000');
		$("#anumpad").css('display','none');
	}
	}
	
}

function goHome(){
	$("#mainDiv_1").css('display','none');
	$("#Wrapper_1").css('display','block');
	$("#anumpad").css('display','none');
	for(var i=1;i<=3;i++){
		$("#num_"+i).bind('click',bindnumpadfn);
	}
}



function showcolorpallet(){
	if($("#anumpad").css('display')== 'none')	{
		colorget = this.id;
		$( "#colorpallate" ).css('left',($('#line_cut').position().left+80));
		$( "#colorpallate" ).css('top',($('#line_cut').parent().position().top+320));
		isVisible = $( "#colorpallate" ).is( ":visible" );
		if(!isVisible)		{
			$("#colorpallate").toggle(tcalfn);
		}
		$("#colorpallate > span").off('click');
		$("#colorpallate > span").on('click',function()		{
			$("#"+colorget).css('background-color',$(this).css('background-color'));
			$("#"+colorget+"_color").val($("#"+colorget).css('background-color'));
			$("#colorpallate").hide();
			$(document).off('click');
		});
	}
}
