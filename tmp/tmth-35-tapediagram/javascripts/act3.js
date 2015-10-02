
function third_tool(){
	$("#startPoint").html('0');
	$("#thirdBackBtn").unbind("click");
	$("#thirdBackBtn").click(goHomeSec);

	$("#anumpad").css('display','none');
	$("#Wrapper").css('display','block');
	$("#Wrapper_1").css('display','none');

	var keypadpos =[[-50,70,1,9999,"focus"],[-50,70,1,99,"focus"],[-120,-440,1,99,"focus"]];

	 for(var i=1; i<=3; i++) {
		$("#thridnum_"+i).unbind("click");
		$("#thridnum_"+i).click(bindunknowclick=function() {
			$("#errtxt").trigger("click",["This is the unknown in your equation."]);
		});
		$("#thridnum_"+i).unbind("click");
		$("#thridnum_"+i).click(bindnumpadfn=function() {
			if($(this).val()=="?")	{
				$(this).val('');
			}
			var p=$(this).offset();
			var pheight = $(this).height();
			var keypadposs = keypadpos[(this.id).split("_")[1]-1];
			ashownumpad(this.id,p.top+keypadposs[0],p.left+keypadposs[1],pheight,keypadposs[2],keypadposs[3],keypadposs[4]);
		 });
	 }

	$("#thridnum_1").unbind("focus");
	$("#thridnum_2").unbind("focus");
	$("#thridnum_3").unbind("focus");
	$("#thridnum_1").focus(bindfocusfn1 = function(){
		fn_Division(this.id);
	});
	$("#thridnum_2").focus(bindfocusfn2 = function(){
		fn_Division(this.id);
	});
	$("#thridnum_3").focus(bindfocusfn3 = function(){
		fn_Division(this.id);
	});



}


function fillquestionmark(){
	for(var h=1; h<=3; h++)	 {
		if($("#thridnum_"+h).val()==""){
			$("#thridnum_"+h).val('?');
		}
	}
}

function goHomeSec()
{
	$("#Wrapper").css('display','none');
	$("#Wrapper_1").css('display','block');
	$("#errorcondition").html('');
	
	$("#anumpad").css('display','none');
	
}



function fn_Division(curid){
	
	firstno=$("#thridnum_1");
	secondno=$("#thridnum_2");
	thirdno=$("#thridnum_3");
	firstnumber =$("#thridnum_1").val();
	secondnumber=$("#thridnum_2").val();
	thirdnumber =$("#thridnum_3").val();
	firstnumberval = parseInt((firstnumber=='?' || firstnumber=='')?0:firstnumber);
	secondnumberval = parseInt((secondnumber=='?' || secondnumber=='')?0:secondnumber);
	thirdnumberval = parseInt((thirdnumber=='?' || thirdnumber=='')?0:thirdnumber);
	
	var wid=$("#greyBox").css('width');
	numwid=wid.split('px')[0];
	
	firstnum=parseInt($("#thridnum_1").val());
	secnum=parseInt($("#thridnum_2").val());
	thirdnum=parseInt($("#thridnum_3").val());
	
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
		$("#thridnum_1").css("color","rgb(102, 102, 102)");
		$("#thridnum_1").unbind('click').unbind('focus');
		$("#thridnum_1").bind('click',bindnumpadfn).bind('focus',bindfocusfn1);
	}
	if(secondnumber=='?'){
		$("#thridnum_2").css("color","rgb(102, 102, 102)");
		$("#thridnum_2").unbind('click').unbind('focus');
		$("#thridnum_2").bind('click',bindnumpadfn).bind('focus',bindfocusfn2);
	}
	if(thirdnumber=='?'){
		$("#thridnum_3").css("color","rgb(102, 102, 102)");
		$("#thridnum_3").unbind('click').unbind('focus');
		$("#thridnum_3").bind('click',bindnumpadfn).bind('focus',bindfocusfn3);
	}
	
	var errorflag = true;
	
	if(firstnumberval < secondnumberval && firstnumberval != 0){
		$("#"+curid).val('');
		if(curid=="thridnum_2"){
			$("#errtxt").trigger("click",["This number should represent one of the equal parts."]);
		}else{
			$("#errtxt").trigger("click",["This number should represent the total."]);
		}
		$("#anumpad").css('display','block');
		errorflag = false;
		//return false;
	}


		
	if(errorflag){
		if($("#thridnum_3").val()== "?" )	{
			$("#errorcondition").html('');
			$('#greyBox').empty();
			$('#greyBox').css('background-color','#DCDCDC');
			$('#partValue').css('width','80px');	
			$('#numberLine').empty();
				
		}
		
		if($("#thridnum_3").val()!= "?" ){
			$("#errorcondition").html('');
			$('#greyBox').empty();
				
			boxpart(thirdnum,'#DCDCDC');
				
			drawIntervalLine(thirdnum);
				
			$(".subclass").off('click',thirdshowcolorplt);
			$("#greyBox").off('click',thirdshowcolorplt);
		}
				
		
		if($("#thridnum_1").val()!= "?" && $("#thridnum_2").val()!= "?")	{
			$("#errorcondition").html('');
			var ans=Math.round(firstnum/secnum);
			$('#greyBox').empty();
			var innerwidth=numwid/ans;
			var minWidth=parseInt(innerwidth);
			var lineWidth=parseInt(innerwidth)-4;
			$('#partValue').css('width',lineWidth+'px');
			//for(var i=1;i<=ans;i++)
			//{
				dynamicdiv('greyBox','sub_1','subclass_1',minWidth+'px','80px','','0px solid #808000',1,1,'','','','','left','');
				$("#sub_1").css('background','#ACD372');
				$("#sub_1").on('click',thirdshowcolorplt);
				$("#greyBox").off('click',thirdshowcolorplt);
			//}
			$("#thridnum_3").unbind('click').unbind('focus').bind("click",bindunknowclick);
			$("#thridnum_3").css({'color':'#000000','background':'#ffffff'});
			$("#anumpad").css('display','none');
		}
		
		if($("#thridnum_1").val()!= "?" && $("#thridnum_3").val()!= "?" )	{
			$("#errorcondition").html('');
			var ans=Math.round(firstnum/thirdnum);
			$('#greyBox').empty();
			
			boxpart(thirdnum,'yellow');
			drawIntervalLine(thirdnum);
				
			$("#thridnum_2").unbind('click').unbind('focus').bind("click",bindunknowclick);
			$("#thridnum_2").css('color','#000000');
			$("#anumpad").css('display','none');
			
		}
		
		if($("#thridnum_2").val()!= "?" && $("#thridnum_3").val()!= "?" )	{
			$("#errorcondition").html('');
			var ans=secnum*thirdnum;
			$('#greyBox').empty();
			boxpart(thirdnum,'yellow');
			drawIntervalLine(thirdnum);

			$("#thridnum_1").unbind('click').unbind('focus').bind("click",bindunknowclick);
			$("#thridnum_1").css('color','#000000');
			$("#anumpad").css('display','none');
		}
	}

}


function dynamicdiv(maindiv,dydivid,clsname,wid,hei,txtal,border,opa,indexval,bgcolr,imgpth,bpos,bsize,csspos,pad){ 
	if ($("#"+dydivid).length == 0) { 
		var divid = document.getElementById(maindiv);
		var div = document.createElement('div');
		div.id     = dydivid;
		div.className =clsname;
		div.style.width  = wid;
		div.style.height = hei;
		div.style.textAlign=txtal;
		div.style.position = "relative";
		div.style.borderRight   = border;
		div.style.opacity= opa;
		div.style.zIndex= indexval;
		div.style.backgroundColor= bgcolr;
		div.style.backgroundImage=imgpth;

		div.style.backgroundPosition=bpos;
		div.style.backgroundSize=bsize;
		div.style.cssFloat=csspos;

		div.style.padding=pad;

		div.style.backgroundRepeat="no-repeat";
		divid.appendChild(div);
	}
}
function boxpart(lineDiv,childbgcolor){
	var innerwidth=numwid/lineDiv;
	var minWidth=Number(innerwidth);
	var lineWidth=parseInt(innerwidth)-2;
	$('#partValue').css('width',lineWidth+'px');
	var divisions=lineDiv;
	var nLine = $('#greyBox'), leftOffset = nLine.offset().left, temp;

	nLine.html('');
	var marginLeft = ((nLine.width() - $('.commonLine2').width() * (divisions + 1)) / divisions);

	for(var i=1;i<=lineDiv;i++)
	{
		var backimg='url("images/divtick.png")';
		if(i==1)
		{
		backimg='none';
		}
			
		nLine.append('<div id="sub_' + i + '" style="left:' + ((i * marginLeft)) + 'px" class="commonLine2"></div>');
		
		if (i == divisions) {
			$(".commonLine2:last-child").css("left", ((i * marginLeft) - $(".commonLine2:last-child").width()));
		}
		if(i==lineDiv)
		{
		$("#sub_"+i).css('display','none');
		}
	}
	$("#greyBox").css('background-color',childbgcolor);
	$("#greyBox").on('click',thirdshowcolorplt);
}
function drawIntervalLine(lineWidth){
	var nLine = $('#numberLine'), leftOffset = nLine.offset().left, temp;
	nLine.html('');
	var lastvalue=parseInt(lineWidth);//33;
	var divisions = 0;
	var minvalue=20;

	divisions=lastvalue;
	
	var marginLeft = ((nLine.width() - $('.commonLine1').width() * (divisions + 1)) / divisions);
	for (var i = 0; i < divisions + 1; i++) {
		
		temp=i;
		nLine.append('<div id="intervals_' + i + '" style="left:' + ((i * marginLeft)) + 'px" class="commonLine1"></div>');
		if((i%5 )==0 || lastvalue<=minvalue ){
			
			$("#intervals_"+ i ).css("height","20px");
			if(i!=0 && i!=divisions ){
				if ((temp + "").length == 1) {
					$('#intervals_' + i).append('<div id="text_' + i + '" class="text-property single-digit ">' + temp + '</div>');
				} else if ((temp + "").length == 2) {
					$('#intervals_' + i).append('<div id="text_' + i + '" class="text-property double-digit ">' + temp + '</div>');
				} else{
					$('#intervals_' + i).append('<div id="text_' + i + '" class="text-property tripple-digit ">' + temp + '</div>');
				}
			}
			
		}
	}
}




function thirdshowcolorplt(){
	if($("#anumpad").css('display')== 'none')
	{
		colorget = this.id;
		isVisible = $( "#colorpallate" ).is( ":visible" );
		if(!isVisible)
		{
			$("#colorpallate").css({'left':'150px','top':'168px'}).toggle(tcalfn);
		}
		$("#colorpallate > span").off('click');
		$("#colorpallate > span").on('click',function(){
			$("#"+colorget).css('background-color',$(this).css('background-color'));
			$("#"+colorget+"_color").val($("#"+colorget).css('background-color'));
			$("#colorpallate").hide();
			$(document).off('click');
		});
	}
}

