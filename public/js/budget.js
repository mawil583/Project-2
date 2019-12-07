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

        let budgetInfo = {
            mortgage_b: mortgage,
            food_b: food,
            utilities_b: utilities,
            insurance_b: insurance,
            transportation_b: transportation,
            fun_b: fun,
            savings_b: savings,
            misc_b: misc,
            debt_b: debt
        }

        $
            .post("/api/budget", budgetInfo)
            .then(console.log("successful post"));
    })
    
})