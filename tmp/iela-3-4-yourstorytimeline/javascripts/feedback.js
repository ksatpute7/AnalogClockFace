$(document).ready(function(){
	$(".icoFeed").on('click',function(){
			toggleClassButton($(this),'icoFeedMove');
			$('.score').toggle("showAnim");

	})
	$(".icoInfo").on('click',function () {
			toggleClassButton($(this),'icoInfoMove');
			setTimeout(function (){$(".icoInfo").removeClass("icoInfoMove")},3000);
	})
	$(".icoReset").click(function () {
		var current=$(this);
			current.removeClass('icoResetMove');
			var to=setTimeout(function(){
				clearInterval(to);
				current.addClass('icoResetMove');
			},200)
	});

});

function toggleClassButton(element,className){
	var currentButton=element;
	if(!currentButton.hasClass(className)){
		currentButton.addClass(className);
	}else{
		currentButton.removeClass(className);	
	}
}