const express = require("express");

const router = express.Router();

const Course = require("../module/course.module");

router.get("/", async function (req, res) {
    
    try {
        

       const coursedomain = await Course.find().lean().exec();
        return res.send(coursedomain);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});
module.exports = router;