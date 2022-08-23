function perimPenta(){
    var side=parseInt(documentGetElementbyId("side").value);

    side=5*side;
    return side;
}

function areaPenta(){
    var side=parseInt(documentGetElementbyId("side").value);
    var area;
    const mul = 1.72047740059;
    
    area=mul*(side**2);
    return area;
}