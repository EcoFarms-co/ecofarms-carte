const mongoose = require('mongoose')

const Dimension = mongoose.model('Dimension',{
    name:{
        type:String,
        required: true,
        trim:true,
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
       // required:true,
    }
})

module.exports = Dimension