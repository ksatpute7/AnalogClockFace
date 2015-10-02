var states = {},
    strStates = JSON.stringify({});

	

function fetchCallBack(state){
	
	if(state){
		startApp(state);
	}

	
}

function saveCallBack(){

    //************ important part ******************/
    // this object must have this structure
    // @type:'state'
    // @data: json string representing the current state
	var state = {};
    //$('.response').each(function(){

		
		state[0] = "";
    //});
   return sendDataToStore(state);

}

function sendDataToStore(state){
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
		_.each(JSON.parse(currentObjt), function(value, key, list) {
			
				
		});
	}
}

function resetState(){
    // console.log(typeof $('textarea').val());
    /*var message = {
        type : 'state',
        data : JSON.stringify({})
    };*/
	
 // eventBroker.publishEvent("#save",saveCallBack());
   eventBroker.publishEvent("#save",sendDataToStore({}));
	
}