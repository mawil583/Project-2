// var chart = require("chart.js")

// $(document).ready(function () {
//     $("#viewChart").on("click", function () {

//         $.get("/finance/", function(data, test) {
//             console.log("client .get: " , data);
//             alert(test);
//         })
$.get("/api/chart", function(data) {
    console.log(data);
    var mortgage = parseInt(data.mortgage_b);
    var utilities = parseInt(data.utilities_b);
    var food = parseInt(data.food_b);
    var insurance = parseInt(data.insurance_b);
    var transportation = parseInt(data.transportation_b);
    var savings = parseInt(data.savings_b);
    var debt = parseInt(data.debt_b);
    var fun = parseInt(data.fun_b);
    var misc = parseInt(data.misc_b);
    var mortgageExp = parseInt(data.mortgage_e);
    var utilitiesExp = parseInt(data.utilities_e);
    var foodExp = parseInt(data.food_e);
    var insuranceExp = parseInt(data.insurance_e);
    var transportationExp = parseInt(data.transportation_e);
    var savingsExp = parseInt(data.savings_e);
    var debtExp = parseInt(data.debt_e);
    var funExp = parseInt(data.fun_e);
    var miscExp = parseInt(data.misc_e);
    // for (let i = 0; i < 9; i++) {
    //     if ()
    // }
    var mortgageColor;
    var utilitiesColor;
    var foodColor;
    var insuranceColor;
    var transportationColor;
    var savingsColor;
    var debtColor;
    var funColor;
    var miscColor;
    
    if (mortgage > mortgageExp) {
      mortgageColor = "rgba(32, 137, 6, 0.85)";
    }else {
      mortgageColor = "rgba(255, 0, 0, 1)"
    }
  if (utilities > utilitiesExp) {
    utilitiesColor = "rgba(32, 137, 6, 0.85)";
  }else {
    utilitiesColor = "rgba(255, 0, 0, 1)"
  }
  if (food > foodExp) {
    foodColor = "rgba(32, 137, 6, 0.85)";
  }else {
    foodColor = "rgba(255, 0, 0, 1)"
  }
  if (insurance > insuranceExp) {
    insuranceColor = "rgba(32, 137, 6, 0.85)";
  }else {
    insuranceColor = "rgba(255, 0, 0, 1)"
  }
  if (transportation > transportationExp) {
    transportationColor = "rgba(32, 137, 6, 0.85)";
  }else {
    transportationColor = "rgba(255, 0, 0, 1)"
  }
  if (savings > savingsExp) {
    savingsColor = "rgba(32, 137, 6, 0.85)";
  }else {
    savingsColor = "rgba(255, 0, 0, 1)"
  }
  if (debt > debtExp) {
    debtColor = "rgba(32, 137, 6, 0.85)";
  }else {
    debtColor = "rgba(255, 0, 0, 1)"
  }
  if (fun > funExp) {
    funColor = "rgba(32, 137, 6, 0.85)";
  }else {
    funColor = "rgba(255, 0, 0, 1)"
  }
  if (misc > miscExp) {
    miscColor = "rgba(32, 137, 6, 0.85)";
  }else {
    miscColor = "rgba(255, 0, 0, 1)"
  }
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "horizontalBar",
      data: {
        labels: [
          "Mortgage",
          "Mortgage-Exp",
          "Utilities",
          "Utilities-Exp",
          "Food",
          "Food-Exp",
          "Insurance",
          "Insurance-Exp",
          "Transportation",
          "Transportation-Exp",
          "Savings",
          "Savings-Exp",
          "Debt",
          "Debt-Exp",
          "Fun",
          "Fun-Exp"
        ],
        datasets: [
          {
            label: "Budget",
            data: [
              mortgage,
              mortgageExp,
              utilities,
              utilitiesExp,
              food,
              foodExp,
              insurance,
              insuranceExp,
              transportation,
              transportationExp,
              savings,
              savingsExp,
              debt,
              debtExp,
              fun,
              funExp
            ],
            backgroundColor: [
              "rgba(24, 23, 22, 0.77)",
              mortgageColor,
              "rgba(24, 23, 22, 0.77)",
              utilitiesColor,
              "rgba(24, 23, 22, 0.77)",
              foodColor,
              "rgba(24, 23, 22, 0.77)",
              insuranceColor,
              "rgba(24, 23, 22, 0.77)",
              transportationColor,
              "rgba(24, 23, 22, 0.77)",
             savingsColor,
              "rgba(24, 23, 22, 0.77)",
              debtColor,
              "rgba(24, 23, 22, 0.77)",
              funColor
            ],
            borderColor: [
              "rgba(24, 23, 22, 0.77)",
              "rgba(24, 23, 22, 0.77)",
              "rgba(24, 23, 22, 0.77)",
              "rgba(24, 23, 22, 0.77)",
              "rgba(24, 23, 22, 0.77)",
              "rgba(24, 23, 22, 0.77)",
              "rgba(24, 23, 22, 0.77)",
              "rgba(24, 23, 22, 0.77)",
              "rgba(24, 23, 22, 0.77)",
              "rgba(24, 23, 22, 0.77)",
              "rgba(24, 23, 22, 0.77)",
              "rgba(24, 23, 22, 0.77)",
              "rgba(24, 23, 22, 0.77)",
              "rgba(24, 23, 22, 0.77)",
              "rgba(24, 23, 22, 0.77)",
              "rgba(24, 23, 22, 0.77)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  });





