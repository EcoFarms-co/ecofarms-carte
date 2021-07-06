const express = require('express')
const router = new express.Router()
const ScoreCluster = require('../../models/score-cluster')
const auth = require('../../middleware/auth')

// Create score cluster 
router.post("/api/score-clusters", async (req, res) => {
    const scoreCluster = new ScoreCluster(req.body)

    try {
        await scoreCluster.save()
        res.status(201).send(scoreCluster)
    } catch (e) {
        res.status(400).send(e)
    }

})

// Get score clusters 
router.get('/api/score-clusters', auth, async (req, res) => {
    try {
        let scoreClusters = await ScoreCluster.find({})
            .populate('clusterRef', 'name')
            .populate('farmRef', 'name')
            .populate('createdBy', 'fullname')
        return res.send(scoreClusters)
    } catch (e) {
        res.status(500).send()
    }
})

// Find score cluster by id
router.get('/api/score-clusters/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const scoreCluster = await ScoreCluster.findById(_id)

        if (!scoreCluster) {
            return res.status(404).send()
        }
        res.send(scoreCluster)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/api/farm/:id/score-clusters', async (req, res) => {
    const _id = req.params.id
    try {
        const scoreCluster = await ScoreCluster.find({ farmRef: _id }).populate('clusterRef', 'name')

        if (!scoreCluster) {
            return res.status(404).send()
        }
        res.send(scoreCluster)
    } catch (e) {
        res.status(500).send()
    }
})

//Update score cluster
router.put('/api/score-clusters/:id', async (req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    try {
        const scoreCluster = await ScoreCluster.findById(_id)
        if (!scoreCluster) {
            return res.status(404).send()
        }
        updates.forEach((update) => scoreCluster[update] = req.body[update])

        await scoreCluster.save()
        res.status(200).send(scoreCluster)
    } catch (e) {
        res.status(400).send(e)
    }
})

//delete cluster 
router.delete('/api/score-clusters/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const scoreCluster = await ScoreCluster.findByIdAndDelete(_id)

        if (!scoreCluster) {
            res.status(404).send()
        }

        res.status(204).send(scoreCluster)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
