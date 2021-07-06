const mongoose = require('mongoose')

const ScoreCluster = mongoose.model('ScoreCluster',{
    score:{
        type: String,
        required: true,
    },
    explanation:{
        type: String,
        trim: true,
    },
    clusterRef: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Cluster'
    },
    farmRef: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Farm'
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    updateOn: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
     //   required:true,
    }
})

module.exports = ScoreCluster