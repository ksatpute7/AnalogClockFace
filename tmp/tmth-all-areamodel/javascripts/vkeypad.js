/* This is Virtual KeyPad (vKeyPad)
 * vKeyPad 1.2.11
 * developed by Lapiz
 * Release Date 23.06.14
 *
 * usage: new vKeyPad(".textBoxClass", "#activtyHolder");
 *
 * KeyFormat:
 * "id":id, "innerHTML":innerHTML, "value":value, "isSpecialKey":false, "rowIndex":0, "colSpan":1, "specialClass":"", "isInactive":false
 *
 * extend: -- Extend the key pad with additional elements passed as string
 * 	"beforeKeys":"";
 * 
*/

window.vKeyPad = function(TextBoxSelector, ParentContainerId, Options){
    this.selector = TextBoxSelector;
    this.Options = Options ? Options : {};
    this.ParentContainerId = ParentContainerId;
    this.TextBox = [];
    this.colCount = this.Options.colCount ? this.Options.colCount : 3;
    if (!this.Options.keyPadType) this.Options.keyPadType = "numeric";
    this.Options.isAlphaPad = this.Options.keyPadType.indexOf("alpha") >= 0;
    this.Options.isNumPad = this.Options.keyPadType.indexOf("num") >= 0;
    this.buttonClickColor = this.Options.buttonClickColor ? this.Options.buttonClickColor : "#ffcc66";
    this.buttonBlinkTime = this.Options.buttonBlinkTime ? this.Options.buttonBlinkTime : 100;
    this.keyWidth = this.Options.keyWidth ? this.Options.keyWidth : 45;
    this.keyHeight = this.Options.keyHeight ? this.Options.keyHeight : 45;
    this.autoClear = this.Options.autoClear ? true : false;
    this.clearZero = this.Options.clearZero == false ? false : true;
    this.maximumLength = this.Options.maximumLength ? this.Options.maximumLength : 0;
    this.isDefaultVal = isNaN(this.Options.defaultValue) ? false : true;
    this.defaultValue = this.Options.defaultValue ? this.Options.defaultValue : 0;
    this.isMinLimit = isNaN(this.Options.minValue) ? false : true;
    this.minValue = this.Options.minValue ? this.Options.minValue : 0;
    this.isMaxLimit = isNaN(this.Options.maxValue) ? false : true;
    this.maxValue = this.Options.maxValue ? this.Options.maxValue : 0;
    this.extend = this.Options.extend ? this.Options.extend : {};
    this.onFocusTxtBoxBg = this.Options.onFocusTxtBoxBg ? this.Options.onFocusTxtBoxBg : "rgb(204, 204, 204)";
    this.focusEvent = this.Options.focusEvent ? this.Options.focusEvent:"click";
    this.closeOnBlur = this.Options.closeOnBlur == false ? false:true;
    this.isBlurOnWindowClick = this.Options.isBlurOnWindowClick == false ? false:true;
    this.isFocusOnClick = this.Options.isFocusOnClick == false ? false:true;
    if (!this.Options.isAlphaPad) this.useComplexMath = this.Options.useComplexMath == false ? false : true;
    else this.useComplexMath = false;
    this.isMultiline = this.Options.isMultiline ? true : false;
    this.isSingleExpr = this.Options.isSingleExpr == false ? false : true;
    this.isDraggable = this.Options.isDraggable == false ? false : true;
    this.isForceTaggable = this.Options.isForceTaggable ? true : false;
    this.moveSensitivity = this.Options.moveSensitivity ? this.Options.moveSensitivity : 10;
    this.customTxtBoxCol = this.Options.customTxtBoxCol ? this.Options.customTxtBoxCol : null;
    this.applyTxtBoxBG = this.Options.applyTxtBoxBG ? true:false;
    this.deleteMethod = this.Options.deleteMethod ? this.Options.deleteMethod : "byTag";//byTag, byChar
    this.useParseMath = this.Options.useParseMath == false ? false : true;
    this.minusSymbol = this.Options.minusSymbol ? this.Options.minusSymbol : "\u2013";
    this.multiSymbol = this.Options.multiSymbol ? this.Options.multiSymbol : "\u00B7";
    this.autoCorrect = this.Options.autoCorrect ? true : false;
    this.hiddenKeys = this.Options.hiddenKeys ? this.Options.hiddenKeys : [];
    if (this.Options.isAlphaPad) this.colCount = 11;
    this.keys = this.getKeyManifest(this.Options.keys, this.Options.additionalKeys, this.Options.addKeyRowId);
    this.KeyPad;
    this.KeyPadHolder;
    this.CurrentFocus = null;
    this.textBoxOrgBg = this.customTxtBoxCol;
    this.isMultilineBox = false;
    this.isTaggableBox = false;
    this.checkBeforeFocus = false;
    this.mouseDownPos = false;
    this.vKeyPadAttr = "vKeyPadAttr";
    this.disabledTextboxes = [];
    
    //Toggleable ButtonState
    this.isShift = false;
    this.isSup = false;
    this.isSub = false;
    this.isItalic = false;
    this.isBold = false;
    this.buttonState = [];
    
    this.loadControls();
    this.init();
};

vKeyPad.prototype = {
    init:function(){
        this.KeyPad = $("<div class=\"keypadHolder " + this.Options.keyPadType + "\" />");
	this.KeyPadHolder = $("<div class=\"keypadContainer\" style=\"display:inline-block;\"></div>");
	var vKey = this;
	this.formKey(this.keys["closeKey"][0], this.KeyPad);
	if (this.extend.beforeKeys) this.KeyPad.append(this.extend.beforeKeys);
	for(var keySetKey in this.keys){
	    if (keySetKey != "closeKey") {
		var keySetValue = this.keys[keySetKey];
		var container = $("<div class=\"vKeyPadKeySet vKeyPad_"+keySetKey+"\" style=\"\"></div>");
		this.KeyPad.append(container)
		var index = 0;
		var row;
		
		var lastRowIndex = -1;
		for (index=0; index<keySetValue.length;) {
		    var keyProperty = keySetValue[index];
		    if (keyProperty.rowIndex != lastRowIndex) {
			lastRowIndex = keyProperty.rowIndex;
			var row = $("<div style=\"text-align:center;\"></div>");
			container.append(row);
		    }
		    index++;
		    this.formKey(keyProperty, row);
		}
		this.KeyPad.append(container);
	    }
    	}
	this.KeyPadHolder.append(this.KeyPad);
	$(this.ParentContainerId).append(this.KeyPadHolder);
	try {
	    if (this.isDraggable) 
		$(this.KeyPadHolder).draggable({containment: this.ParentContainerId});
	}
	catch(e){ }
	this.KeyPadHolder.css({"position":"absolute","width":this.KeyPadHolder.width()+"px","height":this.KeyPadHolder.height()+"px"});
	var extH = this.keyHeight/2;
	this.KeyPad.css({"top":(extH-10)+"px","width":this.KeyPad.width()+"px","position":"absolute"});
	this.KeyPadHolder.css({"width":(this.KeyPadHolder.width()+this.keyWidth/2)+"px", "height":(this.KeyPadHolder.height()+extH)+"px"});
	$(window).bind("touchstart mousedown", function(e){vKey.onWindowClick(e,vKey)});
	this.checkBtnState();
	this.hidePad();
    },
    formKey:function(keyProperty, container){
	if (keyProperty) {
	    var vKey = this;
	    var isDoubleKey = false;
	    var innerHTML = keyProperty.innerHTML;
	    var innerHTMLType = (typeof keyProperty.innerHTML).toString();
	    if(innerHTMLType == "object" || innerHTMLType == "array")
		if(keyProperty.innerHTML.length == 2){
		    isDoubleKey = true;
		    innerHTML = "";
		    for(var i=0; i<keyProperty.innerHTML.length; i++){
			innerHTML += "<span class=\"key_multi_"+i+"\">" + keyProperty.innerHTML[i] + "</span>";
			if (i!=keyProperty.innerHTML.length-1) innerHTML += "<br/>";
		    }
		}
	    var isCloseBtn = keyProperty.id == "close";
	    var key = $("<div id=\"key_"+keyProperty.id+"\" class=\"vkBtn "+ (keyProperty.specialClass ? keyProperty.specialClass : "vkBtnKey") + (isDoubleKey ? " vkMultiKey" : "") +"\" " +
		    (!isCloseBtn ? "style=\"display:inline-block; width:"+(this.keyWidth*(keyProperty.colSpan?keyProperty.colSpan:1))+"px; height:"+this.keyHeight+"px; \"" : "") +
		    "></div>");
	    key.html(innerHTML);
	    container.append(key);
	    key.bind("click", function(e){vKey.onNumClick(e, vKey);});
	}
    },
    getKeyManifest:function(customKeys, additionalKeys, addKeyRowId){
	var closeKey=[], headerKeys=[], keys=[], footerKeys=[];
	this.addKeysTo(closeKey, this.eachManifest("close", "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\" preserveAspectRatio=\"none\"> <g> <image width=\"20\" height=\"20\" xlink:href=\"data:image/png;base64, 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\"/> </g> </svg>", "close", true, 1, 1, "vkBtnEmpty"));
	if (customKeys) {
	    for (var i=0; i<customKeys.length; i++) {
		var keyInfo = customKeys[i];
		if (typeof keyInfo != "object") {
		    var rowIndex = Math.ceil((i+1)/this.colCount);
		    keyInfo = this.eachManifest(i+1, keyInfo, keyInfo, false, rowIndex, 1);
		}
		this.addKeysTo(keys, keyInfo);
	    }
	}
	else if (this.Options.isAlphaPad) {
	    if(this.Options.isNumPad){
		this.addKeysTo(keys, this.eachManifest("tilde", ["~","`"], ["~","`"], false, 1, 1));
		this.addKeysTo(keys, this.eachManifest("1", ["!","1"], ["!","1"], false, 1, 1));
		this.addKeysTo(keys, this.eachManifest("2", ["@","2"], ["@","2"], false, 1, 1));
		this.addKeysTo(keys, this.eachManifest("3",["#","3"], ["#","3"], false, 1, 1));
		this.addKeysTo(keys, this.eachManifest("4",["$","4"], ["$","4"], false, 1, 1));
		this.addKeysTo(keys, this.eachManifest("5",["%","5"], ["%","5"], false, 1, 1));
		this.addKeysTo(keys, this.eachManifest("6",["^","6"], ["^","6"], false, 1, 1));
		this.addKeysTo(keys, this.eachManifest("7",["&","7"], ["&","7"], false, 1, 1));
		this.addKeysTo(keys, this.eachManifest("8",["*","8"], ["*","8"], false, 1, 1));
		this.addKeysTo(keys, this.eachManifest("9",["(","9"], ["(","9"], false, 1, 1));
		this.addKeysTo(keys, this.eachManifest("0",[")","0"], [")","0"], false, 1, 1));
		this.addKeysTo(keys, this.eachManifest("hyphen",["_","&ndash;"], ["_","<span class=\"vDelByTag\">"+this.minusSymbol+"</span>"], false, 1, 1));
		this.addKeysTo(keys, this.eachManifest("equals",["+","="], ["+","="], false, 1, 1));
	    }
	    this.addKeysTo(keys, this.eachManifest("q","q", "q", false, 2, 1));
	    this.addKeysTo(keys, this.eachManifest("w","w", "w", false, 2, 1));
	    this.addKeysTo(keys, this.eachManifest("e","e", "e", false, 2, 1));
	    this.addKeysTo(keys, this.eachManifest("r","r", "r", false, 2, 1));
	    this.addKeysTo(keys, this.eachManifest("t","t", "t", false, 2, 1));
	    this.addKeysTo(keys, this.eachManifest("y","y", "y", false, 2, 1));
	    this.addKeysTo(keys, this.eachManifest("u","u", "u", false, 2, 1));
	    this.addKeysTo(keys, this.eachManifest("i","i", "i", false, 2, 1));
	    this.addKeysTo(keys, this.eachManifest("o","o", "o", false, 2, 1));
	    this.addKeysTo(keys, this.eachManifest("p","p", "p", false, 2, 1));
	    this.addKeysTo(keys, this.eachManifest("openBracket",["{","["], ["{","["], false, 2, 1));
	    this.addKeysTo(keys, this.eachManifest("closeBracket",["}","]"], ["}","]"], false, 2, 1));
	    this.addKeysTo(keys, this.eachManifest("backwardSlash", ["|","\\"], ["|","\\"], false, 2, 1));
	    this.addKeysTo(keys, this.eachManifest("a", "a", "a", false, 3, 1));
	    this.addKeysTo(keys, this.eachManifest("s", "s", "s", false, 3, 1));
	    this.addKeysTo(keys, this.eachManifest("d","d", "d", false, 3, 1));
	    this.addKeysTo(keys, this.eachManifest("f","f", "f", false, 3, 1));
	    this.addKeysTo(keys, this.eachManifest("g","g", "g", false, 3, 1));
	    this.addKeysTo(keys, this.eachManifest("h","h", "h", false, 3, 1));
	    this.addKeysTo(keys, this.eachManifest("j","j", "j", false, 3, 1));
	    this.addKeysTo(keys, this.eachManifest("k","k", "k", false, 3, 1));
	    this.addKeysTo(keys, this.eachManifest("l","l", "l", false, 3, 1));
	    this.addKeysTo(keys, this.eachManifest("colons",[":",";"], [":",";"], false, 3, 1));
	    this.addKeysTo(keys, this.eachManifest("quotes",["\"","'"], ["\"","'"], false, 3, 1));
	    this.addKeysTo(keys, this.eachManifest("enter","<svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 300.000000 300.000000\" preserveAspectRatio=\"xMidYMid meet\"> <g transform=\"translate(0.000000,300.000000) scale(0.100000,-0.100000)\" fill=\"#000000\" stroke=\"none\"> <path d=\"M2398 2038 l-3 -673 -27 -47 c-19 -32 -41 -52 -71 -67 -42 -20 -56 -21 -550 -21 l-507 0 0 201 c0 187 -1 201 -17 195 -23 -9 -1184 -679 -1181 -681 13 -10 1188 -685 1193 -685 3 0 5 90 5 199 l0 200 553 3 c617 5 600 3 752 78 190 93 314 240 386 455 l24 70 3 723 3 722 -280 0 -280 0 -3 -672z\"/> </g> </svg>", "enter", true, 3, 1.5));
	    this.addKeysTo(keys, this.eachManifest("z","z", "z", false, 4, 1));
	    this.addKeysTo(keys, this.eachManifest("x","x", "x", false, 4, 1));
	    this.addKeysTo(keys, this.eachManifest("c","c", "c", false, 4, 1));
	    this.addKeysTo(keys, this.eachManifest("v","v", "v", false, 4, 1));
	    this.addKeysTo(keys, this.eachManifest("b","b", "b", false, 4, 1));
	    this.addKeysTo(keys, this.eachManifest("n","n", "n", false, 4, 1));
	    this.addKeysTo(keys, this.eachManifest("m","m", "m", false, 4, 1));
	    this.addKeysTo(keys, this.eachManifest("comma",["&lt;",","], ["&lt;",","], false, 4, 1));
	    this.addKeysTo(keys, this.eachManifest("fullStop",["&gt;","."], ["&gt;","."], false, 4, 1));
	    this.addKeysTo(keys, this.eachManifest("forwardSlash",["?","/"], ["?","/"], false, 4, 1));
	    this.addKeysTo(keys, this.eachManifest("shift","<svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 300.000000 300.000000\" preserveAspectRatio=\"xMidYMid meet\"> <g transform=\"translate(0.000000,300.000000) scale(0.100000,-0.100000)\" fill=\"#000000\" stroke=\"none\"> <path d=\"M999 2268 c-282 -375 -515 -685 -517 -690 -2 -4 116 -8 262 -8 l266 0 0 -765 0 -765 505 0 505 0 0 765 0 765 265 0 c146 0 265 2 265 5 0 4 -1012 1350 -1029 1368 -4 4 -239 -300 -522 -675z\"/> </g> </svg>", "shift", true, 4, 2));
	    this.addKeysTo(footerKeys, this.eachManifest("bold","<b>b</b>", "bold", true, 1, 1));
	    this.addKeysTo(footerKeys, this.eachManifest("italic","<i>i</i>", "italic", true, 1, 1));
	    this.addKeysTo(footerKeys, this.eachManifest("sup","<i>x<sup>y</sup></i>", "sup", true, 1, 1));
	    this.addKeysTo(footerKeys, this.eachManifest("space","Space", " ", false, 1, 8));
	    this.addKeysTo(footerKeys, this.eachManifest("sub","<i>x<sub>y</sub></i>", "sub", true, 1, 1));
	}
	else {
	    this.addKeysTo(keys, this.eachManifest("1", "1", "1", false, Math.ceil(1/this.colCount), 1));
	    this.addKeysTo(keys, this.eachManifest("2", "2", "2", false, Math.ceil(2/this.colCount), 1));
	    this.addKeysTo(keys, this.eachManifest("3", "3", "3", false, Math.ceil(3/this.colCount), 1));
	    this.addKeysTo(keys, this.eachManifest("4", "4", "4", false, Math.ceil(4/this.colCount), 1));
	    this.addKeysTo(keys, this.eachManifest("5", "5", "5", false, Math.ceil(5/this.colCount), 1));
	    this.addKeysTo(keys, this.eachManifest("6", "6", "6", false, Math.ceil(6/this.colCount), 1));
	    this.addKeysTo(keys, this.eachManifest("7", "7", "7", false, Math.ceil(7/this.colCount), 1));
	    this.addKeysTo(keys, this.eachManifest("8", "8", "8", false, Math.ceil(8/this.colCount), 1));
	    this.addKeysTo(keys, this.eachManifest("9", "9", "9", false, Math.ceil(9/this.colCount), 1));
	    this.addKeysTo(keys, this.eachManifest("0", "0", "0", false, Math.ceil(10/this.colCount), 1));
	    this.addKeysTo(keys, this.eachManifest("fullstop", ".", ".", false, Math.ceil(11/this.colCount), 1));
	    this.addKeysTo(keys, this.eachManifest("hyphen","&ndash;", "<span class=\"vDelByTag\">"+this.minusSymbol+"</span>", false, Math.ceil(12/this.colCount), 1));
	    this.addKeysTo(keys, this.eachManifest("multi","&middot;", this.multiSymbol, false, Math.ceil(13/this.colCount), 1));
	    this.addKeysTo(keys, this.eachManifest("sup","<i>x<sup>y</sup></i>", "sup", true, Math.ceil(14/this.colCount), 1));
	    this.addKeysTo(keys, this.eachManifest("sub","<i>x<sub>y</sub></i>", "sub", true, Math.ceil(15/this.colCount), 1));
	}
	this.addKeysTo(footerKeys, this.eachManifest("backspace", "<svg class=\"delete\" width=\"40\" height=\"35\" viewBox=\"0 0 1024 1024\"><g><path d=\"M921.6 153.6h-489.165c-22.528 0-54.835 12.134-71.782 26.982l-347.955 304.435c-16.947 14.848-16.947 39.117 0 53.965l347.955 304.486c16.947 14.797 49.254 26.931 71.782 26.931h489.165c56.371 0 102.4-46.080 102.4-102.4v-512c0-56.32-46.029-102.4-102.4-102.4zM777.779 716.8l-130.918-130.918-130.816 130.918-73.933-73.882 130.867-130.918-130.867-130.867 73.933-73.933 130.867 130.867 130.867-130.867 73.882 73.933-130.816 130.867 130.867 130.867-73.933 73.933z\"></path></g></svg>", "backspace", true, 1, 1));
	if (additionalKeys) {
	    addKeyRowId = addKeyRowId ? addKeyRowId : 0;
	    for (var i=0; i<additionalKeys.length; i++) {
		var keyInfo = additionalKeys[i];
		if (typeof keyInfo != "object") {
		    var rowIndex = Math.ceil((i+1)/this.colCount)+addKeyRowId;
		    keyInfo = this.eachManifest(keyInfo, keyInfo, keyInfo, false, rowIndex, 1);
		}
		this.addKeysTo(keys, keyInfo, true);
	    }
	}
	return {"closeKey":closeKey, "headerKeys":headerKeys, "contentKeys":keys, "footerKeys":footerKeys};
    },
    addKeysTo:function(array, key, addKeys){
	if (this.hiddenKeys.indexOf(key.id) < 0 || addKeys) array.push(key);
    },
    eachManifest:function(id, innerHTML, value, isSpecialKey, rowIndex, colSpan, specialClass, isInactive) {
	var keyManifest = {"id":id, "innerHTML":innerHTML, "value":value, "isSpecialKey":isSpecialKey, "rowIndex":rowIndex, "colSpan":colSpan, "specialClass":specialClass ? specialClass : "", "isInactive":isInactive ? true : false};
	return keyManifest;
    },
    loadControls:function(){
	this.TextBox = $(this.selector);
	for (var t=0; t<this.TextBox.length; t++) {
	    var txtBox = $(this.TextBox[t]);
	    if (txtBox[0]) {
		try{
		    txtBox.unbind("click");
		    txtBox.unbind("focus");
		    txtBox.unbind("blur");
		}
		catch(e){ }
		var vKey = this;
		var focusEvent = this.focusEvent.toLowerCase();
		if (focusEvent.indexOf("start") < 0 && focusEvent.indexOf("down") < 0) {
		    this.checkBeforeFocus = true;
		    if (this.isTouchDevice()) txtBox.bind("touchstart",function(e){vKey.storeDownPos(e, vKey)});
		    else txtBox.bind("mousedown",function(e){vKey.storeDownPos(e, vKey)});
		}
		if (this.isTouchDevice()) txtBox.bind("touchend",function(e){vKey.tryToFocus(e, vKey)});
		else txtBox.bind("mouseup",function(e){vKey.tryToFocus(e, vKey)});
		txtBox.attr("readonly", "readonly");
		txtBox.blur();
	    }
	}
    },
    setKeyState:function(keyCode, state, noCheck){
	var keyProperty = this.getKeyWithId(keyCode);
	if (keyProperty) {
	    keyProperty.isInactive = !state;
	    if (!noCheck) this.checkBtnState();
	}
    },
    saveBtnState:function(){
	if (this.CurrentFocus) {
	    var buttonState = {};
	    buttonState.isSup = this.isSup;
	    buttonState.isSub = this.isSub;
	    buttonState.isItalic = this.isItalic;
	    buttonState.isBold = this.isBold;
	    var string_btnState = JSON.stringify(buttonState).replace(/"/g, "'");
	    $(this.CurrentFocus).attr(this.vKeyPadAttr, string_btnState);
	}
    },
    loadBtnState:function(){
	if (this.CurrentFocus) {
	    var string_btnState = $(this.CurrentFocus).attr(this.vKeyPadAttr);
	    if (string_btnState) {
		string_btnState = string_btnState.replace(/'/g, "\"");
		var buttonState = JSON.parse(string_btnState);
		this.isSup = buttonState.isSup;
		this.isSub = buttonState.isSub;
		this.isBold = buttonState.isBold;
		this.isItalic = buttonState.isItalic;
	    }
	    else {
		this.isSup = false;
		this.isSub = false;
		this.isItalic = false;
		this.isBold = false;
	    }
	}
	this.checkBtnState();
    },
    checkBtnState:function(){
	if (this.isShift) {
	    this.KeyPad.find(".key_multi_0").removeClass("inactive").addClass("active");
	    this.KeyPad.find(".key_multi_1").addClass("inactive").removeClass("active");
	    this.KeyPad.find("#key_shift").removeClass("inactive").addClass("active");
	}
	else{
	    this.KeyPad.find(".key_multi_0").addClass("inactive").removeClass("active");
	    this.KeyPad.find(".key_multi_1").removeClass("inactive").addClass("active");
	    this.KeyPad.find("#key_shift").addClass("inactive").removeClass("active");
	}
	
	if (this.isSup) this.KeyPad.find("#key_sup").removeClass("inactive").addClass("active");
	else this.KeyPad.find("#key_sup").addClass("inactive").removeClass("active");
	if (this.isSub) this.KeyPad.find("#key_sub").removeClass("inactive").addClass("active");
	else this.KeyPad.find("#key_sub").addClass("inactive").removeClass("active");
	if (this.isItalic) this.KeyPad.find("#key_italic").removeClass("inactive").addClass("active");
	else this.KeyPad.find("#key_italic").addClass("inactive").removeClass("active");
	if (this.isBold) this.KeyPad.find("#key_bold").removeClass("inactive").addClass("active");
	else this.KeyPad.find("#key_bold").addClass("inactive").removeClass("active");
	this.saveBtnState();
	
	if (this.isMultilineBox) this.setKeyState("enter", true, true);
	else this.setKeyState("enter", false, true);
	for(var keySetKey in this.keys){
	    var keySetValue = this.keys[keySetKey];
	    for (var index=0; index<keySetValue.length;index++) {
		keyProperty = keySetValue[index];
		var id = "key_"+keyProperty.id;
		var key = $("#"+id);
		if (keyProperty.isInactive) key.addClass("disabled");
		else key.removeClass("disabled");
		if (typeof keyProperty.innerHTML == "string")
		    if (keyProperty.innerHTML.length == 1){
			if(this.isShift) keyProperty.innerHTML = keyProperty.innerHTML.toUpperCase();
			else keyProperty.innerHTML = keyProperty.innerHTML.toLowerCase();
			key.html(keyProperty.innerHTML);
		    }
	    }
	}
    },
    onWindowClick:function(event, vKey){
	var vK = vKey.getSelf();
	var isTextBox = vK.getCurrentFocus(event.target);
	var isKeyPad = $(event.target).hasClass("keypadHolder");
	if (!isKeyPad){
	    isKeyPad = $(event.target).parents(".keypadHolder");
	    isKeyPad = isKeyPad.length != 0;
	}
	if (!isTextBox && !isKeyPad && this.isBlurOnWindowClick && this.handleWindowClick(event) && $('.keypadHolder').is(':visible')){
	    if (this.closeOnBlur) vK.hidePad();
	    else this.blur();
	}
    },
    handleWindowClick:function(event){ return true; },
    getKeyWithId:function(id){
	id = id.replace("key_","");
	var keyProperty;
	for(var keySetKey in this.keys){
	    var keySetValue = this.keys[keySetKey];
	    for (var index=0; index<keySetValue.length;index++) {
		if (keySetValue[index].id == id) {
		    keyProperty = keySetValue[index];
		    break;
		}
		if (keyProperty) break;
	    }
	}
	return keyProperty;
    },
    blinkKey:function(key){
	if (key.hasClass("vkBtnKey")) {
	    key.css({"background":this.buttonClickColor});
	    setTimeout(function(){
		key.css({"background":""});
	    },this.buttonBlinkTime);
	}
    },
    onNumClick:function(event, vKey) {
	var vK = vKey.getSelf();
        if (!event) event = window.event;
	var key = $(event.target);
	if (!key.hasClass("vkBtn")) key = key.parents(".vkBtn");
	var keyDetails = this.getKeyWithId(key.attr("id"));
	if (keyDetails.isInactive) return;
	var keyText = keyDetails.value;
	var typeOfValue = (typeof keyText).toString().toLowerCase();
	if(typeOfValue == "object" || typeOfValue == "array") {
	    if (this.isShift || keyText.length == 1) keyText = keyText[0].toString();
	    else if (keyText.length >= 2) keyText = keyText[1].toString();
	}
	else keyText = keyText.toString();
	if (!this.isTaggableBox) {
	    keyText = $("<span>"+keyText+"</span>").text();
	}
	if (keyDetails.isSpecialKey) {
	    if (keyText == "shift"){
		this.isShift = !this.isShift;
		this.checkBtnState();
		return;
	    }
	    else if (keyText == "close"){
		this.hidePad();
		return;
	    }
	    else if (keyText == "sup"){
		this.isSup = !this.isSup;
		if (this.isSup) this.isSub = false;
		this.checkBtnState();
		return;
	    }
	    else if (keyText == "sub"){
		this.isSub = !this.isSub;
		if (this.isSub) this.isSup = false;
		this.checkBtnState();
		return;
	    }
	    else if (keyText == "italic"){
		this.isItalic = !this.isItalic;
		if (this.isItalic) this.isBold = false;
		this.checkBtnState();
		return;
	    }
	    else if (keyText == "bold"){
		this.isBold = !this.isBold;
		if (this.isBold) this.isItalic = false;
		this.checkBtnState();
		return;
	    }
	}
	this.blinkKey(key);
	if (vK.CurrentFocus && keyDetails) {
	    var pass = true;
	    var isDiv = vK.CurrentFocus.tagName.toLowerCase() == "div";
	    var existingText = isDiv ? $(vK.CurrentFocus).html() : vK.CurrentFocus.value;
	    if ($(vK.CurrentFocus).children().length > 0){
		if ($(vK.CurrentFocus).children()[0].tagName.toString().toLowerCase() == "fmath")
		    existingText = $(vK.CurrentFocus).children().eq(0).attr("alttext");
	    }
	    if (!existingText) existingText = "";
	    else if (existingText.trim() == "") existingText = "";
	    if(keyDetails.isSpecialKey){
		pass = false;
		if (keyText == "enter"){
		    if(this.isMultilineBox && this.isTaggableBox) keyText = "<br />";
		    else if(this.isMultilineBox && !this.isTaggableBox) keyText = "\n";
		    pass = true;
		}
		else if (keyText == "backspace") {
		    var backspaceResult = this.backspaceText(existingText);
		    existingText = backspaceResult.text;
		    pass = backspaceResult.pass;
		}
		else if (keyDetails.callback) {
		    try{
			var newText = keyDetails.callback(this, existingText, keyDetails);
			if ((typeof newText).toString() == "string") {
			    if (isDiv) $(vK.CurrentFocus).html(newText);
			    else vK.CurrentFocus.value = newText;
			}
		    }
		    catch(e){ pass = false; }
		}
	    }
	    if(pass) {
		if (this.textLength(existingText) < vK.maximumLength || vK.maximumLength == 0) {
		    var keyedText = keyText;
		    if (vK.isShift) keyedText = keyedText.toUpperCase();
		    else keyedText = keyedText.toLowerCase();
		    if(vK.useComplexMath && keyText!="backspace"){
			var lastChar = "", lastBtOne = "", lastSet = "";
			if (existingText.length > 0) lastChar = existingText.substr(existingText.length-1);
			if (existingText.length > 1) lastBtOne = existingText.substr(existingText.length-2, 1);
			//Common Check >>
			if (keyedText == " "){
			    if (existingText.length <= 0) pass = false;
			}
			else if (keyedText == "/") {
			    if (existingText.length <= 0) pass = false;
			    else if (existingText.length >= 0){
				if (lastChar == "." || lastChar == " ") pass = false;
			    }
			}
			//Common Check <<
			//Single Check >>
			if (!vK.isMultiline && pass) {
			    if (keyedText == " "){
				if (existingText.indexOf(".") >= 0 || existingText.indexOf("/") >= 0) pass = false;
			    }
			    else if (keyedText == "."){
				if (existingText.indexOf(".") >= 0 || existingText.indexOf("/") >= 0) pass = false;
			    }
			    else if (keyedText == "/") {
				if (existingText.indexOf("/") >= 0 || existingText.indexOf(".") >= 0) pass = false;
			    }
			    else if (keyedText == this.minusSymbol) {
				if (existingText != "") pass = false;
			    }
			}
			//Single Check <<
			//MultiTarget Check >>
			else if(vK.isMultiline && pass) {
			    lastSet = existingText;
			    if (existingText.length > 0){
				var plsIndx = existingText.lastIndexOf("+");
				var minIndx = existingText.lastIndexOf(this.minusSymbol);
				var eqIndx = existingText.lastIndexOf("=");
				var lastIndx = Math.max(plsIndx, minIndx, eqIndx);
				if (lastIndx >= 0) lastSet = existingText.substr(lastIndx+1);
			    }
			    if (keyedText == " "){
				if(lastChar == "" || lastChar == " " || lastChar == "/" || lastChar == ".") pass = false;
			    }
			    else if (keyedText == "."){
				if(lastChar == "." || lastChar == "." || lastSet.indexOf(".") >= 0) pass = false;
			    }
			    else if (keyedText == "/") {
				if (lastChar == "." || lastChar == this.minusSymbol || lastChar == " " || lastChar == "+" || lastSet.indexOf("/") >= 0) pass = false;
			    }
			    else if (keyedText == this.minusSymbol) {
				if (lastChar == "." || lastChar == "/" || lastChar == this.minusSymbol || lastChar == " ") pass = false;
			    }
			    else if (keyedText == "+") {
				if (lastChar == "." || lastChar == "/" || lastChar == this.minusSymbol || lastChar == "+" || lastChar == "") pass = false;
			    }
			    else if (keyedText == "=") {
				if (lastChar == "." || lastChar == "/" || lastChar == this.minusSymbol || lastChar == "+" || lastChar == "=") pass = false;
				else if (lastChar == " " && (lastBtOne == this.minusSymbol || lastBtOne == "+" || lastBtOne == "." || lastBtOne == "/" || lastBtOne == "=")) pass = false;
			    }
			}
			//MultiTarget Check <<
			//FinalCheck >>
			if (keyedText == "."){
			    if (existingText.length <= 0 || lastChar == "+" || lastChar == this.minusSymbol || lastChar == "=" || lastChar == " " || lastChar == "/"){
				keyedText = "0"+keyedText;
				if (lastBtOne == " " && lastBtOne != "" && (lastChar != "+" && lastChar !=this.minusSymbol && lastChar != "=")) keyedText = "+"+keyedText;
			    }
			}
			if (!isNaN(keyedText) && lastBtOne != "") {
			    if (lastChar == " " && !isNaN(lastBtOne) && lastSet.indexOf("/") >= 0) keyedText = "+"+keyedText;
			}
			//FinalCheck <<
			if (pass) {
			    var newText = existingText + keyedText;
			    var minusToHyphReg = new RegExp(this.minusSymbol, "g");
			    var txtAsNum = parseFloat(newText.replace(minusToHyphReg, "-").replace(/\s/g, "").replace(/,/g, ""));
			    if (this.isMaxLimit) if (txtAsNum > this.maxValue){
				if (this.autoCorrect) newText = this.maxValue.toString();
				else newText = existingText;
			    }
			    if (this.isMinLimit) if (txtAsNum < this.minValue){
				if (this.autoCorrect) newText = this.minValue.toString();
				else newText = existingText;
			    }
			    if (this.maximumLength && this.textLength(newText) > this.maximumLength) return;
			    if (isDiv) {
				var displayVal = newText;
				if (this.useParseMath) displayVal = "$"+newText+"$";
				$(vK.CurrentFocus).html(displayVal);
				if (this.useParseMath) vK.parseMath();
				if (vK.isMultiline && $(vK.CurrentFocus).children().length > 0) {
				    var _innerWidth = $(vK.CurrentFocus).children().eq(0).width();
				    var _outterWidth = $(vK.CurrentFocus).width();
				    if (_outterWidth - _innerWidth < 10) {
					displayVal = existingText;
					if (this.useParseMath) displayVal = "$"+displayVal+"$";
					$(vK.CurrentFocus).html(displayVal);
					if (this.useParseMath) vK.parseMath();
				    }
				}
			    }
			    else {
				vK.CurrentFocus.value = newText;
			    }
			}
		    }
		    else{
			var newText = existingText;
			if (keyText != "backspace") {
			    if (this.isSup) newText = this.createTaggedText(newText, keyedText, "sup");
			    else if (this.isSub) newText = this.createTaggedText(newText, keyedText, "sub");
			    else if (this.isItalic) newText = this.createTaggedText(newText, keyedText, "i");
			    else if (this.isBold) newText = this.createTaggedText(newText, keyedText, "b");
			    else newText = newText + keyedText;
			}
			if (this.maximumLength && this.textLength(newText) > this.maximumLength) return;
			if (isDiv) $(vK.CurrentFocus).html(newText);
			else vK.CurrentFocus.value = newText;
		    }
		}
	    }
	    vK.onTextChanged(event, vK);
	}
    },
    backspaceText:function(text) {
	if (!text) text = "";
	var pass;
	if(text.length > 0){
	    var disSupSub = false;
	    var disItaBol = false;
	    pass = true
	    var lastChar = text[text.length-1];
	    if(lastChar == ";" && this.isTaggableBox){
		var lastEntity = text.substr(text.lastIndexOf("&"));
		if (lastEntity.length > 3 && lastEntity.indexOf(" ") < 0 && lastEntity.indexOf(";") == lastEntity.length-1)
		    text = text.substr(0, text.length-lastEntity.length);
		else text = text.substr(0, text.length-1);
	    }
	    else if(lastChar == ">" && this.isTaggableBox) {
		var lastTag = text.substr(text.lastIndexOf("<"));
		var tagName = lastTag.replace(/[\<|\>|/]/g, "");
		var tagsReg = new RegExp("\\<"+tagName+"(.*?)\\>.*?\\</"+tagName+"\\>","g");
		var tagMatch =  text.match(tagsReg);
		var breakMatch = lastTag.match(/\<br(\s)*(\/)*\>/g);
		if (breakMatch)
		    text = text.substr(0, text.length-lastTag.length);
		else if (tagMatch){
		    var wholeTag = tagMatch[tagMatch.length-1];
		    var classes = ""
		    var openTag = "";
		    var wholeTagAsTag;
		    try {
			wholeTagAsTag = $(wholeTag);
			classes = wholeTagAsTag.attr("class");
		    } catch(e) { }
		    var openTagReg = new RegExp("\\<" + tagName + ".*?\\>");
		    openTag = wholeTag.match(openTagReg);
		    if (!classes) classes = "";
		    var tagIndex = text.lastIndexOf(wholeTag);
		    var remTag = false;
		    if (this.deleteMethod == "byChar" || (classes.toLowerCase().indexOf("bychar") >= 0 && classes.toLowerCase().indexOf("bytag") < 0)){
			var textIndex = text.lastIndexOf("<");
			if (textIndex > tagIndex && textIndex > 0) {
			    var charIndex = textIndex-1;
			    if (text[charIndex] != ">") {
				text = text.substr(0, textIndex-1)+text.substr(textIndex);
				if (tagName == "sup") {
				    this.isSup = true;
				    this.isSub = false;
				}
				else if (tagName == "sub") {
				    this.isSub = true;
				    this.isSup = false;
				}
				else if (tagName == "i") {
				    this.isItalic = true;
				    this.isBold = false;
				}
				else if (tagName == "b") {
				    this.isBold = true;
				    this.isItalic = false;
				}
			    }
			    textIndex = text.lastIndexOf("<");
			    charIndex = textIndex-1;
			    if (text[charIndex] == ">") {
				if(openTag[0].length + tagIndex >= charIndex || !wholeTagAsTag) remTag = true;
				else {
				    var innerHTML = wholeTagAsTag.html();
				    var backspaceResult = this.backspaceText(innerHTML);
				    if (backspaceResult.pass) {
					pass = backspaceResult.pass;
					wholeTagAsTag.html(backspaceResult.text);
					text = text.substr(0, tagIndex)+wholeTagAsTag[0].outerHTML;
				    }
				}
			    }
			}
			else remTag = true;
		    }
		    if (this.deleteMethod == "byTag" || remTag || (classes.toLowerCase().indexOf("bytag") >= 0 && classes.toLowerCase().indexOf("bychar") < 0)) {
			disSupSub = true;
			disItaBol = true;
			text = text.substr(0, tagIndex);
		    }
		}
		else {
		    disSupSub = true;
		    disItaBol = true;
		    text = text.substr(0, text.length-1);
		}
	    }
	    else {
		disSupSub = true;
		disItaBol = true;
		text = text.substr(0, text.length-1);
	    }
	    if (disSupSub) {
		this.isSup = false;
		this.isSub = false;
	    }
	    if (disItaBol) {
		this.isItalic = false;
		this.isBold = false;
	    }
	    this.checkBtnState();
	}
	return {text:text, pass:pass};
    },
    createTaggedText:function(existingText, keyedText, tag){
	var newText = existingText;
	var openTag = "<"+tag+">";
	var closeTag = "</"+tag+">";
	var indexOfCT = existingText.lastIndexOf(closeTag);
	var tagExists = false;
	if (indexOfCT > 0 && indexOfCT+closeTag.length == existingText.length) tagExists = true;
	else tagExists = false;
	if (tagExists) newText = existingText.substr(0, indexOfCT) + keyedText + closeTag;
	else newText += openTag + keyedText + closeTag;
	return newText;
    },
    textLength:function(htmlText){
	var textElem = $("<span>"+htmlText+"</span>");
	var textLen = textElem.text().replace(/\\s|-|(\u2013)|\./g, "").length;
	textElem.remove();
	return textLen;
    },
    getText:function(){
	var text = "";
	if(this.CurrentFocus){
	    var isDiv = this.CurrentFocus.tagName.toLowerCase() == "div";
	    text = isDiv ? $(this.CurrentFocus).html() : this.CurrentFocus.value;
	}
	return text;
    },
    parseMath:function(){
	try{
	    M.parseMath(this.CurrentFocus);
	}
	catch(e){ }
    },
    storeDownPos:function(event, vKey){
	if (this.checkBeforeFocus) {
	    this.mouseDownPos = this.touchCoordsFromEvent(event, true);
	}
    },
    tryToFocus:function(event, vKey){
	var isStableFocus = false;
	if (!this.checkBeforeFocus) isStableFocus = true;
	else {
	    try{
		var mouseUpPos = this.touchCoordsFromEvent(event, false);
		if (this.mouseDownPos.length == 1 && mouseUpPos.length == 1) {
		    var xStatic = Math.abs(this.mouseDownPos[0].x - mouseUpPos[0].x) < this.moveSensitivity;
		    var yStatic = Math.abs(this.mouseDownPos[0].y - mouseUpPos[0].y) < this.moveSensitivity;
		    isStableFocus = xStatic && yStatic;
		}
	    }
	    catch(e){ }
	}
	if (isStableFocus) this.onFocus(event, vKey);
    },
    showPad:function(){
	this.KeyPad.show();
	this.KeyPadHolder.show();
    },
    onFocus:function(event, vKey) {
	if (this.isFocusOnClick) {
	    var vK = vKey.getSelf();
	    var currentFocus = vK.getCurrentFocus(event.target);
	    if (currentFocus != vK.CurrentFocus) {
		if (vK.CurrentFocus) vK.hidePad();
		vK.CurrentFocus = null;
		if (this.disabledTextboxes.indexOf(currentFocus) < 0) {
		    vK.CurrentFocus = currentFocus;
		    if (vK.CurrentFocus) {
			vK.loadBtnState();
			var textboxType = vK.CurrentFocus.tagName.toString().toLowerCase();
			var text="";
			this.showPad();
			if(this.isMultiline){
			    if (textboxType == "div"){
				this.isMultilineBox = true;
				this.isTaggableBox = true;
			    }
			    else if (textboxType == "textarea"){
				this.isMultilineBox = true;
				this.isTaggableBox = false;
			    }
			    else if (textboxType == "input"){
				this.isMultilineBox = false;
				this.isTaggableBox = false;
			    }
			}
			else{
			    this.isMultilineBox = false;
			    this.isTaggableBox = false;
			}
			if (this.isForceTaggable) this.isTaggableBox = this.isForceTaggable;
			if (textboxType == "div") text = vK.CurrentFocus.innerHTML;
			else if (textboxType == "input" || textboxType == "textarea") text = vK.CurrentFocus.value;
			if(vK.autoClear || (vK.clearZero && text.replace(/0/g,"").replace(/\s/g, "")=="")) {
			    if (textboxType == "div") vK.CurrentFocus.innerHTML = "";
			    else if (textboxType == "textarea") vK.CurrentFocus.value = "";
			    else if (textboxType == "input") vK.CurrentFocus.value = "";
			}
			
			if (!this.customTxtBoxCol) this.textBoxOrgBg = $(vK.CurrentFocus).css("background");
			$(vK.CurrentFocus).css({"background": this.onFocusTxtBoxBg});
			this.checkBtnState();
			this.onTextBoxFocus();
		    }
		}
	    }
	}
    },
    getCurrentFocus:function(target){
	var focusElement = null;
	if (this.selector.indexOf("#") == 0) {
	    if ($(target).attr("id") == this.selector.substr(1)) focusElement = $(target)[0];
	    else focusElement = $(target).parents(this.selector)[0];
	}
	else if (this.selector.indexOf(".") == 0){
	    if ($(target).hasClass(this.selector.substr(1))) focusElement = $(target)[0];
	    else focusElement = $(target).parents(this.selector)[0];
	}
	return focusElement;
    },
    hidePad:function(){
	var vK = this.getSelf();
	var currentFocus = vK.CurrentFocus;
	vK.KeyPad.hide();
        vK.KeyPadHolder.hide();
	this.blur();
	this.onKeypadHide(currentFocus);
    },
    blur:function(){
	var vK = this.getSelf();
	if (this.textBoxOrgBg && vK.CurrentFocus)
	    if(this.applyTxtBoxBG) $(vK.CurrentFocus).css({"background": this.textBoxOrgBg});
	    else $(vK.CurrentFocus).css({"background": ""});
	if (vK.CurrentFocus){
	    vK.triggerChange(vK.CurrentFocus);
	    if (this.isDefaultVal){
		var isDiv = vK.CurrentFocus.tagName.toLowerCase() == "div";
		var existingText = isDiv ? $(vK.CurrentFocus).html() : vK.CurrentFocus.value;
		var txtAsNum = 0;
		try{
		    var minusToHyphReg = new RegExp(this.minusSymbol, "g");
		    existingText = existingText.replace(minusToHyphReg, "-").replace(/\s/g, "");
		    txtAsNum = parseFloat(existingText);
		}
		catch(e) { }
		if (!txtAsNum) {
		    if (isDiv) {
			$(vK.CurrentFocus).html(this.defaultValue);
			this.parseMath();
		    }
		    else vK.CurrentFocus.value = this.defaultValue;
		}
	    }
	}
	vK.CurrentFocus = null;
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
    isTouchDevice: function () {
        return "ontouchstart" in document;
    },
    onTextBoxFocus:function(){},
    onKeypadHide:function(){},
    triggerChange:function(){},
    getSelf:function(){
        return this;
    },
    onTextChanged:function(){ }
};