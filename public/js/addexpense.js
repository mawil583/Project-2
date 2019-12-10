$(document).ready(function () {
    $("#expense").on("click", function () {
        event.preventDefault();
        console.log("expense button was clicked")
        // var mortgageExp = data.mortgage_e;
        // var utilitiesExp = data.utilities_e;
        // var foodExp = data.food_e;
        // var insuranceExp = data.insurance_e;
        // var transportationExp = data.transportation_e;
        // var savingsExp = data.savings_e;
        // var debtExp = data.debt_e;
        // var funExp = data.fun_e;
        // let expenseArr = [mortgageExp, utilitiesExp, foodExp, insuranceExp, transportationExp, savingsExp, debtExp, funExp];
       let expense = $("#price").val().trim();
       let category = $("#expenses").val().trim();
       let expenseObj = {
           expense: expense,
           category: `${category}_e`};
           
        $
            .ajax({
                method: "PUT",
                url: "/api/expense",
                data: expenseObj
            })
            .then(function () {
                console.log("successful put request");
                window.location.href = "http://localhost:3000/chart"
            });
        // var mortgage = data.mortgage_b;  
        // var utilities = data.utilities_b;
        // var food = data.food_b;
        // var insurance = data.insurance_b;
        // var transportation = data.transportation_b;
        // var savings = data.savings_b;
        // var debt = data.debt_b
        // var fun = data.fun_b
    });
})


