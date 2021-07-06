const express = require('express')
const router = new express.Router()
const clusterService = require('../../service/cluster-service')
const dimensionService = require('../../service/dimension-service')

// Get all clusters 
router.get('/back/clusters', (req, res) => {
    clusterService.getAll(req.cookies.token, (results) => {
        res.render('back-clusters', {
            clusters: results
        })
    });
})

// Return cluster form
router.get('/back/clusters/create', (req, res) => {
    dimensionService.getAll(req.cookies.token, dimensions => {
        res.render('back-clusters-create', {
            dimensions: dimensions
        })
    })
})


// Handle cluster form post action 
router.post('/back/clusters/create', (req, res) => {
    try{
        clusterService.create(req.body, req.cookies.token, (error) => {
            if (!error){
                return  res.redirect('/back/clusters')
            }
            return res.render('back-clusters-create', {
                errorMessage: 'Une erreur est survenue. Veillez rééssayer svp! '
            })
        })
    }catch(e){
        throw new Error(e)
    }
})

// render cluster form for update 
router.get('/back/clusters/:id/update', (req, res) => {
    clusterService.get(req.params.id, req.cookies.token, (result) => {
        dimensionService.getAll(req.cookies.token, dimensions => {
            for(let dimension of dimensions){
                if (dimension._id === result.dimensionRef){
                    dimension.selected = true
                }
            }
            res.render('back-clusters-update', {
                cluster: result,
                dimensions: dimensions
            })
        })
  

    })
})

// Handle cluster update 
router.post('/back/clusters/:id/update', (req, res) => {
    try{
        clusterService.update(req.params.id, req.body, req.cookies.token, (error) => {
            if (error){
                res.render('back-clusters-update', {
                    errorMessage: 'Une erreur est survenue. Veillez rééssayer svp! '
                })
            }
            return  res.redirect('/back/clusters')
        })
    }catch(e){
        throw new Error(e)
    }

})

// render cluster form for update 
router.get('/back/clusters/:id/delete', (req, res) => {
    clusterService.delete(req.params.id,req.cookies.token, (error) => {
        if (error){
            console.log(error)
            return res.redirect('/back/clusters')
        }
        return  res.redirect('/back/clusters')
    })
})

module.exports = router