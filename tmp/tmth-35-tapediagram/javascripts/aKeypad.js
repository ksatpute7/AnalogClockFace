var boardkeys='';
var misnumidg='';
var lowerltg=0;
var upperltg=10;
var triggerevntg='focus';

function acreatenumpad(keys){
	boardkeys=keys;
	var anumpad = $("<div id=\"anumpad\" class=\"apadcss ui-draggable\" />"); 
	var anumpadcon = $("<div id=\"anumpadcon\" class=\"anumpadcon\"	 />");
	var absbtn = "<div id=\"absbtn\" class=\"sprite1\" />";
	var aclsbtn = "<div id=\"aclsbtn\" class=\"sprite1\" />";
	
	anumpadcon.append(absbtn);
	anumpadcon.append(aclsbtn);
	
	for(var i=0;i<keys.length;i++)	{
		var padDiv = document.createElement('div');
		padDiv.id='anumpad_' +i;
		padDiv.style.cssFloat="left";
		padDiv.innerHTML = keys[i];
		$(padDiv).addClass("akeyCss");
		anumpadcon.append(padDiv);
	}
	anumpad.append(anumpadcon);
	$("body").append(anumpad);
	$("#anumpad_9").addClass("aninepadCss");
	
	for(decval=0;decval<boardkeys.length;decval++){
		$("#anumpad_"+decval).unbind("mouseup").unbind("mousedown");
		$("#anumpad_"+decval).mouseup(function () {
			$(this).css('background-color','#8ac800');
		}).mousedown(function () {
			$(this).css('background-color','#c9ec8c');
			agetnumfromkey(misnumidg,this.id,lowerltg,upperltg);
		});
	}
	$("#absbtn").unbind("click").click(function (){aclearnumdiv(misnumidg);});
	$("#aclsbtn").unbind("click").click(function (){apassingenid(misnumidg);});	
}

function ashownumpad(misnumid,ptop,pleft,phei,lowerlt,upperlt,triggerevnt){
	tp=ptop+phei;lt=pleft;
	var padleft=Number(lt);
	var padtop=Number(tp);

	$("#anumpad").css('left',padleft+"px");
	$("#anumpad").css('top',padtop+"px");
	$("#anumpad").css('display','block');
	misnumidg=misnumid;
	lowerltg=lowerlt;
	upperltg=upperlt;
	triggerevntg = triggerevnt;
	
}

function agetnumfromkey(typedid,numpadid,llt,ult){
	var getnumber=$("#"+numpadid).html();
	var currentvaluetyped=$("#"+typedid).val()+getnumber;
	if(Number(currentvaluetyped)>=llt && Number(currentvaluetyped)<=ult){
		$("#"+typedid).val($("#"+typedid).val()+getnumber);
		$("#"+typedid).css('color','#000000');
	}else{
		$("#"+numpadid).css('background-color','#8ac800');
		$("#errtxt").trigger("click",["Please enter a value between "+llt + " and " +ult+ "."]);
	}
}

function aclearnumdiv(clickedbtnid){
	var input = $("#"+clickedbtnid).val();
	$("#"+clickedbtnid).val( input.substring(0, input.length - 1));
}


function apassingenid(currentdivid){
	$("#anumpad").css('display','none');
	$("#"+currentdivid).trigger(triggerevntg);
}