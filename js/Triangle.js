//Get triangle function
function Triangle(){
    //var triangleBase = parseInt(document.getElementById('triangleBase').value);
    //var triangleHeight= parseInt(document.getElementById('triangleHeight').value);
    var triangleSide1 = parseInt(document.getElementById('triangleSide1').value);
    var triangleSide2 = parseInt(document.getElementById('triangleSide2').value);
    var triangleSide3 = parseInt(document.getElementById('triangleSide3').value);
    var halfTrianglePerimeter=(triangleSide1+triangleSide2+triangleSide3)/2;//semi-perimeter variable to calculate area
    var triangleArea = Math.sqrt(halfTrianglePerimeter*(halfTrianglePerimeter-triangleSide1)*(halfTrianglePerimeter-triangleSide2)*(halfTrianglePerimeter-triangleSide3));//Trianlge area formula
    var trianglePerimeter = triangleSide1 + triangleSide2 + triangleSide3; //Triangle Perimeter formula
    console.log(triangleArea, trianglePerimeter);//Triangle outputs

    document.getElementById("triangleArea").innerHTML = triangleArea;
    document.getElementById("trianglePerimeter").innerHTML = trianglePerimeter;
}


