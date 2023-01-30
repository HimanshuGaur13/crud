const express = require("express");
const router = express.Router();


//crud Controller
const crudController = require("../Controllers/Category/crudAdd");
const crudController = require("../Controllers/Category/crudDelete");
const crudController = require("../Controllers/Category/crudGet");
const crudController = require("../Controllers/Category/crudUpdate");


//crud Router
router.post("", );
router.get("/", );
router.patch("/", );
router.delete("/",);

module.exports = router;