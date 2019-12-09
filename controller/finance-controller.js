const express = require("express");
const router = express.Router();
const db = require("../models");
let string = "this is a string"
// const auth = require("./auth-controller");

router.get("/finance/:id", function (req, res) {
    console.log("is working");

    db.finance.findOne(
        { where: { finance_id: req.params.id } })
        .then(function (data) {
            res.json(data);
            console.log(res.json(data));
        });
});

// router.get("/home", function(req, res) {
//     if (req.user) {
//       res.render("index");
//     } 
//   });

router.get("/api/chart/", function (req, res) {
    console.log("is working");

    db.finance.findOne(
        { where: { userId: req.user.id } 
        })
        .then(function (data) {
            res.json(data);
            // console.log(res.json(data));
        });
});

router.put("/api/expense", function(req, res) {
    console.log("expense req.body: ",req.body);
    let columnName = req.body.category;
    db.finance.increment([columnName],
        { 
            by: req.body.expense,
            where: {
                userId: req.user.id
            }
        })
        .then(function(dbPost) {
        res.json(dbPost)
    })
})


router.post("/api/budget", async function (req, res) {
    // when using a post ajax request, you cannot
    // redirect from controller. It must be redirected
    // from the front end.
    console.log("post api/budget: ", req.user.id);
    // var userEntries;
    var userEntries = await db.finance.findAll(
        {
            where: {
                // req.user.id is currently logged in user
                // This is defined within auth-controller
                userId: req.user.id
            }
        })
        console.log("userEntries: ", userEntries)
    // we need to search through all database
    // entries to find an entry where the 
    // userId is equal to the currently logged
    // in user. If that userId exists, then we set
    // a variable userEntries equal to true. Otherwise
    // we set it equal to false. If it is true, then
    // then we return a message saying "you already 
    // have a budget". if it's false, then it creates
    // a budget
    if (userEntries.length) {
        db.finance.update(
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
                year: req.body.year
            }, {where: {
                userId: req.user.id
                // The Where clause would need to chang if we had 
                // multiple budgets. Instead, it would need to be 
                // where: Month = ? ...
            }}).then(function() {
                console.log("this comes before res.redirect")
                // res.render("index");
                res.send("You just updated your budget");
                // res.redirect("/");
                console.log("this comes after res.render")
                // express.redirect("/")
            })
    
        console.log("you already have a budget entry");
    } else {
        console.log("userEntries false. Making new budget")
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
            }).then(function() {
                res.redirect("/")
            })
    }
})
// make get route to serve the client the chart.js information
// This requires a front end ajax call for button click
router.get("/finance/", function (req, res) {
    console.log("finance-controller: req.user.id", req.user.id)
    
    db.finance
        .findOne(
            { where: { userId: req.user.id } })

        .then(function (data) {
            res.send(data, 200);
        });
})
module.exports = router;