const mongoose = require('mongoose')

const ClusterExplanation = mongoose.model('ClusterExplanation', {
    clusterRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cluster',
        required: true
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
        ref: 'User',
        //  required:true,
    },
    dimensionRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dimension',
        required: true
    },
    trend: {
        type: String,
        trim: true,
    },
    coBenefits: {
        type: String,
        trim: true,
    },
    constrains: {
        type: String,
        trim: true,
    },
    methodology: {
        type: String,
        trim: true,
    }
})


module.exports = ClusterExplanation