const router = require("express").Router();
const controllers = require("../controllers/pub");
const {
    pubRules,
    validation,
} = require("../middleware/validator");


//@method POST
//@desc POST A PUB
// @PATH  http://localhost:5000/pub/register
// @Params  Body
// register


router.post("/register", pubRules() , validation, controllers.pub);

//@method GET
//@desc GET ALL PUB 
// @PATH  http://localhost:5000/pub/register
// @Params  Body
// get current pub
router.get("/register", controllers.ALLPub );

module.exports = router;