module.exports = {
   db: 'mongodb://localhost:27017/meandatabase'
};

const mongoose = require('mongoose')
require('dotenv').config();

//dev local mongodb://127.0.0.1:27017/ecofarms
mongoose.connect(process.env.MONGO_URI,{
useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true
})

