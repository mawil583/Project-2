const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/finance/:id", function (req, res) {
    console.log("is working");

    db.finance.findOne(
        { where: { finance_id: req.params.id } })
        .then(function (data) {
            res.json(data);
            console.log(res.json(data));

        });

});

router.get("/api/chart/", function (req, res) {
    console.log("is working");

    db.finance.findOne(
        { where: { userId: req.user.id } })
        .then(function (data) {
            res.json(data);
            // console.log(res.json(data));

        });

});

router.put("/api/expense", function(req, res) {
    console.log(req.body);
    db.finance.update(req.body, {
        where: {userId: req.user.id}
    }).then(function(dbPost) {
        res.json(dbPost)
    })
})


router.post("/api/budget", function (req, res) {
    console.log("post api/budget: ", req.user.id);
    var userEntries;
    // we need to search through all database
    // entries to find an entry where the 
    // userId is equal to the currently logged
    // in user. If that userId exists, then we set
    // a variable userEntries equal to true. Otherwise
    // we set it equal to false. If it is true, then
    // then we return a message saying "you already 
    // have a budget". if it's false, then it creates
    // a budget
    db.finance.findAll(
        {
            where: {
                // req.user yields an error
                // figure something else out
                userId: req.user.id
            }
        }).then(function (response) {
            if (response.userId) {
                userEntries = true;
            } else {
                userEntries = false;
            }
        })
    // );
    if (userEntries) {
        console.log("you already have a budget entry")
        // db.finance.update({
        //     mortgage_b: req.body.mortgage_b,
        //     mortgage_e: req.body.mortgage_e,
        //     utilities_b: req.body.utilities_b,
        //     utilities_e: req.body.utilities_e,
        //     food_b: req.body.food_b,
        //     food_e: req.body.food_e,
        //     insurance_b: req.body.insurance_b,
        //     insurance_e: req.body.insurance_e,
        //     transportation_b: req.body.transportation_b,
        //     transportation_e: req.body.transportation_e,
        //     fun_b: req.body.fun_b,
        //     fun_e: req.body.fun_e,
        //     savings_b: req.body.savings_b,
        //     savings_e: req.body.savings_e,
        //     debt_e: req.body.debt_e,
        //     debt_b: req.body.debt_b,
        //     misc_b: req.body.misc_b,
        //     misc_e: req.body.misc_e,
        //     month: req.body.month,
        //     year: req.body.year
        // }, {
        //     where:
        //         { userId: req.user.id }
        // })
    } else {
        db.finance.create(
            {
                mortgage_b: req.body.mortgage_b,
                mortgage_e: req.body.mortgage_e,
                utilities_b: req.body.utilities_b,
                utilities_e: req.body.utilities_e,
                food_b: req.body.food_b,
                food_e: req.body.food_e,
                insurance_b: req.body.insurance_b,
                insurance_e: req.body.insurance_e,
                transportation_b: req.body.transportation_b,
                transportation_e: req.body.transportation_e,
                fun_b: req.body.fun_b,
                fun_e: req.body.fun_e,
                savings_b: req.body.savings_b,
                savings_e: req.body.savings_e,
                debt_e: req.body.debt_e,
                debt_b: req.body.debt_b,
                misc_b: req.body.misc_b,
                misc_e: req.body.misc_e,
                month: req.body.month,
                year: req.body.year,
                userId: req.user.id

                // dummy data
                // userId: 1

            })
    }
    // console.log(req.body);


})
// .then(function (data) {
//     res.json(data)
// })


// make get route to serve the client the chart.js information
// This requires a front end ajax call for button click
router.get("/finance/", function (req, res) {
    console.log("finance-controller: req.user.id", req.user.id)
    // let mortageChart = req.body.mortgage;
    // res.json()

    // Goose's code
    // var mortgage = res.json(data.mortgage_b);
    // var utilities = 1;
    // var food = 1;
    // var insurance = 1;
    // var transportation = 1;
    // var savings = 1;
    // var debt = 1;
    // var fun = 1;
    // var mortgageExp = 1;
    // var utilitiesExp = 1;
    // var foodExp = 1;
    // var insuranceExp = 1;
    // var transportationExp = 1;
    // var savingsExp = 1;
    // var debtExp = 1;
    // var funExp = 1;

    db.finance
        .findOne(
            { where: { userId: req.user.id } })

        .then(function (data) {
            res.send(data, 200);
        });
})

// We might not need this .get route
// router.get("/chart", function (req, res) {
//     console.log(req.body);
//     db.user
//         .create(req.body)
//         .then(function (data) {
//             res.json(data);
//         });
// });
//return all
// router.get("/api/finances", function (req, res) {
//     var query = {};
//     if (req.query.id) {
//         query.userId = req.query.id;
//     }
//     db.user.findAll({}).then(function (data) {
//         res.json(data);
//     });
// });

// router.post("/api/budget", function (req, res) {
//     console.log(req.body);
//     db.user
//         .create(req.body)
//         .then(function (data) {
//             res.json(data);
//         });
// });

// router.delete("/api/users/:id", function (req, res) {
//     db.user.destroy({ where: { id: req.params.id } }).then(function (data) {
//         res.json(data);
//     });
// });

module.exports = router;