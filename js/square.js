function area() {
  let num1 = parseFloat(document.getElementById("length").value);
  let num2 = parseFloat(document.getElementById("width").value);
  let namo = parseFloat(num1 * num2);
  let namo2 = parseFloat(num1 + num2);

  document.getElementById("resultArea").innerHTML = namo;
  document.getElementById("resultPerimeter").innerHTML = namo2;
  document.getElementById("sideOne").innerHTML = num1;
  document.getElementById("sideTwo").innerHTML = num2;
}
