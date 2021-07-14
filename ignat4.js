let clock = document.getElementById('time');

let time = setInterval(() => {
    clock.innerHTML = new Date().toLocaleTimeString()
}, 1000);
clock.style.color = 'red';
clock.style.fontSize = 'large';
clock.style.fontWeight = 'bold';


let converterValue = {};
converterValue['USD'] = 18.03;
converterValue['EUR'] = 21.06;

function moneyConverter(value) {
    output = document.getElementsByClassName("output");
    for (let i = 0; i < output.length; i++) {
        for (let currency in converterValue) {
            if (currency === output[i].id.toUpperCase()) {
                output[i].innerHTML = Math.round((value / converterValue[currency]) * 100) / 100;
            }
        }
    }

}
