var idcount=0;
var rectTop;
var rectLeft;
var lineLeft;
var label,lable1;
var topposition=[["250px",14,35],["250px",14,35]];
var toppositionimg=[["250px",14,35],["250px",14,35]];
var toppositionmaximg=[["250px",50,250],["250px",50,250]];
var toprect='250px';
var getboxXoff,getboxYoff;
var getboxid,edit1,edit2;
var dummyimg='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABaCAYAAABzAJLvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggVCAISfMt54QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAQElEQVR42u3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8GOpGgABnzC42wAAAABJRU5ErkJggg==';
var savobjt={text1:''};
var getsavobtj={};
window.onload=function()
{
$("body").css("touch-action","none");
delmsgpopup();
$("<div/>",{id:'preview_wrapper',style:'position:absolute;width:100%;height:100%;background:rgba(0,0,0,0);left:0px;top:0px;display:none;z-index:9999'}).appendTo("body");
$("#titletext").on("keyup",function()
{
	savobjt.text1=$(this).val();
	
	$("#icon_1").removeClass('icoresetinactive').addClass('icoresetactive').bind('click',resetfunction);
	if($(this).val().length == 50)
	{
		$(this).blur();
		$("#alertwrap").show();
		$("#alerttext").html('You have exceeded the character limit. Please enter a maximum of 50 characters.');
	}
});
$("#drag_container").click(function(){$("#titletext").blur();});


$("#cls_alert,#alertwrap").unbind('click').bind('click',function(evt){
if(evt.target.id=="cls_alert" || evt.target.id=="alertwrap"){
	$('#alertwrap').hide();
}
});
$("<div/>",{id:'popup'}).appendTo("#contentholder");
$("<div/>",{id:'finish',class:'finishdeact'}).click('screenshot()').appendTo("#contentholder").unbind('click');

$("#popup").draggable({
	containment:".container",
	start:function(eve,ui)
	{
	$(".box").draggable('disable');
	},
	stop:function(eve,ui)
	{
	$(".box").draggable('enable');
	}
});
for(var j=0;j<=3;j++)
{
		var maincircleDiv = document.createElement('div');
		maincircleDiv.id="icon_"+j;
		maincircleDiv.style.cssFloat="left";
		var s = document.getElementById('icons_div');
		s.appendChild(maincircleDiv);
		$("#icon_"+j).addClass("mainCircleCss");//.addClass('rollcss');
}

//info icon
$("#icon_2").addClass('icoInfoMove').unbind('click').bind('click',function(){
	$("#callout").toggle();
});
$("#inst_cls").off('click').on('click',function(){this.blur();$("#callout").hide();});

//$("#icon_3").addClass('dropelt').addClass('opdeldeact');
$("#setting_icon").click(function()
{
	$("#callout").hide();
	$('.mainCircleCss').toggleClass('rollcss');
	$("#"+this.id).toggleClass('changeopacitysetting');
		if(event.target.id == 'setting_icon')
		{
			$(this).addClass('settingrotate');
			$( "#icons_div" ).toggle( "slide",function(){$("#setting_icon").removeClass('settingrotate');});
		}
});

$("#lineDiv").off('click').on("click",function(e)
{
	imagecreation=false;
	$("#popup").empty();
	$("#callout").hide();
	
	$("#linetext").hide();
	idcount=Object.keys(getsavobtj).length;	
	popupCreation(idcount);
	$("#popup,#popupwrapper").css('display','block');
	idcount++;
	lineLeft=Number(e.pageX - this.offsetLeft)+'px';
	rectTop=Number(e.clientY)+'px';
	rectLeft=Number(e.pageX - this.offsetLeft)+'px';
	shuffleinnerdata(topposition);
	
	if(lineLeft > 900 || rectLeft > 900)
	{
		lineLeft=975+'px';
		rectLeft=630+'px';
	}

});

$("#icon_1").addClass('icoresetinactive').unbind('click');
//initial call out
$("#setting_icon").toggleClass('changeopacitysetting');
$( "#icons_div" ).toggle("slide");
setTimeout(function(){$("#callout").show();},250);

// Retrive Saved State Start  
	eventBroker = _({}).extend(require('chaplin/lib/event_broker'));
	eventBroker.publishEvent("#fetch", { type : 'state' }, function(state) {
		if (state) {
			
			_.each(JSON.parse(state), function(value, key, list) {
			getsavobtj=value[0];
			savobjt=value[1];
			
			});

			
		}
	});
	// Retrive Saved State End 
	
eventBroker.subscribeEvent('#doSave', function(state) {
	    var state = {};
		var newsavearr={};
		var titleobt={};
		titleobt=jQuery.extend({},savobjt);
		newsavearr = jQuery.extend({},getsavobtj);	 
		var storageValue = [newsavearr,titleobt];
		state[0] = storageValue;
		$.each(newsavearr,function(index,value){
		//console.log(index);
		//console.log(value);
		});
	
	    
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
	
	
	
	
	
	
	$("#titletext").val(savobjt.text1);
	if(Object.keys(getsavobtj).length!=0)
	{
		$("#linetext").hide();
	}
	else 
	{
	$("#linetext").show();
	}
	$.each(getsavobtj,function(index,value)
	{

	if(value!=""){
	if(value.imgurl=="")
	{
	imagecreation=false;
	}
	else if(value.imgurl!="")
	{
	imagecreation=true;
	}
	draggable_DivCreation(index,value.lbltxt,value.desc,value.imgurl,value.imgwidth,value.imgheight,value.imgdeg,value.marginleft,value.margintop,value.circleleft,value.rectleft,value.recttop);
	idcount=index++;
	}
	});
};
	
function saveFunction() {
    eventBroker.publishEvent("#doSave");
}

function resetfunction(evt)
{
	$("#icon_1").addClass('icoresetinactive').removeClass('icoresetactive').unbind('click');
	$("#callout").hide();
	$("#linetext").show();
	savobjt={text1:''};
	getsavobtj={};
	//$("#icon_3").removeClass('opdel').addClass('opdeldeact');
		if(evt.target.id=='icon_1'){
			var current=$(this);
						current.addClass('icoResetMove');
						var to=setTimeout(function(){
						clearTimeout(to);
						current.removeClass('icoResetMove');
						},1000);
			$("#finish").addClass('finishdeact').removeClass('finish').unbind('click');
			imagecreation=false;
			idcount=0;
			getboxid=undefined;
			$("#titletext").blur().val('');
			$(".rectdiv,.circlediv,.emty,.emty1,.emty2,.line").remove();
			
		}
}


var imagecreation=false;
var lastfocusel=$('body');
function popupCreation(idcount1)
{
$("#delete_Div").css('display','none');
$("<div/>",{id:'popup_div'}).appendTo("#popup");
$("<div/>",{id:'label1',class:'lableclass',text:'Label'}).appendTo("#popup");
$("<input/>",{id:'lable_text_'+idcount1,class:'lable_text lbl',type:'textbox',maxlength:'20', autocorrect:"off", autocapitalize:"off", spellcheck:"false"}).appendTo("#popup");
$("<div/>",{id:'label2',class:'lableclass',text:"Description"}).appendTo("#popup");
$("<textarea/>",{id:'lable_text1_'+idcount1,class:'lable_text1 lbl',row:7,type:'textbox',maxlength:'200',style:"resize:none;", autocorrect:"off", autocapitalize:"off", spellcheck:"false"}).appendTo("#popup");
$("<div/>",{id:'label3',class:'lableclass',text:'Optional Image'}).appendTo("#popup");
$("<div/>",{id:'dummy_choose_btn'}).html('Choose Image').click(function(){$("#choose_btn").trigger('click');}).appendTo("#popup");
$("<input/>",{id:'choose_btn',type:"file",multiple:'multiple'}).appendTo("#popup");
$("<button/>",{id:'del_btn',text:'Delete Image',disabled:'true'}).appendTo("#popup");
$("<br/>").appendTo("#popup");
$("<br/>").appendTo("#popup");
$("<button/>",{id:'corrt_btn'}).appendTo("#popup");
$("<button/>",{id:'trash_btn'}).appendTo("#popup");
$("<div/>",{id:'close_btn',text:"X"}).appendTo("#popup");
$("<div/>",{id:'image_preview'}).appendTo("#popup");
$("<div/>",{id:'previewhold'}).appendTo("#image_preview");
$("<div/>",{id:'labelchange_1'}).appendTo("#image_preview");
$("<textarea/>",{id:'labelchange_2','class':'labelchange2',style:"resize:none;",'readonly':'readonly',disabled:'true'}).appendTo("#image_preview");
$("<div/>",{id:'imgPopup_replica',style:'position:absolute;width:120px;height:90px;'}).appendTo("#previewhold");
$("<img/>",{id:'previewimg',src:'',width:'100px',style:"text-align:center;position:absolute;"}).appendTo("#imgPopup_replica");
$("#preview_wrapper").empty();
$("<div/>",{id:"imgPopup",class:"mask",style:"position:absolute;width:400px; height:300px; left:0%;right:0%;margin:auto; top:25%; display:none;z-index:6000;border:2px solid #fff; border-radius:5px;background: #fff;"}).appendTo("#preview_wrapper");
$('.lbl').unbind("click").bind("click",function(evt) {
lastfocusel=$(this);
$(this).focus();


if($(this).val()!== "")
	{
	var getid=$(this).attr('id');
	$("#"+getid).off('mousedown touchdown').on("mousedown touchdown" , function (e) {
	setCaretPosition(this, $(this).val().length);
	});
	}
});
$("#trash_btn").off('click').on('click',function(event){
		if(event.target.id=='trash_btn')
		{
			fntrashremove(idcount1);
			idcount--;
			
		}
	});
$("#close_btn,#wrg_btn").unbind('click').bind('click',function(e)
{

if(e.target.id=='close_btn' || e.target.id=='wrg_btn'){
$('.box').draggable( 'enable' );
$("#popup,#popupwrapper,#imgPopup,#preview_wrapper,#wrapper").css('display','none');
idcount--;
}
});

$("#popupwrapper").unbind('click').bind('click',function(ev)
{
	if(lastfocusel.hasClass("lbl")) 
		{
			lastfocusel=$(this);
			//console.log(lastfocusel);
			return;
		}
		
		$("#popup,#popupwrapper,#imgPopup,#preview_wrapper,#wrapper").css('display','none');
		
		
		if($(".rectdiv").length==0)
		{
			$("#linetext").show();
		}	
	
});


$("#preview_wrapper,#preview_cancel").unbind('click').bind('click',function(e)
{
if(e.target.id=='preview_wrapper'  || e.target.id=='preview_cancel'){
$("#preview_wrapper,#imgPopup").css('display','none');
//$("#imgPopup_replica > img").removeAttr('src');
imagecreation=false;
$("#previewimg").attr('src','');
}
});

$("#choose_btn").click(function(ev)
{
if(ev.target.id="choose_btn")
{
	$("#choose_btn").on("change",gotPic);
}
});
$("#del_btn").off('click').on('click',function()
{
	$("#previewimg").attr('src',dummyimg);
	imagecreation=false;
	$("#del_btn").attr({'disabled':true});
});

$("#lable_text_"+idcount+",#lable_text1_"+idcount1).on("keyup touchup",function()
{
$("#labelchange_1").html($("#lable_text_"+idcount1).val());
$("#labelchange_2").val($("#lable_text1_"+idcount1).val());
});

$("#lable_text1_"+idcount1).on("keypress",function()
{

if($(this).val().length == 200)
{
$("#alertwrap").show();
$(this).blur();
$("#alerttext").html('You have exceeded the character limit. Please enter a maximum of 200 characters.');
}

});

$("#lable_text_"+idcount1).on("keypress",function()
{

if($(this).val().length == 20)
{
$("#alertwrap").show();
$(this).blur();
$("#alerttext").html('You have exceeded the character limit. Please enter a maximum of 20 characters.');
}

});


$("#corrt_btn").click(function()
{
	$("#lable_text_"+idcount1+",#lable_text1_"+idcount1).blur();
	if($('.lable_text').val()=="" ){
	$("#alertwrap").show();
	$("#alerttext").html('Please enter a label and an optional description to create an event. ');
	}
	
	else
	{
	label=$("#lable_text_"+idcount1).val();
	lable1=$("#lable_text1_"+idcount1).val();
	var imgsrc=$("#previewimg").attr('src')
	var imgwidth=$("#previewimg").width()+'px';
	var imgheight=$("#previewimg").height()+'px';
	var rotangle=rotating1;
	var imgmarginleft=$("#previewimg").css('margin-left');
	var imgmargintop=$("#previewimg").css('margin-top');
	//alert("na varen");
	draggable_DivCreation(idcount1,label,lable1,imgsrc,imgwidth,imgheight,rotangle,imgmarginleft,imgmargintop,lineLeft,rectLeft,rectTop);
	}
});
}

function draggable_DivCreation(idcount2,labeltxt,shortdes,img1src,img1width,img1height,rot1angle,img1marginleft,img1margintop,left,rleft,rtop)
{
$("#popup,#popupwrapper").css('display','none');
$("#finish").removeClass('finishdeact').addClass('finish').unbind('click').bind('click',screenshot);
$("#icon_1").removeClass('icoresetinactive').addClass('icoresetactive').bind('click',resetfunction);
if(idcount2!= getboxid )
{

$("<div/>",{id:'box1_'+idcount2,class:'rectdiv box',style:"position:absolute;word-wrap: break-word;text-align:center;left:"+rleft+";top:"+rtop+";"}).appendTo("#contentholder");
$("<div/>",{id:'innerlabel_'+idcount2,class:"labelinner_0",name:"ta",text:labeltxt,style:"z-index:2;"}).appendTo("#box1_"+idcount2);
$("<textarea/>",{id:'innerdes_'+idcount2,class:'labelinner_1',wrap:'hard',style:"position:relative;text-align:center;color:black;text-fill-color:#000;opacity:1;-webkit-text-fill-color:#000;border:none;background:rgba(0,0,0,0);resize:none;z-index:2;",text:shortdes,'readonly':'readonly',disabled:'true'}).appendTo("#box1_"+idcount2);
$("#innerdes_"+idcount2).height($("#innerdes_"+idcount2).prop('scrollHeight'));
if(imagecreation==true)
{
	$("<div/>",{id:'innerimghold_'+idcount2,class:'imghold',style:"position: relative;text-align: center;overflow: hidden;width: 120px;height: 90px;left: 0px;top: 0px;margin: auto;right: 0px;border:1px solid black;"}).appendTo("#box1_"+idcount2);
	$("<div/>",{id:'innerimg_'+idcount2,class:'',style:"position:absolute;text-align:center;"}).appendTo("#innerimghold_"+idcount2);
	$("<img/>",{id:'selectimg_'+idcount2,class:'imgget',width:'120px',height:'90px',style:"position:absolute;"}).appendTo("#innerimg_"+idcount2);
	$("#selectimg_"+idcount2).attr('src',img1src);
	$("#selectimg_"+idcount2).css({'width':img1width,'height':img1height});
	$("#selectimg_"+idcount2).css({'-webkit-transform':"rotate("+rot1angle+"deg)"});
	$("#innerimg_"+idcount2).css({'margin-left':img1marginleft,'margin-top':img1margintop});
}
$("<div/>",{id:'empty_'+idcount2,class:'emty',style:"position:absolute;margin-bottom:100px;"}).appendTo("#contentholder");
$("<div/>",{id:'box2_'+idcount2,class:'circlediv',style:"position:absolute;left:"+left+";top:345px;"}).appendTo("#contentholder");
$("<div/>",{id:'empty_'+idcount2,class:'emty1',style:"position:absolute;margin-bottom:100px;"}).appendTo("#contentholder");
$("<div/>",{id:'linedivvv_'+idcount2,class:"line"}).appendTo("#contentholder");
$("<div/>",{id:'empty_'+idcount2,class:'emty2',style:"position:absolute;margin-bottom:100px;"}).appendTo("#contentholder");

$("<div/>",{id:'edit_'+idcount2,class:"editbox",style:""}).appendTo("#box1_"+idcount2);
 
//fnlinedraw(idcount2);
//alert(idcount2);
fnactivitydrag(idcount2);

if(getsavobtj[idcount2]==undefined){
getsavobtj[idcount2]={};//labeltxt,shortdes,left,rleft,rtop
getsavobtj[idcount2]['lbltxt']=labeltxt;
getsavobtj[idcount2]['desc']=shortdes;
getsavobtj[idcount2]['imgurl']=$("#previewimg").attr('src');
getsavobtj[idcount2]['imgwidth']=$("#previewimg").width();
getsavobtj[idcount2]['imgheight']=$("#previewimg").height();
getsavobtj[idcount2]['imgdeg']=rotating1;
getsavobtj[idcount2]['marginleft']=$("#previewimg").css('margin-left');
getsavobtj[idcount2]['margintop']=$("#previewimg").css('margin-top');
getsavobtj[idcount2]['rectleft']=$("#box1_"+idcount2).css('left');
getsavobtj[idcount2]['recttop']=$("#box1_"+idcount2).css('top');
getsavobtj[idcount2]['circleleft']=$("#box2_"+idcount2).css('left');
}
//console.log(getsavobtj);
}
else
{
$("#box1_"+idcount2).empty();

$("<div/>",{id:'innerlabel_'+idcount2,class:"labelinner_0",name:"ta",text:labeltxt,style:"z-index:2;"}).appendTo("#box1_"+idcount2);
$("<textarea/>",{id:'innerdes_'+idcount2,class:'labelinner_1',wrap:'hard',style:"position:relative;text-align:center;color:black;text-fill-color:#000;opacity:1;-webkit-text-fill-color:#000;border:none;background:rgba(0,0,0,0);resize:none;z-index:2;",text:shortdes,'readonly':'readonly',disabled:'true'}).appendTo("#box1_"+idcount2);
$("#innerdes_"+idcount2).height($("#innerdes_"+idcount2).prop('scrollHeight'));
$("<div/>",{id:'edit_'+idcount2,class:"editbox",style:""}).appendTo("#box1_"+idcount2);
if(imagecreation==false)
{
$("#innerimghold_"+idcount2).remove();
}

if(imagecreation==true)
{
if($("#innerimghold_"+idcount2).length==0)
{
$("<div/>",{id:'innerimghold_'+idcount2,class:'imghold',style:"position: relative;text-align: center;overflow: hidden;width: 120px;height: 90px;left: 0px;top: 0px;margin: auto;right: 0px;border:1px solid black;"}).appendTo("#box1_"+idcount2);
$("<div/>",{id:'innerimg_'+idcount2,class:'',style:"position:absolute;text-align:center;"}).appendTo("#innerimghold_"+idcount2);
$("<img/>",{id:'selectimg_'+idcount2,class:'imgget',width:'120px',height:'90px',style:"position:absolute;"}).appendTo("#innerimg_"+idcount2);
$("#selectimg_"+idcount2).attr('src',$("#previewimg").attr('src'));
$("#selectimg_"+idcount2).css({'width':$("#previewimg").width()+'px','height':$("#previewimg").height()+'px'});
$("#innerimg_"+idcount2).css({'margin-left':$("#previewimg").css('margin-left'),'margin-top':$("#previewimg").css('margin-top')});
$("#selectimg_"+idcount2).css({'-webkit-transform':"rotate("+rotating1+"deg)"});
}
$("#selectimg_"+idcount2).attr('src',$("#previewimg").attr('src'));
$("#selectimg_"+idcount2).css({'width':$("#previewimg").width()+'px','height':$("#previewimg").height()+'px'});
$("#innerimg_"+idcount2).css({'margin-left':$("#previewimg").css('margin-left'),'margin-top':$("#previewimg").css('margin-top')});
$("#selectimg_"+idcount2).css({'-webkit-transform':"rotate("+rotating1+"deg)"});
}
}
fndraggable();
$('.box').draggable('enable');
fneditBox();
}

function fneditBox()
{
$(".editbox").off('click').on('click',function()
{
			getboxid =$(this).attr("id").split("_")[1];
			event.preventDefault();
			event.stopPropagation();
			event.stopImmediatePropagation();
			$('.box').draggable('disable');
			$("#popup").empty();
			$("#popup,#popupwrapper").css('display','block');
			popupCreation(getboxid);
			$('.lable_text1,.lable_text').val('');
			$("#lable_text_"+getboxid).val($("#innerlabel_"+getboxid).html());
			$("#lable_text1_"+getboxid).val($("#innerdes_"+getboxid).val());
			$("#labelchange_1").html($("#innerlabel_"+getboxid).html());
			$("#labelchange_2").val($("#innerdes_"+getboxid).val());
			
			if($("#selectimg_"+getboxid).attr('src')!=undefined)
			{
			imagecreation=true;
			}
			else 
			{
			imagecreation=false;
			}
			if(imagecreation==true)
			{
				$("#previewimg").attr('src',$("#selectimg_"+getboxid).attr('src'));
				$("#del_btn").attr({'disabled':false});
				$("#previewimg").css({'width':$("#selectimg_"+getboxid).width()+'px','height':$("#selectimg_"+getboxid).height()+'px'});
				$("#previewimg").css({'margin-left':$("#selectimg_"+getboxid).css('margin-left'),'margin-top':$("#selectimg_"+getboxid).css('margin-top')});
				$("#previewimg").css({'-webkit-transform':"rotate("+rotating1+"deg)"});
				$("#previewimg").unbind('click').bind('click',function(){
				$("#imgPopup").empty();
				$("<img/>",{id:"photoHolder",style:"position:absolute;width:400px;"}).appendTo('#imgPopup').attr('src','');
				$("<div/>",{id:"okbutton",style:"position: absolute;width: 48px;height: 30px;left:354px;top: 270px;background: #CCC;text-align: center;line-height: 34px;font-weight: bold;border-top-left-radius: 3px;border-top-right-radius: 3px;",text:"OK"}).appendTo('#imgPopup');
				$("<div/>",{id:"preview_cancel",style:"position: absolute;width: 65px;height: 30px;left:287px;top: 270px;background: #CCC;text-align: center;line-height: 34px;font-weight: bold;border-top-left-radius: 3px;border-top-right-radius: 3px;",text:"Cancel"}).appendTo('#imgPopup');
				$("#imgPopup,#preview_wrapper").css('display','block');
				
					
				/*makeChangeSmImg($("#previewimg").css('margin-left'),$("#previewimg").css('margin-top'));*/
				var preview_widthpercen = ($("#selectimg_"+getboxid).width() * 100 / 120);
				var previewhold_width = (preview_widthpercen * 400 / 100);
				var preview_heightpercen = ($("#selectimg_"+getboxid).height() * 100 / 90);
				var previewhold_height = (preview_heightpercen * 300 / 100);
				var previewsmall_leftpercen = (Number($("#previewimg").css('margin-left').split("px")[0]) * 100 / 120);
                var photoholder_marginleft = (previewsmall_leftpercen * 400 / 100);
				var previewsmall_toppercen = (Number($("#previewimg").css('margin-top').split("px")[0]) * 100 / 90);
				var photoholder_margintop = (previewsmall_toppercen * 300 / 100);
				$("#photoHolder").css({'width':previewhold_width+'px','margin-left':+photoholder_marginleft+'px','margin-top':+photoholder_margintop+'px','height':previewhold_height+'px',"-webkit-transform":"rotate("+rotating1+"deg)"}).attr('src',$("#selectimg_"+getboxid).attr("src"));
				
				esRePosition();
				zoomimg();
				
				$("#okbutton").click(function(){
				$("#imgPopup,#preview_wrapper").hide();
				$("#del_btn").attr({'disabled':false});
				});
					$("#del_btn").off('click').on('click',function()
					{
					$("#previewimg").attr('src',dummyimg);
					imagecreation=false;
					$("#del_btn").attr({'disabled':true});
					});
				});
			}
			$("#corrt_btn").click(function()
			{
				$(".lable_text,.lable_text1").blur();
				edit1=$("#lable_text_"+getboxid).val();
				edit2=$("#lable_text1_"+getboxid).val();
				var imgsrc=$("#previewimg").attr('src')
				var imgwidth=$("#previewimg").width()+'px';
				var imgheight=$("#previewimg").height()+'px';
				var rotangle=rotating1;
				var imgmarginleft=$("#previewimg").css('margin-left');
				var imgmargintop=$("#previewimg").css('margin-top');
				
				
				//if(getsavobtj[idcount2]==undefined){
				getsavobtj[getboxid]={};//labeltxt,shortdes,left,rleft,rtop
				getsavobtj[getboxid]['lbltxt']=edit1;
				getsavobtj[getboxid]['desc']=edit2;
				if(imagecreation==true)
				{
				getsavobtj[getboxid]['imgurl']=$("#previewimg").attr('src');
				getsavobtj[getboxid]['imgwidth']=$("#previewimg").width();
				getsavobtj[getboxid]['imgheight']=$("#previewimg").height();
				getsavobtj[getboxid]['imgdeg']=rotating1;
				getsavobtj[getboxid]['marginleft']=$("#previewimg").css('margin-left');
				getsavobtj[getboxid]['margintop']=$("#previewimg").css('margin-top');
				}
				else if(imagecreation==false)
				{
				getsavobtj[getboxid]['imgurl']='';
				getsavobtj[getboxid]['imgwidth']='';
				getsavobtj[getboxid]['imgheight']='';
				getsavobtj[getboxid]['imgdeg']='';
				getsavobtj[getboxid]['marginleft']='';
				getsavobtj[getboxid]['margintop']='';
				}
				getsavobtj[getboxid]['rectleft']=$("#box1_"+getboxid).css('left');
				getsavobtj[getboxid]['recttop']=$("#box1_"+getboxid).css('top');
				getsavobtj[getboxid]['circleleft']=$("#box2_"+getboxid).css('left');
				//}
				
				draggable_DivCreation(getboxid,edit1,edit2,imgsrc,imgwidth,imgheight,rotangle,imgmarginleft,imgmargintop,lineLeft,rectLeft,rectTop);
				$("#popup,#popupwrapper,#imgPopup,#preview_wrapper,#wrapper").css('display','none');
			});
			
			$("#trash_btn").off('click').on('click',function(event){
				if(event.target.id=='trash_btn')
				{
					fntrashremove(getboxid);
				}
			});
});

}


function onmouseDown()
	{
		
		$('#preview_wrapper').off('mouseup touchend').on('mouseup touchend',onmouseUp);
		
	}

function onmouseUp()
{
	if(!$('#photoHolder').hasClass('ui-draggable'))
	{
		esRePosition();

	}
	$('#preview_wrapper').off('mouseup touchend');
}

function fntrashremove(geteltid)
{

if($("#innerlabel_"+geteltid).length==0)
{
	$(".lbl").blur();
	$("#popup,#popupwrapper").css('display','none');
	$("#linetext").show();
}
else if($("#innerlabel_"+geteltid).length>0)
{

$("#wrapper").css('display','block');
$("#delete_Div").css({'display':'block'}).addClass('topdelet');
$("#cancle_Div").unbind('click').bind('click',cancel=function(){$("#wrapper,#delete_Div").hide();
$("#popupwrapper").show();});
$("#exit_Div").unbind('click').bind('click',function()
{
	$("#box1_"+geteltid+",#box2_"+geteltid+",#empty_"+geteltid+",#linedivvv_"+geteltid).remove();
	if(getsavobtj[geteltid]!=undefined)
	{
	getsavobtj[geteltid]='';
	
	}
	
	if($('.rectdiv').length==0)
	{
	$("#linetext").show();
	}
	
	$("#delete_Div,#popup,#wrapper,#popupwrapper").css('display','none');
	$(".box").draggable('enable');
});
}
	if($(".rectdiv").length==0)
	{
		$("#linetext").show();
	}
	else if($('.rectdiv').length!=0)
	{
	$("#linetext").hide();
	}
}
var clickcancel;
var x1,x2,y1,y2=0;
var hypotenuse,angle;
var checkchild=true;

var dragid;
function fndraggable()
{

$(".box").draggable({ delay: 0, distance: 0 ,
				containment:"#drag_container",
				handle:".labelinner_1,.labelinner_0,.imghold,.box,ta",
				cancel: '',
				drag: function(event, ui){
				dragid=$(this).attr('id').split("_")[1];
				
				fnactivitydrag(dragid) ;
				
                
                 },
				 stop:function(event,ui)
				 {
				 dragid=$(this).attr('id').split("_")[1];
				 fnactivitydrag(dragid) ;
				 
				 getsavobtj[dragid]['rectleft']=ui.position.left+'px';//$("#box1_"+dragid).css('left');
				 getsavobtj[dragid]['recttop']=ui.position.top+'px';//$("#box1_"+dragid).css('top');
				
				 }
            });
			 $(".circlediv").draggable({ delay: 0, distance: 0 ,axis:'x',
				containment:"#lineDiv",
                drag: function(event, ui){
				dragid=$(this).attr('id').split("_")[1];
                fnactivitydrag(dragid);
                },
				stop:function(event,ui)
				{
				dragid=$(this).attr('id').split("_")[1];
				fnactivitydrag(dragid) ;
				getsavobtj[dragid]['circleleft']=$("#box2_"+dragid).css('left');
				getsavobtj[dragid]['circletop']=$("#box2_"+dragid).css('top');
				
				}
            });
			fndeletedrop();
}

function fnactivitydrag(data)
{
					var boxCenterX1Offset = $("#box1_"+data).width()/2;
					var boxCenterY1Offset =$("#box1_"+data).height()/2; 
					var boxCenterX2Offset=12;
					var boxCenterY2Offset=12;
					var x1 = $("#box1_"+data).offset().left+ boxCenterX1Offset;
					var x2 = $("#box2_"+data).offset().left+ boxCenterX2Offset;
					var y1 = $("#box1_"+data).offset().top + boxCenterY1Offset;
					var y2 = $("#box2_"+data).offset().top + boxCenterY2Offset;
					var hypotenuse = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
                    var angle = Math.atan2((y1-y2), (x1-x2)) *  (180/Math.PI);
                    if(angle >= 90 && angle < 180){
                        y1 = y1 - (y1-y2);
                    }
                    if(angle > 0 && angle < 90){
                        x1 = x1 - (x1-x2);
                        y1 = y1 - (y1-y2);
                    }
                    if(angle <= 0 && angle > -90){
                        x1 = x1 - (x1-x2);
                    }
 
                    $("#linedivvv_"+data).queue(function(){
                        $(this).width(hypotenuse);
                        $(this).dequeue();
                    }).queue(function(){
                        $(this).rotate(angle);
                        $(this).dequeue();
						}).queue(function(){
                        $(this).offset({top: y1, left: x1});
                        $(this).dequeue();
                    }).queue(function(){
                        $(this).offset({top: y1, left: x1});
                        $(this).dequeue();
                    });
}

var droppableid;
function fndeletedrop()
{
$( ".dropelt" ).droppable({
	  tolerance: "touch",
	  accept:".box",
      drop: function( event, ui ) {
	  event.preventDefault();
        $("#wrapper,#delete_Div").show();
		$("#delete_Div").removeClass('topdelet');
		$(".labelinner_1,.labelinner_0,.imghold,.box").bind('touchend',function(e){e.preventDefault();});
		$("#exit_Div").click(function()
		{ 
			var deletid=$(ui.draggable).attr('id').split("_")[1];
			$(".box").draggable('enable');
			$("#box1_"+deletid+",#box2_"+deletid+",#empty_"+deletid+",#linedivvv_"+deletid).remove();
			$("#"+event.target.id).addClass('opdel').removeClass('deletechange');
			$("#wrapper,#delete_Div").hide();
			if($(".box").length==0)
			{
			$("#icon_1").addClass('icoresetinactive').removeClass('icoresetactive').unbind('click');		
			$("#finish").addClass('finishdeact').removeClass('finish').unbind('click');
			}
		
		});
		$("#cancle_Div").unbind('click').bind('click',dropcancel=function(){$("#wrapper,#delete_Div").hide()});
		
      },
	  over: function( event, ui ) {
		  $(this).removeClass('opdel').addClass('deletechange');
		  droppableid=$(ui.draggable).attr('id');
		  $("#"+droppableid).css('opacity','0.5');
		  $(".labelinner_1,.labelinner_0,.imghold,.box").bind('touchend',function(e){e.preventDefault();});
		  $("#wrapper,#delete_Div").show();
		},
	  out:function(event,ui)
	  {
		  $(this).addClass('opdel').removeClass('deletechange');
		  $("#"+droppableid).css('opacity','1');
	  }
	  });
}
var dropcancel;
function delmsgpopup()
{
$("#popup").toggle();
$("<div/>",{id:"delete_Div",style:"position:absolute; width:350px;height:100px;display:none;"}).appendTo("#wrapper");
$("<div/>",{id:"text_div",style:"",text:"Are you sure you want to delete this event?"}).appendTo("#delete_Div");
$("<div/>",{id:"close_delete",style:"position:absolute;right:0px;top:0px;width:50px;height:30px;border:0px solid;font-size:22px;color:#999;text-align:center;",text:'X'}).appendTo("#delete_Div");
$("<input/>",{id:"cancle_Div",style:"",value:"NO",type:"button"}).appendTo("#delete_Div");
$("<input/>",{id:"exit_Div",style:"",value:"YES",type:"button"}).appendTo("#delete_Div");
$("#close_delete").unbind('click').bind('click',function(ent){if(ent.target.id=="close_delete"){
$("#delete_Div,#wrapper").hide();
}})
}

function shuffleinnerdata(o)
{
	o.sort(function() { return 0.5 - Math.random() });
	return o;
}
var calculatedheight;
function gotPic(event) {

		$("#imgPopup").empty();
		$("<img/>",{id:"photoHolder",style:"position:absolute;",width:"400"}).appendTo('#imgPopup').css('src','');
		$("<div/>",{id:"okbutton",style:"position: absolute;width: 48px;height: 30px;left:354px;top: 270px;background: #CCC;text-align: center;line-height: 34px;font-weight: bold;border-top-left-radius: 3px;border-top-right-radius: 3px;",text:"OK"}).appendTo('#imgPopup');
		$("<div/>",{id:"preview_cancel",style:"position: absolute;width: 65px;height: 30px;left:287px;top: 270px;background: #CCC;text-align: center;line-height: 34px;font-weight: bold;border-top-left-radius: 3px;border-top-right-radius: 3px;",text:"Cancel"}).appendTo('#imgPopup');

       if(event.target.files.length == 1 && event.target.files[0].type.indexOf("image/") == 0) {
	    imagecreation=true;
        var file    = event.target.files[0];
	    var reader  = new FileReader();
	    reader.onload = function () {
		var image = new Image();
		image.src = reader.result;
		image.onload = function() {
		
		$("#photoHolder").height((image.height/image.width)*400);
		$("#previewimg").css({'margin-left':'0px','margin-top':'0px','width':'120px'});
		$("#previewimg").height((image.height/image.width)*120).width(120);
		
		calculatedheight=(image.height/image.width)*400;
		};
		$("#imgPopup,#preview_wrapper").css('display','block');
		$("#photoHolder").attr('src',reader.result).css({"-webkit-transform":"rotate(0deg)"});
		$("#previewimg").attr('src',reader.result);
		}
	    
	    if (file) {
		reader.readAsDataURL(file);
	      } else {
		 
		$("#photoHolder").attr('src',' data:image/;base64');
		$("#previewimg").attr('src',' data:image/;base64') 	
	      }
		 
	   
        }
		else if(event.target.files.length >1)
		{
		
		$("#alertwrap").show();
		$("#alerttext").html('Please select only one image to upload.');
		
		}
		
		$('#photoHolder').off('mousedown touchstart').on('mousedown touchstart',onmouseDown);
		esRePosition();
		zoomimg();
		
		
		$("#okbutton").click(function(){
		$("#imgPopup,#preview_wrapper").hide();
		$("#del_btn").attr({'disabled':false});
		
		});
	}

	
	
/*Function for Image Zoom*/
function esRePosition()
{
$("#photoHolder").draggable({
start:function(e,ui){
	
		if(e.pageX <= $('#photoHolder').parent().offset().left || e.pageX >= Number($('#photoHolder').parent().offset().left+$('#photoHolder').parent().width()) || e.pageY <= $('#photoHolder').parent().offset().top || e.pageY >= Number($('#photoHolder').parent().offset().top+$('#photoHolder').parent().height()))
				{
					$('#photoHolder').draggable('destroy');
				}
	},

stop: function (event, ui) { 
						makeChangeSmImg(ui.position.left,ui.position.top);
                      },
drag: function (event, ui) {
                      
					   var photoholder_left=ui.position.left;
					   var photoholder_top=ui.position.top;
					   
					   if(event.pageX <= $('#photoHolder').parent().offset().left || event.pageX >= Number($('#photoHolder').parent().offset().left+$('#photoHolder').parent().width()) || event.pageY <= $('#photoHolder').parent().offset().top || event.pageY >= Number($('#photoHolder').parent().offset().top+$('#photoHolder').parent().height()))
						{
							makeChangeSmImg(ui.position.left,ui.position.top);
							$('#photoHolder').draggable('destroy');
						}
						
},
});
}


function makeChangeSmImg(Lft,Tp)
{
	var photoholder_left=Lft;
	var photoholder_top=Tp;
	var photoholder_leftpercen = (photoholder_left * 100 / 400);
	var newphotoholder_marginleft = (photoholder_leftpercen * 120 / 100);
	var photoholder_toppercen = (photoholder_top * 100 / 300);
	var newphotoholder_margintop = (photoholder_toppercen * 90 / 100);
	if (newphotoholder_marginleft*0.5< 60|| 
	newphotoholder_margintop*0.5 <-(45)) {
		  $("#previewimg").css({"margin-top":newphotoholder_margintop+"px","margin-left":newphotoholder_marginleft+"px"});}
}



var angle=0;
var rotating1 = 0;
var altwidth1,altheight1;
function zoomimg()
{
			dojo.addOnLoad(function(){
				var nodes = document.getElementById('photoHolder');
				nodes.addEventListener("gesturestart", gesture);
				nodes.addEventListener("gesturechange", gesturechange);
				nodes.addEventListener("gestureend", gestureend);
				var dragging = false;
				var sizing = false;
				var rotating = 0;
				var altwidth,altheight;
				
				function gesture(e){
					var node = e.target;
					sizing = [$('#photoHolder').width(), $('#photoHolder').height()];
				}

				function gesturechange(e){
				if(sizing){
						var node = e.target;
						altwidth=Math.min(sizing[0] * e.scale, 3200);
						altheight=Math.min(sizing[1] * e.scale, 2400);
						altwidth1=altwidth;
						 altheight1=altheight;
						dojo.style(node, {
							width: altwidth + "px",
							height: altheight + "px",
							webkitTransform: "rotate(" + ((rotating + e.rotation) % 360) + "deg)"
						});
						}
				}

				function gestureend(e){
					sizing = false;
					rotating = (rotating + e.rotation) % 360;
					rotating1=rotating;
					var photo_h = $("#photoHolder").height();
					var photo_w = $("#photoHolder").width();
					var photoholder_widthpercen = (altwidth1 * 100 / 400);
					var preview_width = (photoholder_widthpercen * 120 / 100);
					var photoholder_heightpercen = (altheight1 * 100 / 300);
					var preview_height = (photoholder_heightpercen * 90 / 100);
					$("#previewimg").css({'width':preview_width+'px',
					'height':preview_height+'px',
					"-webkit-transform":"rotate("+rotating+"deg)"});
					
				}

				
			});
}


function setCaretPosition(ctrl, pos){
if(ctrl.setSelectionRange)
{
ctrl.focus();
ctrl.setSelectionRange(pos,pos);
}
else if (ctrl.createTextRange) {
var range = ctrl.createTextRange();
range.collapse(true);
range.moveEnd('character', pos);
range.moveStart('character', pos);
range.select();
}
}
/*ScreenShot*/
function screenshot()
{
	$("#contentholder1,#setting_icon").toggle();
		if($("#contentholder1").css('display')=='block')
		{
			$('.mainCircleCss,.editbox,#callout').css('display','none');
			$('#callout').hide();
			
		}
		else
		{
			$('.mainCircleCss,.editbox').css('display','block');
		}
	$(this).toggleClass('back finish');
}
