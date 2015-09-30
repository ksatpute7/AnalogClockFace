var states = {},
    strStates = JSON.stringify({});

function fetchCallBack(state){
	if(state){
		startApp(state);
		// currentObjt=JSON.parse(state);
		// startApp(currentObjt);
	}
}
function saveCallBack(){

    //************ important part ******************/
    // this object must have this structure
    // @type:'state'
    // @data: json string representing the current state
	var state = {};
    $('.response').each(function(){
		var areaID = $(this).attr('id');
		var numAns = $(this).val();
		var storageValue = [areaID, numAns];
		state[this.id] = storageValue;
    });
   return sendDataToStore(state);
   
   

    //return whatever you need.
   
}
function sendDataToStore(state)
{
 strStates =JSON.stringify(state);// $('textarea').val();

    var message = {
        type : 'state',
        data : strStates
    };
 return message;
}
function finishCallBack(){
    //********** this is the important part *********/
    //this message object must have these parameters:
    //@completion (boolean) if an activity was complete!
    //@success (boolean) if activity was succesfull
    //@score: in a scale from 0 to 1, the activity score
    /*  var message = {
        completion : complete,
        success : numberCorrect >= mimimumCorrect,
        score : numberCorrect / _.keys(answers).length
        };*/
    objToSave={}
    return objToSave;
}

function startApp(currentObjt){
    // states = currentObjt;
	 if (currentObjt) {
			var curobjt= JSON.parse(currentObjt);
			_.each(curobjt, function(value, key, list) {
				//$('#' + key).each(function(){
					$('#' + value[0]).val(value[1]);
					//alert($('#' + value[0]).val(value[1]));
				//});
			});
			
			if($.isEmptyObject(curobjt)==false){
				
				$("#num_2").css({'left':curobjt.num_2_val[1]});
				$("#num_3").css({'right':curobjt.num_3_val[1]});
				$("#line_cut").css({'left':curobjt.line_cut_val[1]});
				
				$("#line_2").css({'width':curobjt.line_2_val[1]});
				$("#line_1").css({'width':curobjt.line_1_val[1]});
				
				$("#tap_0").css({'width':curobjt.tap_0_val[1],'background-color':curobjt.tap_0_color[1]});
				$("#tap_1").css({'width':curobjt.tap_1_val[1],'background-color':curobjt.tap_1_color[1]});
				
				$("#ans_1").css({'left':curobjt.ans_1_val[1]});
				$("#ans_2").css({'left':curobjt.ans_2_val[1]});
				
				$("#num_input_par_0").css({'background-color':curobjt.num_input_par_0_color[1]});
				$("#num_input_par_1").css({'width':curobjt.num_input_par_1_val[1],'background-color':curobjt.num_input_par_1_color[1]});
				$("#num_input_par_2").css({'width':curobjt.num_input_par_2_val[1]});
				
				$("#mun_2").css({'left':curobjt.mun_2_val[1]});
				$("#mun_3").css({'right':curobjt.mun_3_val[1]});
				
				$("#line_cut_second").css({'left':curobjt.line_cut_second_val[1]});
				
				
				//$("#greyBox").css({'background-color':curobjt.greyBox_color[1]});
				//$("#subclass_1").css({'background-color':curobjt.subclass_1_color[1]});
				
				
			}
			
			
		}

    // setState(1);
}

function resetState(){
    /*var message = {
        type : 'state',
        data : JSON.stringify({})
    };*/

 // eventBroker.publishEvent("#save",saveCallBack());
  //alert(112);
  eventBroker.publishEvent("#save",sendDataToStore({}));
	
}