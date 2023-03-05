const express = require('express');
const router = express.Router();

const commentRoute = require('./commentRoute');
const userRoute = require('./userRoute');

router.use("/api/comments", commentRoute);
router.use("/api/auth", userRoute);

router.use((req, res) => {
    res.status(404);
    res.send({ success: false, message: "route Not found" });
});

module.exports = router;