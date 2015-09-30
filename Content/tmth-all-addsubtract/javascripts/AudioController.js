
/*-------------------------------------------------------------- Page Title Audio Related Functions Starts ----------------------------------------------*/
var TitleAudioPath="";
var TitleAudio;
var IsTitleAudioOncePlayed;
var IsTitleAudioPlaying=false;
var aAudio = [
				'audio/FIB.mp3'
			]
			
var hSymbol_1 = [
				"-0px -305px",
				"-100px -305px",
				"-200px -305px",
				"-300px -305px",
				"-400px -305px",
				"-500px -305px",
				"-600px -305px",
				"-700px -305px",
				"-800px -305px",
				"-900px -305px",
				"-0px -405px",
				"-100px -405px",
				"-200px -405px",
				"-300px -405px",
				"-400px -405px",
				"-500px -405px",
				"-600px -405px",
				"-700px -405px",
				"-800px -405px",
				"-900px -405px",
				"-0px -505px",
				"-100px -505px",
				"-200px -505px",
				"-300px -505px",
				"-400px -505px",
				"-500px -505px",
				"-600px -505px",
				"-700px -505px",
				"-800px -505px",
				"-900px -505px",
				'audio/FIB.mp3'
			]
var hSymbol_2 = [
				"-0px -505px",
				"-100px -505px",
				"-200px -505px",
				"-300px -505px",
				"-400px -505px",
				"-500px -505px",
				"-600px -505px",
				"-700px -505px",
				"-800px -505px",
				"-900px -505px",
				"-0px -605px",
				"-100px -605px",
				"-200px -605px",
				"-300px -605px",
				"-400px -605px",
				"-500px -605px",
				"-600px -605px",
				"-700px -605px",
				"-800px -605px",
				"-900px -605px",
				"-0px -705px",
				"-100px -705px",
				"-200px -705px",
				"-300px -705px",
				"-400px -705px",
				"-500px -705px",
				"-600px -705px",
				"-700px -705px",
				"-800px -705px",
				"-900px -705px",
				"-0px -805px",
				"-100px -805px",
				"-200px -805px",
				"-300px -805px",
				"-400px -805px",
				"-500px -805px",
				"-600px -805px",
				"-700px -805px",
				"-800px -805px",
				"-900px -805px",
				"-0px -905px",
				"-100px -905px",
				"-200px -905px",
				"-300px -905px",
				"-400px -905px",
				"-500px -905px",
				"-600px -905px",
				"-700px -905px",
				"-800px -905px",
				"-900px -905px",
				'audio/FIB.mp3'
			]
var hSymbol_3 = [
				"-0px -505px",
				"-100px -505px",
				"-200px -505px",
				"-300px -505px",
				"-400px -505px",
				"-500px -505px",
				"-600px -505px",
				"-700px -505px",
				"-800px -505px",
				"-900px -505px",
				"-0px -605px",
				"-100px -605px",
				"-200px -605px",
				"-300px -605px",
				"-400px -605px",
				"-500px -605px",
				"-600px -605px",
				"-700px -605px",
				"-800px -605px",
				"-900px -605px",
				"-0px -705px",
				"-100px -705px",
				"-200px -705px",
				"-300px -705px",
				"-400px -705px",
				"-500px -705px",
				"-600px -705px",
				"-700px -705px",
				"-800px -705px",
				"-900px -705px",
				"-0px -805px",
				"-100px -805px",
				"-200px -805px",
				"-300px -805px",
				"-400px -805px",
				"-500px -805px",
				"-600px -805px",
				"-700px -805px",
				"-800px -805px",
				"-900px -805px",
				"-0px -905px",
				"-100px -905px",
				"-200px -905px",
				"-300px -905px",
				"-400px -905px",
				"-500px -905px",
				"-600px -905px",
				"-700px -905px",
				"-800px -905px",
				"-900px -905px",
				'audio/FIB.mp3'
			]




function PlayTitleAudio(AudioSource)
{  //Set Audio Path
   
	  TitleAudioPath=AudioSource;
	 
	 InitTitleAudio(TitleAudioPath);		
}

//1:Function Recieve Input Audio Path as Source and Play Audio
function InitTitleAudio(TitleAudioPath)
{
	    TitleAudio=new Audio();
		var TitleTempAudPath = TitleAudioPath;
		var source= document.createElement('source');
		
	if (TitleAudio.canPlayType('audio/mpeg;')) 
		{
			
			TitleTempAudPath = TitleTempAudPath.split(".");
			TitleTempAudPath = TitleTempAudPath[0]+".mp3";
			TitleAudioPath=TitleTempAudPath;	     		 
		    source.type= 'audio/mpeg';
		    //source.src= 'audio/song.mp3';					
		}
		
	else if(TitleAudio.canPlayType('audio/ogg;')) 
		{	
			
			TitleTempAudPath = TitleTempAudPath.split(".");
			TitleTempAudPath = TitleTempAudPath[0]+".ogg";
			TitleAudioPath=TitleTempAudPath;
			source.type= 'audio/ogg';			 
			//source.src= 'audio/audio1.ogg';
		}
	else if(TitleAudio.canPlayType('audio/mp4;')) 
		{			
			
			TitleTempAudPath = TitleTempAudPath.split(".");
			TitleTempAudPath = TitleTempAudPath[0]+".aac";
			TitleAudioPath=TitleTempAudPath;
			source.type= 'audio/mp4';
			//source.src= 'audio/audio1.ogg';
		}	
		
	else
		{
		   //alert("No Audio Support")	;
		}	
		
	TitleAudio=new Audio(TitleAudioPath); // Path of initial audio	

	TitleAudio.addEventListener("timeupdate", onTitleAudioUpdate);	 

    TitleAudio.appendChild(source);	
	TitleAudio.play();		
	IsTitleAudioOncePlayed=true; //For Other Pages Pages if Audio is Played even Once
	IsTitleAudioPlaying=true;
	console.log('playing');
	
}

//2: On Audio Update
function onTitleAudioUpdate()
  {
	  if(IsTitleAudioOncePlayed)
	  {
		  //alert("test update")
		   var current = TitleAudio.currentTime;
		   var total = TitleAudio.duration;
		   var timer =  parseFloat(current).toFixed(3);
		   var timer1 =  parseFloat(total).toFixed(3);			 
		   
		   // if(CurrentTime>=(TotalTime-.4)) When Audio reaches to its end	  
			  if(timer>=(timer1-.14))			  
			   {
					StopTitleAudio();   
					
					for(j=1;j<=100;j++)
					{
					//document.getElementById("symb_"+j).setAttribute("onclick","welcome("+j+")");
					}
					
				  
			   } 	
		   
			 
	  }
	   
  }
  
//3: This will stop Audio : pause Audio and set its current time to 0
function StopTitleAudio()
{
	if(IsTitleAudioOncePlayed)
	{
	 TitleAudio.pause();
	 TitleAudio.currentTime = 0;	
	}
	
	IsTitleAudioPlaying=false;
	//ResetAllPageAudio();
} 


/*-------------------------------------------------------------- Page Title Audio Related Functions Ends ----------------------------------------------*/
