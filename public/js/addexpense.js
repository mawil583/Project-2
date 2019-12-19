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
            category: `${category}_e`
        };

        $
            .ajax({
                method: "PUT",
                url: "/api/expense",
                data: expenseObj
            })
            .then(function () {
                console.log("successful put request");
                // window.location.href = "/chart"
            });

        let item = $("#item").val().trim();
        let purchaseObj = {
            expense: expense,
            category: category,
            item: item
        }

        $.post("/api/purchase", purchaseObj)
            .then(function (data) {
                console.log("data from findAll get route", data);
                window.location.href = "/purchase";
                // $.get("/purchase")
                //     .then(function (tableInfo) {
                //         console.log("----------------------------------------")
                //         console.log(tableInfo);
                //         // console.log("-------------------------------------data from findAll get /purchase route", tableInfo);

                //     })
            });


    });
})


