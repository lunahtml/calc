const check = document.querySelector('.check');
const area = document.querySelector('.area');
const sel = document.querySelector('#select');


const total = document.querySelector('.total-ch');

const btnCalc = document.querySelector('#btn-calck');
const inputs = document.querySelectorAll('inputs');



function validateSelect() {

    const error = document.querySelector('.error');

    if (area.value === "" || check.checked === false) {
        error.classList.add('show-event');
    } else {
        error.classList.remove('show-event');
    }
}
if (btnCalc) {

    btnCalc.addEventListener('click', function () {

        validateSelect();

        let priceTotal;
        let checkTotal = 0;


        const radios = document.querySelectorAll('.radio');
        for (const radio of radios) {
            if (radio.checked) {
                radioTotal = parseFloat(radio.value);
            }
        }

        const checks = document.querySelectorAll('.check');
        for (const check of checks) {
            if (check.checked) {
                checkTotal += parseInt(check.value);
            }

        }

        priceTotal = checkTotal * parseInt(area.value) * radioTotal * sel.value;

        const formatter = new Intl.NumberFormat('ru');

        total.innerHTML = formatter.format(priceTotal);
    });
}

//cacl end ___________________
