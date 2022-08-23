// // html
// <p>Ellipse</p>
//     <label for="ellipseAxisOne">Axis a</label>
//     <input type="number" name="ellipseAxisOne" id="ellipseAxisOne"><br>
//     <label for="sectorAxisTwo">Axis b</label>
//     <input type="number" name="ellipseAxisTwo" id="ellipseAxisTwo"><br>
//     <p>"The area of the ellipse is: "<span id="ellipseArea"></span></p>
//     <p>"The circumference of the ellipse is: "<span id="ellipsePerimeter"></span></p>
//     <button onclick="ellipse()">Calculate</button><br></br>

//
function ellipse() {
  var ellipseAxis1 = parseInt(document.getElementById("ellipseAxisOne").value);
  var ellipseAxis2 = parseInt(document.getElementById("ellipseAxisTwo").value);
  var ellipseArea = Math.PI * ellipseAxis1 * ellipseAxis2;
  var ellipsePerimeter =
    Math.sqrt((ellipseAxis1 * ellipseAxis1 + ellipseAxis2 + ellipseAxis2) / 2) *
    2 *
    Math.PI;
  console.log(ellipseArea);
  console.log(ellipsePerimeter);

  document.getElementById("resultArea").innerHTML = ellipseArea;
  document.getElementById("resultPerimeter").innerHTML = ellipsePerimeter;
  document.getElementById("ellipseAxisOneValue").innerHTML = ellipseAxis1;
  document.getElementById("ellipseAxisTwoValue").innerHTML = ellipseAxis2;
}
