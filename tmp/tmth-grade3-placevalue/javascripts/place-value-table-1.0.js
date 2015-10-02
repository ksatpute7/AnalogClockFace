var _this;
window.PlaceValueTable = function (table, details){
    _this = this;
    this.tableContainer = table;
    this.options = details;
    
    this.isTouchDevice = ('ontouchstart' in window) || ('onmsgesturechange' in window);
    
    this.DownEvent = (this.isTouchDevice ? "touchstart" : "mousedown");
    
    this.contents = [{grade:'k', tableHeader:'<tr><td>tens</td><td>ones</td><td class="removeColumnHead"></td></tr>', tableBody:'<tr><td><div class="handle"><div><input type="checkbox" class="chkBox" name="chkBox" value=""/></div></div><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td class="removeColumn"><img src="images/trash.png" width="15" height="20"/></td></tr>'},
                     {grade:'1', tableHeader:'<tr><td>tens</td><td>ones</td><td class="removeColumnHead"></td></tr>', tableBody:'<tr><td><div class="handle"><div><input type="checkbox" class="chkBox" name="chkBox" value=""/></div></div><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td class="removeColumn"><img src="images/trash.png" width="15" height="20"/></td></tr>'},
                     {grade:'2', tableHeader:'<tr><td>hundreds</td><td>tens</td><td>ones</td><td class="removeColumnHead"></td></tr>', tableBody:'<tr><td><div class="handle"><div><input type="checkbox" class="chkBox" name="chkBox" value=""/></div></div><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td class="removeColumn"><img src="images/trash.png" width="15" height="20"/></td></tr>'},
                     {grade:'3', tableHeader:'<tr><td class="hunThou">hundred thousands</td><td class="tenThou">ten thousands</td><td class="thou">thousands</td><td>hundreds</td><td>tens</td><td>ones</td><td class="removeColumnHead"></td></tr>', tableBody:'<tr><td><div class="handle"><div><input type="checkbox" class="chkBox" name="chkBox" value=""/></div></div><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td class="removeColumn"><img src="images/trash.png" width="15" height="20"/></td></tr>'},
                     {grade:'4', tableHeader:'<tr><td class="millions">millions</td><td class="hunThou">hundred thousands</td><td class="tenThou">ten thousands</td><td class="thou">thousands</td><td>hundreds</td><td>tens</td><td>ones</td><td class="separator"></td><td class="downPlaceValue">tenths</td><td class="downPlaceValue">hundredths</td><td class="removeColumnHead"></td></tr>', tableBody:'<tr><td><div class="handle"><div><input type="checkbox" class="chkBox" name="chkBox" value=""/></div></div><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td class="separator">.</td><td><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td class="removeColumn"><img src="images/trash.png" width="15" height="20"/></td></tr>'},
                     {grade:'5', tableHeader:'<tr><td class="millions">millions</td><td class="hunThou">hundred thousands</td><td class="tenThou">ten thousands</td><td class="thou">thousands</td><td>hundreds</td><td>tens</td><td>ones</td><td class="separator"></td><td class="downPlaceValue">tenths</td><td class="downPlaceValue">hundredths</td><td class="downPlaceValue">thousandths</td><td class="downPlaceValue">ten thousandths</td><td class="downPlaceValue">hundred thousandths</td><td class="downPlaceValue">millionths</td><td class="removeColumnHead"></td></tr>', tableBody:'<tr><td><div class="handle"><div><input type="checkbox" class="chkBox" name="chkBox" value=""/></div></div><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td class="separator">.</td><td><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td><input type="text" readonly="true" class="numTxt"/></td><td class="removeColumn"><img src="images/trash.png" width="15" height="20"/></td></tr>'},
                     ]
    
    $('#title').html(this.options.title);
    
    this.activityTable="";
    this.rowsToAdd = "";
    this.selectedRow = null;
    this.audio = "";
    
    if (!this.options.isInstructionNeeded) {
        $(".question, #blocker").hide();
        $('.btInfo').css({'opacity':'0.5'});
        try{
            $(".icoInfo").unbind(this.DownEvent, showInstruction);
        }catch(e){}
    }
    
    $(window).bind("touchstart mousedown", this.onWindowClick);
    this.init();
}
PlaceValueTable.prototype = {
    init:function(){
        console.log("Activity Initialized...");
        this.clearAll();
        this.activityTable = $('<table class="mainTable g'+this.options.grade+'" align="center"></table>')
        for(var content=0; content<this.contents.length;content++)
        {
            if (this.contents[content].grade == this.options.grade) {
                this.rowsToAdd = this.contents[content].tableBody;
                this.activityTable.append(this.contents[content].tableHeader);
                for(var row=0; row<this.options.defaultRows;row++)
                    this.activityTable.append(this.contents[content].tableBody);
            }
        }
        this.tableContainer.append(this.activityTable);
        
        $('.mainTable').css({'margin-left':((Math.max($('body').width(), $('.mainTable').width()) - Math.min($('body').width(), $('.mainTable').width())+10)/2)+'px'});
        
        if (this.options.headerAudios.length > 0) {
            this.loadAudios();
        }
        
        this.preLoadValues();
        this.loadControls();
        
        this.keypad = null;
        this.keypad = new vKeyPad('.numTxt', "#tableContainer", {keys:
                                  [
                                   {"id":"1", "innerHTML":"1", "value":"1", "isSpecialKey":true, callback:this.keyCallBack, "rowIndex":0, "colSpan":1},
                                   {"id":"2", "innerHTML":"2", "value":"2", "isSpecialKey":true, callback:this.keyCallBack, "rowIndex":0, "colSpan":1},
                                   {"id":"3", "innerHTML":"3", "value":"3", "isSpecialKey":true, callback:this.keyCallBack, "rowIndex":0, "colSpan":1},
                                   {"id":"4", "innerHTML":"4", "value":"4", "isSpecialKey":true, callback:this.keyCallBack, "rowIndex":1, "colSpan":1},
                                   {"id":"5", "innerHTML":"5", "value":"5", "isSpecialKey":true, callback:this.keyCallBack, "rowIndex":1, "colSpan":1},
                                   {"id":"6", "innerHTML":"6", "value":"6", "isSpecialKey":true, callback:this.keyCallBack, "rowIndex":1, "colSpan":1},
                                   {"id":"7", "innerHTML":"7", "value":"7", "isSpecialKey":true, callback:this.keyCallBack, "rowIndex":2, "colSpan":1},
                                   {"id":"8", "innerHTML":"8", "value":"8", "isSpecialKey":true, callback:this.keyCallBack, "rowIndex":2, "colSpan":1},
                                   {"id":"9", "innerHTML":"9", "value":"9", "isSpecialKey":true, callback:this.keyCallBack, "rowIndex":2, "colSpan":1},
                                   {"id":"0", "innerHTML":"0", "value":"0", "isSpecialKey":true, callback:this.keyCallBack, "rowIndex":3, "colSpan":1}],maximumLength:1, closeOnBlur:false, useComplexMath:false});
        this.keypad.onTextChanged = function(event, target){
            
            $(target.CurrentFocus).attr('value',$(target.CurrentFocus).val());
            resetEnable();

        }
        this.keypad.onTextBoxFocus = function(target){
            target.parent().css({'background-color':'"#faecc9"'});
        }
        this.keypad.onTextBoxBlur = function(target){
            target.parent().css({'background-color':'"#fff"'});
        }
        if (this.options.grade == "5") {
            this.activityTable.css({'font-size':'14px'});
        }
        if (this.options.grade == "k" || this.options.grade == "1" || this.options.grade == "2") {
            $('.vkBtn').css({'font-size':'30px'});
        }
        
        $('input[type="checkbox"]').bind('click', function(event){_this.chooseRow(event);});
    },
    clearAll:function (){
        this.tableContainer.html("");
    },
    reset:function(){
        $('.keypadHolder').remove();
        try{_this.audio.pause()}catch(e){}
        this.init();
    },
    loadAudios:function(){
        for(var item=0; item<this.options.headerAudios.length;item++)
        {
            this.activityTable.find('tr').eq(0).find('td').eq(item).append(' <img src="images/audioicon.png" width="25" height="25" valign="middle" class="audioicon"/>');
        }
        $('.audioicon').bind(this.DownEvent, this.playValueAudio);
    },
    preLoadValues:function(){
        var values = this.options.preLoadValues;
        for(var item=0; item<values.length;item++)
        {
            this.activityTable.find('tr').eq(parseInt(values[item].row)).find('td').eq(parseInt(values[item].col)-1).find('input').val(values[item].value).attr('value', values[item].value).removeClass('numTxt').addClass('preLoaded').parent().addClass('preLoaded');
        }
        $('.preLoaded').css({'background-color':this.options.preLoadedCellBg});
    },
    loadControls:function(){
        var btns = $('<tr><td><div id="addBtn">+</div><div id="upBtn"><div>&nbsp;</div></div><div id="downBtn"><div>&nbsp;</div></div></td></tr>');
        var controls = $('<table align="center" id="controls"></div>');
        controls.append(btns);
        this.tableContainer.append(controls);
        $('#addBtn').bind(this.DownEvent, this.addRows);
        $('.removeColumn').bind(this.DownEvent, this.removeRows);
        $('#upBtn').bind(this.DownEvent, this.arrangeRow);
        $('#downBtn').bind(this.DownEvent, this.arrangeRow);
        
        $('#upBtn, #downBtn').css('opacity','0.5');
        
        _this.checkState();
    },
    chooseRow:function(event){
        var target = event.target;
        $('.handle input[type="checkbox"]').prop('checked',false);
        $(target).prop('checked',true);
        this.selectedRow = $(target).index('input[type="checkbox"]');
        $('#upBtn, #downBtn').css('opacity','1');
        if(this.selectedRow == 0)
        {
            $('#upBtn').css('opacity','0.5');
        }
        var totRows = _this.activityTable.find('tr').length;
        if (this.selectedRow >= totRows-2) {
            $('#downBtn').css('opacity','0.5');
        }
    },
    arrangeRow:function(){
      var getId = $(this).attr('id');
      if ($(this).css('opacity')>=1) {
        if (getId == "upBtn") {
            var selRowContent = _this.activityTable.find('tr').eq(_this.selectedRow+1).html();
            var prevRowContent = _this.activityTable.find('tr').eq(_this.selectedRow).html()
            _this.activityTable.find('tr').eq(_this.selectedRow).html(selRowContent);
            _this.activityTable.find('tr').eq(_this.selectedRow+1).html(prevRowContent);
            _this.selectedRow--;
            $('input[type="checkbox"]').eq(_this.selectedRow).prop('checked', true);
        }
        else if (getId == "downBtn") {
            var selRowContent = _this.activityTable.find('tr').eq(_this.selectedRow+1).html();
            var nextRowContent = _this.activityTable.find('tr').eq(_this.selectedRow+2).html()
            _this.activityTable.find('tr').eq(_this.selectedRow+2).html(selRowContent);
            _this.activityTable.find('tr').eq(_this.selectedRow+1).html(nextRowContent);
            _this.selectedRow++;
            $('input[type="checkbox"]').eq(_this.selectedRow).prop('checked', true);
        }
        
        try{
            $('input[type="checkbox"]').unbind('click');
        }catch(e){}
        $('input[type="checkbox"]').bind('click', function(event){_this.chooseRow(event);});
        
        _this.keypad.loadControls();
        _this.keypad.onTextChanged = function(event, target){
            $(target.CurrentFocus).attr('value',$(target.CurrentFocus).val());
        }
        
        if (_this.options.grade == "k" || _this.options.grade == "1" || _this.options.grade == "2") {
            $('.vkBtn').css({'font-size':'30px'});
        }
        resetEnable();
        
        try{
            $('.removeColumn').unbind(_this.DownEvent, _this.removeRows);
        }catch(e){}
        $('.removeColumn').bind(_this.DownEvent, _this.removeRows);
        
        
        $('.numTxt').parent().removeAttr('style');
        
        $('#upBtn, #downBtn').css('opacity','1');
        
        if(_this.selectedRow == 0)
        {
            $('#upBtn').css('opacity','0.5');
        }
        var totRows = _this.activityTable.find('tr').length;
        if (_this.selectedRow >= totRows-2) {
            $('#downBtn').css('opacity','0.5');
        }
        
      }
    },
    checkState:function(){
        var totRows = _this.activityTable.find('tr').length;
        if (totRows >= _this.options.maxRow+1) {
            $('#addBtn').css({'opacity':'0.5'});
        }
        else{
            $('#addBtn').css({'opacity':'1'});
        }
        if (totRows == _this.options.minRow+1) {
            //_this.activityTable.find('tr').find('td').last().hide();
            _this.activityTable.find('tr').each(function(){
                $(this).find('td').last().hide();
            });
        }
        else {
            _this.activityTable.find('tr').find('td').show();
        }
        if (this.options.canRemovePreLoadedRows == false) {
            _this.activityTable.find('tr').each(function(){
                if($(this).find('.preLoaded').length > 0)
                {
                    $(this).find('td').last().hide();
                }
            });
        }
        if (totRows > 2) {
            $('.handle').show();
        }
        else {
            $('.handle').hide();
        }
        
    },
    addRows:function(event){
        if ($('#addBtn').css('opacity')>=1) {
            _this.activityTable.append(_this.rowsToAdd);
            try{
                $('input[type="checkbox"]').unbind('click');
            }catch(e){}
            $('input[type="checkbox"]').bind('click', function(event){_this.chooseRow(event);});
            $('input[type="text"]').css({'background-color':'"#fff"'});
            _this.keypad.loadControls();
            _this.keypad.onTextChanged = function(event, target){
                $(target.CurrentFocus).attr('value',$(target.CurrentFocus).val());
            }
            _this.keypad.onTextBoxFocus = function(target){
                target.parent().css({'background-color':'"#faecc9"'});
            }
            _this.keypad.onTextBoxBlur = function(target){
                target.parent().css({'background-color':'"#fff"'});
            }
            _this.keypad.blur();
            if (_this.options.grade == "k" || _this.options.grade == "1" || _this.options.grade == "2") {
                $('.vkBtn').css({'font-size':'30px'});
            }
            resetEnable();
            
            try{
                $('.removeColumn').unbind(_this.DownEvent, _this.removeRows);
            }catch(e){}
            $('.removeColumn').bind(_this.DownEvent, _this.removeRows);
            
            
            $('.numTxt').parent().removeAttr('style');
            
            if (_this.selectedRow!=null) {
                $('#upBtn, #downBtn').css('opacity','1');
            }
            
        
            if(_this.selectedRow == 0)
            {
                $('#upBtn').css('opacity','0.5');
            }
            var totRows = _this.activityTable.find('tr').length;
            if (_this.selectedRow >= totRows-2) {
                $('#downBtn').css('opacity','0.5');
            }
            
        }
        
        _this.checkState();
        return false;
        
    },
    removeRows:function(){
        var rowIndex = $(this).parent().index();
        _this.activityTable.find('tr').eq(rowIndex).remove();
        resetEnable();
        _this.checkState();
        
        if (_this.selectedRow!=null) {
                $('#upBtn, #downBtn').css('opacity','1');
            }
        
        if(_this.selectedRow == 0)
        {
            $('#upBtn').css('opacity','0.5');
        }
        var totRows = _this.activityTable.find('tr').length;
        if (_this.selectedRow >= totRows-2) {
            $('#downBtn').css('opacity','0.5');
        }
        
    },
    onWindowClick:function(event){
        if (!$(event.target).hasClass('chkBox') && $(event.target).attr('id')!="upBtn" && $(event.target).attr('id')!="downBtn") {
            _this.selectedRow = null;
            $('.handle input[type="checkbox"]').prop('checked',false);
            $('#upBtn, #downBtn').css('opacity','0.5');
        }
        
    },
    playValueAudio:function(){
        try{_this.audio.pause()}catch(e){}
        var iconIndex = $(this).parent().index();
       try{
        _this.audio = new Audio(_this.options.headerAudios[iconIndex]);
        _this.audio.play();
        _this.audio.currentTime = 0;
       }catch(e){}
    },
    keyCallBack:function(keyPad, existingText, keyDetails){
        return keyDetails.value;
    },
};