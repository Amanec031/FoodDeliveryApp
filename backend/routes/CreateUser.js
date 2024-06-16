const express = require("express");
const router = express.Router();
const User = require('../models/user');

router.post("/createuser", async (req, res) => {
    try {
        await User.create({
            name: "rohan",
            password: "12244544",
            email: "asn@gmail.com",
            location: "India"
        });
        res.json({ success: true });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false });
    }
});

module.exports = router;