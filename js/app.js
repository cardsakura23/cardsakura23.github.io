function perimPenta(side){
    var side=parseInt(documentGetElementbyId("side").value);

    side=5*side;
    return side;
}

function areaPenta(side){
    var side=parseInt(documentGetElementbyId("side").value);
    var area;
    const mul = 1.72047740059;
    
    area=mul*(side**2);
    return area;
}

function areaRhombus(p,q){
    var p=parseInt(documentGetElementbyId("firstDiagonal").value);
    var q=parseInt(documentGetElementbyId("secondDiagonal").value);

    var area=(p*q)/2;
    return area;
}

function perimRhombus(a){
    var a=parseInt(documentGetElementbyId("side").value);
    var peri=4*a;
    
    return peri;
}
