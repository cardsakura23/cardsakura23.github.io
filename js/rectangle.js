function area(){
    let num1 = parseFloat(document.getElementById("length").value);
    let num2 = parseFloat(document.getElementById("width").value);
    let namo = parseFloat(num1 * num2);
    let namo2= parseFloat((num1 + num2)*2)

     document.getElementById("namo1").innerHTML= "Area of Rectangle: "+namo;
     document.getElementById("namo2").innerHTML="Parameter Of Rectangle: "+ namo2;
    console.log(namo)

}