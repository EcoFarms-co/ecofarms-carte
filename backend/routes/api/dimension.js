const express = require('express')
const router = new express.Router()
const Dimension = require('../../models/dimension')
const auth = require('../../middleware/auth')

// Create dimension 
router.post("/api/dimensions",  async (req, res) =>{
    const dimension = new Dimension(req.body)
    try {
        await dimension.save()
        res.status(201).send(dimension)
    } catch (e) {
        // console.log(e)
        res.status(400).send(e)
    }

})

// Get dimensions 
router.get('/api/dimensions',  async (req, res) => {
    try {
        let dimensions = await Dimension.find({})
        console.log("retreived dimensions ", dimensions);
        return res.send(dimensions)
    } catch (e) {
        res.status(500).send()
    }
})

// Find dimension by id
router.get('/api/dimensions/:id',  async (req, res) => {
    const _id = req.params.id
    try {
        const dimension = await Dimension.findById( _id)

        if (!dimension) {
            return res.status(404).send()
        }
        res.send(dimension)
    } catch (e) {
        res.status(500).send()
    }
})

//Update dimension
router.put('/api/dimensions/:id',  async (req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)

    try {
        const dimension = await Dimension.findById(_id)
        if (!dimension) {
            return res.status(404).send()
        }
        updates.forEach((update) => dimension[update] = req.body[update])

        await dimension.save()
        res.status(200).send(dimension)
    } catch (e) {
        res.status(400).send(e)
    }
})

//delete dimension 
router.delete('/api/dimensions/:id',  async (req, res) => {
    const _id = req.params.id
    try {
        const dimension = await Dimension.findByIdAndDelete(_id)

        if (!dimension) {
            res.status(404).send()
        }

        res.status(204).send(dimension)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
