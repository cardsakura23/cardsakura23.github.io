function areaRhombus(){
    var p=parseInt(documentGetElementbyId("firstDiagonal").value);
    var q=parseInt(documentGetElementbyId("secondDiagonal").value);

    var area=(p*q)/2;
    return area();
}

function perimRhombus(){
    var a=parseInt(documentGetElementbyId("side").value);
    var peri=4*a;
    
    return perimRhombus();
}

function buttonRhombus() {
    areaRhombus();
    perimRhombus();

    return buttonRhombus();
}