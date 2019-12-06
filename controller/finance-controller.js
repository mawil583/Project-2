const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/finance/:id", function (req, res) {
    console.log("is working");
    
    db.finance.findOne({ where: { finance_id: req.params.id } }).then(function (data) {
        res.json(data);
        console.log(res.json(data));
        
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

// router.post("/api/users", function (req, res) {
//     db.user.create(req.body).then(function (data) {
//         res.json(data);
//     });
// });

// router.delete("/api/users/:id", function (req, res) {
//     db.user.destroy({ where: { id: req.params.id } }).then(function (data) {
//         res.json(data);
//     });
// });

module.exports = router;