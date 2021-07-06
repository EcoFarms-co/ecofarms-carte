const express = require('express')
const router = new express.Router()
const ClusterExplanation = require('../../models/cluster-explanation')
const auth = require('../../middleware/auth')

// Create score cluster 
router.post("/api/cluster-explanations", async (req, res) =>{
    const clusterExplanation = new ClusterExplanation(req.body)

    try {
        await clusterExplanation.save()
        res.status(201).send(clusterExplanation)
    } catch (e) {
        res.status(400).send(e)
    }

})

// Get score clusters 
router.get('/api/cluster-explanations',  async (req, res) => {
    try {
        let clusterExplanations = await ClusterExplanation.find({})
        .populate('clusterRef')
        .populate('dimensionRef','name')
        .populate('createdBy','fullname')
        return res.send(clusterExplanations)
    } catch (e) {
        res.status(500).send()
    }
})

// Find score cluster by id
router.get('/api/cluster-explanations/:id',  async (req, res) => {
    const _id = req.params.id
    try {
        const clusterExplanation = await ClusterExplanation.findById(_id)

        if (!clusterExplanation) {
            return res.status(404).send()
        }
        res.send(clusterExplanation)
    } catch (e) {
        res.status(500).send()
    }
})

//Update score cluster
router.put('/api/cluster-explanations/:id',  async (req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    try {
        const clusterExplanation = await ClusterExplanation.findById(_id)
        if (!clusterExplanation) {
            return res.status(404).send()
        }
        updates.forEach((update) => clusterExplanation[update] = req.body[update])

        await clusterExplanation.save()
        res.status(200).send(clusterExplanation)
    } catch (e) {
        res.status(400).send(e)
    }
})

//delete cluster 
router.delete('/api/cluster-explanations/:id',  async (req, res) => {
    const _id = req.params.id
    try {
        const clusterExplanation = await ClusterExplanation.findByIdAndDelete(_id)

        if (!clusterExplanation) {
            res.status(404).send()
        }

        res.status(204).send(clusterExplanation)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
