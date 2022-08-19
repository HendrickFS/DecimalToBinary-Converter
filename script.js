function Conversion(){
    //Data Input
    const decimalTf = document.querySelector('#enter');
    const binaryTf = document.querySelector('#exit');
    var decimal = Number(decimalTf.value);
    var decimalBefPoint = Math.floor(decimal);
    var decimalAfPoint = decimal%1;
    var binaryBefPoint = "";
    var binaryAfPoint = "";

    //Data Processing

    //Data Output
    console.log(decimal);
    console.log(decimalAfPoint);
    console.log(decimalBefPoint);
}