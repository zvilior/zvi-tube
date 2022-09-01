const express = require('express')
const router = express.Router()



const usersRouter = require('./userRoute')
const playListsRouter = require('./playListsRoute')


router.use("/users", usersRouter);
router.use("/playlists", playListsRouter);

module.exports = router;