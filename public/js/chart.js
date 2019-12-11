// var chart = require("chart.js")

// $(document).ready(function () {
//     $("#viewChart").on("click", function () {

//         $.get("/finance/", function(data, test) {
//             console.log("client .get: " , data);
//             alert(test);
//         })
$.get("/api/chart", function (data) {
    // console.log(data);
    var mortgage = data.mortgage_b;
    var utilities = data.utilities_b;
    var food = data.food_b;
    var insurance = data.insurance_b;
    var transportation = data.transportation_b;
    var savings = data.savings_b;
    var debt = data.debt_b
    var fun = data.fun_b
    var misc = data.misc_b
    var mortgageExp = data.mortgage_e;
    var utilitiesExp = data.utilities_e;
    var foodExp = data.food_e;
    var insuranceExp = data.insurance_e;
    var transportationExp = data.transportation_e;
    var savingsExp = data.savings_e;
    var debtExp = data.debt_e;
    var funExp = data.fun_e;
    var miscExp = data.misc_e;

    // for (let i = 0; i < 9; i++) {
    //     if ()
    // }

    var ctx = document.getElementById('myChart').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ['Mortgage', 'Utilities', 'Food', 'Insurance', 'Transportation', 'Savings', "Debt", "Fun"],
            datasets: [
                {
                    data: [mortgage, utilities, food, insurance, transportation, savings, debt, fun, misc],
                    label: "Budget",
                    backgroundColor: "rgba(24, 23, 22, 0.77)"
                },
                {
                    data: [mortgageExp, utilitiesExp, foodExp, insuranceExp, transportationExp, savingsExp, debtExp, funExp, miscExp],
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
})





