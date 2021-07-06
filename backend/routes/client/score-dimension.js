const express = require('express')
const router = new express.Router()
const scoreDimensionService = require('../../service/score-dimension-service')
const farmService = require('../../service/farm-service')
const dimensionService = require('../../service/dimension-service')

// Get all score-dimensions 
router.get('/back/score-dimensions', (req, res) => {
    scoreDimensionService.getAll(req.cookies.token, (results) => {
        res.render('back-score-dimensions', {
            scoreDimensions: results
        })
    });
})

// Return dimension form
router.get('/back/score-dimensions/create', (req, res) => {
    farmService.getAll(req.cookies.token, farms => {
        dimensionService.getAll(req.cookies.token, dimensions => {
            res.render('back-score-dimensions-create', {
                farms: farms,
                dimensions: dimensions
            })
        })
    })
})


// Handle dimension form post action 
router.post('/back/score-dimensions/create', (req, res) => {
    try{
        scoreDimensionService.create(req.body, req.cookies.token, (error) => {
            if (error){
                return  res.redirect('/back/score-dimensions')
            }
            return res.render('back-score-dimensions-create', {
                errorMessage: 'Une erreur est survenue. Veillez rééssayer svp! '
            })
        })
    }catch(e){
        throw new Error(e)
    }
})

// render dimension form for update 
router.get('/back/score-dimensions/:id/update', (req, res) => {
    farmService.getAll(req.cookies.token, farms => {
        dimensionService.getAll(req.cookies.token, dimensions => {
            scoreDimensionService.get(req.params.id, req.cookies.token, (result) => {
                for(let farm of farms){
                    if (farm._id === result.farmId){
                        farm.selected = true
                    }
                }

                for(let dimension of dimensions){
                    if (dimension._id === result.dimensionId){
                        dimension.selected = true
                    }
                }
                res.render('back-score-dimensions-update', {
                    farms: farms,
                    dimensions: dimensions,
                    scoreDimension: result
                })
            })
        })
    })
    
})

// Handle dimension update 
router.post('/back/score-dimensions/:id/update', (req, res) => {
    try{
        scoreDimensionService.update(req.params.id, req.body, req.cookies.token, (error) => {
            if (error){
                res.render('back-score-dimensions-update', {
                    errorMessage: 'Une erreur est survenue. Veillez rééssayer svp! '
                })
            }
            return  res.redirect('/back/score-dimensions')
        })
    }catch(e){
        throw new Error(e)
    }

})

// render dimension form for update 
router.get('/back/score-dimensions/:id/delete', (req, res) => {
    scoreDimensionService.delete(req.params.id, req.cookies.token, (error) => {
        if (error){
            console.log(error)
            return res.redirect('/back/score-dimensions')
        }
        return  res.redirect('/back/score-dimensions')
    })
})

module.exports = router