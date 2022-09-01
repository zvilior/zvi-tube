const express = require('express')
const router = express.Router();
const playListsLogic = require('../BL/playListsLogic');
const auth = require('../middlewere/auth');


// router.all('/test', auth, (req, res) => {
//     res.send("test")
// })



router.post('/playlist', async (req, res) => {

    try {
        const token = await playListsLogic.login(req.body)
        res.send({ token: token })
    }
    catch (err) {
        console.log(err.message);
        res.send(err.message);
    }
})


router.post('/register', async (req, res) => {
    try {
        const newUser = await playListsLogic.register(req.body)
        console.log(newUser, "new user");
        res.send("register")
    } catch (err) {
        console.log("register error");
    }
})















router.get('/', async (req, res) => {
    try {
        console.log(req);
        // throw ({ code: 501, msg: "baruch" })
        const playListsNames = await playListsLogic.getPlayListsNames();
        res.send(playListsNames);
    }
    catch (err) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "somthing went wrong" })
        }
    }
})



router.get('/:id', async (req, res) => {
    const users = await playListsLogic.getUserDetailsById(req.params.id);
    res.send(users);

})

router.post('/new', async (req, res) => {
    try {
        const name = req.body;
        const playListFields = name
        const playlist = await playListsLogic.createPlayList(playListFields);
        res.send(playlist);
    } catch (err) {
        if (err) {
            res.status(400).send({ message: "we didnt succeed to create playlist" })
        }
    }
});
router.post('/addSong', async (req, res) => {
    try {
        const { name, song } = req.body;
        const songData = song
        const newSong = await playListsLogic.addSong(name, songData);
        // console.log(newSong);
        res.send(newSong);
    } catch (err) {
        if (err) {
            res.status(400).send({ message: "we didnt succeed to add this song" })
        }
    }
});
router.post('/removeSong', async (req, res) => {
    try {
        const { name, song } = req.body;
        const songData = song
        return await playListsLogic.removeSong(name, songData);
        // res.send(newSong);
    } catch (err) {
        if (err) {
            res.status(400).send({ message: "we didnt succeed to add this song" })
        }
    }
});






module.exports = router;