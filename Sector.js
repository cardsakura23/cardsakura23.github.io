function sector(){
    var sectorDegreeOne = parseInt(document.getElementById('sectorDegree').value);
    var sectorRadiusOne = parseInt(document.getElementById('sectorRadius').value);
    var sectorArea = ((sectorDegreeOne/360)*Math.PI*(sectorRadiusOne*sectorRadiusOne));
    var sectorPerimeter = (((sectorDegreeOne/360)*2*Math.PI*sectorRadiusOne)+sectorRadiusOne+sectorRadiusOne);
    console.log(sectorArea, sectorPerimeter);
}