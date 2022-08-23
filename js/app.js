// Phyllip
function trapezoid(){
    var trapezoidBase1 = parseInt(document.getElementById('trapezoidBaseOne').value);
    var trapezoidBase2 = parseInt(document.getElementById('trapezoidBaseTwo').value);
    var trapezoidHeight = parseInt(document.getElementById('trapezoidHeight').value);
    var trapezoidSide1 = parseInt(document.getElementById('trapezoidSideOne').value);
    var trapezoidSide2 = parseInt(document.getElementById('trapezoidSideTwo').value);
    var trapezoidArea = (((trapezoidBase1+trapezoidBase2)/2)*trapezoidHeight);
    var trapezoidPerimeter = (trapezoidBase1+trapezoidBase2+trapezoidSide1+trapezoidSide2);
    console.log(trapezoidArea, trapezoidPerimeter);
  }
  
  function sector(){
      var sectorDegreeOne = parseInt(document.getElementById('sectorDegree').value);
      var sectorRadiusOne = parseInt(document.getElementById('sectorRadius').value);
      var sectorArea = ((sectorDegreeOne/360)*Math.PI*(sectorRadiusOne*sectorRadiusOne));
      var sectorPerimeter = (((sectorDegreeOne/360)*2*Math.PI*sectorRadiusOne)+sectorRadiusOne+sectorRadiusOne);
      console.log(sectorArea, sectorPerimeter);
  }
  
  function ellipse(){
      var ellipseAxis1 = parseInt(document.getElementById('ellipseAxisOne').value);
      var ellipseAxis2 = parseInt(document.getElementById('ellipseAxisTwo').value);
      var ellipseArea = (Math.PI*ellipseAxis1*ellipseAxis2);
      var ellipsePerimeter = (Math.sqrt((ellipseAxis1*ellipseAxis1+ellipseAxis2+ellipseAxis2)/2)*2*Math.PI)
      console.log(ellipseArea);
      console.log(ellipsePerimeter);
  }

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

function areaRhombus(){
    var p=parseInt(documentGetElementbyId("firstDiagonal").value);
    var q=parseInt(documentGetElementbyId("secondDiagonal").value);

    var area=(p*q)/2;
    return area;
}

function perimRhombus(){
    var a=parseInt(documentGetElementbyId("side").value);
    var peri=4*a;
    
    return peri;
}
