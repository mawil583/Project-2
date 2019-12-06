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
router.get("/finance/:id", function (req, res) {

    let mortageChart = req.body.mortgage;
    res.send("html path")

    // Goose's code
    var mortgage = res.json(data.mortgage_b);
    var utilities = 1;
    var food = 1;
    var insurance = 1;
    var transportation = 1;
    var savings = 1;
    var debt = 1;
    var fun = 1;
    var mortgageExp = 1;
    var utilitiesExp = 1;
    var foodExp = 1;
    var insuranceExp = 1;
    var transportationExp = 1;
    var savingsExp = 1;
    var debtExp = 1;
    var funExp = 1;

    db.finance
        .findOne(
            { where: {finance_id: 1} })
        .then(function (data) {
            res.send(data);
            console.log(res.json(data));

        });

})
router.get("/chart", function (req, res) {
    console.log(req.body);
    db.user
        .create(req.body)
        .then(function (data) {
            res.json(data);
        });
});
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