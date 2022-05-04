const express = require("express");
const router = express.Router();

const SessionsController = require("../controllers/session");

router.get("/new", SessionsController.New); //sign in
router.post("/", SessionsController.Create);
router.delete("/", SessionsController.Destroy);

module.exports = router;