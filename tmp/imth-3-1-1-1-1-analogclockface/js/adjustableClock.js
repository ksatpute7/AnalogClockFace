var _this;

window.AdjustableClock = function(Canvas, options){
    _this = this;
    this.canvas = Canvas;
    
    if(this.canvas[0]){
        _clock = this;
        this.context = this.canvas[0].getContext("2d");
        this.canvas.Id = this.canvas.Id ? this.canvas.Id : "clock";
        this.context.font="30px GillSansInfantStd";
        // Set the radius of the clock dial
        this.rad = this.canvas.width() / 2;
        this.radius = this.rad-50;
        this.center = (this.rad);
        
        this.roundsRotated=0;
        this.totMinutes = 0;
        this.minuteX = this.center;
        this.minuteY = this.center - this.center * 0.55;
        this.prvAngle = 270;
        this.newAngle = 0;
        
        this.intervalEveryNm = 5;
        this.hourHandleLen = this.radius*0.6;
        this.minHandleLen = this.radius*0.81;
        this.midCircleRad = 6.8;
        this.minTipWidth = 1;
        this.minHandleWidth = 5;
        this.hrTipWidth = 5;
        this.hrHandleWidth = 12;
        this.hrHandleBack = 0;
        this.minHandleBack = this.radius*0.1;
        this.minHandleBackWidth = this.minHandleWidth;
        this.clockMarkStroke = 2;
        this.markArrow = {length:20, width: 18};
        
        this.cMinHndlCol = "#000";
        this.cHrHndlCol = "#c1c1c1";
        this.clockBackProp = {lineWidth:8, strokeStyle:"#597dad", fillStyle:"#fff"};
        this.clockNumbersOffset = [{label:"1", offset:{x:3, y:4}}, {label:"2", offset:{x:2, y:1}}, {label:"3", offset:{x:2, y:0}}, {label:"4", offset:{x:0, y:0}}, {label:"5", offset:{x:0, y:1}}, {label:"6", offset:{x:0, y:0}}, {label:"7", offset:{x:2, y:0}}, {label:"8", offset:{x:0, y:-1}}, {label:"9", offset:{x:0, y:0}}, {label:"10", offset:{x:0, y:4}}, {label:"11", offset:{x:0, y:3}}, {label:"12", offset:{x:0, y:1}}];
        
        this.clockMinsNumbersOffset = [{label:"5", offset:{x:-4, y:2}}, {label:"10", offset:{x:4, y:6}}, {label:"15", offset:{x:2, y:0}}, {label:"20", offset:{x:6, y:4}}, {label:"25", offset:{x:4, y:7}}, {label:"30", offset:{x:0, y:4}}, {label:"35", offset:{x:-5, y:5}}, {label:"40", offset:{x:-6, y:2}}, {label:"45", offset:{x:-5, y:4}}, {label:"50", offset:{x:-6, y:5}}, {label:"55", offset:{x:0, y:0}}, {label:"0", offset:{x:0, y:2}}];
        
        this.clockNumberProp = {lineWidth:1, strokeStyle:"#000", fillStyle:"#000", font:"36px GillSansInfantStd", lineCap: "round"};
        
        this.context.fillStyle = "rgba(55,133,144,0.5)";
        this.context.fillRect(0,0,this.rad,this.rad);
        
        this.canvas.bind("mousedown touchstart", function (event) { _clock.onCanvasTouchStart(event); })
        $(window).bind("mousemove touchmove", function (event) { _clock.onCanvasTouchMove(event); })
        $(window).bind("mouseup touchend", function (event) { _clock.onCanvasTouchEnd(event); })
        
        _this.init();
    }
};

AdjustableClock.prototype = {
    init: function(){
        this.redraw();
    },
    redraw: function(){
        this.drawClock();
    },
    clockReset:function(){
        _this.totMinutes = 0;
        _this.minuteX = this.center;
        _this.minuteY = this.center - this.center * 0.55;
        _this.prvAngle = 270;
        _this.newAngle = 0;
        _this.hourAngle = null;
        _this.drawClock();
    },
    drawClock: function(){
        this.context.restore();
        this.context.clearRect(0, 0, this.canvas.width(), this.canvas.height());
        this.drawShade();
        this.drawClockDesign();
       
        this.drawShortHand();
         this.drawLongHand();
        this.centerDot();
    },
    drawShade:function(){
        if (isShadeReq) {
            try {
                var context = _this.context;
                context.beginPath();
                context.moveTo(_this.center,_this.center);
                if (Math.floor(_this.totMinutes/60)==11) {
                    context.arc(_this.center,_this.center, _this.radius, 270 * (Math.PI / 180), 240 * (Math.PI / 180));
                }
                else {
                    if(_this.hourAngle)
                    context.arc(_this.center,_this.center, _this.radius, 270 * (Math.PI / 180), _this.hourAngle * (Math.PI / 180));
                }
                context.fillStyle = 'rgba(100,100,100, 0.5)';
                context.fill();
                context.closePath();
                context.beginPath();
                context.moveTo(_this.center,_this.center);
                if (_this.totMinutes!=0) {
                    context.arc(_this.center,_this.center, _this.radius, ((Math.floor((_this.hourAngle)/30) * 0.5236)), _this.hourAngle * (Math.PI / 180));
                }
                context.fillStyle = 'rgba(100,100,100, 1)';
                context.fill();
                context.closePath();
            }
            catch(e){}
        }
    },
    drawClockDesign:function(){
        var context = _this.context;
        context.font="30px GilSandsRegular";
        context.lineWidth = 5.0;
        context.fillStyle = "#ffffdd"; //fcf9f2 //faf6ee
        context.beginPath();
        context.arc(_this.center,_this.center,_this.radius,0,Math.PI * 2,true);
        context.closePath();
        context.fill();
        
        _this.drawShade();
        
        context.lineWidth = 8.0;
        context.strokeStyle = "#bf1e2d";
        context.beginPath();
        context.arc(_this.center,_this.center,_this.radius,0,Math.PI * 2,true);
        context.stroke();
        context.closePath();
        
        var theta = 0;
        var distance = (_this.radius) * 0.95; // 90% from the center
        context.lineWidth = 1;
        context.strokeStyle = "#000";
        
        this.drawClockNumbers();
    },
    drawLongHand:function(){
        var ang = _this.FindAngleFromPoints({x:_this.minuteX, y:_this.minuteY},{x:this.center, y:this.center});
        _this.minuteAngle = (ang.angle);
        _this.minuteAngle = (_this.minuteAngle < 0 ? _this.minuteAngle+360 : _this.minuteAngle);
        
        var defaultAngle = -Math.PI/2;
        this.clockMidPoint = {x: this.center, y: this.center};
        var minAngle = this.minutesToAngle(this.totMinutes, defaultAngle);
        var minHandleLen = this.minHandleLen;
        
        var minTip = this.pointFromAPL(this.clockMidPoint, minAngle, minHandleLen);
        var minTipL = this.pointFromAPL(minTip, minAngle+Math.PI/2, this.minTipWidth);
        var minTipR = this.pointFromAPL(minTip, minAngle-Math.PI/2, this.minTipWidth);
        var minLeft = this.pointFromAPL(this.clockMidPoint, minAngle+Math.PI/2, this.minHandleWidth);
        var minRight = this.pointFromAPL(this.clockMidPoint, minAngle-Math.PI/2, this.minHandleWidth);
        var minBack = this.pointFromAPL(this.clockMidPoint, minAngle+Math.PI, this.minHandleBack);
        var minBackL = this.pointFromAPL(minBack, minAngle+Math.PI/2, this.minHandleBackWidth);
        var minBackR = this.pointFromAPL(minBack, minAngle-Math.PI/2, this.minHandleBackWidth);
        this.context.fillStyle = this.cMinHndlCol;
        this.context.beginPath();
        this.context.arc(this.clockMidPoint.x, this.clockMidPoint.y, this.midCircleRad, 0, Math.PI*2, false);
        this.context.stroke();
        this.context.fill();
        this.context.beginPath();
        this.context.arc(minTip.x, minTip.y, this.minTipWidth, 0, Math.PI*2);
        this.context.stroke();
        this.context.fill();
        this.context.beginPath();
        this.context.arc(minBack.x, minBack.y, this.minHandleBackWidth, 0, Math.PI*2);
        this.context.stroke();
        this.context.fill();
        this.context.beginPath();
        this.context.moveTo(minTipL.x, minTipL.y);
        this.context.lineTo(minLeft.x, minLeft.y);
        this.context.lineTo(minBackL.x, minBackL.y);
        this.context.lineTo(minBackR.x, minBackR.y);
        this.context.lineTo(minRight.x, minRight.y);
        this.context.lineTo(minTipR.x, minTipR.y);
        this.context.stroke();
        this.context.fill();
        
    },
    drawShortHand:function(){
        theta = (30 * Math.PI / 180);
        x = this.center + this.hourHandleLen * Math.cos(((this.totMinutes/60) * theta) - Math.PI/2);
        y = this.center + this.hourHandleLen * Math.sin(((this.totMinutes/60) * theta) - Math.PI/2);
        var ang = this.FindAngleFromPoints({x:this.center, y:this.center},{x:x, y:y});
        this.hourAngle = (ang.angle);
        this.hourAngle = (_this.hourAngle < 0 ? _this.hourAngle+360 : _this.hourAngle);
        
        var defaultAngle = -Math.PI/2;
        this.clockMidPoint = {x: this.center, y: this.center};
        var hourAngle = (this.totMinutes/720)*Math.PI*2+defaultAngle;
        
        var hrTip = this.pointFromAPL(this.clockMidPoint, hourAngle, this.hourHandleLen);
        var hrTipL = this.pointFromAPL(hrTip, hourAngle+Math.PI/2, this.hrTipWidth);
        var hrTipR = this.pointFromAPL(hrTip, hourAngle-Math.PI/2, this.hrTipWidth);
        var hrLeft = this.pointFromAPL(this.clockMidPoint, hourAngle+Math.PI/2, this.hrHandleWidth);
        var hrRight = this.pointFromAPL(this.clockMidPoint, hourAngle-Math.PI/2, this.hrHandleWidth);
        var hrBack = this.pointFromAPL(this.clockMidPoint, hourAngle+Math.PI, this.hrHandleBack);
        var hrTipL = this.pointFromAPL(hrTip, hourAngle+Math.PI/2, this.hrTipWidth);
        var hrTipR = this.pointFromAPL(hrTip, hourAngle-Math.PI/2, this.hrTipWidth);
        this.context.fillStyle = this.cHrHndlCol;
        this.context.beginPath();
        this.context.arc(hrTip.x, hrTip.y, this.hrTipWidth, 0, Math.PI*2);
        this.context.stroke();
        this.context.fill();
        this.context.beginPath();
        this.context.moveTo(hrTipL.x, hrTipL.y);
        this.context.lineTo(hrLeft.x, hrLeft.y);
        this.context.lineTo(hrBack.x, hrBack.y);
        this.context.lineTo(hrRight.x, hrRight.y);
        this.context.lineTo(hrTipR.x, hrTipR.y);
        this.context.stroke();
        this.context.fill();
    },
    centerDot: function(){
        var context = this.context;
        context.beginPath();
        context.fillStyle = this.cMinHndlCol;
        context.arc(this.center,this.center,14,0,2*Math.PI);
        context.fill();
    },
    drawClockNumbers:function(rect) {
        this.clockMidPoint = {x:this.center,y:this.center};
        var distanceFromMid = this.radius*0.95;
        var coverLineRad = this.radius*0.96;
        var shortLen = this.radius*0.06;
        var longLen = this.radius*0.09;
        var numPosition = this.radius*0.75;
        var fiveMinsNumPosition = this.radius*1.10;
        var numberOfLines = 60;
        var anglePerLine = Math.PI*2/numberOfLines;
        var angle = -Math.PI/2;
        this.context.save();
        this.applyContext(this.clockNumberProp);
        this.context.textBaseline = "middle";
        this.context.textAlign = "center";
        var time = 0;
        var label = "";
        var minsLabel = "";
        for(var l=0; l<numberOfLines; l++){
            var isHourTick = false;
            this.context.save();
            if (l%this.intervalEveryNm == 0) {
                this.context.lineWidth = this.context.lineWidth*4;
                isHourTick = true;
            }
            var fromPoint = this.pointFromAPL(this.clockMidPoint, angle, distanceFromMid);
            var toPoint = this.pointFromAPL(this.clockMidPoint, angle, distanceFromMid - (isHourTick ? longLen : shortLen));
            var numPoint = this.pointFromAPL(this.clockMidPoint, angle, numPosition);
            
            var fiveIncNumPoint = this.pointFromAPL(this.clockMidPoint, angle, fiveMinsNumPosition);
            
            this.context.beginPath();
            this.context.moveTo(fromPoint.x, fromPoint.y);
            this.context.lineTo(toPoint.x, toPoint.y);
            this.context.stroke();
            if (isHourTick) {
                label = time ? time.toString() : "12";
                var offset = null;
                for(var o=0; o<this.clockNumbersOffset.length; o++)
                    if(this.clockNumbersOffset[o].label == label) {
                        offset = this.clockNumbersOffset[o].offset;
                        break;
                    }
                if (offset) {
                    numPoint.x += offset.x;
                    numPoint.y += offset.y;
                }
                this.context.fillText(label, numPoint.x, numPoint.y);
               
            
                minsLabel = time ? time : 0;
                minsLabel = (minsLabel * 5).toString();
                var offset = null;
                for(var o=0; o<this.clockMinsNumbersOffset.length; o++)
                    if(this.clockMinsNumbersOffset[o].label == minsLabel) {
                        offset = this.clockMinsNumbersOffset[o].offset;
                        break;
                    }
                if (offset) {
                    fiveIncNumPoint.x += offset.x;
                    fiveIncNumPoint.y += offset.y;
                }
                this.context.fillText(minsLabel, fiveIncNumPoint.x, fiveIncNumPoint.y);
                time++;
            }
            
            angle += anglePerLine;
            this.context.restore();
        }
        this.context.save();
       
    },
    onCanvasTouchStart:function(event){
        var touchX, touchY;
        try {
            touchX = (event.originalEvent.touches[0].pageX - _this.canvas.offset().left);
            touchY = (event.originalEvent.touches[0].pageY - _this.canvas.offset().top);
        } catch (e) {
            touchX = (event.pageX - _this.canvas.offset().left);
            touchY = (event.pageY - _this.canvas.offset().top);
        }
        var ang = _this.FindAngleFromPoints({x:touchX, y:touchY}, {x:_this.center, y:_this.center});
        origAngle = ang.angle;
        origAngle = (origAngle < 0 ? 360+origAngle : origAngle);
        
        var distance = _this.radius;
        x = _this.center + distance * Math.cos(ang.radian);
        y = _this.center + distance * Math.sin(ang.radian);
        
        var touchDist = Math.sqrt(Math.pow(_this.center - touchY, 2)+Math.pow(_this.center - touchX, 2));
        var actualDist = Math.sqrt(Math.pow(_this.center - y, 2)+Math.pow(_this.center - x, 2));
        console.log(actualDist, touchDist);
        if(touchDist <= actualDist && origAngle <= (_this.minuteAngle==0 ? 360 : _this.minuteAngle+45) && origAngle >= _this.minuteAngle-45){
           _this.isTouched = true;
        }
        else {
             _this.isTouched = false;
        }
        
    },
    onCanvasTouchMove: function(event){
        event.preventDefault();
        var touchX, touchY;
        try {
            touchX = (event.originalEvent.changedTouches[0].pageX - _this.canvas.offset().left);
            touchY = (event.originalEvent.changedTouches[0].pageY - _this.canvas.offset().top);
        } catch (e) {
            touchX = (event.pageX - _this.canvas.offset().left);
            touchY = (event.pageY - _this.canvas.offset().top);
        }
        
        if(_this.isTouched){
             $(".icoReset").css('opacity','1');
            try{$(".icoReset").unbind('touchstart click',resetfn);}catch(e){}
            $(".icoReset").bind('touchstart click',resetfn);
            var ang = _this.FindAngleFromPoints({x:_this.center, y:_this.center},{x:touchX, y:touchY});
            _this.newAngle = ang.angle+5;
            
            _this.newAngle = (_this.newAngle < 0 ? 360+_this.newAngle : _this.newAngle);
            var distance = _this.radius;
            _this.minuteX = _this.center + (distance-60) * Math.cos(ang.radian);
            _this.minuteY = _this.center + (distance-60) * Math.sin(ang.radian);
            
            var variation =  _this.newAngle-_this.prvAngle;
            oldVariation = variation
            if (Math.abs(variation) > 180) {
                if (variation < 0) variation = variation+360;
                else variation = variation-360;
            }
            //console.log(oldVariation, variation);
           
            _this.totMinutes += (variation/6);
            /*if(_this.totMinutes < 0)
            {
                _this.totMinutes = (12*60)-1;
                //_this.hourAngle = 269;
            }
            else if (_this.totMinutes>=(12*60)) {
                _this.totMinutes = 0;
            }*/
            _this.drawClock();
            _this.prvAngle = _this.newAngle;
            
        }
    },
    onCanvasTouchEnd: function(event){
        _this.isTouched = false;
    },
    FindAngleFromPoints:function(points1, points2){
        var p1 = {
        x: points1.x,
        y: points1.y
        };
             
        var p2 = {
            x: points2.x,
            y: points2.y
        };
        // angle in radians
       // var angleRadians = Math.atan2(p2.y - p1.y, p2.x - p1.x);
             
        // angle in degrees
        var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
        
         var angleRadians = (angleDeg+3) * (Math.PI / 180)
         
        return {angle:angleDeg, radian:angleRadians};
    },
    applyContext:function(contextProp){
        for(var prop in contextProp) this.context[prop] = contextProp[prop];
    },
    pointFromAPL:function(point, angle, length){
        return {x: point.x + Math.cos(angle)*length, y: point.y + Math.sin(angle)*length};
    },
    minutesToAngle:function(minutes, defaultAngle){
        return ((minutes%60)/60)*Math.PI*2+defaultAngle;
    },
};