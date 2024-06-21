const express = require("express");
const router = express.Router();

router.post('/foodData', (req, res) => {
    try {
        if (!global.food_items || !global.food_Category) {
            return res.status(500).send("Data not initialized");
        }
        res.send([global.food_items, global.food_Category]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
