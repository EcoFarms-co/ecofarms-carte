const express = require('express')
const router = new express.Router()
const authService = require('../../service/auth-service')


router.get('/back/login', (req, res) => {
    if (req.cookies.token){
        return res.redirect("/back/farms")
    }else{
        res.render('login')
    }
})

router.post('/back/login', (req, res) => {

    authService.login(req.body,req.cookies.token, (error, token) => {
        if (error){
            return res.redirect('/back/login', { errorMessage: error })
        }
        res.cookie('token',token);
        return  res.redirect('/back/farms')
    })
})

router.get('/back/logout', (req, res) => {
    res.clearCookie('token');
    return res.redirect("/back/login")
    // authService.logout(req.cookies.token,(error) => {
    //     if (!error){
           
    //     }
    // })
})

module.exports = router