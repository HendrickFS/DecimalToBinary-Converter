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
    while (decimalBefPoint > 1){
        if (decimalBefPoint % 2 == 1){
            binaryBefPoint += "1";
        }
        else{
            binaryBefPoint += "0";
        }
        decimalBefPoint = Math.floor(decimalBefPoint/2);
    }
    binaryBefPoint += "1";
    var newString = "";
    for (var i = binaryBefPoint.length - 1; i >= 0; i--) { 
        newString += binaryBefPoint[i];
    }
    binaryBefPoint = newString;

    //Data Output
    binaryTf.value = binaryBefPoint;
    console.log(decimal);
    console.log(decimalAfPoint);
    console.log(decimalBefPoint);
    console.log(binaryBefPoint);
}