// html
// <p>Sector</p>
// <label for="sectorCentralAngle">Central Angle Degree</label>
// <input type="number" name="sectorDegree" id="sectorDegree"><br>
// <label for="sectorRadius">Radius</label>
// <input type="number" name="sectorRadius" id="sectorRadius"><br>
// <p>"The area of the sector is: "<span id="sectorArea"></span></p>
// <p>"The circumference of the sector is: "<span id="sectorPerimeter"></span></p>
// <button onclick="sector()">Calculate</button><br>


function sector(){
    var sectorDegreeOne = parseInt(document.getElementById('sectorDegree').value);
    var sectorRadiusOne = parseInt(document.getElementById('sectorRadius').value);
    var sectorArea = ((sectorDegreeOne/360)*Math.PI*(sectorRadiusOne*sectorRadiusOne));
    var sectorPerimeter = (((sectorDegreeOne/360)*2*Math.PI*sectorRadiusOne)+sectorRadiusOne+sectorRadiusOne);
    console.log(sectorArea, sectorPerimeter);
}