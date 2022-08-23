// html
// <p>Trapezoid</p>
//     <label for="trapezoidBaseOne">Base 1</label>
//     <input type="number" name="trapezoidBaseOne" id="trapezoidBaseOne"><br>
//     <label for="trapezoidBaseTwo">Base 2</label>
//     <input type="number" name="trapezoidBaseTwo" id="trapezoidBaseTwo"><br>
//     <label for="trapezoidHeight">Height</label>
//     <input type="number" name="trapezoidHeight" id="trapezoidHeight"><br>
//     <label for="trapezoidSideOne">Side One</label>
//     <input type="number" name="trapezoidSideOne" id="trapezoidSideOne"><br>
//     <label for="trapezoidSideTwo">Side Two</label>
//     <input type="number" name="trapezoidSideTwo" id="trapezoidSideTwo"><br>
//     <p>"The area of the trapezoid is: "<span id="trapezoidArea"></span></p>
//     <p>"The perimeter of the trapezoid is: "<span id="trapezoidPerimeter"></span></p>
//     <button onclick="trapezoid()">Calculate</button><br></br>



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