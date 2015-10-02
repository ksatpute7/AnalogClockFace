
var _this;


window.NumberChart = function(elem, index){
    _this = this;
    _this.cellIndex = null;
    _this.cellCount = index;
    _this.tableElem = elem;
    _this.Canvas = null;
    _this.colors = [];
    this.init();
}

NumberChart.prototype = {
    init:function(){
        for(var i = 0; i < _this.cellCount; i++){
            $(_this.tableElem[i]).append('<canvas id="box'+i+'" width="50" height="50"></canvas>');
            _this.colors[i] = new Array();
        }
    },
    createAngle:function(index, colorCode){
        var indexCell = Number(index)
        
       try {
         var colIndx = _this.colors[indexCell].indexOf(colorCode);
       } catch(e) {
       }
        var isExists = colIndx >= 0;
        
        
        try {
            if (isExists) _this.colors[indexCell].splice(colIndx, 1);
            else if(_this.colors[indexCell].length < 3) _this.colors[indexCell].push(colorCode);
        } catch(e) {
            
        }
        var gedId = document.getElementById("box"+index);
        _this.Canvas = gedId.getContext("2d");
        _this.context = _this.Canvas;
        _this.centerX = $(gedId).width()/2;
        _this.centerY = $(gedId).height()/2;
        _this.context.clearRect(0,0,50,50);

        if(parseInt(_this.colors[indexCell].length) == 1) {
            _this.context.beginPath();
            _this.context.strokeStyle = _this.colors[indexCell][0];
            _this.context.fillStyle = _this.colors[indexCell][0];
            _this.context.lineWidth = 0;
            _this.context.lineJoin = 'round';
            _this.radius = 20;
            _this.context.arc(_this.centerX,_this.centerY,_this.radius,0,(2*Math.PI),false);
            _this.context.lineTo(_this.centerX,_this.centerY);
            _this.context.closePath();
            _this.context.fill();
            _this.context.stroke();        
        }else if(parseInt(_this.colors[indexCell].length) == 2){
            var arcInd = {arc:[{start: (2*Math.PI/4), end:4.75},{start: -(2*Math.PI/4), end:(2*Math.PI/4)}]}
            
            for(var indexColor = 0; indexColor < _this.colors[indexCell].length; indexColor++){
                console.log(_this.colors[indexCell].length, indexColor)
                _this.context.beginPath();
                _this.context.strokeStyle = _this.colors[indexCell][indexColor];
                _this.context.fillStyle = _this.colors[indexCell][indexColor];
                _this.context.lineWidth = 0;
                _this.context.lineJoin = 'round';
                _this.radius = 20;
                
                _this.context.arc(_this.centerX,_this.centerY,_this.radius,arcInd.arc[indexColor].start,arcInd.arc[indexColor].end,false);
                _this.context.lineTo(_this.centerX,_this.centerY);
                _this.context.closePath();
                _this.context.fill();
                _this.context.stroke();        
            }
        }else{
            var arcInd = {arc:[{start: (2*Math.PI/2.3), end:(2*Math.PI/1.34)},{start: (2.12*Math.PI), end:(2*Math.PI/2.34)},{start: (2*Math.PI/1.34), end:(2*Math.PI/-1.07)}]}
            
            for(var indexColor = 0; indexColor < parseInt(_this.colors[indexCell].length); indexColor++){
                _this.context.beginPath();
                _this.context.strokeStyle = _this.colors[indexCell][indexColor];
                _this.context.fillStyle = _this.colors[indexCell][indexColor];
                _this.context.lineWidth = 0;
                _this.context.lineJoin = 'round';
                _this.radius = 20;
                
                _this.context.arc(_this.centerX,_this.centerY,_this.radius,arcInd.arc[indexColor].start,arcInd.arc[indexColor].end,false);
                _this.context.lineTo(_this.centerX,_this.centerY);
                _this.context.closePath();
                _this.context.fill();
                _this.context.stroke();        
            }
        }
    },
    resetAct:function(){
        for(var i = 0; i < _this.cellCount; i++){
            var gedId = document.getElementById("box"+i);
            _this.Canvas = gedId.getContext("2d");
            _this.context = _this.Canvas;
            _this.context.clearRect(0,0,50,50);
            _this.colors[i] = new Array();
        }
    },
    reDraw:function(){
        
        for(var indexCell = 0; indexCell < Number(_this.cellCount); indexCell++){
            var gedId = document.getElementById("box"+indexCell);
            
            _this.Canvas = gedId.getContext("2d");
            _this.context = _this.Canvas;
            _this.centerX = $(gedId).width()/2;
            _this.centerY = $(gedId).height()/2;
            _this.context.clearRect(0,0,50,50);
    
            try {
                if(_this.colors[indexCell].length == 1) {
                _this.context.beginPath();
                _this.context.strokeStyle = _this.colors[indexCell][0];
                _this.context.fillStyle = _this.colors[indexCell][0];
                _this.context.lineWidth = 0;
                _this.context.lineJoin = 'round';
                _this.radius = 20;
                _this.context.arc(_this.centerX,_this.centerY,_this.radius,0,(2*Math.PI),false);
                _this.context.lineTo(_this.centerX,_this.centerY);
                _this.context.closePath();
                _this.context.fill();
                _this.context.stroke();        
            }else if(_this.colors[indexCell].length == 2){
                var arcInd = {arc:[{start: (2*Math.PI/4), end:4.75},{start: -(2*Math.PI/4), end:(2*Math.PI/4)}]}
                
                for(var indexColor = 0; indexColor < _this.colors[indexCell].length; indexColor++){
                    _this.context.beginPath();
                    _this.context.strokeStyle = _this.colors[indexCell][indexColor];
                    _this.context.fillStyle = _this.colors[indexCell][indexColor];
                    _this.context.lineWidth = 0;
                    _this.context.lineJoin = 'round';
                    _this.radius = 20;
                    
                    _this.context.arc(_this.centerX,_this.centerY,_this.radius,arcInd.arc[indexColor].start,arcInd.arc[indexColor].end,false);
                    _this.context.lineTo(_this.centerX,_this.centerY);
                    _this.context.closePath();
                    _this.context.fill();
                    _this.context.stroke();        
                }
            }else{
                var arcInd = {arc:[{start: (2*Math.PI/2.3), end:(2*Math.PI/1.34)},{start: (2.12*Math.PI), end:(2*Math.PI/2.34)},{start: (2*Math.PI/1.34), end:(2*Math.PI/-1.07)}]}
                
                for(var indexColor = 0; indexColor < _this.colors[indexCell].length; indexColor++){
                    console.log(_this.colors[indexCell].length, indexColor)
                    _this.context.beginPath();
                    _this.context.strokeStyle = _this.colors[indexCell][indexColor];
                    _this.context.fillStyle = _this.colors[indexCell][indexColor];
                    _this.context.lineWidth = 0;
                    _this.context.lineJoin = 'round';
                    _this.radius = 20;
                    
                    _this.context.arc(_this.centerX,_this.centerY,_this.radius,arcInd.arc[indexColor].start,arcInd.arc[indexColor].end,false);
                    _this.context.lineTo(_this.centerX,_this.centerY);
                    _this.context.closePath();
                    _this.context.fill();
                    _this.context.stroke();        
                }
            }
            } catch(e) {
            
            }
        }
        
    }
}

