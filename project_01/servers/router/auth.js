// const { Router } = require('express');
const express = require('express');
const router = express.Router();
const User = require('../model/userSchema');

router.post('/register', async(req, res) => {
    const { name, email, password, cpassword } = req.body;
    if (!name || !email || !password || !cpassword) {
        return res.status(422).json({ error: "please fill all fields !!" });
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "email already exist" });
        }
        const user = new User({ name, email, password, cpassword });
        await user.save();
    } catch (err) {
        console.log(err);
    }


});


router.get('/register', (req, res) => {
    res.send('Hello world from thsse server router js');
    const user = new User(req.body);
    user.save();
    console.log(user);
    res.send(user);

});

//login route

router.post('/signin', async(req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(400).json({ error: "error 404" })
        const userlogin = await User.findOne({ email: email });
        console.log(userlogin);
        res.json({ message: "user login succesfully" })
    } catch (err) {
        console.log(err);
    }

});

module.exports = router;