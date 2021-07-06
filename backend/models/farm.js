const mongoose = require('mongoose')
// const uploads = require('./uploads.js')

const Uploads = new mongoose.Schema({
    filename: {
        type: String,
        unique: true,
        required: true
    },
    contentType: {
        type: String,
        required: true
    },
    imageBase64: {
        type: String,
        required: true
    }
})


const farmSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        //required:true,
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    updateOn: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        trim: true,
        //required: true
    },
    url: {
        type: String,
        trim: true,
    },
    facebook: {
        type: String,
        trim: true,
    },
    instagram: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    projectOwner: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    region: {
        type: String,
        trim: true,
    },
    // region_ref: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Region',
    //     //required:true,
    // },
    reseaux: {
        type: String,
        trim: true,
        //required:true,
    },
    // reseaux_ref: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Reseau',
    //     //required:true,
    // },
    longitude: {
        type: String,
        trim: true,
    },
    latitude: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    evaluationDate: {
        type: Date,
        trim: true,
    },
    surface: {
        type: String,
        trim: true,
    },
    employees: {
        type: Number,
        trim: true,
    },
    productions: {
        type: Array,
        trim: true,
    },
    // production_ref: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Production',
    //     //required:true,
    // },
    localisation: {
        type: String,
        trim: true,
    },
    cultures: {
        type: String,
        trim: true,
    },
    certification: {
        type: String,
        trim: true,
    },
    activities: {
        type: Array,
        trim: true,
    },
    score: {
        type: Number,
        trim: true,
    },
    ecofarms: {
        type: String,
        trim: true,
    },
    ipAdresses: {
        type: Array,
        trim: true,
    },
    nbLike: {
        type: Number,
        trim: true
    },
    photo: Uploads
})

farmSchema.pre('save', async function (next) {
    const farm = this

    if (!farm) {
        farm.createdOn = Date.now()
    } else {
        farm.updateOn = Date.now()
    }

    next()
})



const Farm = mongoose.model('Farm', farmSchema)

module.exports = Farm