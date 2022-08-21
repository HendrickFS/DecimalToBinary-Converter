function integerToBinary(n){
    var binary = "";
    while (n > 1){
        if (n % 2 == 1){
            binary += "1";
        }else{
            binary += "0";
        }
        console.log(n%2);
        n = Math.floor(n/2);
    }
    if (n != 0){
        binary += "1";
    }else{
        binary += "0";
    }
    while (binary.length < 8){
        binary += "0";
    }
    var newString = "";
    for (var i = binary.length - 1; i >= 0; i--) { 
        newString += binary[i];
    }
    binary = newString;
    return binary;
}

function Conversion(){
    //Data Input
    const decimalTf = document.querySelector('#enter');
    const binaryTf = document.querySelector('#exit');
    var decimal = decimalTf.value;
    var decimal = Number(decimal);
    
    //Data Processing
    var binary = "";
    if (decimal >= 0){
        binary += "0";
    }else{
        binary += "1";
        decimal=-decimal;
    }

    var exponent = 0;
    while (decimal >= 2){
        decimal = decimal / 2;
        exponent++;
    }
    while (decimal < 1){
        decimal = decimal * 2;
        exponent--;
    }
    var decimalBefPoint = Math.floor(decimal);
    var decimalAfPoint = decimal % 1;

    var binaryBefPoint = "";
    var binaryAfPoint = "";
    
    //Exponent conversion
    var expPlusExcess = 127 + exponent;
    var binaryExp = integerToBinary(expPlusExcess);
    
    //Mantissa Conversion
    var flagStart = 0;
    var countBits = 0;
    while (decimalAfPoint > 0 && countBits <= 23){
        decimalAfPoint = decimalAfPoint * 2;
        if (decimalAfPoint >= 1){
            binaryAfPoint += "1";
            flagStart = 1;
            countBits++;
        } else {
            binaryAfPoint += "0";
            if (flagStart == 1){
                countBits++;
            }
        }
        if (decimalAfPoint >= 1){
            decimalAfPoint--;
        }
    }
    while(countBits < 23){
        binaryAfPoint += "0";
        countBits++;
    }


    binary += binaryExp;
    binary += binaryAfPoint;

    //Data Output
    binaryTf.value = binary;
    console.log(decimal);
    console.log("mantissa: ",binaryAfPoint);
    console.log("expoente binario: ",binaryExp)
    console.log("expoente: ",exponent);
}