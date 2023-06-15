let calculation = JSON.parse(localStorage.getItem('calculation'))||'';

document.querySelector('.js-calculations').innerHTML = calculation;

function updateCalculation (value) {
  calculation += value;
  document.querySelector('.js-calculations').innerHTML = calculation;
}
 function displayCalculation () {
  calculation = eval(calculation);
  localStorage.setItem('calculation',JSON.stringify(calculation));
  document.querySelector('.js-calculations').innerHTML = calculation;
 }