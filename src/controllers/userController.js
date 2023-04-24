exports.register = (req,res)=>{
    res.render("createUser");
};
exports.get = async function(req,res) {
    try {
        const auth = req.session.auth;
        const ls1 = await User.find({});
        res.render("list", {
            items: ls1,
            auth: auth
        });
    } catch (err) {
        res.send(err);
    }
}