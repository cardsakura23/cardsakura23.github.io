//Get Parallelogram Function
function Parallelogram(){
    var parallelogramHeight = parseInt(document.getElementById('parallelogramHeight').value); //Parallelogram Height Input 
    var parallelogramBase1 = parseInt(document.getElementById('parallelogramBase1').value); //Parallelogram Base input
    var parallelogramBase2 = parseInt(document.getElementById('parallelogramBase2').value); //Parallelogram Side Input
    var parallelogramArea = parallelogramBase1*parallelogramHeight;//Parallelogram Area Formula
    var parallelogramPerimeter = (parallogramBase1+parallelogramBase2)*0.5;//Parallelogram Perimeter Formula
    console.log(parallelogramArea, paralelogramPerimeter); //Paralellogram Ouput
}