const mongoose = require('mongoose')

const Cluster = mongoose.model('Cluster', {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    dimensionRef: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Dimension'
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    updateOn: {
        type: Date,
        default: Date.now
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
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required:true,
    }
})

module.exports = Cluster