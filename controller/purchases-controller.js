const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/api/purchase", function (req, res) {
    console.log("this post /purchase route is getting hit")
    db.purchases.create(
        {
            amount: req.body.expense,
            category: req.body.category,
            item_name: req.body.item,
            userId: req.user.id
        }, {
        where: {
            userId: req.user.id
        }
    }
    ).then(function () {
        // res.redirect("/purchase");
        res.end();
        console.log("successful purchase route post")

    })
})

router.get("/purchase", function (req, res) {
    console.log("this get /purchase route is getting hit")
    db.purchases.findAll(
        {
            where: {
                userId: req.user.id
            }
        }
    ).then(function (data) {
        // let tableInfoObj = { tableInfo: data };
        // console.log("tableInfoObj:  --->  ", tableInfoObj)
        // res.render("graph", tableInfoObj);
        // res.send(tableInfoObj);

        console.log("successful purchase route post");
        db.finance.findOne({ userId: req.user.id })
            .then(function (finance) {
                res.render("graph", {
                    user: req.user,
                    month: finance.month,
                    year: finance.year,
                    tableInfo: data
                });
            });
    });
});

module.exports = router;