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
    this.Keys = ["1","2","3","4","5","6","7","8","9","0",".","\u002B","\u2013","\u00D7","\u00F7","\u003D"];
    this.AllowedKeys = [8,46,37,39];
    this.AutoClear = false;
    this.KeyPad;
    this.Width = 150;
    this.Height = 285;
    this.MaximumDig = 18;
    this.CurrentFocus = null;
    $(this.TextBox).attr("maxlength",this.MaximumDig);
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
        this.KeyPad = $("<div class=\"keypadHolder\" style=\"z-index:4000;position:absolute;width:250px; height:299px;display:table;\" />");
        var cols = 4;
        var rows = Math.ceil(this.Keys.length/cols);
        var num = 0;
        var header = $("<div class=\"numPadHeader\" style=\"position:absolute;left:5px; top:5px;\" />")
        this.KeyPad.append(header);
        var key = $("<div id=\"numPadClose\" class=\"vkBtnCls\" />");
                    //key.html("X");
                    header.append(key);
                    key.bind('click',this.hidePad);
        var row = $("<div style=\"display:table-row; background:red;\" />")
        this.KeyPad.append(row);
        var key = $("<div id=\"key_emp1\" class=\"vkBtnEmp\" />");
                    key.html("");
                    row.append(key);
                    key.bind('click',this.onNumClick);
        var key = $("<div id=\"key_emp2\" class=\"vkBtnEmp\" />");
                    key.html("");
                    row.append(key);
                    key.bind('click',this.onNumClick);
        var key = $("<div id=\"key_emp3\" class=\"vkBtnEmp\" />");
                    key.html("");
                    row.append(key);
                    key.bind('click',this.onNumClick);
        var key = $("<div id=\"key_bs\" class=\"vkBtnBS\"></div>");
                    //key.html("<span class=\"del\" /> ");
                    
                    row.append(key);
                    key.bind('click',this.onNumClick);
                    
        for (var r=0; r<rows; r++) {
            var row = $("<div style=\"display:table-row; background:red;\" />")
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
        
        $('body').append(this.KeyPad);
        $(".keypadHolder").draggable({ containment: "#page-container" });
        this.KeyPad.css({"visibility":"hidden"});
        $('#navigation-container').css({'visibility':'hidden'});
    },
          
       onNumClick:function(event){
        drawLineAfterPlot = false;
        var vK = vKey.getSelf();
        if (!event) event = window.event;
        var isBackSpace = $(event.target);
        
        
        if (isBackSpace.attr('id') != "key_bs") {
            isBackSpace = isBackSpace.parents("#key_bs");
        }
        if(isBackSpace.length > 0)
        {
            var curText = vK.CurrentFocus.value;
            if (curText != undefined && curText != 'undefined' && curText.length > 0) {
                curText = curText.substr(0, curText.length-1);
            }
            
            vK.CurrentFocus.value=curText;
        }
        
        if (event.target && vK.CurrentFocus.value.length < vKey.MaximumDig){
            var e = $.Event('keypress');
	    if($(event.target).attr('id')=='key_bs')
	    {
		
	    }
	    else{
		vK.CurrentFocus.value += $(event.target).text();
		//if($(event.target).text() == "–"){
		//    vK.CurrentFocus.value +="-";
		//}else{
		//    vK.CurrentFocus.value += $(event.target).text();
		//}
	    }
        }
	   
        
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
        
        
    },
    onFocus:function(event){
        var vK = vKey.getSelf();
        if (vK.KeyPad)
            //vK.KeyPad.css({"visibility":"visible", "left": $(event.target).offset().left + "px", "top":($(event.target).offset().top + $(event.target).height() + 20)+"px"});
            //vK.KeyPad.css({"visibility":"visible", "left": "70%", "top":"70%", "position":"absolute"});
            vK.KeyPad.css({"visibility":"visible"});
            if(vK.AutoClear)event.target.value = "";
        vK.CurrentFocus = event.target;
        //$('.numTxt').css({'border-style':'inset','color':'#000'})
       
    },
    hidePad:function(){
        var vK = vKey.getSelf();
	if(vK.KeyPad)vK.KeyPad.css({"visibility":"hidden"});
	$('.numTxt').blur();
    },
    onBlur:function(){ },
    getSelf:function(){
        return this;
    }
};