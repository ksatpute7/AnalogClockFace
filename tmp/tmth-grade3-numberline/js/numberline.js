/*This module is for Interactive Numberline mechanism
 *Developed by Lapiz
 *---------------------------------------------------------------------
 *
 *MODIFIED VERSION
 *
 *
 * V 1.3
 *
 * Modes:
    - createPoint(default)
    - createForward
    - createBackward
    - createDifference
    - addCard
    - remove
    - "" Null
    
   Additional
    - addLever
*/
/*
Options:
defaultTicks    -   Default inital number of tickMarks(Labled and unlabled)
minTicks        -   Minimum number of tickMarks
maxVisibleTicks -   Maximum number of labled tickMarks
maxTicks        -   Maximum number of total tickMarks(Labled and unlabled)
curTicks        -   Current number of tick marks
curTickStart    -   Current Tick Position (To move left or right)
xInterval       -   Interval between each tickmark
noNegative      -   if True, only positive numbers will be displayed
maximumEnd      -   Maximum value at right side
numericType     -   "Whole", "Decimal" or "Fraction"
denominator     -   Denominator
lineColor       -   lineColor of tickMarks and axis
textColor       -   color of number label
lineThickness   -   Default thickness of the numberline
pointRad        -   Default radius of the point
bgColor         -   Background color of numberline
glowColor       -   Highlight color of selected arrow and point
pointArrowColors-   An array of colors for points
isKeyValuesLinked-  auto relate values of textbox and arrow
 
 */

window.Numberline = function(numberlineHolder, equationHolder, options){
    if (!options) this.options = { };
    else this.options = options;
    this.superContainer = numberlineHolder;
    this.equationHolder = equationHolder;
    this.options.defaultTicks = this.options.defaultTicks ? this.options.defaultTicks : 11;
    this.options.minTicks = this.options.minTicks ? this.options.minTicks : 2;
    this.options.maxVisibleTicks = this.options.maxVisibleTicks ? this.options.maxVisibleTicks : 21;
    this.options.maxTicks = this.options.maxTicks ? this.options.maxTicks : 151;
    this.options.curTicks = this.options.curTicks ? this.options.curTicks : this.options.defaultTicks;
    this.options.curTickStart = this.options.curTickStart ? this.options.curTickStart : 0;
    this.options.xInterval = this.options.xInterval ? this.options.xInterval : 1;
    this.options.noNegative = this.options.noNegative != null ? this.options.noNegative : false;
    this.options.isMinLimit = !isNaN(this.options.minimumStart);
    this.options.isMaxLimit = !isNaN(this.options.maximumEnd);
    this.options.minimumStart = !isNaN(this.options.minimumStart) ? this.options.minimumStart : -10;
    this.options.maximumEnd = !isNaN(this.options.maximumEnd) ? this.options.maximumEnd : 10;
    this.options.numericType = this.options.numericType ? this.options.numericType : "whole";
    this.options.denominator = this.options.denominator ? this.options.denominator : 10;
    this.options.lineColor = this.options.lineColor ? this.options.lineColor : "#000";
    this.options.textColor = this.options.textColor ? this.options.textColor : "#333";
    this.options.lineThickness = this.options.lineThickness ? this.options.lineThickness : 2;
    this.options.pointRad = this.options.pointRad ? this.options.pointRad : 7.4;
    this.options.bgColor = this.options.bgColor ? this.options.bgColor : "#daf7b5";
    this.options.glowColor = this.options.glowColor ? this.options.glowColor : "#f00";
    this.options.pointArrowColors = this.options.pointArrowColors ? this.options.pointArrowColors : ["#117B4A", "#982344", "#163053", "#1341c0", "#c03513", "#00c0f3", "#26000f", "#720218", "#0a4410", "#591c0e", "#6e48db", "#f55200", "#030926"];
    this.options.isKeyValuesLinked = this.options.isKeyValuesLinked != null ? this.options.isKeyValuesLinked : false;
    this.isDoubleNumberline = this.options.isDoubleNumberline ? true : false;
    this.widthAdjMargin = this.options.widthAdjMargin ? this.options.widthAdjMargin : 20;
    this.options.disabledArrowCol = this.options.disabledArrowCol ? this.options.disabledArrowCol : "rgb(120,120,120)";
    this.options.drawExtra = this.options.drawExtra == false ? false : true;
    this.options.forceRemoveArrows = this.options.forceRemoveArrows ? this.options.forceRemoveArrows : [];
    this.options.forceAddArrows = this.options.forceAddArrows ? this.options.forceAddArrows : [];
    this.options.isForceSnap = this.options.isForceSnap ? true : false;
    this.options.isOverlapAllowed = this.options.isOverlapAllowed == false ? false : true;
    this.options.isTextBoxForAll = this.options.isTextBoxForAll ? true : false;
    this.options.isTextBoxForNone = this.options.isTextBoxForNone ? true : false;
    this.options.vKeyPadHolderId = this.options.vKeyPadHolderId ? this.options.vKeyPadHolderId : "";
    this.options.cardsHolder = this.options.cardsHolder ? this.options.cardsHolder : null;
    this.options.bottomSpace = this.options.bottomSpace ? this.options.bottomSpace : 0;
    this.options.zoomFactor = this.options.zoomFactor ? this.options.zoomFactor : 10;
    this.options.topCardClass = this.options.topCardClass ? this.options.topCardClass : "selectedCard";
    this.options.defaultFS = this.options.defaultFS ? this.options.defaultFS : 24;
    this.options.defaultValues = this.options.defaultValues ? this.options.defaultValues : [];
    this.options.leverSize = this.options.leverSize ? this.options.leverSize : {w:30, h:30};
    this.options.isShowWhole = this.options.isShowWhole ? this.options.isShowWhole : false;
    this.options.customLabels = this.options.customLabels ? this.options.customLabels : [];
    this.options.showLabelEvery = !isNaN(this.options.showLabelEvery) ? this.options.showLabelEvery : null;
    this.options.applyKeyPadCallBack = this.options.applyKeyPadCallBack ? this.options.applyKeyPadCallBack : this.ApplyKeyPad;
    this.cardsData = [];
    this.values = [];
    this.fractionValues = [];
    this.wholeValues = [];
    this.decimalValues = [];
    this.wholeEquation = "";
    this.decimalEquation = "";
    this.fractionEquation = "";
    this.options.aniTime = 200;
    this.rulerH = 18;
    this.isBusy = false;
    this.isAnimating = false;
    this.rulerLocked = false;
    this.currentMode = "";
    this.zoomState = 0;
    
    ////PrivateVars
    this.orgNumericType = this.options.numericType;
    this.orgInterval = this.options.xInterval;
    this.orgTickStart = this.options.curTickStart;
    this.orgTickCount = this.options.curTicks;
    this.showPerVal = 1;
    this.minTickValue = 0;
    this.maxTickValue = 0;
    
    this.visibleWidth = 0;
    this.NumericKeypad;
    this.diffH = 34;
    this.editableTextboxClass = "numBox";
    this.displayBoxClass = "numDistDisp";
    this.equationBoxClass = "numEqBox";
    this.equationHolderClass = "equationHolder";
    this.eqInterSymClass = "eqInterSymbols";
    this.equationResult = 0;
    this.touchSense = 10;
    this.isRulerTouched = false;
    this.isCardTouched = false;
    this.touchedCardIndex = -1;
    this.currentValue = null;
    this.prevTouchedPos = null;
    this.touchCoords = [];
    this.initalRulerX = 0;
    this.initalRulerScale = 0;
    this.rulerT = 0;
    this.isDotTouched = false;
    this.isArrowTouched = false;
    this.touchedDotIndex = [];
    this.startPosValue = 0;
    this.startPosVariation = 0;
    this.isMoved = false;
    this.rulerSupport = [];
    this.marginMovement = 0;
    this.topSpace = this.options.topSpace ? this.options.topSpace : 0;
    this.totalHeight = 0;
    this.supportTop = 0;
    
    //Ready
    this.init();
};
Numberline.prototype = {
    init: function () {
        this.container = $("<div style=\"position:absolute; z-index:4; width:100%; height:100%; top:0px; left:0px; right:0px; margin:auto;\"></div>");
        this.scroller = $("<div style=\"position:absolute; height: 100%; margin-left:" + this.widthAdjMargin + "px; margin-top:"+this.topSpace+"px;\" class=\"scrollrContainer\"></div>");
        this.container.append(this.scroller);
        this.container.css({"overflow":"hidden"});
        this.rulerLine = $("<canvas class=\"ruler\"></canvas>");
        this.superContainer.append(this.container);
        this.totalHeight = this.superContainer.height() - this.topSpace;
        this.supportTop = this.totalHeight - this.options.bottomSpace - this.rulerH - 55;
        var supportH = this.rulerH + 20;
        this.visibleWidth = this.superContainer.width() - this.widthAdjMargin * 2;
        this.scroller.append(this.rulerLine);
        this.rulerSupport = [$("<canvas style=\"position:absolute; z-index:5; top:0px; left:0px; height:" + supportH + "px; width:" + this.widthAdjMargin + "px; margin-top:"+(this.supportTop + this.topSpace)+"px;\" class=\"rulerSupport\"></canvas>"),
                            $("<canvas style=\"position:absolute; z-index:5; top:0px; left:" + (this.superContainer.width() - this.widthAdjMargin) + "px; height:" + supportH + "px; width:" + this.widthAdjMargin + "px; margin-top:"+(this.supportTop + this.topSpace)+"px;\" class=\"rulerSupport\"></canvas>")];
        this.superContainer.append(this.rulerSupport[0]).append(this.rulerSupport[1]);
        this.setMinMaxTicks();
        var _this = this;
        if (this.isTouchDevice()) {
            this.rulerLine.bind('touchstart', function (event) { _this.onRulerDown(event); });
            $(window).bind('touchstart', function (event) { _this.windowTouch(event); });
            $(window).bind('touchmove', function (event) { _this.onRulerMove(event); });
            $(window).bind('touchend', function (event) { _this.onRulerUp(event); });
        }
        else {
            this.rulerLine.bind('mousedown', function (event) { _this.onRulerDown(event); });
            $(window).bind('mousedown', function (event) { _this.windowTouch(event); });
            $(window).bind('mousemove', function (event) { _this.onRulerMove(event); });
            $(window).bind('mouseup', function (event) { _this.onRulerUp(event); });
        }
        $("." + this.displayBoxClass).delegate("click", function (event) { _this.displayBoxClick(event) });
        this.setTickPosition(this.options.curTickStart);
        if (!this.options.isKeyValuesLinked && this.equationHolder) {
            this.equationHolder.addClass(this.editableTextboxClass).addClass(this.equationHolderClass);
        }
          try {
            this.NumericKeypad = new vKeyPad("." + this.displayBoxClass);
            this.EquationKeypad = new vKeyPad("." + this.equationHolderClass, this.equationHolderClass);
            this.NumericKeypad.enableDecimal(true);
            this.NumericKeypad.enableFraction(true);
            this.NumericKeypad.triggerChange = function (target) { _this.valueKeyed(target); };
        }
        catch (e) { console.warn("vKeyPad class is missing."); }
        if (this.options.cardsHolder) {
            var cards = this.options.cardsHolder.children();
            for(var i=0; i<cards.length; i++) {
                var cardData = {};
                cardData.card = cards.eq(i);
                cardData.orginal = {x: cardData.card.position().left, y: cardData.card.position().top};
                cardData.current = {x: cardData.orginal.x, y: cardData.orginal.y};
                this.cardsData.push(cardData);
            }
            var isTouchDevice = this.isTouchDevice();
            var _this = this;
            for(i=0; i<this.cardsData.length; i++) {
                var cardData = {};
                cardData = this.cardsData[i];
                cardData.card.css({"position":"absolute", "left":cardData.orginal.x+"px", "top":cardData.orginal.y+"px", "margin":"0px"});
                if (!isTouchDevice) cardData.card.bind("mousedown", function(event){ _this.onCardStart(event, this); })
                else cardData.card.bind("touchstart", function(event){ _this.onCardStart(event, this); })
            }
            if (!isTouchDevice){
                $(window).bind("mouseup", function(event){ _this.onCardUp(event); })
                $(window).bind("mousemove", function(event){ _this.onCardMove(event); })
            }
            else{
                $(window).bind("touchend", function(event){ _this.onCardUp(event); })
                $(window).bind("touchmove", function(event){ _this.onCardMove(event); })
            }
        }
        this.loadValues();
        this.setNumericState();
    },
    ApplyKeyPad:function(type){
        try{
            if (type == "inline")
                return new vKeyPad("." + this.displayBoxClass, this.options.vKeyPadHolderId);
            else if (type == "equationBox") return new vKeyPad("." + this.equationHolderClass, this.options.vKeyPadHolderId , {multiInputClass: this.equationHolderClass});
        }
        catch(e){ this.warn("vKeyPad class is missing."); }
    },
    triggerParseMath:function(){ },
    loadValues:function(values){
        if (!values) values = this.options.defaultValues;
        this.removeAllValues(this.values);
        for(var i=0; i<values.length; i++){
            var sV = values[i];
            var v = {};
            for (var k in sV) {
                if (k == "displayBox") { }
                else if (k == "equationBox") { }
                else v[k] = sV[k];
            }
            var cardData = this.cardsData[sV.cardIndex];
            cardData.current.y = sV.cardYPos-cardData.card.outerHeight()/2;
            if(v.to == undefined || v.to == null) v.to = null;
            this.values.push(v);
            $("."+this.options.topCardClass).removeClass(this.options.topCardClass);
            cardData.card.addClass(this.options.topCardClass);
        }
        this.setRulerWidth();
    },
    setMinMaxTicks:function(){
        this.minTickValue = this.options.minimumStart * (this.options.numericType == "fraction" ? this.options.denominator : 1);
        this.maxTickValue = this.options.maximumEnd * (this.options.numericType == "fraction" ? this.options.denominator : 1);
        if (this.options.noNegative && this.minTickValue > 0) this.minTickValue = 0;
    },
    onCardStart:function(event, target){
        var touches = this.touchCoordsFromEvent(event, true);
        this.prevTouchedPos = touches;
        this.isCardTouched = true;
        for(var i=0; i<this.cardsData.length; i++){
            var cardData = this.cardsData[i];
            if (cardData.card[0] == target){
                this.touchedCardIndex = i;
                break;
            }
        }
        var cardValueIndexes = this.indexOfByObjsElement(this.values, ["type", "cardIndex"], ["card", this.touchedCardIndex]);
        if (cardValueIndexes.length > 0){
            var index = cardValueIndexes[0];
            var lastIndex = this.values.length-1;
            if (index != lastIndex) {
                var lastValue = JSON.parse(JSON.stringify(this.values[lastIndex]));
                this.values[lastIndex] = JSON.parse(JSON.stringify(this.values[index]));
                this.values[index] = lastValue;
                $(target).parent().append($(target));
            }
            this.currentValue = this.values[lastIndex];
            if (this.currentValue.static) {
                this.touchedCardIndex = -1;
                this.isCardTouched = false;
                this.currentValue = null;
            }
        }
        else this.currentValue = null;
        
        this.setSelectCard($(target));
        
        this.rulerSupport[0].hide();
        this.rulerSupport[1].hide();
    },
    setSelectCard:function(card){
        $("."+this.options.topCardClass).removeClass(this.options.topCardClass);
        if (card.parent()[0] != this.options.cardsHolder[0]) card.addClass(this.options.topCardClass);
    },
    onCardMove:function(event){
        if (this.isCardTouched && this.touchedCardIndex >= 0) {
            var touches = this.touchCoordsFromEvent(event, false);
            var targetData = this.cardsData[this.touchedCardIndex];
            var target = targetData.card;
            if (this.prevTouchedPos && touches.length == 1 && target) {
                var touchVariation = {x: this.prevTouchedPos[0].x - touches[0].x, y: this.prevTouchedPos[0].y - touches[0].y};
                var left = target.position().left;
                var top = target.position().top;
                left -= touchVariation.x;
                top -= touchVariation.y;
                var parent = target.parent();
                var leftMax = parent.outerWidth(true)-target.outerWidth(true);
                var leftMin = 0;
                var topMin = this.container.offset().top - parent.offset().top;
                var topMax = parent.outerHeight(true)-target.outerHeight(true);
                var breakDrag = false;
                var isTargetAbove = true;
                var noTarget = false;
                if (this.options.cardsHolder.position().top > this.container.position().top) isTargetAbove = true;
                else isTargetAbove = false;
                if (parent[0] != this.options.cardsHolder[0]){
                    isTargetAbove = !isTargetAbove;
                    noTarget = true;
                    leftMin -= this.widthAdjMargin;
                    leftMin -= this.getRulerX();
                }
                
                if (left < leftMin){
                    left = leftMin;
                    breakDrag = true;
                }
                else if (left > leftMax){
                    left = leftMax;
                    breakDrag = true;
                }
                
                if (top < 0 && (!isTargetAbove || noTarget)){
                    top = 0;
                    breakDrag = true;
                }
                else if (top < topMin && (isTargetAbove || noTarget)){
                    top = topMin;
                    breakDrag = true;
                }
                else if (top > topMax && (isTargetAbove || noTarget)){
                    top = topMax;
                    breakDrag = true;
                }
                
                target.css({"left":left+"px", "top":top+"px"});
                
                if (parent[0] != this.options.cardsHolder[0]){
                    targetData.current = {x:left, y:top};
                    var value = this.getCardValue(targetData);
                    var cardValue = this.currentValue;
                    if (cardValue){
                        this.touchedDotIndex.push({"type":"from", "value":this.values.indexOf(cardValue)});
                        cardValue.from = value;
                        cardValue.cardYPos = top+target.outerHeight()/2;
                    }
                    
                    this.drawRuler();
                }
                
                this.prevTouchedPos = touches;
            }
        }
    },
    onCardUp:function(event) {
        this.touchedDotIndex = [];
        if (this.isCardTouched && this.touchedCardIndex >= 0) {
            var touches = this.touchCoordsFromEvent(event, false);
            var targetData = this.cardsData[this.touchedCardIndex];
            var target = targetData.card;
            if (touches.length == 1 && target) {
                var isRevert = true;
                var topMostParent = this.superContainer;
                var parentTop = topMostParent.offset().top;
                var parentLeft = topMostParent.offset().left;
                var targetTop = target.offset().top - parentTop;
                var targetLeft = target.offset().left - parentLeft;
                var containerTop = this.container.position().top;
                if (targetTop >= containerTop && targetTop <= containerTop+this.container.height()) isRevert = false;
                if (isRevert) target.animate({"left":targetData.orginal.x+"px", "top":targetData.orginal.y+"px"}, 100);
                else if (target.parent()[0] == this.options.cardsHolder[0]){
                    var lVar = this.container.offset().left - parentLeft;
                    var tVar = this.container.offset().top - parentTop;
                    this.scroller.append(target);
                    var rulerX = -(this.getRulerX()+this.widthAdjMargin);
                    targetLeft += rulerX;
                    targetLeft -= lVar;
                    targetTop -= tVar;
                    if (targetTop >= this.container.height()-target.outerHeight()) targetTop = this.container.height()-target.outerHeight();
                    if (targetLeft - rulerX + target.width() > this.container.width()) targetLeft = this.container.width()+rulerX-target.outerWidth();
                    else if (targetLeft - rulerX < 0) targetLeft = rulerX;
                    target.css({"top":targetTop+"px", "left":targetLeft+"px"});
                    targetData.current = {x:targetLeft, y:targetTop};
                    var value = this.getCardValue(targetData);
                    this.addPoint(value, true, {cardIndex:this.touchedCardIndex, yPos: targetTop+target.outerHeight()/2});
                }
                this.setSelectCard(target);
            }
        }
        this.rulerSupport[0].show();
        this.rulerSupport[1].show();
        this.drawRuler();
        this.prevTouchedPos = null;
        this.isCardTouched = false;
        this.touchedCardIndex = -1;
    },
    validateCards:function(){
        var dynamicCardsIndexes = this.indexOfByObjsElement(this.values, ["type", "static"], ["card", false]);
        var correctCount = 0;
        var inCorrectCount = 0;
        for(var i=0; i<dynamicCardsIndexes.length; i++){
            var value = this.values[dynamicCardsIndexes[i]];
            var cardData = this.cardsData[value.cardIndex];
            var keyedValue = this.getCardKeyedValue(cardData.card);
            if (keyedValue == value.from.toString()) correctCount ++;
            else inCorrectCount++;
        }
        return {correct: correctCount, incorrect:inCorrectCount};
    },
    getCardKeyedValue:function(card){
        var val = "";
        var textBox = card.find("input");
        if (textBox.length > 0) val = textBox[0].value;
        return val;
    },
    getCardValue:function(cardData){
        var xPosition = cardData.card.offset().left - this.container.offset().left - this.widthAdjMargin + cardData.card.width()/2;
        var value;
        if(this.options.isForceSnap) value = this.roundCorrectly((Math.round((xPosition / this.tickSpace) - 0.5) + this.startPosValue) * this.options.xInterval);
        else value = touchValue = this.snapIfNecessary((((xPosition / this.tickSpace)-0.5) + this.startPosValue) * this.options.xInterval);
        return value;
    },
    addLever:function(options){
        var leverIndexes = this.indexOfByObjsElement(this.values, ["type"], ["lever"]);
        if (leverIndexes.length <= 0) {
            var fromValue = options.from;
            if (isNaN(fromValue)) fromValue = (this.options.curTickStart + Math.ceil(this.options.curTicks/2))*this.options.xInterval;
            this.addPoint(fromValue, true, {type:"lever", to:options.to, color:options.strokeColor, fillColor:options.fillColor, angle:options.angle});
            this.drawRuler();
        }
    },
    tossLever:function(){
        var leverIndexes = this.indexOfByObjsElement(this.values, ["type"], ["lever"]);
        var pointIndexes = this.indexOfByObjsElement(this.values, ["type"], ["emptyPoint"]);
        if (leverIndexes.length > 0 && pointIndexes.length > 0) {
            var value = this.values[leverIndexes[0]];
            var _this = this;
            var fromAngle = value.angle ? value.angle : 0;
            if (fromAngle < 0) fromAngle += 360;
            var toAngle = 0;
            if (fromAngle > 90 && fromAngle < 270) toAngle = 0;
            else toAngle = 180;
            var currentAngle = fromAngle;
            var incValue = 4;
            var isInc = toAngle > currentAngle;
            this.isAnimating = true;
            value.animated = true;
            value.fromAngle = fromAngle;
            var intervalTimer = setInterval(function(){
                if (isInc) currentAngle += incValue;
                else currentAngle -= incValue;
                value.angle = currentAngle;
                if ((isInc && currentAngle >= toAngle) || (!isInc && currentAngle <= toAngle)){
                    if (isInc) {
                        value.to = value.from + value.distance;
                    }
                    else {
                        value.to = value.from - value.distance;
                    }
                    _this.isAnimating = false;
                    _this.onTossComplete(value);
                    clearInterval(intervalTimer);
                }
                _this.drawRuler();
            }, 12);
        }
    },
    onTossComplete:function(value){
        var pointIndexes = this.indexOfByObjsElement(this.values, ["type"], ["emptyPoint"]);
        if (pointIndexes.length >= 0) {
            var pointValue = this.values[pointIndexes[0]];
            if(pointValue.from == value.to) this.tossResult(true);
            else this.tossResult(false);
        }
    },
    tossResult:function(result){
        
    },
    touchCoordsFromEvent:function(event, isDown){
        var touches = [];
        if (isDown) {
            if (this.isTouchDevice())
                for (var tInd = 0; tInd < event.originalEvent.touches.length; tInd++)
                    touches[tInd] = { x: event.originalEvent.touches[tInd].pageX, y: event.originalEvent.touches[tInd].pageY };
            else touches[0] = { x: event.pageX, y: event.pageY };
        }
        else{
            if (this.isTouchDevice())
                for (var tInd = 0; tInd < event.originalEvent.changedTouches.length; tInd++)
                    touches[tInd] = { x: event.originalEvent.changedTouches[tInd].pageX, y: event.originalEvent.changedTouches[tInd].pageY };
            else touches[0] = { x: event.pageX, y: event.pageY };
        }
        return touches;
    },
    displayBoxTemplate: function () {
        return $("<div style=\"position:absolute; top:0px; left:500px;\" class=\"" + this.displayBoxClass + " " + this.editableTextboxClass + "\" contentEditable=\"false\"></div>")[0];
    },
    equationBoxTemplate: function () {
        return $("<div class=\"" + this.equationBoxClass + "\"></div>")[0];
    },
    fracionToValue: function (fractionString, customDenominator) {
        var mixed = 0;
        var numerator = 0;
        var sourceDenominator = customDenominator ? customDenominator : this.options.denominator;
        var denominator = sourceDenominator;
        var indexOfSpace = fractionString.indexOf(" ");
        var indexOfSlash = fractionString.indexOf("/");
        if (indexOfSpace > 0) mixed = fractionString.substr(0, indexOfSpace);
        else if (indexOfSlash < 0) mixed = parseInt(fractionString);
        if (indexOfSlash > 0) {
            try {
                denominator = fractionString.substr(indexOfSlash + 1);
                if (!denominator) denominator = sourceDenominator;
                numerator = fractionString.substr(0, indexOfSlash);
                if (indexOfSpace > 0) numerator = numerator.substr(indexOfSpace + 1);
            }
            catch (e) { }
        }
        var value = ((parseInt(mixed * denominator) + parseInt(numerator)) / parseInt(denominator)) * sourceDenominator;
        value = Math.round(value);
        return { value: value, denominator: parseInt(denominator), numerator: parseInt(numerator), mixed: parseInt(mixed) };
    },
    valueKeyed: function (target) {
        if (target) {
            var valueIndexes = this.indexOfByObjsElement(this.values, ["displayBox"], [target]);
            if (valueIndexes.length > 0) {
                var valueIndex = valueIndexes[0];
                var typedValue = $(target).children().eq(0).attr("alttext");
                typedValue = typedValue ? typedValue : "";
                if (this.options.isKeyValuesLinked) {
                    var toValue = this.values[valueIndex].to;
                    var direction = this.values[valueIndex].to < this.values[valueIndex].from;
                    if (this.options.numericType == "fraction") {
                        var extraVal = this.fracionToValue(typedValue, this.options.denominator).value;
                        if (this.values[valueIndex].type == "flatLine") toValue = this.values[valueIndex].from + ((direction ? -1 : 1) * Math.abs(extraVal));
                        else toValue = this.values[valueIndex].from + extraVal;
                    }
                    else {
                        typedValue = this.roundCorrectly(Math.round(typedValue / this.options.xInterval) * this.options.xInterval);
                        if (this.values[valueIndex].type == "flatLine") toValue = this.values[valueIndex].from + ((direction ? -1 : 1) * Math.abs(typedValue));
                        else toValue = this.values[valueIndex].from + typedValue;
                    }
                    this.values[valueIndex].to = this.roundCorrectly(toValue);
                    this.drawRuler();
                }
                else {
                    this.values[valueIndex].keyedValue = typedValue.trim();
                }
            }
        }
    },
    displayBoxClick: function (event) {
        var clickedObjs = this.indexOfByObjsElement(this.values, ["displayBox"], [event.target]);
        if (clickedObjs.length > 0) {
            if (this.currentMode == "remove") {
                this.removeValue(this.values, clickedObjs[0]);
                this.drawRuler();
            }
        }
    },
    windowTouch: function (event) { },
    getRulerX: function () {
        return parseFloat(this.scroller.css("margin-left").replace("px", "")) - this.widthAdjMargin;
    },
    onRulerDown: function (event) {
        this.isMoved = false;
        this.touchCoords = [];
        this.touchedDotIndex = [];
        if (!this.isBusy && !this.isAnimating) {
            this.isRulerTouched = true;
            this.touchCoords = this.touchCoordsFromEvent(event, true);
            if (this.touchCoords.length > 1) {
                this.isDotTouched = false;
                this.isRulerTouched = false;
                return;
            }
            this.initalRulerX = this.getRulerX();
            this.initalRulerScale = this.options.curTicks;
            this.isDotTouched = false;
            this.isArrowTouched = false;
            var touchedDistance = -((this.touchCoords[0].y - (this.container.offset().top+this.topSpace)) - this.rulerT);
            var touchX = this.touchCoords[0].x - this.container.offset().left + this.startPosVariation - this.widthAdjMargin - this.marginMovement;
            var touchPreVal = 0;
            if(this.options.isForceSnap) touchPreVal = Math.round((touchX / this.tickSpace) - 0.5);
            else touchPreVal = (touchX / this.tickSpace) - 0.5;
            var tempVal, tempIndx, touchValue, possibleLevel = 0;
            if (touchedDistance > 10) this.isArrowTouched = true;
            var circleTolerence = this.findTolerence();
            possibleLevel = 0;
            if (touchedDistance > 10 && touchedDistance < 32) possibleLevel = 0;
            else if (touchedDistance > 10) possibleLevel = Math.floor((touchedDistance - 10) / this.diffH);
            
            if (this.cardsData.length) this.isArrowTouched = false;
            if (Math.abs(touchedDistance) < this.touchSense || this.isArrowTouched || this.cardsData.length) {
                var isDeleted = false;
                var isDotTouched = false;
                if (Math.abs(touchX - ((touchPreVal + 0.5) * this.tickSpace)) <= this.options.pointRad * 2) isDotTouched = true;
                if (isDotTouched || touchedDistance) {
                    if(this.options.isForceSnap) touchValue = this.roundCorrectly((touchPreVal + this.startPosValue) * this.options.xInterval);
                    else touchValue = this.snapIfNecessary((touchPreVal + this.startPosValue) * this.options.xInterval);
                    var fromDot = this.indexOfByObjsElement(this.values, ["from", this.isArrowTouched ? "yLevel" : "","static"], [touchValue, possibleLevel, false], null, null, circleTolerence);
                    var toDot = this.indexOfByObjsElement(this.values, ["to", this.isArrowTouched ? "yLevel" : "","static"], [touchValue, possibleLevel, false], null, null, circleTolerence);
                    if (fromDot.length > 0 || toDot.length > 0) {
                        this.isDotTouched = true;
                        if (this.currentMode.indexOf("remove") < 0) {
                            if (fromDot.length > 0 && !this.isArrowTouched) this.touchedDotIndex.push({ "type": "from", "value": fromDot[0] });
                            else if (toDot.length > 0) this.touchedDotIndex.push({ "type": "to", "value": toDot[0] });
                            else if (this.isArrowTouched && fromDot.length > 0) this.touchedDotIndex.push({ "type": "from", "value": fromDot[0] });
                            if (this.touchedDotIndex.length == 1) {
                                this.values.move(this.touchedDotIndex[0].value, this.values.length - 1);
                                this.touchedDotIndex[0].value = this.values.length - 1;
                            }
                            else if (this.touchedDotIndex.length > 1) {
                                if (this.touchedDotIndex[0].value > this.touchedDotIndex[1].value) {
                                    this.values.move(this.touchedDotIndex[0].value, this.values.length - 1);
                                    this.touchedDotIndex[0].value = this.values.length - 1;
                                    this.values.move(this.touchedDotIndex[1].value, this.values.length - 2);
                                    this.touchedDotIndex[1].value = this.values.length - 2;
                                }
                                else {
                                    this.values.move(this.touchedDotIndex[1].value, this.values.length - 1);
                                    this.touchedDotIndex[1].value = this.values.length - 1;
                                    this.values.move(this.touchedDotIndex[0].value, this.values.length - 2);
                                    this.touchedDotIndex[0].value = this.values.length - 2;
                                }
                            }
                            this.drawRuler();
                        }
                        else if (this.currentMode.indexOf("remove") >= 0) {
                            this.isDotTouched = false;
                            this.isRulerTouched = false;
                            if (this.isArrowTouched && toDot.length > 0){
                                this.removeValue(this.values, toDot[0]);
                                isDeleted = true;
                            }
                            else if (!this.isArrowTouched && fromDot.length > 0){
                                this.removeValue(this.values, fromDot[0]);
                                isDeleted = true;
                            }
                            this.drawRuler();
                        }
                    }
                }
                if (this.currentMode.indexOf("remove") >= 0 && !isDeleted) {
                    var touchedPos = {x:this.touchCoords[0].x, y:this.touchCoords[0].y};
                    touchedPos.y -= this.container.offset().top+this.topSpace;
                    touchedPos.x += -parseFloat(this.scroller.css("margin-left").replace("px", "")) - this.superContainer.offset().left;
                    for (var pI=this.values.length-1; pI>=0; pI--) {
                        var cP = this.values[pI];
                        if (cP.type == "arrow") {
                            try {
                                var isTouched = this.isPointInCurve(touchedPos, cP.linePos.p0, cP.linePos.p1, cP.linePos.p2);
                                if(isTouched){
                                    this.isDotTouched = false;
                                    this.isRulerTouched = false;
                                    this.removeValue(this.values, pI);
                                    this.drawRuler();
                                    break;
                                }
                            } catch(e) { }
                        }
                        else if (cP.type == "flatLine") {
                            var tolerence = this.options.lineThickness*5;
                            var isTouched = false;
                            var minX = Math.min(cP.linePos.p0.x, cP.linePos.p1.x);
                            var maxX = Math.max(cP.linePos.p0.x, cP.linePos.p1.x);
                            if (touchedPos.x > minX && touchedPos.x < maxX) {
                                if (Math.abs(touchedPos.y - cP.linePos.p0.y) < tolerence){
                                    this.isDotTouched = false;
                                    this.isRulerTouched = false;
                                    this.removeValue(this.values, pI);
                                    this.drawRuler();
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            if (!this.rulerLocked) {
                if (this.NumericKeypad) {
                    this.valueKeyed(this.NumericKeypad.CurrentFocus);
                }
                this.OnMouseDragStart();
                this.drawRuler(true);
            }
        }
    },
    findTolerence: function(){
        var totalDisplayValue = (this.options.curTicks*this.options.xInterval);
        var ratio = this.visibleWidth/(this.options.pointRad*2);
        return totalDisplayValue/ratio;
    },
    snapIfNecessary: function(value){
        var pos = this.reminder(Math.abs(value), this.options.xInterval);
        pos = Math.abs(pos/this.options.xInterval);
        if (pos < 0.1 || pos > 0.9) value = this.roundCorrectly(value);
        return value;
    },
    removeValue: function (value, index) {
        try {
            if (this.values[index].displayBox != null) $(this.values[index].displayBox).remove();
        }
        catch (e) { }
        try {
            if (this.values[index].equationBox != null) $(this.values[index].equationBox).remove();
        }
        catch (e) { }
        this.values.splice(index, 1);
    },
    onRulerMove: function (event) {
        if (!this.isBusy && this.isRulerTouched && !this.isAnimating) {
            var circleTolerence = this.options.pointRad;
            var touches = [];
            if (this.touchCoords.length > 0) {
                var xVar = 0;
                touches = this.touchCoordsFromEvent(event, false);
                if (touches.length == 1) xVar = touches[0].x - this.touchCoords[0].x;
                touches[0].x += this.startPosVariation - this.marginMovement;
                if (this.touchCoords.length == 1 && !this.isDotTouched && !this.rulerLocked) {
                    var containerWidth = this.visibleWidth - this.widthAdjMargin;
                    if (xVar > containerWidth) xVar = containerWidth;
                    else if (xVar < -containerWidth) xVar = -containerWidth;
                    var newX = this.initalRulerX + xVar;
                    var movementDetails = this.setDraggingPosition(newX, true);
                    if (movementDetails.limited) xVar = movementDetails.xVar;
                    if (this.OnMouseDragging(xVar)) return;
                    this.applyMarginLeft(movementDetails.xPos);
                }
                else if (this.isDotTouched && touches.length == 1) {
                    var touchX = touches[0].x - this.container.offset().left - this.widthAdjMargin - this.marginMovement;
                    var touchY = touches[0].y - (this.container.offset().top+this.topSpace);
                    var touchValue=0;
                    if(this.options.isForceSnap) touchValue = this.roundCorrectly((Math.round((touchX / this.tickSpace) - 0.5) + this.startPosValue) * this.options.xInterval);
                    else touchValue = this.snapIfNecessary((((touchX / this.tickSpace) - 0.5) + this.startPosValue) * this.options.xInterval);
                    if (this.options.isMinLimit && touchValue < this.minTickValue) touchValue = this.minTickValue;
                    if (this.options.isMaxLimit && touchValue > this.maxTickValue) touchValue = this.maxTickValue;
                    if (this.currentMode.indexOf("remove") < 0) {
                        var isChanged = false, pass = true;
                        for (var i = 0; i < this.touchedDotIndex.length; i++) {
                            var pointDetail = this.touchedDotIndex[i];
                            if(!this.options.isOverlapAllowed) {
                                var samePointVals = this.indexOfByObjsElement(this.values, ["from"], [touchValue], 0);
                                for (var s=0; s<samePointVals.length; s++) if(samePointVals[s] != pointDetail.value) pass = false;
                            }
                            if (this.values[pointDetail.value][pointDetail.type] != touchValue && pass) {
                                this.values[pointDetail.value][pointDetail.type] = touchValue;
                                isChanged = true;
                            }
                        }
                        if (isChanged) this.drawRuler();
                    }
                }
                if (!this.isMoved) this.isMoved = Math.abs(this.touchCoords[0].x - touches[0].x) > 10;
            }
        }
    },
    onRulerUp: function (event) {
        var touches = [];
        this.touchedDotIndex = [];
        touches = this.touchCoordsFromEvent(event, false);
        if (touches.length == 1 && this.touchCoords.length == 1 && this.isRulerTouched) {
            if (Math.abs(this.touchCoords[0].x - touches[0].x) < this.touchSense && Math.abs(this.touchCoords[0].y - touches[0].y) < this.touchSense && Math.abs((touches[0].y - (this.container.offset().top+this.topSpace) - this.rulerT)) < this.touchSense) {
                var touchX = touches[0].x - this.container.offset().left + this.startPosVariation - this.widthAdjMargin - this.marginMovement;
                var touchPreVal = (touchX / this.tickSpace) - 0.5;
                var nearTouchVal = touchPreVal % 1;
                nearTouchVal = Math.min(nearTouchVal, 1 - nearTouchVal);
                if (this.currentMode.indexOf("create") >= 0) {
                    var touchValue = 0;
                    var pass = true;
                    if(this.options.isForceSnap) touchValue = this.roundCorrectly((Math.round(touchPreVal) + this.startPosValue) * this.options.xInterval);
                    else touchValue = this.snapIfNecessary((touchPreVal + this.startPosValue) * this.options.xInterval);
                    if(!this.options.isOverlapAllowed) {
                        var samePointVals = this.indexOfByObjsElement(this.values, ["from"], [touchValue], 0);
                        if(samePointVals.length > 0) pass = false;
                    }
                    if(pass) pass = !this.isMoved;
                    if (this.options.isMinLimit && touchValue < this.minTickValue) touchValue = this.minTickValue;
                    if (this.options.isMaxLimit && touchValue > this.maxTickValue) touchValue = this.maxTickValue;
                    this.addPoint(touchValue, pass);
                    this.drawRuler();
                    try {
                        this.NumericKeypad.loadControls();
                    } catch(e) { }
                }
            }
        }
        if (!this.isBusy && this.isRulerTouched && !this.isAnimating) this.snapStartPos();
        this.isRulerTouched = false;
        this.isDotTouched = false;
        this.OnMouseDragStop();
    },
    addPoint:function(touchValue, pass, option){
        if (!option) option = {};
        var displayBox, equationBox;
        if (pass) {
            if (option.type != "lever" && this.currentMode != "addCard" && !this.options.isTextBoxForNone) {
                displayBox = this.currentMode == "createPoint" ? null : this.displayBoxTemplate();
                equationBox = this.currentMode == "createPoint" ? null : this.equationBoxTemplate();
                if(this.options.isTextBoxForAll) displayBox = this.displayBoxTemplate();
            }
            var pointData = {
                "from": touchValue,
                "to": null,
                "type": "",
                "color": null,
                "color2": "",
                "yLevel": 0,
                "displayBox": displayBox,
                "equationBox": equationBox,
                "denominator": this.options.numericType == "fraction" ? this.options.denominator : 1,
                "keyedValue": "",
                "static":false
            }
            if (displayBox) this.scroller.append(displayBox);
            if (equationBox && this.options.isKeyValuesLinked) this.equationHolder.append(equationBox);
            var initDist = this.showPerVal*this.options.xInterval;
            touchValue = Number(touchValue);
            if (option.type == "lever") {
                if (isNaN(option.to)) pointData.to = this.roundCorrectly(touchValue - initDist);
                else pointData.to = option.to;
                pointData.angle = option.angle ? option.angle : 0;
                pointData.fromAngle = 0;
                pointData.distance = initDist;
                pointData.type = "lever";
                pointData.animated = false;
            }
            else if (this.currentMode == "createForward") {
                pointData.to = this.roundCorrectly(touchValue + initDist);
                pointData.type = "arrow";
            }
            else if (this.currentMode == "createBackward") {
                pointData.to = this.roundCorrectly(touchValue - initDist);
                pointData.type = "arrow";
            }
            else if (this.currentMode == "createDifference") {
                pointData.type = "flatLine";
                pointData.to = this.roundCorrectly(touchValue + initDist);
            }
            else if (this.currentMode == "createPoint") pointData.type = "emptyPoint";
            else if (this.currentMode == "addCard"){
                pointData.type = "card";
                pointData.cardIndex = option.cardIndex;
                pointData.cardYPos = option.yPos;
            }
            this.values.push(pointData);
            this.triggerChange();
            if (!option.color) pointData.color = this.setPointColor(this.values.length-1);
            else pointData.color = option.color;
            if (option.fillColor) pointData.color2 = option.fillColor;
            
            if (pointData.type == "createDifference") {
                var fromPoint = this.indexOfByObjsElement(this.values, ["from", "type"], [pointData.from, "emptyPoint"]);
                var toPoint = this.indexOfByObjsElement(this.values, ["from", "type"], [pointData.to, "emptyPoint"]);
                if (fromPoint.length > 0) pointData.color = this.values[fromPoint].color;
                if (toPoint.length > 0) pointData.color2 = this.values[toPoint].color;
                if (fromPoint.length > 0 && toPoint.length > 0) {
                    if (fromPoint[0] > toPoint[0]) {
                        this.removeValue(this.values, fromPoint);
                        this.removeValue(this.values, toPoint);
                    }
                    else {
                        this.removeValue(this.values, toPoint);
                        this.removeValue(this.values, fromPoint);
                    }
                }
                else if (fromPoint.length > 0) this.removeValue(this.values, fromPoint);
                else if (toPoint.length > 0) this.removeValue(this.values, toPoint);
            }
        }
    },
    setPointColor:function(pIndex){
        var color = this.options.pointArrowColors[this.values.length % this.options.pointArrowColors.length];
        var nearbyArrows = this.getNearByArrows(pIndex);
        var hasColor = false;
        var iterationCount = 0;
        do{
            hasColor = false;
            for (var i=0; i<nearbyArrows.length; i++) {
                if(this.values[nearbyArrows[i]].color == color){
                    hasColor = true;
                    break;
                }
            }
            if (hasColor) {
                var index = Math.floor(Math.random()*this.options.pointArrowColors.length);
                if (index >= this.options.pointArrowColors.length) index = this.options.pointArrowColors.length-1;
                color = this.options.pointArrowColors[index];
            }
            iterationCount++;
        }
        while (hasColor && iterationCount < 100);
        return color;
    },
    isPointInCurve:function(p, p0, p1, p2) {
        var variationAllowed = this.options.lineThickness*5;
        var ax = p0.x - 2*p1.x + p2.x;
        var bx = 2*p1.x - 2*p0.x ;
        var cx = p0.x - p.x;

        var ay = p0.y - 2*p1.y + p2.y;
        var by = 2*p1.y - 2*p0.y ;
        var cy = p0.y - p.y;
        
        var t = -(cx*ay - cy*ax)/(bx*ay - by*ax);
        if (t < 0 || t > 1)
            return false;
        
        var q = this.bezierQuadratic(p0, p1, p2, t);
        
        return Math.abs(q.x - p.x) <= variationAllowed && Math.abs(q.y - p.y) <= variationAllowed;
    },
    bezierQuadratic:function(p0, p1, p2, t){
        x = (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x;
        y = (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y;
        return {x: x, y: y};
    },
    indexOfByObjElement: function (array, key, value) {
        value = this.roundCorrectly(value);
        var index = -1;
        for (var i = array.length - 1; i >= 0; i--)
            if (array[i][key] == value) {
                index = i;
                break;
            }
        return index;
    },
    indexOfByObjsElement: function (array, keys, values, exKeys, exValues, numberTolerence) {
        var indexes = [];
        if (!exKeys) exKeys = [];
        if (!keys) keys = [];
        if (!numberTolerence) numberTolerence = 0;
        for (var i = array.length - 1; i >= 0; i--) {
            var pass = true;
            for (key in array[i]) {
                if (pass) {
                    var keyIndx = keys.indexOf(key);
                    if (keyIndx >= 0 && pass) {
                        if((typeof values[keyIndx]).toString() == "number"){
                            try{
                                if (Math.abs(Math.abs(array[i][key])-Math.abs(values[keyIndx])) <= numberTolerence) pass = true;
                                else pass = false;
                            }
                            catch(e){ pass = false; }
                        }
                        else {
                            if (array[i][key] == values[keyIndx]) pass = true;
                            else pass = false;
                        }
                    }
                    keyIndx = exKeys.indexOf(key);
                    if (keyIndx >= 0 && pass) {
                        if (array[i][key] != exValues[keyIndx]) pass = true;
                        else pass = false;
                    }
                }
            }
            if (pass) {
                indexes.push(i);
            }
        }
        return indexes;
    },
    OnMouseDragStart: function () { },
    OnMouseDragging: function () { },
    OnMouseDragStop: function () { },
    setDraggingPosition: function (xPos, isDontApply) {
        var newX = xPos;
        var xVar = 0, isLimited = false;
        var minLimit = ((this.minTickValue / this.options.xInterval) + this.options.curTicks - this.options.curTickStart) * this.tickSpace - this.options.pointRad;
        var maxLimit = ((Math.ceil(this.maxTickValue / this.options.xInterval) + 1) - this.options.curTickStart) * this.tickSpace + this.options.pointRad;
        if (this.options.isMinLimit && newX > -minLimit) {
            newX = -minLimit;
            xVar = newX - this.initalRulerX;
            isLimited = true;
        }
        else if (this.options.isMaxLimit && newX < -maxLimit) {
            newX = -maxLimit;
            xVar = newX - this.initalRulerX;
            isLimited = true;
        }
        if (!isDontApply) this.applyMarginLeft(newX);
        return { limited: isLimited, xVar: xVar, xPos: newX };
    },
    applyMarginLeft: function (xPos) {
        this.scroller.css({ "margin-left": (xPos + this.widthAdjMargin) + "px" });
    },
    snapStartPos: function () {
        var graphPos = parseFloat(this.scroller.css("margin-left").replace("px", "")) - this.widthAdjMargin;
        var snapTo = Math.round(-graphPos / this.tickSpace) - this.options.curTicks + this.options.curTickStart;
        this.setTickPosition(snapTo, graphPos);
    },
    setTickPosition: function (startPos, graphPos, immediate) {
        var _this = this;
        var valueChanged = false;
        if (startPos != _this.options.curTickStart) {
            valueChanged = true;
            _this.options.curTickStart = startPos;
        }
        _this.isBusy = true;
        var showTick = startPos + this.options.curTicks;
        if (!graphPos) graphPos = parseFloat(this.scroller.css("margin-left").replace("px", "")) - this.widthAdjMargin;
        var basePos = this.options.curTicks * _this.tickSpace;
        if (!immediate) {
            var movedValue = Math.abs(graphPos % _this.tickSpace);
            if (movedValue > _this.tickSpace / 2) movedValue -= _this.tickSpace;
            this.scroller.css({ "margin-left": -(basePos + movedValue - this.widthAdjMargin) + "px" });
        }
        var newPos = -basePos + this.widthAdjMargin;
        this.drawRuler();
        if (!immediate && !this.options.doubleNumberline) {
            this.scroller.animate({ "margin-left": newPos + "px" }, { duration: _this.options.aniTime,
                complete: function () {
                    _this.isBusy = false;
                } 
            });
        }
        else if (!this.options.doubleNumberline) {
            this.scroller.css({ "margin-left": +newPos + "px" });
            _this.isBusy = false;
        }
        else _this.isBusy = false;
    },
    setRulerWidth: function (tickCount, isFocus, currentFocus) {
        var prevLen = this.options.curTicks;
        if (!tickCount) tickCount = this.options.curTicks;
        if (tickCount < this.options.minTicks) tickCount = this.options.minTicks;
        else if (tickCount > this.options.maxTicks) tickCount = this.options.maxTicks;
        //if (this.options.numericType == "fraction" && tickCount > this.options.maxVisibleTicks) tickCount = this.options.maxVisibleTicks;
        if (this.options.doubleNumberline) this.options.curTicks = tickCount - 1;
        else this.options.curTicks = tickCount;
        this.options.totalTicks = this.options.curTicks;
        this.options.visibleTicks = this.options.curTicks;
        this.commonTickVal = 1;
        if (this.options.curTicks > this.options.maxTicks) this.options.curTicks = this.options.maxTicks;
        if (this.isDoubleNumberline) this.tickSpace = ((this.visibleWidth - this.options.lineThickness) / this.options.curTicks);
        else this.tickSpace = this.visibleWidth / this.options.curTicks;
        //Fix for startSnap Issue >>
        var oldStart = this.options.curTickStart;
        this.snapStartPos();
        this.options.curTickStart = oldStart;
        //Fix for startSnap Issue <<
        this.drawRuler();
    },
    roundCorrectly: function (numVal) {
        var decInterval = this.options.xInterval % 1;
        var tenths = 1;
        if (decInterval != 0) {
            tenths = decInterval.toString().length - 2;
            numVal = this.roundTo(numVal, tenths);
        }
        else numVal = Math.round(numVal);
        return numVal;
    },
    roundTo: function (value, length) {
        var powerValue = Math.pow(10, length);
        return Math.round(parseFloat(value) * powerValue) / powerValue;
    },
    reminder: function (divident, divider) {
        var value = Math.abs(divident);
        var t = Math.floor(value/divider);
        value = value-(t*divider);
        while (value >= divider) value = this.roundTo(value - divider, 3);
        return value;
    },
    drawSupport: function () {
        this.setHiDPICanvas(this.rulerSupport[0][0], this.rulerSupport[0].width(), this.rulerSupport[0].height());
        this.setHiDPICanvas(this.rulerSupport[1][0], this.rulerSupport[1].width(), this.rulerSupport[1].height());
        var arrowXScale = 20;
        var arrowYScale = 15;
        var padding = 2;
        var supportRulerT = this.rulerT-this.supportTop;
        var bgTop = supportRulerT-this.options.lineThickness
        var hideBlockH = this.rulerSupport[0].height()-bgTop;
        var supportCTX_1 = this.rulerSupport[0][0].getContext("2d");
        var supportCTX_2 = this.rulerSupport[1][0].getContext("2d");
        supportCTX_1.clearRect(0, 0, this.rulerSupport[0].width(), this.rulerSupport[0].height());
        supportCTX_2.clearRect(0, 0, this.rulerSupport[1].width(), this.rulerSupport[1].height());
        supportCTX_1.beginPath();
        supportCTX_1.fillStyle = supportCTX_2.fillStyle = this.options.bgColor;
        var supportW = Math.min(this.widthAdjMargin, arrowXScale);
        supportCTX_1.rect(0, bgTop, supportW, hideBlockH);
        supportCTX_2.rect(this.rulerSupport[1].width() - supportW, bgTop, supportW, hideBlockH);
        var isRightEnd = ((this.options.curTickStart + this.options.curTicks) * this.options.xInterval <= this.maxTickValue && this.options.isMaxLimit) || !this.options.isMaxLimit;
        var isLeftEnd = (this.options.curTickStart * this.options.xInterval > this.minTickValue && this.options.isMinLimit) || !this.options.isMinLimit
        supportCTX_1.fill();
        supportCTX_2.fill();
        supportCTX_1.strokeStyle = supportCTX_2.strokeStyle = this.options.lineColor;
        supportCTX_1.fillStyle = supportCTX_2.fillStyle = this.rulerLocked ? this.options.disabledArrowCol : this.options.lineColor;
        supportCTX_1.lineWidth = supportCTX_2.lineWidth = this.options.lineThickness;
        supportCTX_1.beginPath();
        supportCTX_1.moveTo(padding, supportRulerT);
        supportCTX_1.lineTo(this.widthAdjMargin, supportRulerT);
        supportCTX_1.stroke();
        supportCTX_2.beginPath();
        supportCTX_2.moveTo(this.rulerSupport[1].width() - padding, supportRulerT);
        supportCTX_2.lineTo(this.rulerSupport[1].width() - this.widthAdjMargin, supportRulerT);
        supportCTX_2.stroke();
        if ((isRightEnd && this.options.forceRemoveArrows.indexOf("right") < 0) || this.options.forceAddArrows.indexOf("right") >= 0)
            this.drawArrow(supportCTX_2, this.rulerSupport[1].width(), supportRulerT, arrowXScale, arrowYScale, 0, 0, 3);
        if ((isLeftEnd && this.options.forceRemoveArrows.indexOf("left") < 0) || this.options.forceAddArrows.indexOf("left") >= 0)
            this.drawArrow(supportCTX_1, 0, supportRulerT, arrowXScale, arrowYScale, 180, 0, 3);
    },
    decimalLength: function (value) {
        var len = value.toString();
        if (len.indexOf(".") >= 0) {
            len = len.substr(len.indexOf(".") + 1);
            len = len.length;
        }
        else len = 0;
        return len;
    },
    zoom:function(type) {
        var zF = Math.round(this.options.zoomFactor);
        type = type.toLowerCase();
        var tickEnd, endValue;
        if (type == "in") {
            if (zF > 0) {
                var newInt = this.options.xInterval/zF;
                if (newInt >= 0.001) {
                    this.options.curTickStart *= zF;
                    this.options.xInterval = newInt;
                    if (this.values.length) {
                        var startValue = this.values[this.values.length-1].from;
                        this.options.curTickStart = Math.round((startValue/this.options.xInterval)-this.options.curTicks/2);
                    }
                    tickEnd = this.options.curTickStart+(this.options.curTicks-1);
                    this.zoomState++;
                }
            }
        }
        else if (type == "out") {
            if (zF > 0) {
                var newInt = this.options.xInterval*zF;
                if(newInt <= this.orgInterval){
                    this.options.curTickStart /= zF;
                    this.options.curTickStart = Math.round(this.options.curTickStart);
                    tickEnd = this.options.curTickStart+(this.options.curTicks-1);
                    this.options.xInterval = newInt;
                    this.zoomState--;
                }
            }
        }
        endValue = tickEnd*this.options.xInterval;
        var startValue = this.options.curTickStart*this.options.xInterval;
        if (this.options.isMaxLimit && endValue > this.maxTickValue){
            var moreVal = endValue-this.maxTickValue;
            this.options.curTickStart -= Math.floor(moreVal/this.options.xInterval);
        }
        if (this.options.isMinLimit && startValue < this.minTickValue) this.options.curTickStart = Math.floor(this.minTickValue/this.options.xInterval);
        this.setRulerWidth();
    },
    drawRuler: function (isDrawAll) {
        if (this.options.curTicks < this.options.minTicks) this.options.curTicks = this.options.minTicks;
        var maxLen = this.options.curTicks * 3;
        var extraWidth = 0;
        this.totalWidth = this.tickSpace * maxLen;
        if (this.isDoubleNumberline) {
            maxLen = (this.options.curTicks * 3) + 2;
            var newWidth = this.tickSpace * maxLen;
            extraWidth = newWidth - this.totalWidth;
            this.totalWidth = newWidth;
        }
        this.setHiDPICanvas(this.rulerLine[0], this.totalWidth, this.totalHeight);
        var ctx = this.rulerLine[0].getContext("2d");
        var rulerW = this.totalWidth;
        ctx.clearRect(0, 0, this.rulerLine.width(), this.rulerLine.height());
        ctx.strokeStyle = this.options.lineColor;
        ctx.fillStyle = this.options.textColor;
        var fontSuffix = "px \"mclarenregular\"";
        var defaultFS = this.options.defaultFS;
        var textSpace = 30;
        if (this.options.numericType == "fraction") textSpace = 40;
        var rulerT = this.rulerLine.height() - this.rulerH - textSpace - 5 - this.options.bottomSpace;
        ctx.font = defaultFS + fontSuffix;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineWidth = this.options.lineThickness;
        ctx.beginPath();
        this.rulerT = rulerT;
        var rulerLineDist = rulerW / maxLen;
        this.startPosValue = this.options.curTickStart;
        var xPos = 0;
        this.drawSupport();
        if (this.options.isMinLimit && this.options.curTickStart <= this.options.minimumStart){
            xPos = ((rulerLineDist * ((0/this.options.xInterval - this.startPosValue) + this.options.curTicks)) + rulerLineDist / 2) - this.startPosVariation;
            this.rulerSupport[0].hide();
        }
        else this.rulerSupport[0].show();
        ctx.moveTo(xPos, rulerT);
        ctx.lineTo(rulerW, rulerT);
        ctx.closePath();
        ctx.stroke();
        var xPos = -this.tickSpace / 2;
        
        var lastPointDetails = null;
        var curvePadding = 20;
        var pointCurveDist = this.options.pointRad + 6;
        ctx.save();
        if (this.isDoubleNumberline) {
            var newXPos = -this.tickSpace + this.options.lineThickness / 2;
            this.startPosVariation = xPos - newXPos;
            xPos = newXPos;
        }
        else this.startPosVariation = 0;
        if (this.isDoubleNumberline) this.marginMovement = parseInt(this.scroller.css("margin-left").replace("px", "")) - this.defaultMarginLeft();
        var _maxLen = this.options.maxTicks * 3;
        if (maxLen > _maxLen) maxLen = _maxLen;
        var showPerVal;
        if(this.options.showLabelEvery != null) showPerVal = this.options.showLabelEvery;
        else{
            if (this.options.numericType != "fraction") {
                showPerVal = Math.ceil(this.options.curTicks / this.options.maxVisibleTicks * 1.2);
                if (showPerVal > 1 && showPerVal <= 2) showPerVal = 5;
                else if (showPerVal > 2 && showPerVal <= 4) showPerVal = 5;
                else if (showPerVal > 4 && showPerVal <= 10) showPerVal = 10;
                else if (showPerVal > 10 && showPerVal <= 20) showPerVal = 20;
                showPerVal = showPerVal * this.options.xInterval;
            }
            else {
                showPerVal = Math.ceil(this.options.curTicks / this.options.maxVisibleTicks);
                if (showPerVal > 1 && showPerVal <= this.options.denominator) showPerVal = this.options.denominator;
                else if (showPerVal > 1) {
                    var newVal = 0;
                    do{
                        newVal += this.options.denominator;
                    }
                    while (newVal < showPerVal);
                    showPerVal = newVal;
                }
            }
            if (this.options.numericType == "decimal") showPerVal = showPerVal/this.options.xInterval;
            if (showPerVal <= 0) showPerVal = 1;
        }
        this.showPerVal = showPerVal;
        var leastPrinted = 0;
        var maxPrinted = 0;
        var intervalDecLen = this.decimalLength(this.options.xInterval);
        var halfValue = this.roundCorrectly(5 / (Math.pow(10, this.decimalLength(this.options.xInterval) - 1)));
        var placedTxtBoxes = [];
        for (var tickIndx = 0; tickIndx < maxLen; tickIndx++) {
            ctx.save();
            var numValInd = (tickIndx - this.options.curTicks + this.startPosValue);
            var numVal = this.options.xInterval * numValInd;
            numVal = this.roundCorrectly(numVal).toString();
            if (tickIndx == 0) leastPrinted = numVal;
            else if (tickIndx == maxLen - 1) maxPrinted = numVal;
            xPos += rulerLineDist;
            var isWithinFrame = false;
            var _isWithinFrame = false;
            if (xPos + this.marginMovement >= this.visibleWidth - this.options.lineThickness && xPos + this.marginMovement <= this.visibleWidth * 2) _isWithinFrame = true;
            if(_isWithinFrame || isDrawAll) isWithinFrame = true;
            ctx.strokeStyle = this.options.lineColor;
            ctx.lineWidth = this.options.lineThickness;
            var isFullNumber = false;
            var isHalfNumber = false;
            var isPrintNumber = false;
            if (this.options.xInterval < 1) {
                if (this.decimalLength(numVal) < intervalDecLen) isFullNumber = true;
                var halfNumber = this.roundCorrectly((this.roundCorrectly(numVal) / halfValue) * 10);
                isHalfNumber = Math.round(halfNumber) == halfNumber;
            }
            else if (this.options.numericType != "fraction") {
                var rem = numVal % showPerVal;
                if (rem == 0) isFullNumber = true;
                else if (rem == showPerVal / 2) isHalfNumber = true;
            }
            var mixedVal = 0, numerator = numVal, xPosVar = 0, denomLen = 0;
            var isNegativeNum = false;
            if (this.options.numericType == "fraction") {
                mixedVal = Math.floor(numerator / this.options.denominator);
                numerator = numerator - (this.options.denominator * mixedVal);
                if (numVal < 0 && numerator){
                    numerator = this.options.denominator-numerator;
                    mixedVal++;
                    isNegativeNum=true;
                }
                if (Math.abs(numerator) == 0) isFullNumber = true;
                isHalfNumber = false;
                var rem = numVal % showPerVal;
                if (rem == 0) isPrintNumber = true;
                else isPrintNumber = false;
                if (!isPrintNumber) isFullNumber = false;
                if(numerator == this.options.denominator/2) isHalfNumber = true;
                //else if (isPrintNumber && !isFullNumber) isHalfNumber = true;
            }
            else if (this.options.numericType == "decimal"){
                var rem = this.reminder(numValInd,showPerVal);
                if (rem == 0) isPrintNumber = true;
                else isPrintNumber = false;
            }
            else isPrintNumber = isFullNumber;
            if (this.options.isShowWhole) {
                if (numVal.toString().indexOf(".") >= 0) isPrintNumber = false;
                else isPrintNumber = true;
            }
            if(this.options.customLabels.length > 0){
                if (this.options.customLabels.indexOf(numVal) >= 0) isPrintNumber = true;
                else isPrintNumber = false;
            }
            if (((this.options.isMinLimit && numVal >= this.minTickValue) || !this.options.isMinLimit) && ((this.options.isMaxLimit && numVal <= this.maxTickValue) || !this.options.isMaxLimit)) {
                if (this.options.drawExtra || isWithinFrame) {
                    ctx.beginPath();
                    ctx.moveTo(xPos, rulerT);
                    ctx.lineTo(xPos, rulerT + ((isFullNumber ? this.rulerH : (isHalfNumber ? this.rulerH * 0.75 : this.rulerH * 0.5))));
                    ctx.closePath();
                    ctx.stroke();
                }
                if (this.options.numericType == "fraction" && isPrintNumber && isWithinFrame) {
                    var fontSizeVariation = 0.7;
                    var fSz = defaultFS;
                    if (!isFullNumber) fSz *= fontSizeVariation;
                    var textWidth;
                    var mixedValStr = mixedVal.toString();
                    var fracWidth = 0;
                    var redFac = 1;
                    var charSpace = 0;
                    var lastMChar = mixedValStr[mixedValStr.length - 1];
                    var lablPerUnlbld = showPerVal;
                    do {
                        ctx.font = fSz + fontSuffix;
                        numVal = this.roundCorrectly(mixedValStr);
                        textWidth = ctx.measureText(mixedValStr).width;
                        charSpace = (textWidth / mixedValStr.length);
                        fracWidth = charSpace * this.options.denominator.toString().length * (lastMChar == "1" ? 1 : fontSizeVariation * 1.2);
                        if (numerator != 0) textWidth += fracWidth;
                        fSz -= redFac;
                    }
                    while (textWidth > (this.tickSpace * lablPerUnlbld) - charSpace);
                    fSz += redFac;
                    var isOnlyNegative = false;
                    if (Math.abs(mixedVal) > 0 || numerator == 0 || isNegativeNum) {
                        ctx.font = fSz + fontSuffix;
                        if (numerator != 0) xPosVar = -fracWidth / 2;
                        var textVal;
                        if (Math.abs(mixedVal) == 0 && numerator != 0 && isNegativeNum){
                            textVal = "\u2013";
                            isOnlyNegative = true;
                        }
                        else textVal = mixedVal;
                        ctx.fillText(textVal, xPos + xPosVar, rulerT + this.rulerH + textSpace * 0.5);
                    }
                    if (Math.abs(mixedVal) > 0 || isOnlyNegative) xPosVar = -xPosVar + (textWidth - fracWidth * 2) / 2;
                    if (!isFullNumber) {
                        var lineLen = (this.options.denominator.toString().length * fSz * fontSizeVariation * 0.3);
                        var newFSz = (fSz * fontSizeVariation);
                        ctx.font = newFSz + fontSuffix;
                        var lineMidx = xPos + xPosVar;
                        var lineMidy = rulerT + this.rulerH + textSpace * 0.5;
                        ctx.fillText(numerator, lineMidx, lineMidy - newFSz * 0.6);
                        ctx.fillText(this.options.denominator, lineMidx, lineMidy + newFSz * 0.65);
                        ctx.strokeStyle = this.options.textColor;
                        ctx.lineWidth = fSz / 24;
                        ctx.beginPath();
                        ctx.moveTo(lineMidx - lineLen, lineMidy);
                        ctx.lineTo(lineMidx + lineLen, lineMidy);
                        ctx.closePath();
                        ctx.stroke();
                    }
                }
                else if (isPrintNumber && isWithinFrame) {
                    var fSz = defaultFS;
                    var textWidth;
                    var lablPerUnlbld = showPerVal / this.options.xInterval;
                    if (lablPerUnlbld > 1) lablPerUnlbld--;
                    do {
                        ctx.font = fSz + fontSuffix;
                        numVal = this.roundCorrectly(numVal);
                        textWidth = ctx.measureText(numVal).width;
                        fSz -= 1;
                    }
                    while (textWidth > this.tickSpace * lablPerUnlbld);
                    ctx.fillText(numVal, xPos, rulerT + this.rulerH + textSpace * 0.5);
                }
            }
            ctx.restore();
        }
        
        var arrowLength = 20;
        var arrowWidth = 14;
        for (var j = 0; j < this.values.length; j++){
            if (this.options.isMinLimit && this.values[j].from < this.minTickValue) this.values[j].from = this.minTickValue;
            if (this.options.isMaxLimit && this.values[j].from > this.maxTickValue) this.values[j].from = this.maxTickValue;
            if (this.options.isMinLimit && this.values[j].to < this.minTickValue) this.values[j].to = this.minTickValue;
            if (this.options.isMaxLimit && this.values[j].to > this.maxTickValue) this.values[j].to = this.maxTickValue;
            for (var xPIndx = 0; xPIndx < this.values.length; xPIndx++) {
                if (this.values[xPIndx].type == "flatLine") {
                    for (var i = 0; i < this.values.length; i++) {
                        if (i != xPIndx && this.values[i].type == "flatLine") {
                            var _f = Math.min(this.values[i].from, this.values[i].to);
                            var _t = Math.max(this.values[i].from, this.values[i].to);
                            var f = Math.min(this.values[xPIndx].from, this.values[xPIndx].to);
                            var t = Math.max(this.values[xPIndx].from, this.values[xPIndx].to);
                            if ((f >= _f && f < _t) || (_f >= f && _f < t)) {
                                if (this.values[xPIndx].yLevel == this.values[i].yLevel) {
                                    var yLevel = this.values[i].yLevel + 1;
                                    if (yLevel > 4) yLevel = 3;
                                    this.values[xPIndx].yLevel = yLevel;
                                }
                            }
                        }
                    }
                }
            }
        }
        this.equationResult = 0;
        var eqIndx = 0;
        var yLevelValues = [];
        for (var xPIndx = 0; xPIndx < this.values.length; xPIndx++) {
            var matchedArrows = [];
            var isTouchedPoint = false;
            for (var tIndx = 0; tIndx < this.touchedDotIndex.length; tIndx++)
                if (this.touchedDotIndex[tIndx].value == xPIndx) isTouchedPoint = true;
            ctx.save();
            var midDispX = 0, midDispY = 0;
            var xPos = ((rulerLineDist * ((this.values[xPIndx].from / this.options.xInterval - this.startPosValue) + this.options.curTicks)) + rulerLineDist / 2) - this.startPosVariation;
            var yPos = rulerT;
            if (isTouchedPoint) {
                ctx.shadowBlur = 5;
                ctx.shadowColor = this.options.glowColor;
            }
            else ctx.shadowBlur = 0;
            ctx.save();
            ctx.fillStyle = this.values[xPIndx].color;
            if (this.values[xPIndx].type != "card" && this.values[xPIndx].type != "lever") {
                var samePosDots = this.indexOfByObjsElement(this.values, ["from", "type"], [this.values[xPIndx].from, "emptyPoint"]);
                if (this.values[xPIndx].type != "flatLine" || (this.values[xPIndx].type == "flatLine" && samePosDots.length <= 0)) {
                    ctx.beginPath();
                    ctx.arc(xPos, yPos, this.options.pointRad, 0, Math.PI * 2, false);
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                    ctx.save();
                }
                ctx.strokeStyle = this.values[xPIndx].color;
                ctx.fillStyle = this.values[xPIndx].color;
                if (this.values[xPIndx].to != null && this.values[xPIndx].type == "arrow") {
                    var vertTolerence = this.options.xInterval*(this.options.curTicks/15);
                    matchedArrows = this.getNearByArrows(xPIndx, vertTolerence);
                    var toXpos = ((rulerLineDist * ((this.values[xPIndx].to / this.options.xInterval - this.startPosValue) + this.options.curTicks)) + rulerLineDist / 2) - this.startPosVariation;
                    var yDist = Math.abs(toXpos - xPos) / 2;
                    var midPointX = (toXpos + xPos) / 2;
                    var midPointY = yPos - yDist;
                    midDispX = (xPos + toXpos) / 2;
                    var curveTopLimit = -yPos + curvePadding + pointCurveDist;
                    var yLevel = matchedArrows.indexOf(xPIndx)*1.5;
                    var hVarVal = 60;
                    midPointY -= hVarVal*yLevel;
                    if (midPointY < curveTopLimit){
                        if (yLevel != 0) {
                            var redVal = curveTopLimit - midPointY;
                            var lowTimes = 1 * 1.5;
                            var exists, yLIndx;
                            for (var yLI=0; yLI<yLevelValues.length; yLI++) {
                                exists = (yLevelValues[yLI].match.indexOf(xPIndx) >= 0);
                                if (exists) {
                                    yLIndx = yLI;
                                    break;
                                }
                            }
                            if (exists) {
                                lowTimes = yLevelValues[yLIndx].least+lowTimes;
                                yLevelValues[yLIndx].least = lowTimes;
                            }
                            else yLevelValues.push({"match":matchedArrows, "least": lowTimes});
                            if (lowTimes > 6) lowTimes = 6;
                            midPointY = curveTopLimit+(lowTimes*hVarVal);
                        }
                        else midPointY = curveTopLimit;
                    }
                    if (yPos - midPointY < 40) midPointY = yPos - 40;
                    midDispY = ((yPos + midPointY) / 2) - 14;
                    
                    /*Arrow Start*/
                    var deg = 0;
                    var xDist = toXpos - xPos;
                    if (xDist < 0) {
                        deg = 135;
                        if (Math.abs(xDist) < 45) {
                            deg = 135 - (45 - Math.abs(xDist));
                        }
                    }
                    else {
                        deg = 45;
                        if (Math.abs(xDist) < 45) {
                            deg = 45 + (45 - Math.abs(xDist));
                        }
                    }
                    var arrowCords = this.drawArrow(ctx, toXpos, yPos, arrowLength, arrowWidth, deg, 0, 3);
                    var arrowBx = arrowCords.x;
                    var arrowBy = arrowCords.y;
                    /*Arrow End*/
                    
                    ctx.beginPath();
                    var fromYPos = yPos - pointCurveDist;
                    ctx.moveTo(xPos, fromYPos);
                    ctx.quadraticCurveTo(midPointX, midPointY, arrowBx, arrowBy);
                    ctx.stroke();
                    this.values[xPIndx].linePos = {p0:{x:xPos, y:fromYPos}, p1:{x:midPointX, y:midPointY}, p2:{x:arrowBx, y:arrowBy}};
                }
                else if (this.values[xPIndx].type == "flatLine") {
                    if (this.values[xPIndx].to == null) {
                        var toPos = 0;
                        toPos = this.values[xPIndx].from + Math.max(this.options.xInterval, 1);
                        this.values[xPIndx].to = toPos;
                    }
                    var toXpos = ((rulerLineDist * ((this.values[xPIndx].to / this.options.xInterval - this.startPosValue) + this.options.curTicks)) + rulerLineDist / 2) - this.startPosVariation;
                    var diffH = this.diffH - 10;
                    var yBottom = rulerT - pointCurveDist - (this.values[xPIndx].yLevel * (this.diffH));
                    midDispX = (xPos + toXpos) / 2;
                    midDispY = yBottom - diffH / 2;
                    ctx.save();
                    var _midYPos = yBottom - diffH / 2;
                    ctx.beginPath();
                    ctx.moveTo(xPos, yBottom - diffH);
                    ctx.lineTo(xPos, yBottom);
                    ctx.moveTo(xPos, _midYPos);
                    ctx.lineTo(toXpos, _midYPos);
                    ctx.moveTo(toXpos, yBottom - diffH);
                    ctx.lineTo(toXpos, yBottom);
                    ctx.stroke();
                    ctx.restore();
                    this.values[xPIndx].linePos = {p0:{x:xPos, y:_midYPos}, p1:{x:toXpos, y:_midYPos}};
                    var samePosDots2 = this.indexOfByObjsElement(this.values, ["from", "type"], [this.values[xPIndx].to, "emptyPoint"]);
                    if (this.values[xPIndx].type != "flatLine" || (this.values[xPIndx].type == "flatLine" && samePosDots2.length <= 0)) {
                        ctx.restore();
                        ctx.save();
                        if (this.values[xPIndx].color2) ctx.fillStyle = this.values[xPIndx].color2;
                        else ctx.fillStyle = this.values[xPIndx].color;
                        ctx.beginPath();
                        ctx.arc(toXpos, yPos, this.options.pointRad, 0, Math.PI * 2, false);
                        ctx.closePath();
                        ctx.fill();
                    }
                }
                else if (this.values[xPIndx].type == "emptyPoint" && this.options.isTextBoxForAll) {
                    var diffH = this.diffH - 10;
                    var yBottom = rulerT - pointCurveDist - (this.values[xPIndx].yLevel * (this.diffH));
                    midDispX = xPos;
                    midDispY = yBottom - diffH / 2;
                    var vertTolerence = this.options.xInterval*(this.options.curTicks/30);
                    matchedArrows = this.getNearByArrows(xPIndx, vertTolerence);
                    var curveTopLimit = -yPos + curvePadding + pointCurveDist;
                    var yLevel = matchedArrows.indexOf(xPIndx)*1.5;
                    var hVarVal = 30;
                    midDispY -= hVarVal*yLevel;
                    if (midDispY < curveTopLimit) midDispY = curveTopLimit;
                }
                /*Text Drawing Part*/
                if ((this.values[xPIndx].type != "emptyPoint" || this.options.isTextBoxForAll) && !this.options.isTextBoxForNone) {
                    if (!this.values[xPIndx].displayBox) this.values[xPIndx].displayBox = this.displayBoxTemplate();
                    if (!this.values[xPIndx].equationBox && this.options.isKeyValuesLinked) this.values[xPIndx].equationBox = this.equationBoxTemplate();
                    var displayBox = $(this.values[xPIndx].displayBox);
                    if (displayBox) this.scroller.append(displayBox);
                    var color = this.values[xPIndx].color;
                    try {
                        var displayValue = " ";
                        if (this.options.isKeyValuesLinked) {
                            var differenceValue;
                            if (!isNaN(this.values[xPIndx].to) && this.values[xPIndx].to != null) differenceValue = this.values[xPIndx].to - this.values[xPIndx].from;
                            else differenceValue = this.values[xPIndx].from;
                            displayValue = this.roundTo(differenceValue, (this.options.xInterval < 1 ? (this.options.xInterval.toString().length-1) : 1));
                            if (this.values[xPIndx].type == "flatLine") displayValue = Math.abs(displayValue);
                            var numericValue = displayValue;
                            if (this.options.numericType == "fraction") {
                                displayValue = this.toMixedFraction(displayValue);
                            }
                            else displayValue = displayValue.toString().trim();
                        }
                        else displayValue = this.values[xPIndx].keyedValue;
                        if (!displayValue) displayValue = " ";
                        displayBox.html("$" + displayValue + "$");
                        if (this.values[xPIndx].equationBox && this.options.isKeyValuesLinked) {
                            var equationBox = $(this.values[xPIndx].equationBox);
                            if (equationBox) this.equationHolder.append(equationBox);
                            equationBox.css({ "color": color });
                            if (eqIndx == 0 || this.values[xPIndx].type == "flatLine")
                                displayValue = "$" + displayValue + "$";
                            if (eqIndx != 0 || this.values[xPIndx].type == "flatLine")
                                displayValue = "<span class=\"" + this.eqInterSymClass + "\">&nbsp;" + (this.values[xPIndx].type == "flatLine" ? "&ndash;" : "+") + "&nbsp;</span>" + "$" + displayValue + "$";
                            this.equationResult += numericValue * (this.values[xPIndx].type == "flatLine" ? -1 : 1);
                            if (xPIndx == this.values.length - 1) {
                                var resultValue = this.roundCorrectly(this.equationResult);
                                if (this.options.numericType == "fraction") {
                                    resultValue = this.toMixedFraction(resultValue);
                                }
                                displayValue += "<span class=\"" + this.eqInterSymClass + "\">&nbsp;=&nbsp;</span>$" + resultValue + "$";
                                displayValue += "<span class=\"" + this.eqInterSymClass + "\">&nbsp;=&nbsp;</span><input />";
                            }
                            equationBox.html(displayValue);
                        }
                        eqIndx++;
                    }
                    catch (e) { this.warn(e); }
                    this.triggerParseMath();
                    midDispX -= displayBox.width() / 2;
                    midDispY -= 4 + displayBox.height();
                    var bestPos = this.checkAndMoveOverlap(midDispX, midDispY, displayBox, placedTxtBoxes);
                    displayBox.css({ "left": bestPos.x + "px", "top": bestPos.y + "px", "color": color });
                    placedTxtBoxes.push(displayBox);
                }
            }
            else if (this.values[xPIndx].type == "card") {
                ctx.strokeStyle = this.values[xPIndx].color;
                ctx.fillStyle = this.values[xPIndx].color;
                var cardY = this.values[xPIndx].cardYPos;
                var isCardTop = cardY < yPos;
                _isWithinFrame = false;
                if (xPos + this.marginMovement >= this.visibleWidth - this.options.lineThickness && xPos + this.marginMovement <= this.visibleWidth * 2) _isWithinFrame = true;
                
                if (!isTouchedPoint || !this.isCardTouched) {
                    var cardIndex = this.values[xPIndx].cardIndex;
                    var cardData = this.cardsData[cardIndex];
                    cardData.current.x = xPos-cardData.card.width()/2;
                    var cardHeight = cardData.card.height();
                    var cardYTolerence = cardHeight*1.3;
                    isCardTop = cardY < yPos && yPos > cardYTolerence;
                    var cardDist = cardY - yPos;
                    if (Math.abs(cardDist) < cardYTolerence) {
                        cardY = yPos + (isCardTop ? -cardYTolerence : cardYTolerence);
                        cardData.current.y = cardY-cardHeight/2;
                    }
                    this.scroller.append(cardData.card);
                    var targetTop = cardData.current.y;
                    var targetLeft = cardData.current.x;
                    
                    if (_isWithinFrame) {
                        var rulerX = -(this.getRulerX()+this.widthAdjMargin);
                        if (targetTop + cardData.card.height() > this.container.height()) targetTop = this.container.height()-cardData.card.outerHeight();
                        else if (targetTop < 0) targetTop = 0;
                        if (targetLeft - rulerX + cardData.card.width() > this.container.width()) targetLeft = this.container.width()+rulerX-cardData.card.outerWidth();
                        else if (targetLeft - rulerX < 0) targetLeft = rulerX;
                        cardData.card.show();
                    }
                    else cardData.card.hide();
                    cardData.card.css({"left":targetLeft+"px", "top":targetTop+"px"});
                }
                if (_isWithinFrame) {
                    ctx.beginPath();
                    ctx.moveTo(xPos, yPos - (arrowLength*0.5*(isCardTop ? 1 : -1)));
                    ctx.lineTo(xPos, cardY);
                    ctx.stroke();
                    this.drawArrow(ctx, xPos, yPos, arrowLength, arrowWidth, isCardTop ? 90 : 270, 0, 3);
                }
            }
            else if (this.values[xPIndx].type == "lever") {
                var lSize = this.options.leverSize;
                ctx.strokeStyle = this.values[xPIndx].color;
                if (this.values[xPIndx].color2) ctx.fillStyle = this.values[xPIndx].color2;
                else ctx.fillStyle = this.values[xPIndx].color;
                
                var newYPos = yPos-3;
                var lineY = newYPos-(this.options.leverSize.h/2);
                var angle = this.values[xPIndx].angle;
                angle = angle ? angle : 0;
                var valueDist = this.values[xPIndx].to - this.values[xPIndx].from;
                var dist = (valueDist/this.options.xInterval)*rulerLineDist;
                var dir = 1;
                if (isTouchedPoint) {
                    if (dist > 0) dir = -1;
                    else dir = 1;
                    this.values[xPIndx].animated = false;
                }
                dist = -Math.abs(dist);
                this.values[xPIndx].distance = Math.abs(valueDist);
                var toXpos = xPos + dist*Math.cos(angle*Math.PI/180);
                var toYpos = lineY+ dist*Math.sin(angle*Math.PI/180);
                var toAngle = angle*Math.PI/180;
                var toLineXpos = xPos + (dist+arrowLength/2)*Math.cos(angle*Math.PI/180);
                var toLineYpos = lineY+ (dist+arrowLength/2)*Math.sin(angle*Math.PI/180);
                
                ctx.beginPath();
                ctx.moveTo(xPos, lineY);
                ctx.lineTo(toLineXpos, toLineYpos);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(xPos-this.options.leverSize.w/2, newYPos);
                ctx.lineTo(xPos+this.options.leverSize.w/2, newYPos);
                ctx.lineTo(xPos+this.options.leverSize.w/2, newYPos-this.options.leverSize.h);
                ctx.lineTo(xPos-this.options.leverSize.w/2, newYPos-this.options.leverSize.h);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = this.values[xPIndx].color;
                this.drawArrow(ctx, xPos, newYPos, arrowLength, arrowWidth, 90, 0, 3);
                this.drawArrow(ctx, toXpos, toYpos, arrowLength, arrowWidth, 180+angle, 0, 3);
                var frmAngle = this.values[xPIndx].fromAngle*Math.PI/180;
                frmAngle -= Math.PI;
                toAngle -= Math.PI;
                
                if (this.values[xPIndx].animated) {
                    ctx.save();
                    ctx.beginPath();
                    ctx.setLineDash([10,10])
                    ctx.arc(xPos, newYPos, -dist, frmAngle, toAngle, frmAngle > toAngle);
                    ctx.stroke();
                    ctx.restore();
                }
                if (isTouchedPoint){
                    if (dir > 0) this.values[xPIndx].angle = 0;
                    else this.values[xPIndx].angle = 180;
                }
            }
            ctx.restore();
            ctx.restore();
        }
        if (this.options.numericType == "whole") this.wholeValues = this.cloneArray(this.values);
        else if (this.options.numericType == "fraction") this.fractionValues = this.cloneArray(this.values);
        else if (this.options.numericType == "decimal") this.decimalValues = this.cloneArray(this.values);
        if (this.indexOfByObjsElement(this.values,[],[], ["static"], [true]).length > 0 || this.options.curTickStart != this.orgTickStart || this.options.curTicks != this.options.defaultTicks || this.options.numericType != this.orgNumericType) {
            this.triggerChange();
        }
    },
    getNearByArrows:function(xPIndx, customTolerence){
        var tolerence;
        if (customTolerence) tolerence = customTolerence;
        else tolerence = this.options.xInterval*(this.options.curTicks/20);
        var exactMatch = this.indexOfByObjsElement(this.values, ["from", "to", "to", "from"], [this.values[xPIndx].from, this.values[xPIndx].to], null, null, tolerence);
        var inverseMatch = this.indexOfByObjsElement(this.values, ["to", "from"], [this.values[xPIndx].from, this.values[xPIndx].to], null, null, tolerence);
        matchedArrows = exactMatch.slice(0);
        for (var iM=0; iM<inverseMatch.length; iM++){
            var value = inverseMatch[iM];
            if (matchedArrows.indexOf(value) < 0)
                matchedArrows.push(value);
        }
        matchedArrows.sort();
        return matchedArrows;
    },
    checkAndMoveOverlap: function (x, y, displayBox, placedTxtBoxes) {
        var newX = x;
        var newY = y;
        /*var boxW = displayBox.width();
        var boxH = displayBox.height();
        var allDisplayBoxes = placedTxtBoxes;
        for (var i = 0; i < allDisplayBoxes.length; i++) {
            var dispBox = allDisplayBoxes[i];
            if (dispBox[0] != displayBox[0]) {
                var otherBoxRect = { left: dispBox.position().left, top: dispBox.position().top };
                otherBoxRect.right = otherBoxRect.left + dispBox.width();
                otherBoxRect.bottom = otherBoxRect.top + dispBox.height();
                var currBoxRect = { left: displayBox.position().left, top: displayBox.position().top };
                currBoxRect.right = currBoxRect.left + boxW;
                currBoxRect.bottom = currBoxRect.top + boxH;
                if (this.isRectIntersect(otherBoxRect, currBoxRect)) {
                    otherBoxRect.left -= dispBox.width() / 2;
                    newX += boxW / 2;
                    dispBox.css({ "left": otherBoxRect.left + "px" });
                    break;
                }
            }
        }*/
        return { x: newX, y: newY };
    },
    isRectIntersect: function (rect1, rect2) {
        var horizontal = (rect1.left <= rect2.left && rect1.right >= rect2.left) || (rect2.left <= rect1.left && rect2.right >= rect1.left);
        //var vertical = (rect1.top <= rect2.top && rect1.bottom >= rect2.top) || (rect2.top <= rect1.top && rect2.bottom >= rect1.top);
        var vertical = (Math.abs(rect1.top - rect2.top) < 2 || Math.abs(rect1.bottom - rect2.bottom) < 2);
        return (horizontal && vertical);
    },
    toMixedFraction: function (value, customDeno) {
        var denominator = this.options.denominator;
        if (customDeno) denominator = customDeno;
        var mixedValue = value / denominator;
        if (mixedValue > 0) mixedValue = Math.floor(mixedValue);
        else if (mixedValue < 0) mixedValue = Math.ceil(mixedValue);
        var numeratorValue = value - (mixedValue * denominator);
        if (mixedValue) numeratorValue = Math.abs(numeratorValue);
        var resultValue = ((mixedValue ? mixedValue + " " : "") + (numeratorValue ? numeratorValue + "/" + denominator : "")).toString();
        resultValue = resultValue ? resultValue : "0";
        return resultValue;
    },
    setNumericState: function () {
        try {
            /*if (this.options.numericType == "decimal" && Math.round(this.options.xInterval) != this.options.xInterval) this.NumericKeypad.enableDecimal(true);
            else this.NumericKeypad.enableDecimal(false);
            if (this.options.numericType == "fraction") this.NumericKeypad.enableFraction(true);
            else this.NumericKeypad.enableFraction(false);*/
        }
        catch (e) { }
    },
    toNearestValue: function (value, lessThanOne) {
        //TYPE 1
        /*if (value >= 0 && value < 0.15 && lessThanOne) value = 0.1;
        else if (value >= 0.15 && value < 0.225 && lessThanOne) value = 0.2;
        else if (value >= 0 && value < 0.125 && !lessThanOne) value = 0;
        else if (value >= 0.125 && value < 0.225 && !lessThanOne) value = 0.25;
        else if (value >= 0.225 && value < 0.375) value = 0.25;
        else if (value >= 0.375 && value < 0.625) value = 0.5;
        else if (value >= 0.625 && value < 0.875) value = 0.75;
        else if (value >= 0.875) value = 1;*/

        //TYPE 2

        return value;
    },
    changeSetting: function (numericType, inStart, inInterval, inEnd, denominator) {
        var result = { value: true, errorMessage: "" }
        var start = inStart;
        var interval = inInterval;
        var end = inEnd;
        var tickCount = 11;
        var isProcessBreak = false;
        denominator = Math.abs(denominator);
        if (start.trim() == "") {
            isProcessBreak = true;
            result.errorMessage = "You cannot have \"Start number\" empty. Enter number.";
        }
        else if (end.trim() == "") {
            isProcessBreak = true;
            result.errorMessage = "You cannot have \"End number\" empty. Enter number.";
        }
        else if (numericType == "whole" && !isProcessBreak) {
            if (start.toString().indexOf("/") >= 0 || start.toString().indexOf(" ") > 0) {
                isProcessBreak = true;
                result.errorMessage = "You cannot have fraction as your \"Start number\" in \"Whole numbers only\" mode.";
            }
            else if (end.toString().indexOf("/") >= 0 || end.toString().indexOf(" ") > 0) {
                isProcessBreak = true;
                result.errorMessage = "You cannot have fraction as your \"End number\" in \"Whole numbers only\" mode.";
            }
            else if (start.toString().indexOf(".") >= 0) {
                isProcessBreak = true;
                result.errorMessage = "You cannot have decimal number as your \"Start number\" in \"Whole numbers only\" mode.";
            }
            else if (end.toString().indexOf(".") >= 0) {
                isProcessBreak = true;
                result.errorMessage = "You cannot have decimal number as your \"End number\" in \"Whole numbers only\" mode.";
            }
            else if (isNaN(start.trim())) {
                isProcessBreak = true;
                result.errorMessage = "\"Start number\" has some invalid characters. Change your \"Start number\" number to valid numeric state.";
            }
            else {
                start = Math.round(parseInt(start));
                if (this.options.isMinLimit && start < this.options.minimumStart) {
                    isProcessBreak = true;
                    result.errorMessage = "You cannot have \"Start number\" less than zero. Change your number, so that you do not go below zero.";
                }
                else if (this.options.isMaxLimit && start > this.options.maximumEnd - inInterval) {
                    isProcessBreak = true;
                    result.errorMessage = "You cannot have \"Start number\" greater than " + (this.options.maximumEnd - inInterval) + ". Change your number, so that you do not go above maximum number.";
                }
                else {
                    end = Math.round(parseInt(end));
                    if (start >= end) {
                        isProcessBreak = true;
                        result.errorMessage = "You cannot have \"End number\" less than or equal to \"Start number\". Change your \"Start number\" or \"End number\", so that your \"End number\" is greater than \"Start number\".";
                    }
                    else if (this.options.maximumEnd && end > this.options.maximumEnd) {
                        isProcessBreak = true;
                        result.errorMessage = "You cannot have \"End number\" greater than " + this.options.maximumEnd + ". Change your number, so that you do not exceed the maximum number.";
                    }
                    else {
                        if (interval.trim() == "") {
                            isProcessBreak = true;
                            result.errorMessage = "You cannot have \"Value of interval between tick marks\" empty. Enter number.";
                        }
                        else {
                            interval = parseInt(interval);
                            if (interval < 0) {
                                isProcessBreak = true;
                                result.errorMessage = "You cannot have \"Value of interval between tick marks\" less than zero. Change your number, so that you do not go below zero.";
                            }
                        }
                        denominator = 1;
                    }
                }
            }
        }
        else if (numericType == "decimal" && !isProcessBreak) {
            if (start.toString().indexOf("/") >= 0 || start.toString().indexOf(" ") > 0) {
                isProcessBreak = true;
                result.errorMessage = "You cannot have fraction as your \"Start number\" in \"Whole and decimal numbers\" mode.";
            }
            else if (end.toString().indexOf("/") >= 0 || end.toString().indexOf(" ") > 0) {
                isProcessBreak = true;
                result.errorMessage = "You cannot have fraction as your \"End number\" in \"Whole and decimal numbers\" mode.";
            }
            start = parseFloat(start);
            if (this.options.isMinLimit && start < this.options.minimumStart && !isProcessBreak) {
                isProcessBreak = true;
                result.errorMessage = "You cannot have \"Start number\" less than zero. Change your number, so that you do not go below zero.";
            }
            else if (this.options.maximumEnd && start > this.options.maximumEnd - inInterval) {
                isProcessBreak = true;
                result.errorMessage = "You cannot have \"Start number\" greater than " + (this.options.maximumEnd - inInterval) + ". Change your number, so that you do not go above maximum number.";
            }
            else {
                var reqDec = this.decimalLength(interval);
                if (this.decimalLength(start) > reqDec) {
                    isProcessBreak = true;
                    result.errorMessage = "You cannot have more than " + reqDec + " decimal places in \"Start number\".";
                }
                else if (this.options.maximumEnd && end > this.options.maximumEnd) {
                    isProcessBreak = true;
                    result.errorMessage = "You cannot have \"End number\" greater than " + this.options.maximumEnd + ". Change your number, so that you do not exceed the maximum number.";
                }
                else {
                    end = parseFloat(end);
                    if (this.decimalLength(end) > reqDec) {
                        isProcessBreak = true;
                        result.errorMessage = "You cannot have more than " + reqDec + " decimal places in \"End number\".";
                    }
                    else {
                        if (start >= end) {
                            isProcessBreak = true;
                            result.errorMessage = "You cannot have \"End number\" less than or equal to \"Start number\". Change your \"Start number\" or \"End number\", so that your \"End number\" is greater than \"Start number\".";
                        }
                    }
                }
            }
            denominator = 1;
        }
        else if (!isProcessBreak) {
            if (start.toString().indexOf(".") >= 0) {
                isProcessBreak = true;
                result.errorMessage = "You cannot have decimal number as your \"Start number\" in \"Fractions\" mode.";
            }
            else if (end.toString().indexOf(".") >= 0) {
                isProcessBreak = true;
                result.errorMessage = "You cannot have decimal number as your \"End number\" in \"Fractions\" mode.";
            }
            interval = 1;
            var startValue = this.fracionToValue(start, denominator);
            var endValue = this.fracionToValue(end, denominator);
            var maximumEnd = this.options.maximumEnd * denominator;
            if (this.options.isMinLimit && startValue.value < this.options.minimumStart && !isProcessBreak) {
                isProcessBreak = true;
                result.errorMessage = "You cannot have \"Start number\" less than zero. Change your number, so that you do not go below zero.";
            }
            else if (this.options.maximumEnd && startValue.value > maximumEnd - interval) {
                isProcessBreak = true;
                result.errorMessage = "You cannot have \"Start number\" greater than $" + this.toMixedFraction(maximumEnd - interval, denominator) + "$. Change your number, so that you do not go above maximum number.";
            }
            else if (startValue.numerator >= startValue.denominator) {
                isProcessBreak = true;
                result.errorMessage = "Numerator in your fraction for \"Start number\" is greater than or equal to denominator. Change your fraction to proper mixed fraction or whole number.";
            }
            else if (this.options.maximumEnd && endValue.value > maximumEnd) {
                isProcessBreak = true;
                result.errorMessage = "You cannot have \"End number\" greater than $" + this.toMixedFraction(maximumEnd, denominator) + "$. Change your number, so that you do not exceed the maximum number.";
            }
            else {
                if (endValue.numerator >= endValue.denominator) {
                    isProcessBreak = true;
                    result.errorMessage = "Numerator in your fraction for \"End number\" is greater than or equal to denominator. Change your fraction to proper mixed fraction or whole number.";
                }
                else {
                    if (!this.checkFractionEquavalent(startValue, denominator)) {
                        isProcessBreak = true;
                        result.errorMessage = "\"Start number\" is not compatible with \"Fraction\" selected. Change your \"Start number\" to match \"Fraction\".";
                    }
                    else if (!this.checkFractionEquavalent(endValue, denominator)) {
                        isProcessBreak = true;
                        result.errorMessage = "\"End number\" is not compatible with \"Fraction\" selected. Change your \"End number\" to match \"Fraction\".";
                    }
                    else {
                        start = startValue.value;
                        end = endValue.value;
                        if (start >= end) {
                            isProcessBreak = true;
                            result.errorMessage = "You cannot have \"End number\" less than or equal to \"Start number\". Change your \"Start number\" or \"End number\", so that your \"End number\" is greater than \"Start number\".";
                        }
                    }
                }
            }
        }

        if (numericType != "fraction" && !isProcessBreak) {
            tickCount = ((end - start) / interval) + 1;
            var startMultiple = (start / interval);
            var endMultiple = (end / interval);
            if (numericType == "whole") {
                var sV = Math.round(startMultiple), eV = Math.round(endMultiple);
                if (eV - sV >= this.options.maxTicks) eV = sV + this.options.maxTicks - interval;
                else if (eV - sV + 1 < this.options.minTicks) eV = sV + this.options.minTicks - 1;
                var nearestStart = sV * interval;
                var nearestEnd = eV * interval;
                if (nearestStart != start && nearestEnd != end) {
                    isProcessBreak = true;
                    result.errorMessage = "With " + interval + " as your \"intervals\", your \"Start number\" " + start + " and \"End number\" " + end + " will not be on a tick mark. The closest valid tick mark for \"Start number\" is " + nearestStart + " and for \"End number\" is " + nearestEnd + ".";
                }
                else if (nearestStart != start) {
                    isProcessBreak = true;
                    result.errorMessage = "With " + end + " as \"End number\" and " + interval + " as your \"intervals\", your \"Start number\" " + start + " will not be on a tick mark. The closest valid tick mark is " + nearestStart + ".";
                }
                else if (nearestEnd != end) {
                    isProcessBreak = true;
                    result.errorMessage = "With " + start + " as \"Start number\" and " + interval + " as your \"intervals\", your \"End number\" " + end + " will not be on a tick mark. The closest valid tick mark is " + nearestEnd + ".";
                }
            }
            if (!isProcessBreak) {
                tickCount = Math.round(tickCount);
                if (tickCount > this.options.maxTicks) {
                    isProcessBreak = true;
                    result.errorMessage = "You cannot have more than " + this.options.maxTicks + " tick marks (" + (numericType == "decimal" ? "labeled and unlabeled" : "labeled") + ") in the \"" + (numericType == "decimal" ? "Whole and decimal numbers" : "Whole numbers only") + "\" mode. Change your \"Start number\" or \"End number\" selections so that you do not exceed the allowed number of tick marks.";
                }
                else if (tickCount < this.options.minTicks) {
                    isProcessBreak = true;
                    result.errorMessage = "You cannot have less than " + (numericType == "decimal" ? this.options.maxVisibleTicks : this.options.minTicks) + " tick marks (" + (numericType == "decimal" ? "labeled and unlabeled" : "labeled") + ") in the \"" + (numericType == "decimal" ? "Whole and decimal numbers" : "Whole numbers only") + "\" mode. Change your \"Start number\" or \"End number\" selections so that you do not exceed the allowed number of tick marks.";
                }
                start = Math.round(start / interval);
            }
        }
        else if (numericType == "fraction" && !isProcessBreak) {
            tickCount = Math.round(end - start) + 1;
            if (tickCount > this.options.maxTicks) {
                isProcessBreak = true;
                result.errorMessage = "You cannot have more than " + this.options.maxTicks + " tick marks in the \"Fractions\" mode. Change your \"Start number\" or \"End number\" selections so that you do not exceed the allowed number of tick marks.";
            }
            else if (tickCount < this.options.minTicks) {
                isProcessBreak = true;
                result.errorMessage = "You cannot have less than " + this.options.minTicks + " tick marks in the \"Fractions\" mode. Change your \"Start number\" or \"End number\" selections so that you do not exceed the allowed number of tick marks.";
            }
        }

        if (!isProcessBreak) {
            if (numericType != this.options.numericType) {
                var equationText = {actual: this.equationHolder.attr("actualText"), math: this.equationHolder.attr("mathText")};
                equationText = equationText ? equationText : {actual:"", math:""};
                if (this.options.numericType == "whole") this.wholeEquation = equationText;
                else if (this.options.numericType == "fraction") this.fractionEquation = equationText;
                else if (this.options.numericType == "decimal") this.decimalEquation = equationText;
                this.removeAllValues(this.values);
                if (numericType == "whole") {
                    this.values = this.cloneArray(this.wholeValues);
                    if (this.wholeEquation) this.setEquation(this.wholeEquation);
                    else this.setEquation("");
                }
                else if (numericType == "fraction") {
                    this.values = this.cloneArray(this.fractionValues);
                    if (this.fractionEquation) this.setEquation(this.fractionEquation);
                    else this.setEquation("");
                }
                else if (numericType == "decimal") {
                    this.values = this.cloneArray(this.decimalValues);
                    if (this.decimalEquation) this.setEquation(this.decimalEquation);
                    else this.setEquation("");
                }
                this.triggerParseMath();
            }
            this.options.numericType = numericType;
            this.options.curTickStart = start;
            this.options.xInterval = interval;
            this.options.denominator = denominator;
            if (this.options.numericType == "fraction") {
                for (var xPIndx = 0; xPIndx < this.values.length; xPIndx++) {
                    var denVal = this.values[xPIndx].denominator;
                    if (denVal != this.options.denominator) {
                        if (this.values[xPIndx].from) this.values[xPIndx].from = (this.values[xPIndx].from / denVal) * this.options.denominator;
                        if (this.values[xPIndx].to) this.values[xPIndx].to = (this.values[xPIndx].to / denVal) * this.options.denominator;
                        this.values[xPIndx].denominator = this.options.denominator;
                    }
                }
            }
            this.scroller.css({ "margin-left": this.defaultMarginLeft() + "px" });
            this.setRulerWidth(tickCount);
            this.setNumericState();
        }
        else result.value = false;
        return result;
    },
    setEquation:function(content) {
        if (!content) content = {actual:"", math:""};
        try{
            this.equationHolder.attr("mathtext", content.math);
            this.equationHolder.attr("actualText", content.actual);
            if (content.actual) this.equationHolder.html("$"+content.actual+"$");
            else this.equationHolder.html("");
        }
        catch(e){}
    },
    defaultMarginLeft: function () {
        return -(this.visibleWidth - this.widthAdjMargin - this.options.lineThickness);
    },
    checkFractionEquavalent: function (fractionObject, selectedDenominator) {
        var typedNumerator = fractionObject.numerator;
        var typedDenominator = fractionObject.denominator;
        var gcd = this.getGCD(typedNumerator, typedDenominator);
        var simpleDenom = typedDenominator / gcd;
        if (Math.round(simpleDenom) - simpleDenom != 0) return false;
        else if (selectedDenominator % simpleDenom == 0) return true;
        else return false;
    },
    getGCD: function (n, d) {
        return d ? this.getGCD(d, n % d) : n;
    },
    cloneArray: function (array) {
        var newArray = array.slice(0);
        return newArray;
    },
    drawArrow: function (ctx, xPos, yPos, arrowLength, arrowWidth, angle, pointCurveDist, arrowDepth) {
        var radian = 0.0174532925;
        var arrowBx = xPos - arrowLength * Math.cos(angle * radian);
        var arrowBy = yPos - pointCurveDist - arrowLength * Math.sin(angle * radian);
        if (!arrowDepth) arrowDepth = 0;
        var _arrowBx = xPos - (arrowLength - arrowDepth) * Math.cos(angle * radian);
        var _arrowBy = yPos - pointCurveDist - (arrowLength - arrowDepth) * Math.sin(angle * radian);
        var tDeg = angle + 90;
        var arrowLx = (arrowWidth / 2) * Math.cos(tDeg * radian);
        var arrowLy = (arrowWidth / 2) * Math.sin(tDeg * radian);
        ctx.beginPath();
        ctx.moveTo(xPos, yPos - pointCurveDist);
        ctx.lineTo(arrowBx - arrowLx, arrowBy - arrowLy);
        ctx.lineTo(_arrowBx, _arrowBy);
        ctx.lineTo(arrowBx + arrowLx, arrowBy + arrowLy);
        ctx.closePath();
        ctx.fill();
        return { x: _arrowBx, y: _arrowBy };
    },
    isTouchDevice: function () {
        return "ontouchstart" in document;
    },
    PixelRatio: function () {
        var ctx = document.createElement("canvas").getContext("2d"),
            dpr = window.devicePixelRatio || 1,
            bsr = ctx.webkitBackingStorePixelRatio ||
                  ctx.mozBackingStorePixelRatio ||
                  ctx.msBackingStorePixelRatio ||
                  ctx.oBackingStorePixelRatio ||
                  ctx.backingStorePixelRatio || 1;

        return dpr / bsr;
    },
    setHiDPICanvas: function (can, w, h, ratio) {
        if (!ratio) { ratio = this.PixelRatio(); }
        can.width = w * ratio;
        can.height = h * ratio;
        can.style.width = w + "px";
        can.style.height = h + "px";
        can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    },
    reset: function () {
        var droppedCards = this.indexOfByObjsElement(this.values, ["type", "static"], ["card", false]);
        for (var c=0; c<droppedCards.length; c++) {
            var cardValue = this.values[droppedCards[c]];
            var cardData = this.cardsData[cardValue.cardIndex];
            cardData.card.show();
            this.options.cardsHolder.append(cardData.card);
            cardData.card.css({"left":cardData.orginal.x+"px", "top":cardData.orginal.y+"px"});
        }
        this.removeAllValues(this.values);
        this.removeAllValues(this.wholeValues);
        this.removeAllValues(this.fractionValues);
        this.removeAllValues(this.decimalValues);
        this.values = [];
        this.wholeValues = [];
        this.fractionValues = [];
        this.decimalValues = [];
        this.wholeEquation = this.decimalEquation = this.fractionEquation = "";
        this.setEquation("");
        this.options.numericType = this.orgNumericType;
        this.options.xInterval = this.orgInterval;
        this.options.curTickStart = this.orgTickStart;
        this.scroller.css({ "margin-left": this.defaultMarginLeft() + "px" });
        this.loadValues();
        this.setRulerWidth(this.orgTickCount);
    },
    removeAllValues: function (values) {
        for (var i = values.length - 1; i >= 0; i--) {
            this.removeValue(values, i);
        }
    },
    triggerChange: function () { },
    lockRuler: function (isLock) {
        this.rulerLocked = isLock;
        this.drawSupport();
    },
    warn:function(message){
        console.warn(message);
    }
}

//Adding DOM Methods
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
Array.prototype.move = function (oldIndex, newIndex) {
    if (newIndex >= this.length) {
        var k = newIndex - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(newIndex, 0, this.splice(oldIndex, 1)[0]);
    return this;
};