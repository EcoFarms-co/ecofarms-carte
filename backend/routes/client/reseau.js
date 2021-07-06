const express = require('express')
const router = new express.Router()
const reseauService = require('../../service/reseau-service')

// Get all reseaux 
router.get('/back/reseaux', (req, res) => {
    reseauService.getAll((results) => {
        res.render('back-reseaux', {
            reseaux: results
        })
    });

})

// Return reseau form
router.get('/back/reseaux/create', (req, res) => {
    res.render('back-reseaux-create')
})


// Handle reseau form post action 
router.post('/back/reseaux/create', (req, res) => {
    try {
        reseauService.create(req.body, (error) => {
            if (error) {
                return res.redirect('/back/reseaux')
            }
            return res.render('back-reseaux-create', {
                errorMessage: 'Une erreur est survenue. Veillez rééssayer svp! '
            })
        })
    } catch (e) {
        throw new Error(e)
    }
})

// render reseau form for update 
router.get('/back/reseaux/:id/update', (req, res) => {
    reseauService.get(req.params.id, (result) => {
        res.render('back-reseaux-update', {
            reseau: result
        })
    })
})

// Handle reseau update 
router.post('/back/reseaux/:id/update', (req, res) => {
    try {
        reseauService.update(req.params.id, req.body, (error) => {
            if (error) {
                res.render('back-reseaux-update', {
                    errorMessage: 'Une erreur est survenue. Veillez rééssayer svp! '
                })
            }
            return res.redirect('/back/reseaux')
        })
    } catch (e) {
        throw new Error(e)
    }

})

// render reseau form for update 
router.get('/back/reseaux/:id/delete', (req, res) => {
    reseauService.delete(req.params.id, (error) => {
        if (error) {
            console.log(error)
            return res.redirect('/back/reseaux')
        }
        return res.redirect('/back/reseaux')
    })
})

module.exports = router