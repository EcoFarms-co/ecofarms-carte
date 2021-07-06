const express = require('express')
const router = new express.Router()
const clusterService = require('../../service/cluster-service')
const dimensionService = require('../../service/dimension-service')
const clusterExplanationService = require('../../service/cluster-explanation-service')

// Get all explanations 
router.get('/back/cluster-explanations', (req, res) => {
    clusterExplanationService.getAll(req.cookies.token, (results) => {
        res.render('back-cluster-explanations', {
            clusterExplanations: results
        })
    });
})

// Return explanations form
router.get('/back/cluster-explanations/create', (req, res) => {
    clusterService.getAll(req.cookies.token, (clusters) => {
            dimensionService.getAll(req.cookies.token, (dimensions) => {
                res.render('back-cluster-explanations-create', {
                    clusters: clusters,
                    dimensions: dimensions
                })
            })
        
    })
})

// Handle cluster form post action 
router.post('/back/cluster-explanations/create', (req, res) => {
    try{
        clusterExplanationService.create(req.body,req.cookies.token, (error) => {
            if (!error){
                return  res.redirect('/back/cluster-explanations')
            }
            return res.render('back-cluster-explanations-create', {
                errorMessage: 'Une erreur est survenue. Veillez rééssayer svp! '
            })
        })
    }catch(e){
        throw new Error(e)
    }
})

// render cluster form for update 
router.get('/back/cluster-explanations/:id/update', (req, res) => {
    clusterExplanationService.get(req.params.id,req.cookies.token, (result) => {
        clusterService.getAll(req.cookies.token, clusters => {
            for(let cluster of clusters){
                if (cluster._id === result.clusterRef){
                    cluster.selected = true
                }
            }
                dimensionService.getAll(req.cookies.token, (dimensions) => {
                    for(let dimension of dimensions){
                        if (dimension._id === result.dimensionRef){
                            dimension.selected = true
                        }
                    }
                    res.render('back-cluster-explanations-update', {
                        clusterExplanation: result,
                        clusters: clusters,
                        dimensions: dimensions
                    })
                })
            })
          

  

    })
})

// Handle cluster update 
router.post('/back/cluster-explanations/:id/update', (req, res) => {
    try{
        clusterExplanationService.update(req.params.id, req.body,req.cookies.token, (error) => {
            if (error){
                res.render('back-cluster-explanations-update', {
                    errorMessage: 'Une erreur est survenue. Veillez rééssayer svp! '
                })
            }
            return  res.redirect('/back/cluster-explanations')
        })
    }catch(e){
        throw new Error(e)
    }

})

// render cluster form for update 
router.get('/back/cluster-explanations/:id/delete', (req, res) => {
    clusterExplanationService.delete(req.params.id, req.cookies.token, (error) => {
        if (error){
            console.log(error)
            res.render('back-cluster-explanations', {
                errorMessage: 'Une erreur est survenue. Veillez rééssayer svp! '
            })
        }
        return  res.redirect('/back/cluster-explanations')
    })
})

module.exports = router