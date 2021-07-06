const express = require('express')
const router = new express.Router()
const Reseau = require('../../models/reseau')
const auth = require('../../middleware/auth')

// Create Reseau 
router.post("/api/reseaux", async (req, res) => {
    const reseau = new Reseau(req.body);
    try {
        await reseau.save()
        res.status(201).send(reseau)
    } catch (e) {
        //console.log(e)
        res.status(400).send(e)
    }

})

// Get reseaux 
router.get('/api/reseaux', async (req, res) => {
    try {
        let reseaux = await Reseau.find({})
        return res.send(reseaux)
    } catch (e) {
        res.status(500).send()
    }
})

// Find Reseau by id
router.get('/api/reseaux/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const reseau = await Reseau.findById(_id)

        if (!reseau) {
            return res.status(404).send()
        }
        res.send(reseau)
    } catch (e) {
        res.status(500).send()
    }
})

//Update Reseau
router.put('/api/reseaux/:id', async (req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)

    try {
        const reseau = await Reseau.findById(_id)
        if (!reseau) {
            return res.status(404).send()
        }
        updates.forEach((update) => reseau[update] = req.body[update])

        await reseau.save()
        res.status(200).send(reseau)
    } catch (e) {
        res.status(400).send(e)
    }
})

//delete Reseau 
router.delete('/api/reseaux/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const reseau = await Reseau.findByIdAndDelete(_id)

        if (!reseau) {
            res.status(404).send()
        }

        res.status(204).send(reseau)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
