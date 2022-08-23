function ellipse(){
    var ellipseAxis1 = parseInt(document.getElementById('ellipseAxisOne').value);
    var ellipseAxis2 = parseInt(document.getElementById('ellipseAxisTwo').value);
    var ellipseArea = (Math.PI*ellipseAxis1*ellipseAxis2);
    var ellipsePerimeter = (Math.sqrt((ellipseAxis1*ellipseAxis1+ellipseAxis2+ellipseAxis2)/2)*2*Math.PI)
    console.log(ellipseArea);
    console.log(ellipsePerimeter);
}