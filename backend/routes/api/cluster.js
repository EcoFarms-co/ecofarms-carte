const express = require('express')
const router = new express.Router()
const Cluster = require('../../models/cluster')
const auth = require('../../middleware/auth')
const { Mongoose } = require('mongoose')

// Create cluster 
router.post("/api/clusters", async (req, res) =>{
    const cluster = new Cluster(req.body)

    try {
        await cluster.save()
        res.status(201).send(cluster)
    } catch (e) {
        res.status(400).send(e)
    }

})

// Get clusters 
router.get('/api/clusters',  async (req, res) => {
    try {
        let clusters = await Cluster.find({})
        .populate('dimensionRef','name')
        .populate('createdBy','fullname')
        return res.send(clusters)
    } catch (e) {
        res.status(500).send()
    }
})

// Find cluster by id
router.get('/api/clusters/:id',  async (req, res) => {
    const _id = req.params.id
    try {
        const cluster = await Cluster.findById(_id)

        if (!cluster) {
            return res.status(404).send()
        }
        res.send(cluster)
    } catch (e) {
        res.status(500).send()
    }
})


// Find cluster by Dimension id
router.get('/api/clusters/dimension/:dimId',  async (req, res) => {
    const dimId = req.query.dimId;
   // console.log("MongooseTypes.ObjectId(Person._id) ", Mongoose.Types.ObjectId(dimId))
    try {
        const cluster = await Cluster.find({dimensionRef: dimId})
        console.log("cluster ", cluster);

        if (!cluster) {
            return res.status(404).send()
        }
        res.send(cluster)
    } catch (e) {
        res.status(500).send()
    }
})

//Update cluster
router.put('/api/clusters/:id',  async (req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    // const allowedUpdates = ['name']
    // const isValidOperation = updates.every((update) => {allowedUpdates.includes(update); console.log(chalk.blue(update))})
    // if (!isValidOperation) {
    //     return res.status(400).send({ error: 'Invalid updates!' })
    // }

    try {
        const cluster = await Cluster.findById(_id)
        if (!cluster) {
            return res.status(404).send()
        }
        updates.forEach((update) => cluster[update] = req.body[update])

        await cluster.save()
        res.status(200).send(cluster)
    } catch (e) {
        res.status(400).send(e)
    }
})

//delete cluster 
router.delete('/api/clusters/:id',  async (req, res) => {
    const _id = req.params.id
    try {
        const cluster = await Cluster.findByIdAndDelete(_id)

        if (!cluster) {
            res.status(404).send()
        }

        res.status(204).send(cluster)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
