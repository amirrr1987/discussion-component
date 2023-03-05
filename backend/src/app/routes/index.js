const express = require('express');
const router = express.Router();

const discussionRoute = require('./discussionRoute');
const userRoute = require('./userRoute');

router.use("/api/discussions", discussionRoute);
router.use("/api/auth", userRoute);

router.use((req, res) => {
    res.status(404);
    res.send({ success: false, message: "route Not found" });
});

module.exports = router;