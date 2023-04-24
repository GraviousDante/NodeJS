const express = require("express");
let controller = require("../controllers/userController");
let router = express.Router();

router.get("/",studentController.register);
router.get("/register",userController.register);
exports.create = async (req,res)=>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });
    user.save().then(rs=>res.send("done")).catch(err=>res.send(err));
}

module.exports = router;