/* This is Virtual KeyPad (vKeyPad)
 * ----vKeyPad 0.9
 * developed by Lapiz
 */

var vKey;
window.vKeyPad = function(TextBox){
    vKey = this;
    this.TextBox = [];
    this.TextBox[0] = TextBox[0];
    try {
        if(TextBox.indexOf(".") == 0){
            this.TextBox = $(TextBox);
        }
        else if (TextBox.indexOf("#") == 0) {
            this.TextBox = $(TextBox);
        }
    } catch(e) {}
    this.Keys = ["1","2","3","4","5","6","7","8","9","0","&minus;", "&plus;", "&times;"];
    this.AllowedKeys = [8,46,37,39];
    this.AutoClear = false;
    this.KeyPad;
    this.KeyPadHolder;
    this.Width = 180;
    this.Height = 150;
    this.MaximumDig = 1;
    this.CurrentFocus = null;
    
    $(this.TextBox).attr('maxlength',this.MaximumDig);
    $('#f1, #f3').attr('maxlength','1');
    $('.solveEq').attr('maxlength','3')
    for (var t=0; t<this.TextBox.length; t++) {
        var txtBox = $(this.TextBox[t]);
        if (txtBox[0]) {
	    txtBox.bind('keypress',this.onKeyPress);
            txtBox.bind('focus',this.onFocus);
            txtBox.bind('blur',this.onBlur);
            txtBox.blur();
        }
    }
    this.init();
};

vKeyPad.prototype = {
    init:function(){
       for (var k=0; k < this.Keys.length; k++) this.AllowedKeys.push(this.Keys[k].charCodeAt(0));
        //this.KeyPad = $("<div class=\"keypadHolder\" style=\"position:absolute;z-index:20;width:"+this.Width+"px;height:215px;display:table;\" />");
	this.KeyPadHolder = $("<div class=\"keypadHolder\" style=\"z-index:1000;position:absolute; width:178px;height:242px;display:table; top:150px; left:50px;\"></div>");
	this.KeyPad = $("<div class=\"keypadInnerHolder\" style=\"width:160px;height:220px;display:table;position: absolute; top:0px; left:0px;\"></div>");
	var cols = 3;
        var rows = Math.ceil(this.Keys.length/cols);
        var num = 0;
        var header = $("<div class=\"numPadHeader\" style=\"position:absolute; left:146px; top:-10px;\" />")
	this.KeyPadHolder.append(this.KeyPad);
        this.KeyPad.append(header);
	//console.log(this.KeyPadHolder);
        var key = $("<div id=\"numPadClose\" class=\"vkBtnCls\" />");
                    //key.html("X");
                    header.append(key);
                    key.bind('click',this.hidePad);
        var row = $("<div style=\"display:table-row;\" />")
        this.KeyPad.append(row);
        //var key = $("<div id=\"key_emp1\" class=\"vkBtnEmp\" />");
        //            key.html("");
        //            row.append(key);
        //            key.bind('click',this.onNumClick);
        //var key = $("<div id=\"key_emp2\" class=\"vkBtnEmp\" />");
        //            key.html("");
        //            row.append(key);
        //            key.bind('click',this.onNumClick);
        var key = $("<div id=\"key_bs\" class=\"vkBtnBS\" style=\"top:222px; position:absolute; left:108px;\"/>");
                    key.html("<svg class=\"delete\" width=\"40\" height=\"35\" viewBox=\"0 0 1024 1024\"><g><path d=\"M921.6 153.6h-489.165c-22.528 0-54.835 12.134-71.782 26.982l-347.955 304.435c-16.947 14.848-16.947 39.117 0 53.965l347.955 304.486c16.947 14.797 49.254 26.931 71.782 26.931h489.165c56.371 0 102.4-46.080 102.4-102.4v-512c0-56.32-46.029-102.4-102.4-102.4zM777.779 716.8l-130.918-130.918-130.816 130.918-73.933-73.882 130.867-130.918-130.867-130.867 73.933-73.933 130.867 130.867 130.867-130.867 73.882 73.933-130.816 130.867 130.867 130.867-73.933 73.933z\"></path></g></svg>");
                    
                    row.append(key);
                    key.bind('click',this.onNumClick);
                    
        for (var r=0; r<rows; r++) {
            var row = $("<div style=\"display:table-row;\" />")
            this.KeyPad.append(row);
            for (var c=0; c<cols; c++) {
                if (this.Keys[num]) {
                    var key = $("<div id=\"key_"+num+"\" class=\"vkBtn\" />");
                    key.html(this.Keys[num]);
                    row.append(key);
                    key.bind('click',this.onNumClick);
                    num++;
                }
            }
        }
        
        $('body').append(this.KeyPadHolder);
        this.KeyPadHolder.draggable({ containment: "#vkeyCont" });
        this.KeyPadHolder.css({"visibility":"hidden"});
        $('#navigation-container').css({'visibility':'hidden'});
    },
          
       onNumClick:function(event){
        drawLineAfterPlot = false;
        var vK = vKey.getSelf();
        if (!event) event = window.event;
        var isBackSpace = $(event.target);
        
        
        if (isBackSpace.attr('id') != "key_bs") {
            isBackSpace = isBackSpace.parents("#key_bs");
	    
	    /*if (isSubmit) {
		for(var i=0; i<$('.numTxt').length; i++) {
		setRe = $('.numTxt').eq(i).val() != ""
		if (!setRe) break;
		}
		if (setRe) {
			isSubmit = true;
			buttonsub();
		}else{
		    $(".icoFeed").css({'background-image':'url(images/btFeedOff@2x.png)'});
		    $('#submit').unbind('click', onSubmitClick);
		}
	    }*/
        }
        if(isBackSpace.length > 0)
        {
            var curText = vK.CurrentFocus.value;
            if (curText != undefined && curText != 'undefined' && curText.length > 0) {
                curText = curText.substr(0, curText.length-1);
            }
                  
            vK.CurrentFocus.value=curText;
        }
	if ($('#f1').val()=="" || $('#f3').val()=="" ) {
                       $('#createArrayButton').removeClass('active').addClass("disabled").attr('disabled','disabled');
		       $('#changeObjectButton').removeClass('active').addClass("disabled").attr('disabled','disabled');
		       
                  }
	
        
        if (event.target && vK.CurrentFocus.value.length < $(vK.CurrentFocus).attr('maxlength')){
            var e = $.Event('keypress');
        if($(event.target).attr('id')=='key_bs')
        {
            
        }
        else{
            vK.CurrentFocus.value += $(event.target).text();
            //if($(event.target).text() == "?"){
            //    vK.CurrentFocus.value +="-";
            //}else{
            //    vK.CurrentFocus.value += $(event.target).text();
            //}
        }
        
        if (vK.CurrentFocus.id=='x1' || vK.CurrentFocus.id=='x2' || vK.CurrentFocus.id=='x3' || vK.CurrentFocus.id=='x4' || vK.CurrentFocus.id=='x5' || vK.CurrentFocus.id=='x6' )
        {
            //console.log("vK.CurrentFocus.value --->>>"+ vK.CurrentFocus.value);
	    if (vK.CurrentFocus.value.length > 1 && $(event.target).text() == "\u2013") {
		var curText = vK.CurrentFocus.value;
		curText = curText.substr(0, curText.length-1);
		vK.CurrentFocus.value = curText;
	    }
            
            var mathSym = vK.CurrentFocus.value;
            mathSym = mathSym.toString().replace('\u2013','-');
            
          if(mathSym > 10 || mathSym< -3 || mathSym=='\u2013\u2013' )
          {
             var curText = vK.CurrentFocus.value;
            console.log(curText);
	    
            if (curText != undefined && curText != 'undefined' && curText.length > 0) {
                curText = curText.substr(0, curText.length-1);    
            }
            
            console.log(curText);
            vK.CurrentFocus.value=curText;
          }
        }   
            try {
		resetEnable();
	    } catch(e) {
		
	    }
        if (vK.CurrentFocus.id=='y1' || vK.CurrentFocus.id=='y2' || vK.CurrentFocus.id=='y3' || vK.CurrentFocus.id=='y4' || vK.CurrentFocus.id=='y5' || vK.CurrentFocus.id=='y6' )
        {
            
	    if (vK.CurrentFocus.value.length > 1 && $(event.target).text() == "\u2013") {
		var curText = vK.CurrentFocus.value;
		curText = curText.substr(0, curText.length-1);
		vK.CurrentFocus.value = curText;
	    }
            var mathSym = vK.CurrentFocus.value;
            mathSym = mathSym.toString().replace('\u2013','-');
     
          //if(mathSym >10 || mathSym<-3)
          //{
          //   var curText = vK.CurrentFocus.value;
          //  
          //  if (curText != undefined && curText != 'undefined' && curText.length > 0) {
          //      curText = curText.substr(0, curText.length-1);    
          //  }
          //  
          //  vK.CurrentFocus.value=curText;
          //}
        }
        
        }
	
        /*for(var i=0; i<$('.numTxt').length; i++) {
            setRe = $('.numTxt').eq(i).val() != ""
            if (!setRe) break;
        }
	if (setRe) {
		isSubmit = true;
		
	}*/
	vK.onTextChanged(vK);
        },
       
          
    onKeyPress:function(event){
        var vK = vKey.getSelf();
        if (!event) event = window.event;
        var allowed = false;
        var code = event.which;
        event.charCode != 0 ? code: event.charCode;
        event.keyCode !=0 ? code: event.keyCode;
        event.which !=0 ? code: event.which;
        if(vK.AllowedKeys.indexOf(code) >= 0) allowed = true;
        if (!allowed) event.preventDefault();
        if (event.target.value.toString().length == 0) event.target.Value = "0";
	$(this).css({"background-image": "-webkit-radial-gradient(left, rgba(200, 219, 182, 0.99), #ccc)"});
    },
    onFocus:function(event){
        var vK = vKey.getSelf();
        if (vK.KeyPad)
	    vK.KeyPadHolder.css({"visibility":"visible"/*, "left": "380px", "top": "271px"*/});
            vK.KeyPadHolder.css({"visibility":"visible"});
            if(vK.AutoClear)event.target.value = "";
        vK.CurrentFocus = event.target;
	$(".numTxt").css({background:"#FFFed2"});
        $(this).css({"background-image": "-webkit-radial-gradient(left, rgba(200, 219, 182, 0.99), #ccc)"})
       if (event.target.id == 'f1' ||event.target.id == 'f3') {
	    $('#key_10, #key_11, #key_12').css({'opacity':'0.5','pointer-events':'none'});
       }
       else {
	    $('#key_10, #key_11, #key_12').css({'opacity':'1','pointer-events':'auto'});
       }
    },
    hidePad:function(){
        var vK = vKey.getSelf();
        if(vK.KeyPad)vK.KeyPadHolder.css({"visibility":"hidden"});
	$(vK.CurrentFocus).blur();
	$(".numTxt").css({"background": "#FFFed2"});
    },
    onBlur:function(){
	//$(vK.CurrentFocus).css({"background": "#FFFed2"})
	$(this).css({"background": "#FFFed2"})	
    },
    onTextChanged:function(){
	
    },
    getSelf:function(){
        return this;
    }
};