const express = require('express')
const router = new express.Router()
const ScoreDimension = require('../../models/score-dimension')
const auth = require('../../middleware/auth')

// Create dimension 
router.post("/api/score-dimensions", async (req, res) =>{
    const scoreDimension = new ScoreDimension(req.body)
    try {
        await scoreDimension.save()
        res.status(201).send(scoreDimension)
    } catch (e) {
        res.status(400).send(e)
    }

})

// Get dimensions 
router.get('/api/score-dimensions',  async (req, res) => {
    try {
        let scoreDimensions = await ScoreDimension.find({})
            .populate('farmId', 'name')
            .populate('dimensionId','name')
            .populate('createdBy','fullname')
        return res.send(scoreDimensions)
    } catch (e) {
        res.status(500).send()
    }
})

// Find dimension by id
router.get('/api/score-dimensions/:id',  async (req, res) => {
    const _id = req.params.id
    try {
        const scoreDimension = await ScoreDimension.findById( _id)

        if (!scoreDimension) {
            return res.status(404).send()
        }
        res.send(scoreDimension)
    } catch (e) {
        res.status(500).send()
    }
})

// Find score dimension by farm id
router.get('/api/farm/:id/score-dimensions',  async (req, res) => {
    const _id = req.params.id
    try {
        const scoreDimensions = await ScoreDimension.find({farmId: _id})
        .populate('farmId', 'name')
        .populate('dimensionId','name')

        if (!scoreDimensions) {
            return res.status(404).send()
        }
        res.send(scoreDimensions)
    } catch (e) {
        res.status(500).send()
    }
})

//Update dimension
router.put('/api/score-dimensions/:id',  async (req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    // const allowedUpdates = ['name']
    // const isValidOperation = updates.every((update) => {allowedUpdates.includes(update); console.log(chalk.blue(update))})
    // if (!isValidOperation) {
    //     return res.status(400).send({ error: 'Invalid updates!' })
    // }
    try {
        const scoreDimension = await ScoreDimension.findById(_id)
        if (!scoreDimension) {
            return res.status(404).send()
        }
        updates.forEach((update) => scoreDimension[update] = req.body[update])
        await scoreDimension.save()
        res.status(200).send(scoreDimension)
    } catch (e) {
        res.status(400).send(e)
    }
})

//delete dimension 
router.delete('/api/score-dimensions/:id',  async (req, res) => {
    const _id = req.params.id
    try {
        const scoreDimension = await ScoreDimension.findByIdAndDelete(_id)

        if (!scoreDimension) {
            res.status(404).send()
        }

        res.status(204).send(scoreDimension)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
