$(document).ready(function() {

    $('body').css({
        '-ms-touch-action': 'none'
    });

    var initToucheventPolyfill = function() {
        var isDown = false;

        $('body').on('mousedown', function(ev) {
            isDown = true;
            var touchEvent = $.Event('touchstart', {
                pageX: ev.pageX,
                pageY: ev.pageY,
                originalEvent: {
                    touches: [{
                        pageX: ev.pageX,
                        pageY: ev.pageY
                    }]
                }
            });
            $('body').trigger(touchEvent);
            ev.preventDefault();
        });

        $('body').on('mousemove', function(ev) {
            if (isDown) {
                var touchEvent = $.Event('touchmove', {
                    pageX: ev.pageX,
                    pageY: ev.pageY,
                    originalEvent: {
                        touches: [{
                            pageX: ev.pageX,
                            pageY: ev.pageY
                        }]
                    }
                });
                $('body').trigger(touchEvent);
                ev.preventDefault();
            }
        });

        $('body').on('mouseup', function(ev) {
            isDown = false;
            var touchEvent = $.Event('touchend', {
                pageX: ev.pageX,
                pageY: ev.pageY,
                originalEvent: {
                    touches: [{
                        pageX: ev.pageX,
                        pageY: ev.pageY
                    }]
                }
            });
            $('body').trigger(touchEvent);
            ev.preventDefault();
        });

    };

});