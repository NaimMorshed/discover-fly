const firstClassPlus = document.getElementById('firstClassPlus');
const firstClassMinus = document.getElementById('firstClassMinus');
const economyClassPlus = document.getElementById('economyClassPlus');
const economyClassMinus = document.getElementById('economyClassMinus');
let firstClassInput = document.getElementById('firstClassInput');
const economyClassInput = document.getElementById('economyClassInput');
let subtotal = document.getElementById('subtotal');
let vat = document.getElementById('vat');
let total = document.getElementById('total');

function updateSpinner(classType, spin) {
    const currentFirstClassInput = parseFloat(firstClassInput.value);
    const currentEconomyClassInput = parseFloat(economyClassInput.value);
    const currentSubtotal = parseFloat(subtotal.innerText);

    if (classType == 'firstClass') {
        if (spin == 'positiveSpin') {
            if (currentFirstClassInput <= -1) {
                firstClassInput.value = 0;
            } else {
                firstClassInput.value = currentFirstClassInput + 1;
                subtotal.innerText = subtotalCalculator();
                vat.innerText = vatCalculator();
                total.innerText = totalCalculator();
            }
        } else if (spin == 'negativeSpin') {
            if (currentFirstClassInput > 0) {
                firstClassInput.value = currentFirstClassInput - 1;
                subtotal.innerText = subtotalCalculator();
                vat.innerText = vatCalculator();
                total.innerText = totalCalculator();
            }
        }
    } else if (classType == 'economyClass') {
        if (spin == 'positiveSpin') {
            if (currentEconomyClassInput <= -1) {
                economyClassInput.value = 0;
            } else {
                economyClassInput.value = currentEconomyClassInput + 1;
                subtotal.innerText = subtotalCalculator();
                vat.innerText = vatCalculator();
                total.innerText = totalCalculator();
            }
        } else if (spin == 'negativeSpin') {
            if (currentEconomyClassInput > 0) {
                economyClassInput.value = currentEconomyClassInput - 1;
                subtotal.innerText = subtotalCalculator();
                vat.innerText = vatCalculator();
                total.innerText = totalCalculator();
            }
        }
    }
}
function subtotalCalculator() {
    const currentFirstClassInput = parseFloat(firstClassInput.value);
    const currentEconomyClassInput = parseFloat(economyClassInput.value);
    return (currentFirstClassInput * 150) + (currentEconomyClassInput * 100);
}
function vatCalculator() {
    const currentSubtotal = parseFloat(subtotal.innerText);
    return (currentSubtotal * 10) / 100;
}
function totalCalculator() {
    const currentSubtotal = parseFloat(subtotal.innerText);
    const currentVat = parseFloat(vat.innerText);
    return currentSubtotal + currentVat;
}
function setConfirmationBox() {
    const currentSubtotal = parseFloat(document.getElementById('subtotal').innerText);
    const currentVat = parseFloat(document.getElementById('vat').innerText);
    const currentTotal = parseFloat(document.getElementById('total').innerText);
    const currentFirstClassPassenger = parseFloat(document.getElementById('firstClassInput').value);
    const currentEconomyClassPassenger = parseFloat(document.getElementById('economyClassInput').value);
    document.getElementById('firstClassPassenger').innerText = currentFirstClassPassenger;
    document.getElementById('economyClassPassenger').innerText = currentEconomyClassPassenger;
    document.getElementById('confirmSubtotal').innerText = currentSubtotal;
    document.getElementById('confirmVat').innerText = currentVat;
    document.getElementById('confirmTotal').innerText = currentTotal;
}

firstClassPlus.addEventListener('click', function () {
    updateSpinner('firstClass', 'positiveSpin')
});
firstClassMinus.addEventListener('click', function () {
    updateSpinner('firstClass', 'negativeSpin')
});
economyClassPlus.addEventListener('click', function () {
    updateSpinner('economyClass', 'positiveSpin')
});
economyClassMinus.addEventListener('click', function () {
    updateSpinner('economyClass', 'negativeSpin')
});
document.getElementById('bookNowButton').addEventListener('click', function () {
    document.getElementById('mainPage').style.display = 'none';
    setConfirmationBox();
    document.getElementById('confirmation-page').style.display = 'block';
});
document.getElementById('confirmBook').addEventListener('click', function () {
    //document.getElementById('confirmation-page').style.display = 'none';
    document.getElementById('booking-confirmed').style.display = 'flex';
});


