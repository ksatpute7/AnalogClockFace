 
function actSecond() {
	
	$("#BackBtn_2").unbind();
	$("#BackBtn_2").click(goHome_2);
	$("#anumpad").css('display','none');
	$("#act1").css('display','block');
	$("#Wrapper_1").css('display','none');
	
	//var keypadpos =[[-50,-450,1,9999],[-50,50,1,999],[-50,-450,1,999]];
	
	var keypadpos =[[-50,130,1,9999,"focus"],[-50,180,1,999,"focus"],[-50,-270,1,999,"focus"]];
	for(var i=1; i<=3; i++) {
		$("#mun_"+i).unbind("click");
		$("#mun_"+i).click(bindunknowclick=function() {
			$("#errtxt").trigger("click",["This is the unknown in your equation."]);
		});
		$("#mun_"+i).unbind("click");
		$("#mun_"+i).click(bindnumpadfn=function() {
			if($(this).val()=="?")	{
				$(this).val('');
			}
			var p=$(this).offset();
			var pheight = $(this).height();
			var keypadposs = keypadpos[(this.id).split("_")[1]-1];
			ashownumpad(this.id,p.top+keypadposs[0],p.left+keypadposs[1],pheight,keypadposs[2],keypadposs[3],keypadposs[4]);
		 });
	}

	$("#mun_1").unbind("focus");
	$("#mun_2").unbind("focus");
	$("#mun_3").unbind("focus");
	$("#mun_1").focus(bindfocusfn1=function(){
		validatequestionbox2(this.id);
	});
	$("#mun_2").focus(bindfocusfn2=function() {
		validatequestionbox2(this.id);
	});
	$("#mun_3").focus(bindfocusfn3=function(){
		validatequestionbox2(this.id);
	});
	
	$("#num_input_par_1").resizable({
		minWidth:100,
		maxWidth:550,
		containment: "parent" ,
		handles: 'e',
		resize: function( event, ui ) {
			$("#mun_2").css('left',((Number($("#num_input_par_1").width()/2))-38)+'px');
			$("#mun_3").css('right',((Number($("#num_input_par_2").width()/2))-38)+'px');
			
			$("#num_input_par_2").css('width',Number($("#num_div_par_1").width()-$(this).width()-5)+'px');
			$("#line_cut_second").css('left',((Number($("#num_input_par_1").width()))-4)+'px');
			
			
			$("#mun_2_val").val($("#mun_2").css('left'));
			$("#mun_3_val").val($("#mun_3").css('right'));
			
			$("#num_input_par_1_val").val($("#num_input_par_1").css('width'));
			$("#num_input_par_2_val").val($("#num_input_par_2").css('width'));
			
			$("#line_cut_second_val").val($("#line_cut_second").css('left'));
			
		
		},
	});
	
	for(v=0;v<2;v++)	{
		$("#num_input_par_"+v).on('click',showcolorplt);
	}
	
	
}



function validatequestionbox2(curid){
	
	firstno=$("#mun_1");
	secondno=$("#mun_2");
	thirdno=$("#mun_3");
	firstnumber =$("#mun_1").val();
	secondnumber=$("#mun_2").val();
	thirdnumber =$("#mun_3").val();
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
		$("#mun_1").css("color","rgb(102, 102, 102)");
		$("#mun_1").unbind('click').unbind('focus');
		$("#mun_1").bind('click',bindnumpadfn).bind('focus',bindfocusfn1);
	}
	if(secondnumber=='?'){
		$("#mun_2").css("color","rgb(102, 102, 102)");
		$("#mun_2").unbind('click').unbind('focus');
		$("#mun_2").bind('click',bindnumpadfn).bind('focus',bindfocusfn2);
	}
	if(thirdnumber=='?'){
		$("#mun_3").css("color","rgb(102, 102, 102)");
		$("#mun_3").unbind('click').unbind('focus');
		$("#mun_3").bind('click',bindnumpadfn).bind('focus',bindfocusfn3);
	}
	
	var errorflag=true;
	if(firstnumberval < secondnumberval && firstnumberval != 0){
		$("#"+curid).val('');
		if(curid=="mun_2"){
			$("#errtxt").trigger("click",["This tape should represent the smaller quantity."]);
		}else{
			$("#errtxt").trigger("click",["This tape should represent the larger quantity."]);
		}
		$("#anumpad").css('display','block');
		errorflag=false;
		//return false;
	}
	
	if(firstnumberval < thirdnumberval && firstnumberval != 0){
		$("#"+curid).val('');
		if(curid=="mun_3"){
			$("#errtxt").trigger("click",["The difference should be smaller than the larger quantity."]);
		}else{
			$("#errtxt").trigger("click",["The larger quantity should be larger than the difference."]);
		}
		$("#anumpad").css('display','block');
		errorflag=false;
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



function goHome_2()
{
	$("#act1").css('display','none');
	$("#Wrapper_1").css('display','block');
	$("#anumpad").css('display','none');
	for (var j=1;j<=3;j++)	{
		$("#mun_"+j).bind('click',bindnumpadfn);
	}
}






function showcolorplt()
{

	if($("#anumpad").css('display')== 'none')
	{
		colorget = this.id;
		$( "#colorpallate" ).css('left',($('#'+colorget).parent().position().left-80));
		$( "#colorpallate" ).css('top',($('#'+colorget).parent().position().top+200));
		isVisible = $( "#colorpallate" ).is( ":visible" );
		if(!isVisible)
		{
		$("#colorpallate").toggle(tcalfn);
		}

		$("#colorpallate > span").off('click');
		$("#colorpallate > span").on('click',function()	{
			$("#"+colorget).css('background-color',$(this).css('background-color'));
			$("#"+colorget+"_color").val($("#"+colorget).css('background-color'));
			$("#colorpallate").hide();
			$(document).off('click');
		});
	}
}
