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