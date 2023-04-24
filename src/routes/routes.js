let router = express.Router();

router.get("/create-user",userController.createForm);

module.exports = router;