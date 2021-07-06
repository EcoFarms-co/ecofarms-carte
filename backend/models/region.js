const mongoose = require('mongoose')

const Region = mongoose.model('Region',{
    name:{
        type:String,
        required: true,
        trim:true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
      //  required:true,
    }
})

module.exports = Region