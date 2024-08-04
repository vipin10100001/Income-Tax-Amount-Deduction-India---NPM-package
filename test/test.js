const calculateIncomeTax = require('../income-tax-india/index');

const income = 500000;
const tax = calculateIncomeTax(income);
console.log(tax);

