const express = require('express')
const User = require('../../models/user')
const auth = require('../../middleware/auth')
const router = new express.Router()



router.get('/api/users', auth, async (req, res) => {
    try {
        let users = await User.find({})
        return res.send(users);
    } catch (e) {
        res.status(500).send()
    }
})

router.put('/api/users/update/:id', auth, async (req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    try {
        let user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
        updates.forEach((update) => {
            user[update] = req.body[update];
        })

        await user.save()
        res.status(200).send();
        //.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/api/users/:id', auth, async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})


//create a user 
router.post('/api/users/create', async (req, res) => {
    console.log("in the Api ", req.body)
    let user = new User(req.body);
    console.log("user ", user);
    try {
        await user.save()
        // const token = await user.generateAuthToken();
        // console.log("token ", token)
        res.status(201).send({ user });
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/api/users/login', async (req, res) => {
    try {

        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send()
    }
})

router.post('/api/users/logout', auth, async (req, res) => {
    try {
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

// router.post('/api/users/logoutAll', auth, async (req, res) => {
//     try {
//         req.user.tokens = []
//         await req.user.save()
//         res.send()
//     } catch (e) {
//         res.status(500).send()
//     }
// })

router.get('/api/users/me', auth, async (req, res) => {
    res.send(req.user)
})

router.patch('/api/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['fullname', 'email', 'password', 'role']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/api/users/me', auth, async (req, res) => {
    try {
        await req.user.remove()
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})


//delete user 
router.delete('/api/users/:id', auth, async (req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(_id);
        if (!user) {
            res.status(404).send();
        }
        res.status(204).send(user);
    } catch (e) {
        res.status(500).send();
    }

})
module.exports = router