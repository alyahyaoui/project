const router = require("express").Router();
const controllers = require("../controllers/user");
const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator");

const isAuth = require("../middleware/passport");

//@method POST
//@desc POST A USER
// @PATH  http://localhost:5000/user/register
// @Params  Body
// register
router.post("/register", registerRules(), validation, controllers.register);

//@method POST
//@desc POST A USER
// @PATH  http://localhost:5000/user/login
// @Params  Body
// register
// login
router.post("/login", loginRules(), validation, controllers.login);

//@method POST
//@desc GET A USER
// @PATH  http://localhost:5000/user/current
// @Params  Body
// get current user
router.get("/current", isAuth(), controllers.current);

//@method POST
//@desc UPTADE A USER
// @PATH  http://localhost:5000/user/update
// @Params  Body
// update user
//router.post("/update", isAuth(), controllers.update);

//@method GET
//@desc GET A USER
// @PATH  http://localhost:5000/user/logout
// @Params  Body
// logout
router.get("/logout", controllers.logout);
module.exports = router;
