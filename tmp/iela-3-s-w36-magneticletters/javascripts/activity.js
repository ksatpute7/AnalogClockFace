var globalArray=new Array();
globalArray=[["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],["","","","1", "2", "3", "4", "5", "6", "7", "8", "9","0","","","","+" ,"&ndash;" ,"&#215;","&#247;","=" ,">" ,"&#8805;" ,"<" ,"&#8804;","&mdash;","(",")","[","]","$","&#162;"],[".","?","!",",","'",";",":", "&ndash;", "(" ,")" ,"[" ,"]" ,"$" ,"&#162;" ,"%","&#9679;"]];
var vowels=new Array();
vowels=[["a","e","i","o","u"],["A","E","I","O","U"]];
var widtharray=new Array();
widtharray=[806,806,992,550];
var buttontext=new Array();
buttontext=["abc","ABC","123","?!;"];
var fl = false;
var flinsdrp;
var zind = 0;
window.onload=function init()
{
for( var i=3;i>=0;i--)
{
$( "<div/>", {"id":"boxHolder_"+i,"class":"boxHolder","align": "center", "style":"position:absolute;width:"+widtharray[i]+"px;left:100px;left:-webkit-calc(50% - "+(widtharray[i]/2)+"px);left:-moz-calc(50% - "+(widtharray[i]/2)+"px);left:calc(50% - "+(widtharray[i]/2)+"px); bottom:90px; border:0px solid white; height:110px;"}).insertAfter( "#whiteBoard" );
}
ButtonCreation(globalArray[0].length,globalArray[0],0);
dynamicdiv("symButton","buttonsym","symclass","4");
$(".symclass_0").css({"background-color":"white","color":"#4470ff"});
for(var j=1;j<=3;j++){
	$(".symclass_"+j).addClass('fillcolor');
}
$(".boxHolder").droppable({drop:function(event,ui){if($(ui.draggable).hasClass("dropped")){$(ui.draggable).hide().remove();}}});
$("#symButton").droppable({drop:function(event,ui){if($(ui.draggable).hasClass("dropped")){$(ui.draggable).hide().remove();}}});
enabledropOption();
 $(function() {
      $("#whiteBoard").swipe( {
        swipeDown:function(event, direction, distance, duration, fingerCount) {
		lettercount=0;
		defsize=80;
       	if(fingerCount==3)
		{
		$(".dropped").animate({'top':'+='+(-$(this).position().top),'opacity':'0.5'},500,function(){$(".dropped").remove();});
		changeaudio("audio/trash.mp3");
		}
		},
        threshold:250,
        fingers:3
      });
    });

};


function dynamicdiv(maindiv,divid,classname,noofdiv){
if ($("#"+divid).length == 0) { 
	var did=document.getElementById(maindiv);
	for(var e=0;e<noofdiv;e++){
		var dyndivid=document.createElement('div');
		dyndivid.id='divid_'+e;
		dyndivid.className="Symbolcrear "+classname+"_"+e;
		dyndivid.innerHTML=buttontext[e];
		dyndivid.style.cssFloat="left";
		dyndivid.style.lineHeight="55px";
		dyndivid.style.margin="5px";
		dyndivid.style.cursor="pointer";
		dyndivid.style.fontWeight="bold ";
		dyndivid.style.borderRadius="3px";
		if(e==3){
			dyndivid.style.letterSpacing="7px";
		}
		
		dyndivid.setAttribute('onclick',"showProblem(this.id)");
		did.appendChild(dyndivid);
	}
}
}
function showProblem(s){
	changeaudio("audio/btnclick.mp3");
	$(".Symbolcrear").addClass('fillcolor');
	$(".Symbolcrear").css({"color":"white"}).addClass('fillcolor');
	$("#"+s).css({"background-color":"white","color":"#4470ff"}).removeClass('fillcolor');
	var getID=s.split("_")[1];
	var text=globalArray[getID];
	ButtonCreation(globalArray[getID].length,text,getID);
}

function ButtonCreation(e,text,insertID){
	var divid = document.getElementById("boxHolder_"+insertID);
	changingdisplay(zind);

	if($("#boxHolder_"+insertID).children().length ==0){
		for(var i=0;i<=e-1;i++)	{
			var dateSpan;
			var dateSpan1;
			dateSpan = document.createElement('div');
			dateSpan.className = 'singlebtn lettercomonsize';
			dateSpan.innerHTML = text[i];
			dateSpan.style.position="absolute";

			dateSpan.style.align='center';
			dateSpan.style.textAlign='center';
			dateSpan.style.cursor='pointer';
			dateSpan.style.border="0px solid black";
			dateSpan.style.color="#005CFF";

								
			dateSpan1 = document.createElement('div');
			dateSpan1.id = ++changeid;
			dateSpan1.className = 'singlebtn lettercomonsize draggable';
			dateSpan1.innerHTML = text[i];
			dateSpan1.style.position="absolute";

			dateSpan1.style.align='center';
			dateSpan1.style.textAlign='center';
			dateSpan1.style.cursor='pointer';

			dateSpan1.style.border="0px solid red";
			dateSpan1.style.color="#005CFF";
			
			var childdateSpan = document.createElement('div');
			childdateSpan.style.position="relative";
			childdateSpan.id = "p"+insertID +"_"+ i;
			childdateSpan.style.display="inline-block";
			childdateSpan.style.width="60px";
			childdateSpan.style.height="60px";
			childdateSpan.style.textAlign='left';
			childdateSpan.style.align='left';
			childdateSpan.style.cursor='pointer';
			childdateSpan.style.border="1px solid rgba(0,0,0,0)";
			childdateSpan.style.borderRadius="0px";
			if(text[i]!="")	{
				childdateSpan.appendChild(dateSpan);
				childdateSpan.appendChild(dateSpan1);
			}
			divid.appendChild(childdateSpan);
			enableDragOptions("#"+changeid);
		}
	}	else{
		$("#boxHolder_"+insertID).children().each(function(){$(this).children().not(".dropped").show()});
	}
	zind = insertID;
	for(k=0;k<4;k++)
	{
	$("#boxHolder_"+k).css('z-index','1');
	}
	$("#boxHolder_"+zind).css('z-index','100');
}
function createletterspan(curid){
	var letspan = document.createElement('div');
	letspan.id = ++changeid;
	letspan.className = 'singlebtn lettercomonsize draggable';
	letspan.innerHTML = curid.html();
	letspan.style.position="absolute";
	letspan.style.textAlign='center';
	letspan.style.cursor='pointer';

	letspan.style.border="0px solid green";

	letspan.style.color=curid.css("color");
	var divid = document.getElementById(curid.parent().attr('id'));
	divid.appendChild(letspan);
	enableDragOptions("#"+changeid);
}

var defsize=80;
var lettercount=0;
function enableDragOptions(clname){
	var draggedDiv;
	var curdivwidth;
	$(clname).css('cursor', 'pointer');
	$(clname).draggable({ 
		containment:'body',
		drag:function(evt,ui){
			$(".ui-draggable-dragging").removeClass("lettercomonsize").addClass($(this).parent().attr("id"));
			//console.log("."+$(this).parent().attr("id")+"{width:"+$(this).css("width")+"; height:"+$(this).css("height")+";}");

		},
		start:function(evt,ui)	{
			$(".ui-draggable-dragging").addClass('draggable').removeClass("lettercomonsize").addClass($(this).parent().attr("id"));
			$(".ui-draggable-dragging").css({'font-size':'100px','opacity':'0.5','filter':'alpha(opacity=60)','-ms-filter':'alpha(opacity=60)','overflow':'visible'});

		},
		stop: function(event,ui) {
			//$("#text").html($(this).attr('class'));
			
			if(fl==true && $(".ui-draggable-dragging").hasClass("dropped")==true){
					$(this).removeClass("lettercomonsize").addClass($(this).parent().attr("id")).css({'opacity':'1','font-size':defsize+'px','margin':'0','padding':'0','border':'1px solid rgba(0,0,0,0)','overflow':'hidden'});
				
				console.log("."+$(this).parent().attr("id")+"{width:"+$(this).css("width")+"; height:"+$(this).css("height")+";}");
				changeaudio("audio/stick.mp3");
				
			}
			
			                                                                                                                                                     
			if($(".ui-draggable-dragging").hasClass("targetlock")==false && $(".ui-draggable-dragging").hasClass("dropped")==false )	{
				createletterspan($(this));
				$(this).remove();
				changeaudio("audio/sigtrash.mp3");
			}
			
			if(fl==false && $(".ui-draggable-dragging").hasClass("dropped")==true ){
				$(this).animate({'top':'+='+(-$(".ui-draggable-dragging").position().top),'opacity':'0.5'},500,function(){$(this).remove();});
				lettercount--;
				if(lettercount<=30)	{
					defsize=80;
					$(".dropped").css({'font-size':defsize+'px'});
					var s=$(".dropped").collision(".obstacle");
					//console.log("sdfsdfsf : "+s);
				}
				//console.log("oi im trash 2nd");
				changeaudio("audio/sigtrash.mp3");
			}
		},
		revert:false,
		refreshPositions: true,
		obstacle:".obstacle",
		preventCollision:true
	}).on('mousedown',function(){
		$(".dropped").addClass('obstacle');
		$(this).removeClass('obstacle');
	}).on('click',function() {
		if($(this).hasClass("dropped")){
		if($(this).css('color')=='rgb(255, 0, 0)'){
			$(this).css("color","rgb(0, 92, 255)");
		}else{
			$(this).css("color","rgb(255, 0, 0)");
		}}
	})

}
var changeid=0;
function enabledropOption(){
$("#whiteBoard").droppable({
	tolerance: "fit",
    accept: ".draggable",
    drop: function(event,ui){
		if(!ui.draggable.hasClass("dropped")){ 
			ui.draggable.addClass("dropped").addClass("obstacle");
			++lettercount;
			if(lettercount>30)
			{
				defsize=50;
				$(".dropped").css({'font-size':defsize+'px'});
			}
			createletterspan(ui.draggable);
		}
	},
	out: function( event, ui ) {
		ui.draggable.removeClass("targetlock");
		fl =false ;
		//console.log("im out");
	//	$("#text").html("Im out: " +fl);
		$(".ui-draggable-dragging").css({'opacity':'0.5'});
	},
	over: function( event, ui ){
		$(".ui-draggable-dragging").addClass("targetlock");
		fl = true;
		$(".ui-draggable-dragging").css({'opacity':'0.7'});
		//$("#text").html("Im over: " +fl);
	}
	
});
}

 function changeaudio(sourceUrl) {
	var audio = $("#player");      
	$("#mp3src").attr("src", sourceUrl).appendTo(audio)
	audio[0].pause();
	audio[0].load();//suspends and restores all audio element
	audio[0].play();
}
function changingdisplay(zind){
	//.dropped
	$("#boxHolder_"+zind).children().each(function(){$(this).children().not(".dropped").hide()});
}