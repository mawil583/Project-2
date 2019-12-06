var mortgage = 3;
var utilities = 1;
var food = 1;
var insurance = 1;
var transportation = 1;
var savings = 1;
var debt = 1;
var fun = 1;
var mortgageExp = 1;
var utilitiesExp = 1;
var foodExp = 1;
var insuranceExp = 1;
var transportationExp = 1;
var savingsExp = 1;
var debtExp = 1;
var funExp = 1;

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Mortgage', 'Utilities', 'Food', 'Insurance', 'Transportation', 'Savings', "Debt", "Fun"],
        datasets: [
            {
                data: [mortgage, utilities, food, insurance, transportation, savings, debt, fun],
                label: "Budget",
                backgroundColor: "rgba(24, 23, 22, 0.77)"
            },
            {
                data: [mortgageExp, utilitiesExp, foodExp, insuranceExp, transportationExp, savingsExp, debtExp, funExp],
                label: "Expenses",
                backgroundColor: "rgba(32, 137, 6, 0.85)"
            }
        ]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

