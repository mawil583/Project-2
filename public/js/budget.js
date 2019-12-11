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
            mortgage_e: 0,
            food_b: food,
            food_e: 0,
            utilities_b: utilities,
            utilities_e: 0,
            insurance_b: insurance,
            insurance_e: 0,
            transportation_b: transportation,
            transportation_e: 0,
            fun_b: fun,
            fun_e: 0,
            savings_b: savings,
            savings_e: 0,
            misc_b: misc,
            misc_e: 0,
            debt_b: debt,
            debt_e: 0,
            month: month,
            year: year
        }

        $
            .post("/api/budget", budgetInfo).then(function (data) {
                // if (data) {
                //     alert(data);
                // }
                window.location.href = "serene-scrubland-73965.herokuapp.com/budget"
            })
            // .then(console.log("successful post"),
            // function() {
                
            // }
            // );
    })

})