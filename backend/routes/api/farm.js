const express = require('express')
const router = new express.Router()
const Farm = require('../../models/farm')
const auth = require('../../middleware/auth')

// Create farm 
router.post('/api/farms', async (req, res) => {
    let farm = new Farm(req.body.fields);
    farm.set({ photo: req.body.uploads })
    try {
        await farm.save();
        res.status(201).send(farm);
    } catch (e) {
        res.status(400).send(e);
    }
})

// Get farm photo
router.get('/api/farms/:id/picture', async (req, res) => {
    try {
        const farm = await Farm.findById(req.params.id)
        if (!farm || !farm.photo) {
            throw new Error();
        }
        res.set('Content-Type', 'image/png')
        res.send(farm.photo);
    } catch (e) {
        res.status(404).send();
    }
})

// upload photo 
router.post('/api/farms/:id/upload', auth, async (req, res) => {
    try {
        const farm = Farm.findById(req.params.id)
        if (farm) {
            farm.photo = req.body.buffer
        }
        await farm.save();
        res.redirect('/back/farms');
        //res.status(200).send(farm)
    } catch (e) {
        res.status(400).send(e);
    }
})

// Get farms 
router.get('/api/farms', async (req, res) => {
    try {
        let farms = await Farm.find({});
        return res.send(farms);
    } catch (e) {
        res.status(500).send();
    }
})

// Find farm by id
router.get('/api/farms/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const farm = await Farm.findById(id).exec();
        if (!farm) {
            return res.status(404).send();
        }
        res.send(farm);
    } catch (e) {
        res.status(500).send();
    }
})

//Update farm
router.put('/api/farms/update/:id', auth, async (req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body);
    try {
        const farm = await Farm.findById(_id);
        if (!farm) {
            return res.status(404).send();
        }
        updates.forEach((update) => {
            farm[update] = req.body[update]
        })

        await farm.save();
        res.status(200).send(farm);
    } catch (e) {
        res.status(400).send(e);
    }
})

//delete farm 
router.delete('/api/farms/:id', auth, async (req, res) => {
    const _id = req.params.id;
    try {
        const farm = await Farm.findByIdAndDelete(_id);

        if (!farm) {
            res.status(404).send();
        }

        res.status(204).send(farm);
    } catch (e) {
        res.status(500).send();
    }

})
// Find farm by region using regular expression
router.get('/api/farms/regions/:reg', auth, async (req, res) => {
    var regex = new RegExp(req.params.reg, 'i');
    try {
        const farms = await Farm.find({ region: regex }, { 'region': 1 }).sort({ "update_at": -1 }).sort({ "created_at": -1 }).limit(20);
        if (!farms) {
            return res.status(404).send();
        }
        return res.send(farms);
    } catch (e) {
        res.status(500).send();
    }
})

module.exports = router