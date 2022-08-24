//Get Circle Function
function Circle() {
  var circleRadius = parseInt(document.getElementById("circleRadius").value);
  var circleArea = Math.PI * circleRadius * circleRadius;
  //Circle Input Radius
  var circlePerimeter = 2 * Math.PI * circleRadius; //Circle Perimeter formula
  console.log(circleArea);
  console.log(document.getElementById("circleArea"));

  document.getElementById("circleArea").innerHTML = circleArea;
  document.getElementById("circlePerimeter").innerHTML = circlePerimeter;
  document.getElementById("radiusArea").innerHTML = circleRadius;
  document.getElementById("radiusPerimeter").innerHTML = circleRadius;
}
