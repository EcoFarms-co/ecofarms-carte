const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Creating user schema 
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    createdOn: {
        type: Date,
        required: true,
        default: Date.now
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    token: {
        type: String
    }
})

// Setup wich fields will showed on json data 
userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject() // convert user to object 

    delete userObject.password // hide password from json
    // delete userObject.tokens // hide tokens from json 

    return userObject
}

// userSchema.virtual('channels', {
//     ref: 'Channel',
//     localField: '_id',
//     foreignField: 'user'
// })

// User jwt security token generation 
userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'ecofarmtokengeneration')
    user.token = token
    user.save(function (err, user) {
        if (err) return err;
    })
    return token
}

// find user by email and password for login 
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })  // get user by email

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password) // compare password to crypted password 

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user // return user if password match 
}

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
    const user = this
    //user.createdOn = new Date();
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User