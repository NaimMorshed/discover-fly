const firstClassPlus = document.getElementById('firstClassPlus');
const firstClassMinus = document.getElementById('firstClassMinus');
const economyClassPlus = document.getElementById('economyClassPlus');
const economyClassMinus = document.getElementById('economyClassMinus');
const firstClassInput = document.getElementById('firstClassInput');
const economyClassInput = document.getElementById('economyClassInput');
const subtotal = document.getElementById('subtotal');
const vat = document.getElementById('vat');
const total = document.getElementById('total');

function updateSpinner(type, spin) {
    let currentFirstClassInput = parseFloat(firstClassInput.value);
    if (currentFirstClassInput == '') {
        console.log('Entered');
        currentFirstClassInput = 0;
    } else { console.log('Not'); }
    console.log('Value: ', currentFirstClassInput);

    if (type == 'firstClass') {
        if (spin == 'positiveSpin') {

        } else if (spin == 'negativeSpin') {

        }
    } else if (type == 'economyClass') {

    }
}

firstClassPlus.addEventListener('click', function(){
    updateSpinner('firstClass', 'positiveSpin')
});