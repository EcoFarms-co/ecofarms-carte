const express = require('express')
const router = new express.Router()
const dimensionService = require('../../service/dimension-service')

// Get all dimensions 
router.get('/back/dimensions', (req, res) => {
    dimensionService.getAll(req.cookies.token, (results) => {
        res.render('back-dimensions', {
            dimensions: results
        })
    });

})

// Return dimension form
router.get('/back/dimensions/create', (req, res) => {
    res.render('back-dimensions-create')
})


// Handle dimension form post action 
router.post('/back/dimensions/create', (req, res) => {
    try{
        dimensionService.create(req.body, req.cookies.token, (error) => {
            if (error){
                return  res.redirect('/back/dimensions')
            }
            return res.render('back-dimensions-create', {
                errorMessage: 'Une erreur est survenue. Veillez rééssayer svp! '
            })
        })
    }catch(e){
        throw new Error(e)
    }
})

// render dimension form for update 
router.get('/back/dimensions/:id/update', (req, res) => {
    dimensionService.get(req.params.id, req.cookies.token, (result) => {
        res.render('back-dimensions-update', {
            dimension: result
        })
    })
})

// Handle dimension update 
router.post('/back/dimensions/:id/update', (req, res) => {
    try{
        dimensionService.update(req.params.id, req.body, req.cookies.token, (error) => {
            if (error){
                res.render('back-dimensions-update', {
                    errorMessage: 'Une erreur est survenue. Veillez rééssayer svp! '
                })
            }
            return  res.redirect('/back/dimensions')
        })
    }catch(e){
        throw new Error(e)
    }

})

// render dimension form for update 
router.get('/back/dimensions/:id/delete', (req, res) => {
    dimensionService.delete(req.params.id, req.cookies.token, (error) => {
        if (error){
            console.log(error)
            return res.redirect('/back/dimensions')
        }
        return  res.redirect('/back/dimensions')
    })
})

module.exports = router