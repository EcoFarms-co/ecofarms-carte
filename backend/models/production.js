const mongoose = require('mongoose')

const Production = mongoose.model('Production',{
    name:{
        type:String,
        required: true,
        trim:true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
       // required:true,
    }
})

module.exports = Production