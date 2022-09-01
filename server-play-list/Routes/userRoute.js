const express = require('express')
const router = express.Router();
const userLogic = require('../BL/userLogic');
const auth = require('../middlewere/auth');


// router.all('/test', auth, (req, res) => {
//     res.send("test")
// })



router.post('/login', async (req, res) => {

    try {
        const token = await userLogic.login(req.body)
        res.send({ token: token })
    }
    catch (err) {
        console.log(err.message);
        res.send(err.message);
    }
})


router.post('/register', async (req, res) => {
    try {
        const newUser = await userLogic.register(req.body)
        console.log("new user:", newUser);
        res.send("register")
    } catch (err) {
        console.log("register error");
    }
})















router.get('/', async (req, res) => {
    try {
        console.log(req);
        // throw ({ code: 501, msg: "baruch" })
        const users = await userLogic.getAllUsers();
        res.send(users);
    }
    catch (err) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "somthing went wrong" })
        }
    }
})



router.get('/:id', async (req, res) => {
    const users = await userLogic.getUserDetailsById(req.params.id);
    res.send(users);

})

router.post('/', async (req, res) => {
    try {

        const { firstName, lastName, email, password, city, gender } = req.body;

        const restFilds = {
            address: {
                street: 12,
                homeNum: 12,
            },

        }
        const userFields = { firstName, lastName, email, password, city, gender, ...restFilds }

        const user = await userLogic.createUser(userFields);
        res.send(user);
    } catch (err) {
        if (err) {
            res.status(400).send({ message: "chanan boker tov" })
        }
    }
});






module.exports = router;