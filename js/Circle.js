//Get Circle Function
function Circle() {
  var circleRadius = parseInt(document.getElementById("circleRadius").value); //Circle Input Radius
  var circleArea = Math.pi * circleRadius * circleRadius; //Circle Area formula
  var circlePerimeter = 2 * Math.pi * circleRadius; //Circle Perimeter formula
  console.log(circleArea, circlePerimeter); //circle output

  document.getElementById("circleArea").innerHTML = circleArea;
  document.getElementById("circlePerimeter").innerHTML = circlePerimeter;
  document.getElementById("radiusArea").innerHTML = circleRadius;
  document.getElementById("radiusPerimeter").innerHTML = circleRadius;
}
