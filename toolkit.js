var ids = [ 580713548, 580607270,634790888, 636303474, 648267400, 645174955, 643571475, 643470370];
var da = [];
var nameCounter  = 0;
var color = d3.scale.category10().domain(d3.range(1,10));
var temp1 = [];
var temp2 = [];
var tell = function(a){
    if (a.result == "Win") {
        temp1.push(a)
    }
    else if (a.result == "Lose"){
        temp2.push(a)
    }
}
function calculate(array){
            var newArray = [];
            for (var i = 0; i < array.length; i++) {
                var arr = [];
                var a=0;
                var b=0;
                for (var j = 0; j < array[i].length; j++) {
                
                a += array[i][j].DD;
                b = array[i][j].tsync + 1 ;
                arr.push({"ni" : b-1, "wo" :a/b});
                };
                newArray.push(arr);
            }
            return newArray;
        }
var pig = [];
    function resetClass(){
        for (var i = 0; i < 2 * ids.length; i++){
            document.getElementById("line" + i).setAttribute("class", "lines");
        }
    }
    function showPro() {
        resetClass();
        for (var i = 0; i < 4; i++) {
            document.getElementById("line" + i).removeAttribute("class", "lines");
        };
    }
    function showVeryHigh() {
        resetClass();
        for (var i = 4; i < 8; i++) {
            document.getElementById("line" + i).removeAttribute("class", "lines");
        };
    }
    function showHigh() {
        resetClass();
        for (var i = 8; i < 12; i++) {
            document.getElementById("line" + i).removeAttribute("class", "lines");
        };
    }
    function showNormal() {
        resetClass();
        for (var i = 12; i < 16; i++) {
           document.getElementById("line" + i).removeAttribute("class", "lines");
        };
    }
    function showWin() {
        resetClass();
        for (var i = 0; i < 16; i+=2) {
           document.getElementById("line" + i).removeAttribute("class", "lines");
        };
    }
    function showLose() {
        resetClass();
        for (var i = 1; i < 16; i+=2) {
           document.getElementById("line" + i).removeAttribute("class", "lines");
        };
    }
    function showAll() {
        resetClass();
        for (var i = 0; i < 16; i++) {
           document.getElementById("line" + i).removeAttribute("class", "lines");
        };
    }