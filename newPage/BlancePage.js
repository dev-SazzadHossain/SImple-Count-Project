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

// btn cheack
document.getElementById('withdraw-btn').addEventListener('click', function () {
    console.log('clicked');
    // withdraw js 
    console.log("clicked");
    const withdrawInput = document.getElementById('withraw-input');
    const withdrawValue = parseFloat(withdrawInput.value);
    console.log(withdrawValue);
    // withdraw amount target
    const withdrawBlance = document.getElementById('Withdraw-blance');
    const withdrawBlanceValue = parseFloat(withdrawBlance.innerText);
    console.log(withdrawBlanceValue);
    // total withdraw blance 
    const withdrawTotalBlance = withdrawValue + withdrawBlanceValue;
    console.log(withdrawTotalBlance);
    const withDrawTotal = withdrawBlance.innerText = withdrawTotalBlance;


    const Blances = document.getElementById('Blance');
    const BlancesValue = Blances.innerText;
    const BlanceConvets = parseFloat(BlancesValue);
    // console.log(typeof BlanceConvets);
    const TotalBlances = BlanceConvets - withdrawValue;
    const BlancesAmount = Blances.innerText = TotalBlances;

    // clear

    withdrawInput.value = '';

})