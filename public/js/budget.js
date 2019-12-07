$(document).ready(function () {
    $("#budget-btn").on("click", function () {
        event.preventDefault();
        let mortgage = $("#mortgage").val().trim();
        let food = $("#food").val().trim();
        let utilities = $("#utilities").val().trim();
        let insurance = $("#insurance").val().trim();
        let transportation = $("#transportation").val().trim();
        let fun = $("#fun").val().trim();
        let savings = $("#savings").val().trim();
        let misc = $("#misc").val().trim();
        let debt = $("#debt").val().trim();
        let month = $("#month").val().trim();
        let year = $("#year").val().trim();

        let budgetInfo = {
            mortgage_b: mortgage,
            mortgage_e: mortgage,
            food_b: food,
            food_e: food,
            utilities_b: utilities,
            utilities_e: utilities,
            insurance_b: insurance,
            insurance_e: insurance,
            transportation_b: transportation,
            transportation_e: transportation,
            fun_b: fun,
            fun_e: fun,
            savings_b: savings,
            savings_e: savings,
            misc_b: misc,
            misc_e: misc,
            debt_b: debt,
            debt_e: debt,
            month: month,
            year: year

        }

        $
            .post("/api/budget", budgetInfo)
            .then(console.log("successful post"));
    })

})