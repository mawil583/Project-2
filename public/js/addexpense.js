$(document).ready(function() {
    $("#placeholder").on("click", function() {
        event.preventDefault();
        $.get("/api/chart", function (data) {
            console.log(data);
            // var mortgage = data.mortgage_b;
            // var utilities = data.utilities_b;
            // var food = data.food_b;
            // var insurance = data.insurance_b;
            // var transportation = data.transportation_b;
            // var savings = data.savings_b;
            // var debt = data.debt_b
            // var fun = data.fun_b
            var mortgageExp = data.mortgage_e;
            var utilitiesExp = data.utilities_e;
            var foodExp = data.food_e;
            var insuranceExp = data.insurance_e;
            var transportationExp = data.transportation_e;
            var savingsExp = data.savings_e;
            var debtExp = data.debt_e;
            var funExp = data.fun_e;
        });
    })
})

