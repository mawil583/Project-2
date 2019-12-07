const passport = require("passport");
const express = require("express");
const flash = require("connect-flash");
const session = require("express-session");
const router = express.Router();
const db = require("../models");

// Flash
// this is used for storing messages that lets the user know if
// the password was typed in correctly
router.use(
  session({
    cookie: { maxAge: 60000 },
    secret: "wootwoot"
  })
);
router.use(flash());

// Passport
require("../config/passport")(passport);
router.use(passport.initialize());
router.use(passport.session());

router.get("/", function(req, res) {
  if (req.user) {
    res.render("index", {
      user: req.user
    });
  } else {
    res.redirect("/login");
  }
});

router.get("/budget", function(req, res) {
  if (req.user) {
    res.render("budget", {
      user: req.user
    });
  } else {
    res.redirect("/login");
  }
});

router.get("/chart", function(req, res) {
  db.finance.findOne({ where: { finance_id: req.params.id } }).then(function (data) {
    // res.json(data);

  if (req.user) {
    res.render("graph", {
      user: req.user,
      data: json(data)
    });
  } else {
    res.redirect("/login");
  }
});

router.get("/expenses", function(req, res) {
  if (req.user) {
    res.render("expenses", {
      user: req.user
    });
  } else {
    res.redirect("/login");
  }
})

router.get("/login", function(req, res) {
  res.render("login", { message: req.flash("error") });
});

router.post(
  "/login",
  passport.authenticate("local-login", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  })
);

router.get("/signup", function(req, res) {
  res.render("signup", { message: req.flash("error") });
});

router.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/",
    failureRedirect: "/signup",
    failureFlash: true
  })
);

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});


//MOVE THIS CATCH ALL TO THE LAST CALL (FYI I HATE THIS THINGH!!!!!)
// router.get("*", function(req, res) {
//   res.render("404");
// });

module.exports = router;
