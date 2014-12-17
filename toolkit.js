var ids = [ 580713548, 580607270,634790888, 636303474, 648267400, 645174955, 643571475, 643470370];
var da = [];
var nameCounter  = 0;
var color = d3.scale.category10().domain(d3.range(0,10));
var temp1 = [];
var temp2 = [];
var pig = [];
function sortResult(a){
    if (a.result == "Win") {
        temp1.push(a)
    }
    else if (a.result == "Lose"){
        temp2.push(a)
    }
}
function calculateOccurence(arr) {
    var a = [], b = [], prev;
    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }
    return [a, b];
}
function returnZoneIndex(array){
    for(var j=0; j < array.length;j++){
        if (array[j] >= 7){
            return j;
        }
    }
}
function calculate1(array){
            var newArray = [];
            for (var i = 0; i < array.length; i++) {
                var arr = [];
                var a=0;
                var b=0;
                for (var j = 0; j < array[i].length-1; j++) {
                
                a += array[i][j].DD;
                b = array[i][j].tsync + 1 ;
                arr.push({"ni" : b-1, "wo" :a/b});
                };
                newArray.push(arr);
            }
            return newArray;
        }
function calculate2(array){
var newArray = [];
for (var i = 0; i < array.length; i++) {
    var arr = [];
    var a=0;
    var b=0;
    for (var j = 0; j < array[i].length-1; j++) {
    
    a = array[i][j+1].DD - array[i][j].DD;
    b = array[i][j].tsync + 1 ;
    arr.push({"ni" : b-1, "wo" :Math.abs(a)});
    };
    newArray.push(arr);
}
return newArray;
}

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

