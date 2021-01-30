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
            firstClassInput.value = currentFirstClassInput + 1;
            subtotal.innerText = subtotalCalculator();
            vat.innerText = vatCalculator();
            total.innerText = totalCalculator();
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
            economyClassInput.value = currentEconomyClassInput + 1;
            subtotal.innerText = subtotalCalculator();
            vat.innerText = vatCalculator();
            total.innerText = totalCalculator();
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

function bookNowButton() {
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('confirmationPage').style.display = 'block';
}

