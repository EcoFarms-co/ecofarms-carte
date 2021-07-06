const mongoose = require('mongoose')

const scoreDimensionSchema = new mongoose.Schema({
    score:{
        type: String,
        required: true,
    },
    dimensionId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Dimension'
    },
    farmId: {
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

scoreDimensionSchema.virtual('farm', {
    ref: 'Farm',
    localField: '_id',
    foreignField: 'farmId'
})

scoreDimensionSchema.virtual('dimension', {
    ref: 'Dimension',
    localField: '_id',
    foreignField: 'dimensionId'
})

scoreDimensionSchema.virtual('user', {
    ref: 'User',
    localField: '_id',
    foreignField: 'createdBy'
})

const ScoreDimension = mongoose.model('ScoreDimension', scoreDimensionSchema)

module.exports = ScoreDimension