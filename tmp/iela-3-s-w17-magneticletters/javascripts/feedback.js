iModalObj = {
    _content:"Read each story problem. Then drag the cards that go with the problem to the spaces under the problem. When you are done, tap the submit button to find out how many you got right.",
    _image:	"images/instructions-card-sort.png"
}
/*new class  _backClose*/
var _iModalTemplate ="<div class='_back _backClose'></div><div class='_iModalBack'><div class='Center_iModal'><div class=' AbsoluteCenter_iModal'><div class='_iModalHeader'><div ></div><div class='icoClose'>×</div></div><div class='_iModalBody'></div></div></div></div>";

var _iModalBody

if(iModalObj._image.length > 0){
    _iModalBody ="<p>"+iModalObj._content+"</p><img src='"+iModalObj._image+"'/>";
}else{
    _iModalBody ="<p>"+iModalObj._content+"</p>";
}

var $iModal;
/* funtion iModal update*/
function iModal(){
    $('body').addClass('hack')
    $('body').append(_iModalTemplate)

    $_back = $("._back");
    // $_back.css({width:width+'px',height:height+'px'})
    var n=setTimeout(function(){
        toggleClassButton($_back,'_backClose')
        $iModal = $('._iModalBack');
        // $iModal.css({width:width,height:height})
        $iModal.find('._iModalBody').append(_iModalBody)
        $iModal.css({"display":"block"})
        var m=setTimeout(function(){
            toggleClassButton($('.AbsoluteCenter_iModal'),'AbsoluteCenter_iModalAnimate')
        },200)
        $('.icoClose').on('click',function(){
            $('body').removeClass('hack');
            $iModal.remove()
            $iModal.css({"display":"block"})
            toggleClassButton($_back,'_backClose').get(0).addEventListener("webkitTransitionEnd", function() {
                $_back.remove()
            }, true);

        })
        $iModal.on('click',function(){
            $('body').removeClass('hack')
            $iModal.remove()
            $iModal.css({"display":"block"})
            toggleClassButton($_back,'_backClose').get(0).addEventListener("webkitTransitionEnd", function() {
                $_back.remove()
            }, true);

        })
    },200);

}
function iconFeedFunction(){
    $(".icoFeed").off('click')

    $(".icoFeed").on('click',function(event){
        event.preventDefault();
        event.stopPropagation()

        toggleClassButton($(this),'icoFeedMove');
        $('.score').toggle("showAnim");
        mapHorceFunction()
    })

}
function completeDrag(){
    $elem=$(".e-destiny").find(".e-element")
    lenElement = $elem.length;
    if(lenElement>11){
        iconFeedFunction()
        $(".icoFeed").addClass('icoFeedMove')
        complete = true;
    }
}
function mapHorceFunction(){
    var correct = 0,
    incorrect = 8;
    $('.e-destiny').each(function(){
        var value = $(this).data('ans');
        $('.e-element',this).each(function(){
            var carrier = $(this).data('ans');
            $ans = $(this)
            if (carrier == value) {
                correct += 1;
                $ans.addClass('horsesCorrect')
            }
        });
    });

}
function checkAnswers(){
    var correct = 0,
    //incorrect = 12;
    $elem=$(".e-destiny").find(".e-element")
    incorrect =$elem.length

    $('.e-destiny').each(function(){
        var value = $(this).data('ans');
        $('.e-element',this).each(function(){
            var carrier = $(this).data('ans');
            if (carrier == value) {
                correct += 1;
            }
        });
    });
    numberCorrect = correct;
    $('#contCorrect').text(correct).append('<img src="images/IconCorrect.png">');
    $('#contIncorrect').text(incorrect-correct).append('<img src="images/IconIncorrect.png">');
}
$(document).ready(function(){
    $(".icoInfo").addClass("icoInfoMove");
    //iModal();
    feedBackButtons();
    iconFeedFunction();
    $(".icoFeed").addClass('icoFeedMove');
    complete = true;
});
function feedBackButtons(){
$(".icoInfo").on('click',function (event) {
        event.preventDefault();
        event.stopPropagation()
        iModal()
    })
$(".icoReset").click(function (event) {
        event.preventDefault();
        event.stopPropagation()
        var current=$(this);
        current.removeClass('icoResetMove');
        var to=setTimeout(function(){
            clearInterval(to);
            current.addClass('icoResetMove');
        },200)
        item.erase();
        checkAnswers();
        $('.score').hide()
        eventBroker.publishEvent("#save",{type:'state',data:JSON.stringify({})});
    });
$('.e-element').each(function(){
        $(this).draggable({
            stop: function() {
                checkAnswers()
                completeDrag()
            }
        })
    })
}


function toggleClassButton(element,className){
    var currentButton=element;
    if(!currentButton.hasClass(className)){
        currentButton.addClass(className);
    }else{
        currentButton.removeClass(className);
    }
    return element;
}
