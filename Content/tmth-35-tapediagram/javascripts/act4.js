
function fourth_tool(){
	$("#BackBtn_4").unbind("click");
	$("#BackBtn_4").click(goHome_4);

	$("#Wrapper_four").css('display','block');
	$("#Wrapper_1").css('display','none');

	var keypadpos =[[-50,70,1,99999,"focus"],[-50,70,1,9999,"focus"],[-50,50,1,10,"focus"]];
	
	for(var i=1; i<=3; i++)	 {
		$("#fourthdnum_"+i).unbind("click");
		$("#fourthdnum_"+i).click(bindunknowclick=function() {
			$("#errtxt").trigger("click",["This is the unknown in your equation."]);
		});
		 $("#fourthdnum_"+i).unbind("click");
		 $("#fourthdnum_"+i).click(bindnumpadfn=function() {
			if($(this).val()=="?"){
				$(this).val('');
			}
			var p=$(this).offset();
			var pheight = $(this).height();
			var keypadposs = keypadpos[(this.id).split("_")[1]-1];
			ashownumpad(this.id,p.top+keypadposs[0],p.left+keypadposs[1],pheight,keypadposs[2],keypadposs[3],keypadposs[4]);
		 });
	}
	 
	$("#fourthdnum_1").unbind("focus");
	$("#fourthdnum_2").unbind("focus");
	$("#fourthdnum_3").unbind("focus");
	$("#fourthdnum_1").focus(bindfocusfn1 = function(){
		fn_validation(this.id);
	});
	$("#fourthdnum_2").focus(bindfocusfn2 = function(){
		fn_validation(this.id);
	});
	$("#fourthdnum_3").focus(bindfocusfn3 = function(){
		fn_validation(this.id);
	});


 
}

function fn_validation(curid){
	
	var wid=$("#greyBox_fourth").css('width');
	numwid=wid.split('px')[0];
	
	firstnum=parseInt($("#fourthdnum_1").val());
	secnum=parseInt($("#fourthdnum_2").val());
	thirdnum=parseInt($("#fourthdnum_3").val());
	
	
	
	firstno=$("#fourthdnum_1");
	secondno=$("#fourthdnum_2");
	thirdno=$("#fourthdnum_3");
	firstnumber =$("#fourthdnum_1").val();
	secondnumber=$("#fourthdnum_2").val();
	thirdnumber =$("#fourthdnum_3").val();
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
		$("#fourthdnum_1").css("color","rgb(102, 102, 102)");
		$("#fourthdnum_1").unbind('click').unbind('focus');
		$("#fourthdnum_1").bind('click',bindnumpadfn).bind('focus',bindfocusfn1);
	}
	if(secondnumber=='?'){
		$("#fourthdnum_2").css("color","rgb(102, 102, 102)");
		$("#fourthdnum_2").unbind('click').unbind('focus');
		$("#fourthdnum_2").bind('click',bindnumpadfn).bind('focus',bindfocusfn2);
	}
	if(thirdnumber=='?'){
		$("#fourthdnum_3").css("color","rgb(102, 102, 102)");
		$("#fourthdnum_3").unbind('click').unbind('focus');
		$("#fourthdnum_3").bind('click',bindnumpadfn).bind('focus',bindfocusfn3);
	}
	var errorflag = true;
	if(firstnumberval < secondnumberval && firstnumberval != 0){
		$("#"+curid).val('');
		if(curid=="fourthdnum_2"){
			$("#errtxt").trigger("click",["This tape should represent the smaller quantity."]);
		}else{
			$("#errtxt").trigger("click",["This tape should represent the larger quantity."]);
		}
		$("#anumpad").css('display','block');
		errorflag = false;//return false;
	}
	
	if(firstnumberval < thirdnumberval && firstnumberval != 0){
		$("#"+curid).val('');
		$("#errtxt").trigger("click",["This value must be larger than the other value you entered."]);
		$("#anumpad").css('display','block');
		errorflag = false;//return false;
	}
	
	
	if(errorflag){	
		var firstnum1=$("#fourthdnum_1").val();
		var	secnum1=$("#fourthdnum_2").val();
		var thirdnum1=$("#fourthdnum_3").val();	
		if(firstnum1=='?'){
			$("#greyBox_fourth").css({'border':'1.5px dashed black','background':'#DCDCDC'});
		}
		if(secnum1=='?'){
			$("#greyBox_one").css({'border':'1.5px dashed black','background':'#DCDCDC','width':'66px'});
		}
		if(thirdnum1=='?'){
			$("#greyBox_fourth").empty();
			$("#greyBox_fourth").css({'border':'1.5px dashed black','background':'#DCDCDC'});
			$("#greyBox_one").css({'border':'1.5px dashed black','background':'#DCDCDC','width':'66px'}); 
			$("#partValuefourth").css('width','66px');
		}

		if(firstnum1!="?" && firstnum1!="")	{
			$("#greyBox_fourth").css({'border':'1px solid black','background':'yellow'});
			$("#greyBox_fourth").off('click');
			$("#greyBox_one").off('click');
		}
		if(secnum1!="?" && secnum1!='')	{
			var ans=Math.round(firstnum1/secnum1);
			var intervalcont=Number(numwid)/ans;
			$("#greyBox_one").css('width',intervalcont+"px");
			$("#partValuefourth").css('width',intervalcont+"px");
			$("#greyBox_one").css({'border':'1px solid black','background':'yellow'});
			$("#greyBox_fourth").off('click');
			$("#greyBox_one").off('click');
		}
		if(thirdnum1!="?" && thirdnum1!='')	{

			fourthboxpart(thirdnum,'yellow');
		}

		if($("#fourthdnum_1").val()!="?" && $("#fourthdnum_2").val()!= "?"  ){

			 $("#fourthdnum_3").unbind('click').unbind("focus").bind("click",bindunknowclick);
			 $("#fourthdnum_3").css('color','#000000');
			 $("#anumpad").css('display','none');
			 $("#greyBox_fourth").on('click',fourthshowcolorplt);
			$("#greyBox_one").on('click',smalltapeshowcolorplt);
		}
		else if($("#fourthdnum_1").val()!="?"  && $("#fourthdnum_3").val()!="?")	{

			$("#fourthdnum_2").unbind('click').unbind("focus").bind("click",bindunknowclick);
			$("#fourthdnum_2").css('color','#000000');
			$("#anumpad").css('display','none');
		}
		else if($("#fourthdnum_2").val()!="?"  && $("#fourthdnum_3").val()!="?")	{

			$("#fourthdnum_1").unbind('click').unbind("focus").bind("click",bindunknowclick);
			$("#fourthdnum_1").css('color','#000000');
			$("#anumpad").css('display','none');
		}
	}
}


function fourthboxpart(lineDiv,childbgcolor){
	var innerwidth=numwid/lineDiv;
	
	var minWidth=Number(innerwidth);
	var lineWidth=parseInt(innerwidth)-2;
	$('#partValuefourth').css('width',lineWidth+'px');
	$('#greyBox_one').css({'width':lineWidth+'px','border':'1px solid black','background-color':'yellow'});
	var divisions=lineDiv;
	var nLine = $('#greyBox_fourth'), leftOffset = nLine.offset().left, temp;
	
	nLine.html('');
	var marginLeft = ((nLine.width() - $('.commonLine2').width() * (divisions + 1)) / divisions);
	for(var i=1;i<=lineDiv;i++)
	{
		var backimg='url("images/divtick.png")';
		if(i==1)
		{
			backimg='none';
		}
		$("#greyBox_fourth").css('border','1px solid black');
		
		nLine.append('<div id="sub_' + i + '" style="left:' + ((i * marginLeft)) + 'px" class="commonLine2"></div>');
		
		if (i == divisions) {
			$(".commonLine2:last-child").css("left", ((i * marginLeft) - $(".commonLine2:last-child").width()));
		}
		if(i==lineDiv)
		{
		$("#sub_"+i).css('display','none');
		}
	}
	$("#greyBox_fourth").css('background-color',childbgcolor);
	$("#greyBox_fourth").on('click',fourthshowcolorplt);
	$("#greyBox_one").on('click',smalltapeshowcolorplt);
			
}



function goHome_4(){
	$("#Wrapper_four").css('display','none');
	$("#Wrapper_1").css('display','block');
	$("#errorcondition").html('');

	$("#anumpad").css('display','none');
	
}



function fourthshowcolorplt(){

	if($("#anumpad").css('display')== 'none')	{
		colorget = this.id;

		isVisible = $( "#colorpallate" ).is( ":visible" );
		if(!isVisible)		{
			$("#colorpallate").css({'left':'150px','top':'168px'}).toggle(tcalfn);
		}
		$("#colorpallate > span").off('click');
		$("#colorpallate > span").on('click',function()		{
			$("#"+colorget).css('background-color',$(this).css('background-color'));
			$("#greyBox_one").css('background-color',$(this).css('background-color'));
			$("#"+colorget+"_color").val($("#"+colorget).css('background-color'));
			$("#colorpallate").hide();
			$(document).off('click');
		});
	}
}

function smalltapeshowcolorplt(){

	if($("#anumpad").css('display')== 'none')	{
		colorget = this.id;

		isVisible = $( "#colorpallate" ).is( ":visible" );
		if(!isVisible)		{
			$("#colorpallate").css({'left':'150px','top':'168px'}).toggle(tcalfn);
		}
		$("#colorpallate > span").off('click');
		$("#colorpallate > span").on('click',function()		{
			
			$("#"+colorget).css('background-color',$(this).css('background-color'));
			$("#greyBox_fourth").css('background-color',$(this).css('background-color'));
			$("#"+colorget+"_color").val($("#"+colorget).css('background-color'));
			$("#colorpallate").hide();
			$(document).off('click');
		});
	}
}


