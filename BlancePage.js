document.getElementById('button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    let depositInputValue = depositInput.value;
    let depositInputValueConvert = parseFloat(depositInputValue);
    // console.log(depositInputValueConvert);
    // Blanceee
    const depositBlance = document.getElementById('deposit-blance');
    let depositBlanceValue = depositBlance.innerText;
    let depositBlanceValueConvert = parseFloat(depositBlanceValue);
    // console.log(depositBlanceValueConvert);
    let depositBlanceTotal = depositInputValueConvert + depositBlanceValueConvert;
    let depositCurrentBlance = depositBlance.innerText = depositBlanceTotal;
    // deposit Blance

    //  target Blance
    let Blance = document.getElementById('Blance');
    let BlanceValue = parseFloat(Blance.innerText);
    // TotalBlance
    let TotalBlance = BlanceValue + depositInputValueConvert;
    let BlanceAmount = Blance.innerText = TotalBlance;


    // clear
    depositInput.value = '';



})