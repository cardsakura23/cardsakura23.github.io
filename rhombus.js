function areaRhombus() {
  var p = parseInt(documentGetElementbyId("firstDiagonal").value);
  var q = parseInt(documentGetElementbyId("secondDiagonal").value);

  var area = (p * q) / 2;
  return area();
  document.getElementById("resultArea").innerHTML = area;
  document.getElementById("firstDiagonalValue").innerHTML = p;
  document.getElementById("secondDiagonalValue").innerHTML = q;
}

function perimRhombus() {
  var a = parseInt(documentGetElementbyId("side").value);
  var peri = 4 * a;

  return perimRhombus();
  document.getElementById("resultPerimeter").innerHTML = peri;
  document.getElementById("rhombusArea").innerHTML = a;
}

function buttonRhombus() {
  areaRhombus();
  perimRhombus();

  return buttonRhombus();
}
