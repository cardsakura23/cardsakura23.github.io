function perimPenta(){
    var side=parseInt(documentGetElementbyId("side").value);

    perimeter=5*side;
    return perimeter;
}

function areaPenta(){
    var side=parseInt(documentGetElementbyId("side").value);
    var area;
    const mul = 1.72047740059;
    
    area=mul*(side**2);
    return area();
}