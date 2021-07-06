const mongoose = require('mongoose')

const reseauSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    farm_ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farm',
        //required:true,
    }
})

const Reseau = mongoose.model('Reseau', reseauSchema)
module.exports = Reseau