const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    jwt.sign({_id: _id}, process.env.SECRET, { expiresIn: '3d' })
} 

//login user
const loginUser = async (req, res) => {
    res.json({msg: "login user"})
}

//signup user
const signupUser = async (req, res) => {
    const {email, password} = req.body  

    try {
        constuser = await User.signup(email, password)

        //create a token
        const token = createToken(user._id)
        
        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { signupUser, loginUser }