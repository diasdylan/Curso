function callSwitch() {

    let unitToConvert = document.getElementById("toConvert").value;
    let measure = document.getElementById("measure").value;
    let floatUnit = parseFloat(unitToConvert);
    let ConvertTo = document.getElementById("convertTo").value;
    let btnConvert = document.getElementById("btnConvert");
    let unitConverted = document.getElementById("converted");
    let measureConverted = document.getElementById("measureConverted");


    console.log(unitToConvert, measure, 'Float: ' + floatUnit, ConvertTo, measureConverted, btnConvert)

    if(unitToConvert == '' ||  measure == '' ){
        return alert('Please fill the needed info')
    }

    switch (measure, ConvertTo) {
        case 'mm' && 'cm':
                alert('will it pass?')
            break;
        case 'cm':
            break;
        case 'dc':
            break;
        case 'dam':
            break;
        case 'hm':
            break;
        case 'km':
            break;
        default:
            alert("ops... something went wrong");
            break;
    }
}


btnConvert.addEventListener('click', callSwitch)