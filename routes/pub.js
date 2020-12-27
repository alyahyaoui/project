const router = require("express").Router();
const controllers = require("../controllers/pub");
const {
    pubRules,
    validation,
} = require("../middleware/validator");
// const multer = require ("multer")
// const storage = multer.diskStorage({
// destination : function (re,file,cb){
// cb(null,'./uploads/')
// },
// filename : function(req,file,cb){
// cb(null, new Date().toISOString() + file.originalname);
// }

// })
// const upload = multer({storage : storage})
// upload.single('photo'),

//@method POST
//@desc POST A PUB
// @PATH  http://localhost:5000/pub/register
// @Params  Body
// register


router.post("/register", pubRules() , validation, controllers.pub);

//@method GET
//@desc GET ALL PUB 
// @PATH  http://localhost:5000/pub
// get all pubs
router.get("/", controllers.getpubs );

//@method GET
//@desc GET PUB BY ID
// @PATH  http://localhost:5000/pub/:id
// @Params  id
// get pub
router.get("/:id", controllers.getpubById );

//@method GET
//@desc GET SEARSHED PUB 
// @PATH  http://localhost:5000/:searched
// @Params  
// get searshed pub
router.get("/:searched ", controllers.getsearchPub );

//@method DELETE
//@desc DELETE PUB 
// @PATH  http://localhost:5000/pub/:id
// @Params  id
// delete pub
router.delete("/:id ", controllers.deletePub );

//Method PUT
//update a pub by id
//Path :http://localhost:5000/pub/:id
//params id and body
router.put("/:id", controllers.updatePub);



module.exports = router;